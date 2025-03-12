import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Assistant Chat - AI Dev Education',
  description: 'Chat with our AI assistant for help with AI development, MCP, and more.',
};

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 