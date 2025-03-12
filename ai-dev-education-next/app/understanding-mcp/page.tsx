export default function UnderstandingMCPPage() {
  return (
    <div className="container mx-auto py-10">
      {/* Page Title */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <span className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Core Concept</span>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Understanding Model Context Protocol
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              The foundation of AI-assisted development
            </p>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Learn how MCP enables seamless communication between AI models and development environments
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">What is the Model Context Protocol (MCP)?</h2>
              <p className="mt-4">
                The Model Context Protocol (MCP) is an open protocol that standardizes how applications provide context to Large Language Models (LLMs). It creates a secure, standardized way for AI models to interact with various data sources and tools, enabling more powerful and flexible AI applications.
              </p>
              
              <blockquote className="my-6 rounded-lg bg-muted px-8 py-4">
                <p className="italic">
                  MCP provides a standard way for editors to provide context about the files a developer is working on, so that AI tools can provide better assistance.
                </p>
                <cite className="mt-2 block text-right font-semibold">— MCP Documentation</cite>
              </blockquote>
              
              <div className="my-8 overflow-hidden rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-bold">MCP Architecture</h3>
                <p className="mb-4 text-muted-foreground">
                  At its core, MCP provides a standardized way for applications to:
                </p>
                <ol className="ml-6 list-decimal space-y-2">
                  <li>Gather context from a developer's environment</li>
                  <li>Structure that information in a consistent way</li>
                  <li>Send it securely to AI models</li>
                  <li>Receive and integrate AI suggestions back into the development environment</li>
                </ol>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Key Features of MCP</h2>
              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="flex flex-col rounded-lg border p-6 shadow-sm">
                  <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary w-12 h-12 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                      <path d="M7 10v12"></path>
                      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Standardized Context Format</h3>
                  <p className="mt-2 text-muted-foreground">
                    MCP defines a consistent format for representing code, files, and other relevant context, making it easier for different tools and models to work together.
                  </p>
                </div>
                
                <div className="flex flex-col rounded-lg border p-6 shadow-sm">
                  <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary w-12 h-12 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Privacy-Preserving</h3>
                  <p className="mt-2 text-muted-foreground">
                    MCP includes mechanisms for controlling what information is shared with AI models, helping to protect sensitive code and data.
                  </p>
                </div>
                
                <div className="flex flex-col rounded-lg border p-6 shadow-sm">
                  <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary w-12 h-12 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                      <path d="M21 2H3v16h5v4l4-4h5l4-4V2z"></path>
                      <path d="M12 8v4"></path>
                      <path d="M12 16h.01"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Model-Agnostic</h3>
                  <p className="mt-2 text-muted-foreground">
                    MCP works with any AI model that supports the protocol, allowing developers to choose the best model for their specific needs.
                  </p>
                </div>
                
                <div className="flex flex-col rounded-lg border p-6 shadow-sm">
                  <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary w-12 h-12 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                      <path d="M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.25 1 4.55a1.1 1.1 0 0 0 1 .95v6.2"></path>
                      <path d="M17.8 14c-.8.6-1.85 1-3 1a5.34 5.34 0 0 1-4-1.8"></path>
                      <path d="M9 6.8a5.25 5.25 0 0 1 7 0"></path>
                      <path d="M22 20v-5.8a2.22 2.22 0 0 0-2.2-2.2H20"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Extensible</h3>
                  <p className="mt-2 text-muted-foreground">
                    The protocol is designed to evolve over time, accommodating new types of context and capabilities as AI technology advances.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Why MCP Matters</h2>
              <p className="mt-4">
                Before MCP, each AI-assisted development tool had to implement its own method for gathering context and communicating with AI models. This led to:
              </p>
              
              <ul className="my-4 ml-6 list-disc space-y-2">
                <li>Duplication of effort across tools</li>
                <li>Inconsistent capabilities between different solutions</li>
                <li>Difficulty in switching between AI models or tools</li>
                <li>Privacy and security concerns due to varied implementation standards</li>
              </ul>
              
              <p className="mt-4">
                MCP solves these problems by providing a standard that all tools and models can adopt, creating a more interoperable, secure, and powerful ecosystem for AI-assisted development.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 