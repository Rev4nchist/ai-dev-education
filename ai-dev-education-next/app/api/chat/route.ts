import { NextRequest, NextResponse } from 'next/server';
import { createChatCompletion, defaultSystemMessage, Message } from '@/lib/openrouter';
import { ChatCompletion, ChatCompletionChunk } from 'openai/resources';
import { Stream } from 'openai/streaming';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  try {
    const { messages = [], stream = false, model } = await req.json();
    
    // If no system message is provided, add the default one
    if (!messages.find((msg: Message) => msg.role === 'system')) {
      messages.unshift(defaultSystemMessage);
    }

    // Validate request
    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: 'Invalid request. Messages must be a non-empty array.' },
        { status: 400 }
      );
    }

    // Handle streaming responses
    if (stream) {
      const streamResponse = await createChatCompletion(messages, { 
        stream: true,
        model: model || undefined 
      }) as Stream<ChatCompletionChunk>;
      
      // Create a TransformStream to handle the streaming response
      const encoder = new TextEncoder();
      const decoder = new TextDecoder();
      
      let counter = 0;
      const transformStream = new TransformStream({
        async transform(chunk, controller) {
          counter++;
          const data = JSON.parse(decoder.decode(chunk));
          
          if (data && data.choices && data.choices[0]?.delta?.content) {
            const text = data.choices[0].delta.content;
            const payload = encoder.encode(`data: ${JSON.stringify({ text })}\n\n`);
            controller.enqueue(payload);
          }
        },
        flush(controller) {
          const payload = encoder.encode('data: [DONE]\n\n');
          controller.enqueue(payload);
        },
      });

      return new Response((streamResponse as any).body?.pipeThrough(transformStream), {
        headers: {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          'Connection': 'keep-alive',
        },
      });
    }
    
    // Handle regular responses
    const response = await createChatCompletion(messages, { 
      model: model || undefined 
    }) as ChatCompletion;
    
    if (!response.choices || response.choices.length === 0) {
      return NextResponse.json(
        { error: 'No response received from the AI model.' },
        { status: 500 }
      );
    }
    
    return NextResponse.json({
      text: response.choices[0].message.content,
      model: response.model,
    });
  } catch (error: any) {
    console.error('Error in chat API route:', error);
    
    return NextResponse.json(
      { error: error.message || 'An error occurred while processing your request.' },
      { status: 500 }
    );
  }
} 