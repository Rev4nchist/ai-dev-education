export default function AIDevWorkPage() {
  return (
    <div className="container mx-auto py-10">
      {/* Page Title */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <span className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Development Tools</span>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              AI Development Tools & Workflows
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Modern AI-powered tools transforming software development
            </p>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Explore cutting-edge AI-assisted development environments and tools
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-12">

            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Overview of AI Development Tools</h2>
              <p className="mt-4">
                The landscape of software development is rapidly evolving with AI-assisted development tools that enhance productivity,
                reduce repetitive tasks, and help maintain focus on higher-level design decisions. These tools leverage large language models
                and specialized AI capabilities to understand code context, predict developer intentions, and generate high-quality code.
              </p>
            </div>

            {/* Cursor */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl" id="cursor">Cursor</h2>
              <div className="mt-6 space-y-6">
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h3 className="text-xl font-bold">What is Cursor?</h3>
                  <p className="mt-2">
                    Cursor is a code editor built on VSCode that integrates powerful AI capabilities to help developers write,
                    understand, and transform code more efficiently. It offers features like intelligent code completion, 
                    code generation from comments, and context-aware refactoring.
                  </p>
                </div>

                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h3 className="text-xl font-bold">Key Features</h3>
                  <ul className="mt-4 ml-6 list-disc space-y-2">
                    <li><strong>AI Chat:</strong> Conversational interface to discuss and modify code</li>
                    <li><strong>Code Generation:</strong> Create code from natural language prompts</li>
                    <li><strong>Contextual Understanding:</strong> AI that understands your entire codebase</li>
                    <li><strong>Refactoring Tools:</strong> AI-assisted code transformations</li>
                    <li><strong>MCP Support:</strong> Native integration with Model Context Protocol</li>
                  </ul>
                </div>

                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h3 className="text-xl font-bold">Getting Started with Cursor</h3>
                  <p className="mt-2">
                    To start using Cursor, download it from the official website and follow these steps:
                  </p>
                  <ol className="mt-4 ml-6 list-decimal space-y-2">
                    <li>Download and install Cursor from <a href="https://cursor.sh" className="text-primary hover:underline">cursor.sh</a></li>
                    <li>Open a project or create a new one</li>
                    <li>Access AI features with <kbd>Ctrl+K</kbd> (or <kbd>Cmd+K</kbd> on Mac)</li>
                    <li>Try asking for code generation or explanations</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Windsurf */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl" id="windsurf">Windsurf</h2>
              <div className="mt-6 space-y-6">
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h3 className="text-xl font-bold">What is Windsurf?</h3>
                  <p className="mt-2">
                    Windsurf is an AI-powered development assistant that helps developers navigate and understand large codebases.
                    It uses the Cascade chatbot to provide contextually relevant information and assistance during coding tasks.
                  </p>
                </div>

                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h3 className="text-xl font-bold">Key Features</h3>
                  <ul className="mt-4 ml-6 list-disc space-y-2">
                    <li><strong>Codebase Navigation:</strong> Quickly find relevant code across repositories</li>
                    <li><strong>Contextual Code Understanding:</strong> Get explanations of complex code</li>
                    <li><strong>Integration Capabilities:</strong> Works with many development environments</li>
                    <li><strong>MCP Integration:</strong> Leverages Model Context Protocol for enhanced context awareness</li>
                  </ul>
                </div>

                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h3 className="text-xl font-bold">Getting Started with Windsurf</h3>
                  <p className="mt-2">
                    To start using Windsurf and the Cascade chatbot, follow these steps:
                  </p>
                  <ol className="mt-4 ml-6 list-decimal space-y-2">
                    <li>Install the Windsurf CLI using <code>npm install -g @windsurf/cli</code></li>
                    <li>Initialize Windsurf in your project directory</li>
                    <li>Configure your preferred AI model</li>
                    <li>Start interacting with your codebase through the Cascade chatbot</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Claude */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl" id="claude">Claude</h2>
              <div className="mt-6 space-y-6">
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h3 className="text-xl font-bold">What is Claude?</h3>
                  <p className="mt-2">
                    Claude is an AI assistant developed by Anthropic, designed to be helpful, harmless, and honest. It excels at natural language 
                    understanding and generation, making it particularly useful for code explanation, documentation, 
                    and complex problem-solving in software development.
                  </p>
                </div>

                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h3 className="text-xl font-bold">Key Features for Developers</h3>
                  <ul className="mt-4 ml-6 list-disc space-y-2">
                    <li><strong>Code Understanding:</strong> Explain complex code snippets and algorithms</li>
                    <li><strong>Code Generation:</strong> Write well-structured, documented code from requirements</li>
                    <li><strong>Debugging Assistance:</strong> Help identify and fix bugs in code</li>
                    <li><strong>Documentation:</strong> Generate high-quality documentation for code</li>
                    <li><strong>API Integration:</strong> Easy to integrate into development workflows</li>
                  </ul>
                </div>

                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h3 className="text-xl font-bold">Integrating Claude in Development Workflows</h3>
                  <p className="mt-2">
                    To leverage Claude's capabilities in your development workflow:
                  </p>
                  <ol className="mt-4 ml-6 list-decimal space-y-2">
                    <li>Use the Claude API to integrate with your tools</li>
                    <li>Access Claude through supported environments like Cursor or Slack</li>
                    <li>Learn effective prompting techniques for code-related tasks</li>
                    <li>Combine Claude with other tools that support MCP for enhanced context</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* OpenAI Agent SDK */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl" id="openai-agent-sdk">OpenAI Agent SDK</h2>
              <div className="mt-6 space-y-6">
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h3 className="text-xl font-bold">What is the OpenAI Agent SDK?</h3>
                  <p className="mt-2">
                    The OpenAI Agent SDK is a development toolkit that allows developers to build custom agents powered by OpenAI's models.
                    It provides a framework for creating AI assistants that can understand, plan, and execute complex tasks, including
                    software development activities.
                  </p>
                </div>

                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h3 className="text-xl font-bold">Key Capabilities</h3>
                  <ul className="mt-4 ml-6 list-disc space-y-2">
                    <li><strong>Tool Use:</strong> Create agents that can use tools and APIs</li>
                    <li><strong>Memory Management:</strong> Build agents with persistent memory</li>
                    <li><strong>Planning:</strong> Enable agents to break down complex tasks</li>
                    <li><strong>Code Manipulation:</strong> Create, modify, and debug code programmatically</li>
                    <li><strong>Extensibility:</strong> Custom tool definitions and integrations</li>
                  </ul>
                </div>

                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h3 className="text-xl font-bold">Building Development Agents</h3>
                  <p className="mt-2">
                    To start building development agents with the OpenAI Agent SDK:
                  </p>
                  <ol className="mt-4 ml-6 list-decimal space-y-2">
                    <li>Install the SDK: <code>pip install openai</code></li>
                    <li>Define the tools your agent will use (e.g., file manipulation, code execution)</li>
                    <li>Create an agent with appropriate capabilities</li>
                    <li>Implement the agent's interaction with your development environment</li>
                    <li>Test and refine the agent's behavior</li>
                  </ol>
                  <div className="mt-4 rounded-md border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
                    <p className="text-sm text-amber-800 dark:text-amber-300">
                      <strong>Note:</strong> The OpenAI Agent SDK is evolving rapidly. Check the official documentation for the latest features and best practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Choosing the Right Tool</h2>
              <p className="mt-4">
                Each AI development tool has its strengths and ideal use cases. Consider these factors when choosing:
              </p>
              
              <div className="mt-6 overflow-hidden rounded-xl border">
                <div className="grid grid-cols-5 gap-2 bg-muted p-4 font-medium">
                  <div>Tool</div>
                  <div>Best For</div>
                  <div>Integration</div>
                  <div>Learning Curve</div>
                  <div>MCP Support</div>
                </div>
                
                <div className="grid grid-cols-5 gap-2 border-t p-4">
                  <div className="font-medium">Cursor</div>
                  <div>Daily coding, code generation</div>
                  <div>VSCode extensions</div>
                  <div>Low</div>
                  <div>Native</div>
                </div>
                
                <div className="grid grid-cols-5 gap-2 border-t bg-muted/50 p-4">
                  <div className="font-medium">Windsurf</div>
                  <div>Codebase navigation, context</div>
                  <div>CLI, web interface</div>
                  <div>Medium</div>
                  <div>Full</div>
                </div>
                
                <div className="grid grid-cols-5 gap-2 border-t p-4">
                  <div className="font-medium">Claude</div>
                  <div>Complex reasoning, explanation</div>
                  <div>API, platforms</div>
                  <div>Low</div>
                  <div>Via integrations</div>
                </div>
                
                <div className="grid grid-cols-5 gap-2 border-t bg-muted/50 p-4">
                  <div className="font-medium">OpenAI Agent SDK</div>
                  <div>Custom workflows, automation</div>
                  <div>Python, custom</div>
                  <div>High</div>
                  <div>Customizable</div>
                </div>
              </div>

              <p className="mt-6">
                For the best development experience, consider combining multiple tools that leverage the Model Context Protocol
                for a consistent and powerful AI-assisted workflow.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 