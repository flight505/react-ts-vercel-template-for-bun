# Bun React TypeScript Tailwind Template

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules. It uses the latest versions of React, TypeScript, and Tailwind CSS, and is configured to work with Bun for fast performance and Vercel for easy deployment.

## Features

- React 18
- TypeScript 5
- Vite 4
- Tailwind CSS 3
- Bun for fast JavaScript runtime
- Vercel-ready configuration

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed globally
- [Vercel CLI](https://vercel.com/download) (optional, for deployment)

### Setting Up a New Project

1. **Clone the Template Repository**

   ```bash
   git clone https://github.com/your-username/bun-react-typescript-tailwind-template.git your-new-project
   cd your-new-project
   ```

2. **Install Dependencies**

   ```bash
   bun install
   ```

3. **Start the Development Server**

   ```bash
   bun run dev
   ```

   This command will start the Vite development server. You can view your application in the browser at `http://localhost:5173`.

### Building for Production

```bash
bun run build
```

This command will create a production-ready build in the `dist` directory.

### Deploying to Vercel

1. **Install Vercel CLI** (if not already installed)

   ```bash
   npm i -g vercel
   ```

2. **Deploy the Project**

   ```bash
   vercel
   ```

   Follow the prompts to deploy your project to Vercel.

## Project Structure

```
.
├── README.md
├── bun.lockb
├── index.html
├── package.json
├── postcss.config.js
├── public
│   └── favicon.ico
├── src
│   ├── App.tsx
│   ├── index.css
│   ├── logo.svg
│   └── main.tsx
├── tailwind.config.js
├── tsconfig.json
├── types
│   └── images.d.ts
└── vercel.json
```

### Important Files and Directories

- **`src/`**: Contains the source code for your application.
  - **`App.tsx`**: The main application component.
  - **`main.tsx`**: The entry point for the React application.
  - **`index.css`**: Global CSS styles and Tailwind directives.
- **`public/`**: Contains static assets that will be served directly.
- **`index.html`**: The HTML template for your application.
- **`package.json`**: Contains project metadata and scripts.
- **`tsconfig.json`**: TypeScript configuration.
- **`tailwind.config.js`**: Tailwind CSS configuration.
- **`postcss.config.js`**: PostCSS configuration for Tailwind.
- **`vercel.json`**: Vercel deployment configuration.
- **`types/`**: Contains custom TypeScript type definitions.

## Customizing the Template

1. Edit `src/App.tsx` to modify the main application component.
2. Add your own components in the `src/` directory.
3. Modify `src/index.css` for global styles and Tailwind customizations.
4. Update `public/favicon.ico` with your own favicon.
5. Adjust `tailwind.config.js` to customize your Tailwind setup.

## License

This project is open source and available under the [MIT License](LICENSE).