export default function DesignExamplePage() {
  return (
    <div className="container mx-auto py-10">
      {/* Page Title */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <span className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Design System</span>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Earth Tones Design System
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              A showcase of the new earthy, natural palette for AI Dev Education
            </p>
          </div>
        </div>
      </section>

      {/* Color Palette */}
      <section className="py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Color Palette</h2>
            
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {/* Dark Green */}
              <div className="rounded-lg overflow-hidden">
                <div className="bg-[#2C3930] h-24 flex items-end p-3">
                  <span className="text-white font-medium">Dark Green/Gray</span>
                </div>
                <div className="bg-white p-3 border-x border-b rounded-b-lg">
                  <code className="text-sm font-mono">#2C3930</code>
                </div>
              </div>
              
              {/* Olive Green */}
              <div className="rounded-lg overflow-hidden">
                <div className="bg-[#3F4F44] h-24 flex items-end p-3">
                  <span className="text-white font-medium">Olive Green</span>
                </div>
                <div className="bg-white p-3 border-x border-b rounded-b-lg">
                  <code className="text-sm font-mono">#3F4F44</code>
                </div>
              </div>
              
              {/* Amber/Brown */}
              <div className="rounded-lg overflow-hidden">
                <div className="bg-[#A27B5C] h-24 flex items-end p-3">
                  <span className="text-white font-medium">Amber/Brown</span>
                </div>
                <div className="bg-white p-3 border-x border-b rounded-b-lg">
                  <code className="text-sm font-mono">#A27B5C</code>
                </div>
              </div>
              
              {/* Cream */}
              <div className="rounded-lg overflow-hidden">
                <div className="bg-[#DCD7C9] h-24 flex items-end p-3">
                  <span className="text-[#2C3930] font-medium">Cream</span>
                </div>
                <div className="bg-white p-3 border-x border-b rounded-b-lg">
                  <code className="text-sm font-mono">#DCD7C9</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UI Components */}
      <section className="py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">UI Components</h2>
            
            {/* Buttons */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90">
                  Primary Button
                </button>
                <button className="inline-flex h-10 items-center justify-center rounded-md bg-secondary px-8 py-2 text-sm font-medium text-secondary-foreground shadow hover:bg-secondary/90">
                  Secondary Button
                </button>
                <button className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 py-2 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground">
                  Tertiary Button
                </button>
                <button className="inline-flex h-10 items-center justify-center rounded-md bg-destructive px-8 py-2 text-sm font-medium text-destructive-foreground shadow hover:bg-destructive/90">
                  Destructive
                </button>
              </div>
            </div>
            
            {/* Cards */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Cards</h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h4 className="text-lg font-semibold">Card Title</h4>
                  <p className="mt-2 text-muted-foreground">
                    This is an example card using the default card background and border colors.
                  </p>
                </div>
                
                <div className="rounded-lg border bg-[#3F4F44] p-6 shadow-sm text-white">
                  <h4 className="text-lg font-semibold">Olive Card</h4>
                  <p className="mt-2 text-[#DCD7C9]/90">
                    This is an example card using the olive background color with cream text.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Alerts/Callouts */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Alerts & Callouts</h3>
              <div className="space-y-4">
                <div className="rounded-lg border-l-4 border-[#A27B5C] bg-[#A27B5C]/10 p-4">
                  <div className="flex">
                    <span className="flex-shrink-0 text-[#A27B5C]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
                    </span>
                    <div className="ml-3">
                      <h4 className="text-sm font-medium text-[#A27B5C]">Attention needed</h4>
                      <p className="mt-1 text-sm text-muted-foreground">This is an important alert message using the amber accent color.</p>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-lg border border-[#3F4F44] bg-[#3F4F44]/5 p-4">
                  <div className="flex">
                    <span className="flex-shrink-0 text-[#3F4F44]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                    </span>
                    <div className="ml-3">
                      <h4 className="text-sm font-medium text-[#3F4F44]">Information</h4>
                      <p className="mt-1 text-sm text-muted-foreground">This is an informational message using the olive accent color.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Text Styles */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Typography</h3>
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl font-bold">Heading 1</h1>
                  <p className="text-muted-foreground">Inter font, bold weight</p>
                </div>
                <div>
                  <h2 className="text-3xl font-bold">Heading 2</h2>
                  <p className="text-muted-foreground">Inter font, bold weight</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Heading 3</h3>
                  <p className="text-muted-foreground">Inter font, bold weight</p>
                </div>
                <div>
                  <p className="text-lg">Body text (large)</p>
                  <p className="text-muted-foreground">Inter font, regular weight</p>
                </div>
                <div>
                  <p>Body text (regular)</p>
                  <p className="text-muted-foreground">Inter font, regular weight</p>
                </div>
                <div>
                  <p className="text-sm">Small text</p>
                  <p className="text-muted-foreground text-sm">Inter font, regular weight</p>
                </div>
                <div>
                  <code className="rounded bg-muted px-1 py-0.5 font-mono text-sm">Code text</code>
                  <p className="text-muted-foreground text-sm">Monospace font</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Mode Preview */}
      <section className="py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Dark Mode Preview</h2>
            
            <div className="rounded-lg overflow-hidden border">
              <div className="bg-[#2C3930] p-8">
                <h3 className="text-[#DCD7C9] text-2xl font-bold mb-4">Dark Mode Example</h3>
                
                <div className="bg-[#344338] rounded-lg p-6 mb-4">
                  <h4 className="text-[#DCD7C9] text-lg font-semibold">Card Example</h4>
                  <p className="text-[#DCD7C9]/80 mt-2">Cards in dark mode use slightly lighter background colors.</p>
                  
                  <div className="flex flex-wrap gap-4 mt-6">
                    <button className="inline-flex h-10 items-center justify-center rounded-md bg-[#A27B5C] px-8 py-2 text-sm font-medium text-[#2C3930] shadow hover:bg-[#B89274]">
                      Primary Button
                    </button>
                    <button className="inline-flex h-10 items-center justify-center rounded-md bg-[#3F4F44] px-8 py-2 text-sm font-medium text-[#DCD7C9] shadow hover:bg-[#506557]">
                      Secondary Button
                    </button>
                  </div>
                </div>
                
                <div className="rounded-lg border border-[#3F4F44] bg-[#3F4F44]/20 p-4">
                  <div className="flex">
                    <span className="flex-shrink-0 text-[#A27B5C]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                    </span>
                    <div className="ml-3">
                      <h4 className="text-sm font-medium text-[#A27B5C]">Dark Mode Alert</h4>
                      <p className="mt-1 text-sm text-[#DCD7C9]/70">This is how alerts appear in dark mode with the earthy color palette.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 