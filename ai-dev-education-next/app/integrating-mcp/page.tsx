"use client"

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../src/components/ui/tabs';

export default function IntegratingMCPPage() {
  return (
    <div className="container mx-auto py-10">
      {/* Page Title */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <span className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Integration Guide</span>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Integrating MCP with Development Tools
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Learn how to integrate Model Context Protocol with your favorite development tools
            </p>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Follow our step-by-step guides to enhance your development workflow with AI assistance
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Getting Started with MCP Integration</h2>
              <p className="mt-4">
                Model Context Protocol (MCP) provides a standardized way for AI tools to communicate with development environments. This guide will walk you through integrating MCP with popular development tools.
              </p>
              
              <Tabs defaultValue="windsurf" className="mt-8">
                <TabsList className="mb-4">
                  <TabsTrigger value="windsurf">Windsurf Integration</TabsTrigger>
                  <TabsTrigger value="cursor">Cursor Integration</TabsTrigger>
                  <TabsTrigger value="vscode">VS Code Integration</TabsTrigger>
                </TabsList>
                
                {/* Windsurf Integration */}
                <TabsContent value="windsurf">
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold">Integrating MCP with Windsurf (Cascade Chatbot)</h3>
                    <p>Follow these steps to integrate MCP with Windsurf:</p>
                    
                    <div className="space-y-6">
                      <div className="relative rounded-lg border bg-card p-6 shadow-sm">
                        <div className="absolute -top-3 -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                          1
                        </div>
                        <h4 className="text-lg font-semibold">Install Windsurf</h4>
                        <p className="mt-2">First, install Windsurf using npm:</p>
                        <pre className="mt-4 overflow-x-auto rounded-md bg-muted p-4 text-sm">
                          <code>npm install -g @windsurf/cli</code>
                        </pre>
                      </div>
                      
                      <div className="relative rounded-lg border bg-card p-6 shadow-sm">
                        <div className="absolute -top-3 -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                          2
                        </div>
                        <h4 className="text-lg font-semibold">Configure MCP Settings</h4>
                        <p className="mt-2">Open Windsurf and navigate to Settings &gt; Integrations &gt; MCP.</p>
                      </div>
                      
                      <div className="relative rounded-lg border bg-card p-6 shadow-sm">
                        <div className="absolute -top-3 -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                          3
                        </div>
                        <h4 className="text-lg font-semibold">Enable MCP Integration</h4>
                        <p className="mt-2">Toggle the "Enable MCP" switch to ON. This allows Windsurf to communicate with MCP-compatible models.</p>
                      </div>
                      
                      <div className="relative rounded-lg border bg-card p-6 shadow-sm">
                        <div className="absolute -top-3 -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                          4
                        </div>
                        <h4 className="text-lg font-semibold">Configure MCP Server</h4>
                        <p className="mt-2">Enter your MCP server URL or use the default public server.</p>
                        <div className="mt-4 rounded-md border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
                          <p className="text-sm text-amber-800 dark:text-amber-300">
                            <strong>Note:</strong> For production environments, we recommend setting up your own MCP server for better security and performance.
                          </p>
                        </div>
                      </div>
                      
                      <div className="relative rounded-lg border bg-card p-6 shadow-sm">
                        <div className="absolute -top-3 -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                          5
                        </div>
                        <h4 className="text-lg font-semibold">Test the Integration</h4>
                        <p className="mt-2">Open a project and use the chatbot with an MCP-aware prompt. For example, ask about a specific file or function in your codebase.</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                {/* Cursor Integration */}
                <TabsContent value="cursor">
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold">Integrating MCP with Cursor</h3>
                    <p>Follow these steps to integrate MCP with Cursor editor:</p>
                    
                    <div className="space-y-6">
                      <div className="relative rounded-lg border bg-card p-6 shadow-sm">
                        <div className="absolute -top-3 -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                          1
                        </div>
                        <h4 className="text-lg font-semibold">Install Cursor</h4>
                        <p className="mt-2">Download and install Cursor from the official website:</p>
                        <a href="https://cursor.sh" className="mt-2 inline-block text-primary hover:underline">https://cursor.sh</a>
                      </div>
                      
                      <div className="relative rounded-lg border bg-card p-6 shadow-sm">
                        <div className="absolute -top-3 -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                          2
                        </div>
                        <h4 className="text-lg font-semibold">MCP Configuration</h4>
                        <p className="mt-2">Cursor has built-in MCP support. Open Settings by pressing <kbd>Ctrl+,</kbd> (or <kbd>Cmd+,</kbd> on Mac).</p>
                      </div>
                      
                      <div className="relative rounded-lg border bg-card p-6 shadow-sm">
                        <div className="absolute -top-3 -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                          3
                        </div>
                        <h4 className="text-lg font-semibold">Configure MCP Settings</h4>
                        <p className="mt-2">Navigate to AI &gt; Advanced and look for MCP configuration options.</p>
                      </div>
                      
                      <div className="relative rounded-lg border bg-card p-6 shadow-sm">
                        <div className="absolute -top-3 -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                          4
                        </div>
                        <h4 className="text-lg font-semibold">Test the Integration</h4>
                        <p className="mt-2">Open the AI panel and ask a question about your codebase. Cursor will leverage MCP to provide context-aware responses.</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                {/* VS Code Integration */}
                <TabsContent value="vscode">
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold">Integrating MCP with VS Code</h3>
                    <p>Follow these steps to integrate MCP with Visual Studio Code:</p>
                    
                    <div className="space-y-6">
                      <div className="relative rounded-lg border bg-card p-6 shadow-sm">
                        <div className="absolute -top-3 -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                          1
                        </div>
                        <h4 className="text-lg font-semibold">Install VS Code</h4>
                        <p className="mt-2">Download and install VS Code from the official website if you haven't already:</p>
                        <a href="https://code.visualstudio.com/" className="mt-2 inline-block text-primary hover:underline">https://code.visualstudio.com/</a>
                      </div>
                      
                      <div className="relative rounded-lg border bg-card p-6 shadow-sm">
                        <div className="absolute -top-3 -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                          2
                        </div>
                        <h4 className="text-lg font-semibold">Install MCP Extension</h4>
                        <p className="mt-2">Open VS Code and navigate to the Extensions view by clicking the Extensions icon in the Activity Bar or pressing <kbd>Ctrl+Shift+X</kbd>.</p>
                        <p className="mt-2">Search for "MCP" or "Model Context Protocol" and install the appropriate extension.</p>
                      </div>
                      
                      <div className="relative rounded-lg border bg-card p-6 shadow-sm">
                        <div className="absolute -top-3 -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                          3
                        </div>
                        <h4 className="text-lg font-semibold">Configure MCP Extension</h4>
                        <p className="mt-2">After installation, open the settings for the MCP extension. Configure the MCP server URL and authentication settings if required.</p>
                      </div>
                      
                      <div className="relative rounded-lg border bg-card p-6 shadow-sm">
                        <div className="absolute -top-3 -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                          4
                        </div>
                        <h4 className="text-lg font-semibold">Set Up API Keys</h4>
                        <p className="mt-2">Configure any required API keys for the language models you plan to use.</p>
                        <div className="mt-4 rounded-md border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-900/20">
                          <p className="text-sm text-red-800 dark:text-red-300">
                            <strong>Warning:</strong> Never commit API keys to your repository. Use environment variables or VS Code's secure storage.
                          </p>
                        </div>
                      </div>
                      
                      <div className="relative rounded-lg border bg-card p-6 shadow-sm">
                        <div className="absolute -top-3 -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                          5
                        </div>
                        <h4 className="text-lg font-semibold">Test the Integration</h4>
                        <p className="mt-2">Use the MCP extension commands to interact with your codebase. The extension will use MCP to provide context-aware AI assistance.</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-bold">Benefits of MCP Integration</h3>
              <p className="mt-2">Integrating MCP with your development tools provides several advantages:</p>
              
              <ul className="mt-4 ml-6 list-disc space-y-2">
                <li><strong>Context-Aware AI:</strong> The AI understands your codebase, providing more relevant suggestions</li>
                <li><strong>Consistent Experience:</strong> Use the same context protocol across different tools and AI models</li>
                <li><strong>Privacy Control:</strong> Choose what information is shared with AI models</li>
                <li><strong>Performance:</strong> MCP optimizes context delivery for faster AI responses</li>
                <li><strong>Extensibility:</strong> Add custom context providers to enhance AI understanding</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 