import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom colors for orangey-blue-purple scheme
        'mcp-orange': {
          DEFAULT: '#FF7D4D',
          50: '#FFF0EB',
          100: '#FFE1D6',
          200: '#FFC3AC',
          300: '#FFA582',
          400: '#FF8759',
          500: '#FF7D4D', // Base
          600: '#FF5A1F',
          700: '#F03C00',
          800: '#BC2F00',
          900: '#882200',
          950: '#601800',
        },
        'mcp-blue': {
          DEFAULT: '#3B82F6',
          50: '#EBF5FF',
          100: '#D6EBFF',
          200: '#ADD6FF',
          300: '#84C1FF',
          400: '#5BA1FF',
          500: '#3B82F6', // Base
          600: '#2563EB',
          700: '#1E40AF',
          800: '#1E3A8A',
          900: '#1E3A6A',
          950: '#162B4F',
        },
        'mcp-purple': {
          DEFAULT: '#5F4BDD',
          50: '#F2F0FB',
          100: '#E5E0F7',
          200: '#CAC1EF',
          300: '#AFA2E6',
          400: '#9583DE',
          500: '#5F4BDD', // Base
          600: '#4F3AD0',
          700: '#3E2AB2',
          800: '#2F208A',
          900: '#211661',
          950: '#180F49',
        },
        // Earth Tones Color Palette
        'earth': {
          darkgreen: '#2C3930',
          olive: '#3F4F44',
          amber: '#A27B5C',
          cream: '#DCD7C9',
          DEFAULT: '#A27B5C', // amber as default earth tone
        },
        // Dark green gradient
        'forest': {
          50: '#EAF0EC',
          100: '#D5E1D9',
          200: '#A9C5B2',
          300: '#7EAA8B',
          400: '#5A8E6B',
          500: '#3F6F4D',
          600: '#3F4F44', // olive
          700: '#344338',
          800: '#2C3930', // dark green/gray
          900: '#1A2017',
          950: '#121712',
        },
        // Amber/brown gradient
        'amber': {
          50: '#FBF8F5',
          100: '#F6F0EA',
          200: '#EEE1D4',
          300: '#E5D1BC',
          400: '#DCC2A5',
          500: '#D4B38E',
          600: '#CAA077',
          700: '#A27B5C', // amber/brown
          800: '#7F613E',
          900: '#5C4826',
          950: '#3A2E1A',
        },
        // Cream gradient
        'cream': {
          50: '#FEFEFD',
          100: '#FCFBF9',
          200: '#F9F8F4',
          300: '#F6F4EE',
          400: '#F3F0E9',
          500: '#EFECE3',
          600: '#E6E1D6',
          700: '#DCD7C9', // cream
          800: '#C2BBAB',
          900: '#A79E8C',
          950: '#8A826E',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config; 