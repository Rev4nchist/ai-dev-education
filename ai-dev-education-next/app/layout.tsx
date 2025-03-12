import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@/components/ThemeProvider';
import FloatingChat from '@/components/chat/FloatingChat';
import { ThemeToggle } from '@/components/ThemeToggle';

const inter = Inter({ subsets: ["latin"] });

// Navigation items
const navItems = [
  { title: 'Introduction', href: '/introduction' },
  { title: 'Understanding MCP', href: '/understanding-mcp' },
  { title: 'Integrating MCP', href: '/integrating-mcp' },
  { title: 'Building MCP Servers', href: '/building-mcp-servers' },
  { title: 'AI Dev Work', href: '/ai-dev-work' },
  { title: 'Best Practices', href: '/best-practices' },
  { title: 'Chat', href: '/chat' },
];

export const metadata: Metadata = {
  title: {
    template: '%s | AI Dev Education',
    default: 'AI Dev Education',
  },
  description: "Learn about AI-assisted development and Model Context Protocol (MCP)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="system" storageKey="ai-dev-education-theme">
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background">
              <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
                <div className="flex gap-6 md:gap-10">
                  <a href="/" className="flex items-center space-x-2">
                    <span className="inline-block font-bold">AI Dev Education</span>
                  </a>
                </div>
                <div className="flex flex-1 items-center justify-end space-x-4">
                  <nav className="flex items-center space-x-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-sm font-medium transition-colors hover:text-primary"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </nav>
                  <ThemeToggle />
                </div>
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="border-t py-6 md:py-0">
              <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                  &copy; {new Date().getFullYear()} AI Dev Education. All rights reserved.
                </p>
              </div>
            </footer>
            <FloatingChat />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
