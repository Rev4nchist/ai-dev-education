export default function IntroductionPage() {
  return (
    <div className="container mx-auto py-10">
      {/* Page Title */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <span className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Getting Started</span>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Introduction to AI-Assisted Development
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Transforming the way developers write code
            </p>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Discover how AI tools are revolutionizing software development and enhancing productivity
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">What is AI-Assisted Development?</h2>
              <div className="mt-4 space-y-4">
                <p>
                  AI-assisted development represents a paradigm shift in how software is created. It combines the creativity and problem-solving abilities of human developers with the pattern recognition and suggestion capabilities of artificial intelligence. Rather than replacing developers, these AI tools serve as intelligent assistants that enhance productivity, reduce repetitive tasks, and help maintain focus on higher-level design and architectural decisions.
                </p>
                
                <p>
                  The evolution of development tools has progressed from simple text editors to increasingly intelligent development environments. Initially, we had features like syntax highlighting to make code more readable. Then came autocomplete to make coding more efficient. Now, with AI-assisted development, we're entering a new era where tools can understand context, predict intentions, and generate substantial portions of code based on natural language descriptions.
                </p>

                <blockquote className="my-6 border-l-2 pl-6 italic">
                  Code is fundamentally text, and our tools for writing it have evolved from simple text editors into increasingly intelligent development environments.
                  <p className="mt-2 text-right font-semibold">— Cursor Documentation</p>
                </blockquote>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Why AI-Assisted Development Matters</h2>
              <p className="mt-4">
                The integration of AI into development workflows isn't just a technological novelty—it's transforming how developers work and what they can accomplish. Here's why AI-assisted development matters for both individual developers and organizations:
              </p>

              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="flex flex-col items-center rounded-lg border p-6 text-center shadow-sm">
                  <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Enhanced Productivity</h3>
                  <p className="mt-2 text-muted-foreground">
                    AI tools can generate boilerplate code, complete repetitive patterns, and suggest solutions, allowing developers to focus on solving unique problems rather than typing routine code.
                  </p>
                </div>
                
                <div className="flex flex-col items-center rounded-lg border p-6 text-center shadow-sm">
                  <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                      <path d="M22 9L12 5 2 9l10 4 10-4v6" />
                      <path d="M6 13.5V19l6 2.5 6-2.5v-5.5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Reduced Cognitive Load</h3>
                  <p className="mt-2 text-muted-foreground">
                    By handling syntax details and offering contextually relevant suggestions, AI tools reduce the mental overhead of remembering language specifics and API details.
                  </p>
                </div>
                
                <div className="flex flex-col items-center rounded-lg border p-6 text-center shadow-sm">
                  <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Accelerated Learning</h3>
                  <p className="mt-2 text-muted-foreground">
                    Developers can learn new languages, frameworks, and best practices by observing AI-generated code and explanations, shortening the learning curve.
                  </p>
                </div>
                
                <div className="flex flex-col items-center rounded-lg border p-6 text-center shadow-sm">
                  <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                      <path d="M7 18l6-6-6-6" />
                      <path d="M17 6v12" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Consistent Code Quality</h3>
                  <p className="mt-2 text-muted-foreground">
                    AI tools can help maintain consistent coding standards and identify potential bugs or performance issues before they make it into production.
                  </p>
                </div>
              </div>

              <p className="mt-6">
                For executives and CTOs, AI-assisted development translates to faster time-to-market, more efficient use of developer resources, and potentially higher-quality software products. It allows development teams to tackle more ambitious projects with the same headcount and respond more quickly to changing requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
