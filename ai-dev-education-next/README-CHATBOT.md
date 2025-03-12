# AI Assistant Chatbot Setup

This document provides instructions for setting up the AI Assistant chatbot for the AI Dev Education website.

## Prerequisites

- Next.js project (already set up)
- Node.js v18+ and npm
- OpenRouter API key

## Installation

All required dependencies should already be installed. If not, run:

```bash
npm install openai react-markdown lucide-react clsx tailwind-merge next-themes
```

## Configuration

1. Create a `.env.local` file in the root of the project.
2. Add your OpenRouter API key to the `.env.local` file:

```
OPENROUTER_API_KEY=your_openrouter_api_key_here
```

3. You can get an API key by signing up at [OpenRouter](https://openrouter.ai/).

## Features

The chatbot implementation includes:

1. **Floating Chat Component**: Available on all pages via a small chat button in the bottom right corner.
2. **Dedicated Chat Page**: A full-page chat experience at `/chat`.
3. **Dark/Light Mode**: Integrated with the site's theme system.
4. **Mobile-Friendly Design**: Responsive UI that works on all device sizes.

## Technical Implementation

The chatbot uses:

- **OpenRouter API**: For accessing various AI models (Claude, GPT-4, etc.)
- **Edge Runtime**: For efficient API route handling
- **React and TypeScript**: For type-safe component development
- **Tailwind CSS**: For styling

## Model Selection

The default model is Claude 3.7 Sonnet Beta, but this can be configured in the `openrouter.ts` file.

## Data Privacy

- The conversations are not stored permanently.
- All API calls are made server-side to protect your API key.

## Troubleshooting

If you encounter issues:

1. Verify your OpenRouter API key is correct
2. Check the server logs for any errors
3. Ensure you have sufficient credits on your OpenRouter account

## Further Customization

You can customize:

- The chatbot's system prompt in `lib/openrouter.ts`
- The UI appearance in the respective component files
- Model parameters like temperature and max tokens 