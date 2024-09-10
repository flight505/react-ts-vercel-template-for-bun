# Bun Latest React Template

This template uses the latest versions of React, TypeScript, Next.js, and Tailwind CSS, and is configured to work with Bun and Vercel for easy deployment.

## Features

- React 20
- TypeScript 5
- Next.js (latest)
- Tailwind CSS 3
- Bun for fast JavaScript runtime
- Vercel for deployment

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed globally
- [Vercel CLI](https://vercel.com/download) installed globally

### Setting Up a New Project

1. **Clone the Template Repository**

   ```bash
   git clone https://github.com/flight505/react-ts-vercel-template-for-bun.git your-new-project
   cd your-new-project
   ```

2. **Install Dependencies**

   ```bash
   bun install
   ```

3. **Initialize a New Git Repository (Optional)**

   If you want to start a new Git repository for your project:

   ```bash
   rm -rf .git
   git init
   git add .
   git commit -m "Initial commit"
   ```

4. **Update Project Details**

   Update the `package.json` file with your project's specific details, such as the name, version, and description.

5. **Start the Development Server**

   ```bash
   bun run dev
   ```

   This command will start your Next.js development server. You can view your application in the browser at `http://localhost:3000`.

### Deploying to Vercel

1. **Login to Vercel**

   ```bash
   vercel login
   ```

2. **Deploy the Project**

   ```bash
   bun run deploy
   ```

   This command will deploy your project to Vercel. You can also use the `--prod` flag to deploy directly to production:

   ```bash
   vercel --prod
   ```

## Project Structure
```bash
.
├── bun.lockb
├── package.json
├── public
│   ├── index.html
│   └── manifest.json
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── tailwind.config.js
├── tsconfig.json
├── types
│   └── images.d.ts
└── vercel.json
````

### Important Files and Directories

- **`src/`**: Contains the source code for your application.
  - **`App.tsx`**: The main application component.
  - **`main.tsx`**: The entry point for the React application.
  - **`index.css`**: Global CSS styles.
  - **`App.css`**: CSS styles specific to the `App` component.
- **`public/`**: Contains static assets like the favicon and HTML template.
- **`package.json`**: Contains project metadata and scripts.
- **`tsconfig.json`**: TypeScript configuration.
- **`tailwind.config.js`**: Tailwind CSS configuration.
- **`vercel.json`**: Vercel deployment configuration.
- **`types/`**: Contains custom TypeScript type definitions.

### Instructions to Get Started

1. **Edit `src/App.tsx`**: Customize the main application component.
2. **Edit `src/index.css` and `src/App.css`**: Add your global and component-specific styles.
3. **Add Components**: Create new components in the `src/` directory as needed.
4. **Update Static Assets**: Replace the files in the `public/` directory with your own static assets.

## License

This project is licensed under the MIT License.