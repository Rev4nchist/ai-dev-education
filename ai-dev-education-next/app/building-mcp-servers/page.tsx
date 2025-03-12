export default function BuildingMCPServersPage() {
  return (
    <div className="container mx-auto py-10">
      {/* Page Title */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <span className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Advanced Guide</span>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Building MCP Servers
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Create your own AI-powered development tools
            </p>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Learn how to build, deploy, and maintain Model Context Protocol servers for AI-assisted development
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Introduction to Building MCP Servers</h2>
              <p className="mt-4">
                The Model Context Protocol (MCP) allows AI models to interact with external tools and data sources. While there are many pre-built MCP servers available, creating your own custom server gives you the flexibility to integrate specific tools and services that your AI applications need.
              </p>
              
              <p className="mt-4">
                In this tutorial, we'll walk through the process of building a simple MCP server using TypeScript. By the end, you'll have a functional MCP server that can be connected to any MCP host like Claude Desktop, Cursor, or Windsurf.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="flex flex-col items-center rounded-lg border p-6 text-center transition-all hover:-translate-y-1 hover:shadow-md">
                  <div className="mb-4 text-4xl text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                      <path d="M8.4 10.6a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                      <path d="M15.6 10.6a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                      <path d="m18 15-2.4-2.4"></path>
                      <path d="m6 15 2.4-2.4"></path>
                      <path d="M12 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Customization</h3>
                  <p className="mt-2 text-muted-foreground">Build tools tailored to your specific needs and workflows</p>
                </div>
                
                <div className="flex flex-col items-center rounded-lg border p-6 text-center transition-all hover:-translate-y-1 hover:shadow-md">
                  <div className="mb-4 text-4xl text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Security</h3>
                  <p className="mt-2 text-muted-foreground">Maintain control over your data and how it's accessed</p>
                </div>
                
                <div className="flex flex-col items-center rounded-lg border p-6 text-center transition-all hover:-translate-y-1 hover:shadow-md">
                  <div className="mb-4 text-4xl text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Integration</h3>
                  <p className="mt-2 text-muted-foreground">Connect AI models to your existing systems and services</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Prerequisites</h2>
              <p className="mt-4">Before we begin, make sure you have the following installed:</p>
              <ul className="ml-6 mt-4 list-disc space-y-2">
                <li><strong>Node.js</strong> (version 18 or later)</li>
                <li><strong>npm</strong> or <strong>yarn</strong> package manager</li>
                <li>Basic knowledge of <strong>TypeScript</strong> and JavaScript</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Setting Up Your MCP Server Project</h2>
              
              <div className="relative rounded-lg border bg-card p-6 shadow-sm">
                <div className="absolute -top-3 -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                  1
                </div>
                <h3 className="text-xl font-bold">Create a New Project</h3>
                <p className="mt-2">First, create a new directory for your project and initialize it:</p>
                <div className="mt-4 overflow-x-auto rounded-md bg-muted p-4 font-mono text-sm">
                  <code>
                    mkdir mcp-server<br />
                    cd mcp-server<br />
                    npm init -y<br />
                    npm install typescript ts-node @types/node --save-dev
                  </code>
                </div>
              </div>
              
              <div className="relative rounded-lg border bg-card p-6 shadow-sm">
                <div className="absolute -top-3 -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                  2
                </div>
                <h3 className="text-xl font-bold">Install MCP Dependencies</h3>
                <p className="mt-2">Next, install the necessary packages for building an MCP server:</p>
                <div className="mt-4 overflow-x-auto rounded-md bg-muted p-4 font-mono text-sm">
                  <code>
                    npm install express cors axios
                  </code>
                </div>
                <p className="mt-4">And the corresponding type definitions:</p>
                <div className="mt-2 overflow-x-auto rounded-md bg-muted p-4 font-mono text-sm">
                  <code>
                    npm install @types/express @types/cors --save-dev
                  </code>
                </div>
              </div>
              
              <div className="relative rounded-lg border bg-card p-6 shadow-sm">
                <div className="absolute -top-3 -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                  3
                </div>
                <h3 className="text-xl font-bold">TypeScript Configuration</h3>
                <p className="mt-2">Create a TypeScript configuration file (tsconfig.json):</p>
                <div className="mt-4 overflow-x-auto rounded-md bg-muted p-4 font-mono text-sm">
                  <code>
                    {`{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.spec.ts"]
}`}
                  </code>
                </div>
              </div>
            </div>

            <div className="rounded-md border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
              <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-300">Note</h3>
              <p className="mt-2 text-amber-800 dark:text-amber-300">
                This is a simplified tutorial. For production environments, you'll want to implement authentication, error handling, logging, and potentially containerize your server for easy deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Implementing Your MCP Server</h2>
              
              <div className="relative rounded-lg border bg-card p-6 shadow-sm">
                <div className="absolute -top-3 -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                  4
                </div>
                <h3 className="text-xl font-bold">Basic Server Setup</h3>
                <p className="mt-2">Create a new file called <code>src/index.ts</code> and add the following code:</p>
                <div className="mt-4 overflow-x-auto rounded-md bg-muted p-4 font-mono text-sm">
                  <code>
                    {`import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3333;

// Middleware
app.use(cors());
app.use(express.json());

// MCP discovery endpoint
app.get('/mcp', (req, res) => {
  res.json({
    name: 'My Custom MCP Server',
    description: 'A simple MCP server for demonstration purposes',
    version: '1.0.0',
    tools: [
      // We'll add tools here later
    ]
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(\`MCP Server running on port \${PORT}\`);
});`}
                  </code>
                </div>
                <p className="mt-4">This code sets up a basic Express server with the essential MCP discovery endpoint.</p>
              </div>
              
              <div className="relative rounded-lg border bg-card p-6 shadow-sm">
                <div className="absolute -top-3 -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                  5
                </div>
                <h3 className="text-xl font-bold">Define MCP Tool Types</h3>
                <p className="mt-2">Create a file called <code>src/types.ts</code> with the following content:</p>
                <div className="mt-4 overflow-x-auto rounded-md bg-muted p-4 font-mono text-sm">
                  <code>
                    {`// Tool parameter schema
export interface ToolParameter {
  name: string;
  description: string;
  type: string;
  required: boolean;
}

// Tool definition
export interface Tool {
  name: string;
  description: string;
  parameters: ToolParameter[];
}

// Tool invocation request
export interface ToolInvocationRequest {
  name: string;
  parameters: Record<string, any>;
}`}
                  </code>
                </div>
              </div>
              
              <div className="relative rounded-lg border bg-card p-6 shadow-sm">
                <div className="absolute -top-3 -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                  6
                </div>
                <h3 className="text-xl font-bold">Implement a Sample Tool</h3>
                <p className="mt-2">Create a file called <code>src/tools.ts</code> to define your MCP tools:</p>
                <div className="mt-4 overflow-x-auto rounded-md bg-muted p-4 font-mono text-sm">
                  <code>
                    {`import { Tool } from './types';

// Define a simple weather tool
export const weatherTool: Tool = {
  name: 'get_weather',
  description: 'Get the current weather for a location',
  parameters: [
    {
      name: 'location',
      description: 'The city and state or country (e.g., "San Francisco, CA")',
      type: 'string',
      required: true
    }
  ]
};

// Function to get mock weather data
export async function getWeather(location: string): Promise<any> {
  // In a real application, you would call a weather API here
  // For this example, we'll return mock data
  
  return {
    location,
    temperature: Math.floor(Math.random() * 30) + 10, // Random temperature between 10-40°C
    conditions: ['Sunny', 'Cloudy', 'Rainy', 'Snowy'][Math.floor(Math.random() * 4)],
    humidity: Math.floor(Math.random() * 100),
    timestamp: new Date().toISOString()
  };
}

// Export all tools
export const tools = [weatherTool];`}
                  </code>
                </div>
              </div>
              
              <div className="relative rounded-lg border bg-card p-6 shadow-sm">
                <div className="absolute -top-3 -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                  7
                </div>
                <h3 className="text-xl font-bold">Update Server with Tool Implementation</h3>
                <p className="mt-2">Update your <code>src/index.ts</code> file to include the tool implementation:</p>
                <div className="mt-4 overflow-x-auto rounded-md bg-muted p-4 font-mono text-sm">
                  <code>
                    {`import express from 'express';
import cors from 'cors';
import { ToolInvocationRequest } from './types';
import { tools, getWeather } from './tools';

const app = express();
const PORT = process.env.PORT || 3333;

// Middleware
app.use(cors());
app.use(express.json());

// MCP discovery endpoint
app.get('/mcp', (req, res) => {
  res.json({
    name: 'My Custom MCP Server',
    description: 'A simple MCP server for demonstration purposes',
    version: '1.0.0',
    tools: tools
  });
});

// MCP tool invocation endpoint
app.post('/mcp/invoke', async (req, res) => {
  try {
    const request: ToolInvocationRequest = req.body;
    
    // Route to the correct tool implementation
    switch (request.name) {
      case 'get_weather':
        const location = request.parameters.location as string;
        const weatherData = await getWeather(location);
        return res.json(weatherData);
      
      default:
        return res.status(400).json({ error: \`Tool '\${request.name}' not found\` });
    }
  } catch (error) {
    console.error('Error processing tool invocation:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(\`MCP Server running on port \${PORT}\`);
});`}
                  </code>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Running and Testing Your MCP Server</h2>
              
              <div className="relative rounded-lg border bg-card p-6 shadow-sm">
                <div className="absolute -top-3 -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                  8
                </div>
                <h3 className="text-xl font-bold">Add Script to package.json</h3>
                <p className="mt-2">Add a script to run your server in your <code>package.json</code> file:</p>
                <div className="mt-4 overflow-x-auto rounded-md bg-muted p-4 font-mono text-sm">
                  <code>
                    {`"scripts": {
  "start": "ts-node src/index.ts",
  "dev": "ts-node-dev --respawn src/index.ts",
  "build": "tsc"
}`}
                  </code>
                </div>
              </div>
              
              <div className="relative rounded-lg border bg-card p-6 shadow-sm">
                <div className="absolute -top-3 -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                  9
                </div>
                <h3 className="text-xl font-bold">Run Your MCP Server</h3>
                <p className="mt-2">Start your server with:</p>
                <div className="mt-4 overflow-x-auto rounded-md bg-muted p-4 font-mono text-sm">
                  <code>
                    npm run dev
                  </code>
                </div>
                <p className="mt-4">Your server should now be running at <code>http://localhost:3333</code>.</p>
              </div>
              
              <div className="relative rounded-lg border bg-card p-6 shadow-sm">
                <div className="absolute -top-3 -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                  10
                </div>
                <h3 className="text-xl font-bold">Test Your MCP Server</h3>
                <p className="mt-2">You can test your server using tools like curl or Postman:</p>
                <div className="mt-4 overflow-x-auto rounded-md bg-muted p-4 font-mono text-sm">
                  <code>
                    {`# Get the MCP discovery info
curl http://localhost:3333/mcp

# Invoke the weather tool
curl -X POST http://localhost:3333/mcp/invoke \\
  -H "Content-Type: application/json" \\
  -d '{"name": "get_weather", "parameters": {"location": "New York, NY"}}'`}
                  </code>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Connecting to MCP Hosts</h2>
              <p className="mt-4">
                To use your MCP server with compatible hosts like Claude Desktop or Cursor, you'll need to:
              </p>
              
              <ol className="ml-6 mt-4 list-decimal space-y-2">
                <li>Ensure your server is running and accessible</li>
                <li>Open your MCP-compatible host application</li>
                <li>Navigate to the settings or extensions section</li>
                <li>Add a new MCP server with the URL <code>http://localhost:3333/mcp</code></li>
                <li>The host should discover your tools automatically</li>
              </ol>
              
              <p className="mt-4">
                Once connected, you can invoke your MCP tools directly from your AI interactions within the host application.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Next Steps</h2>
              <p className="mt-4">
                Now that you have a basic MCP server running, here are some ways you can extend it:
              </p>
              
              <ul className="ml-6 mt-4 list-disc space-y-2">
                <li><strong>Add more tools</strong> for different functionality</li>
                <li><strong>Implement authentication</strong> to secure your server</li>
                <li><strong>Connect to real APIs</strong> instead of using mock data</li>
                <li><strong>Add logging and monitoring</strong> for production use</li>
                <li><strong>Deploy your server</strong> to a cloud platform for public access</li>
              </ul>
            </div>

            <div className="rounded-md border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
              <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300">Resources</h3>
              <ul className="ml-6 mt-2 list-disc text-blue-800 dark:text-blue-300">
                <li><a href="#" className="underline hover:text-blue-600">MCP Protocol Documentation</a></li>
                <li><a href="#" className="underline hover:text-blue-600">Express.js Documentation</a></li>
                <li><a href="#" className="underline hover:text-blue-600">TypeScript Documentation</a></li>
                <li><a href="#" className="underline hover:text-blue-600">Cursor IDE MCP Integration Guide</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 