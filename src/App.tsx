import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          React + TypeScript + Bun + Vercel + Tailwind
        </h1>
        <p className="mt-2 text-gray-400">A powerful and lightweight template for modern web development</p>
      </header>

      <main className="max-w-2xl w-full bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
        <ul className="space-y-2">
          <li className="flex items-center">
            <svg className="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Edit <code className="mx-2 px-2 py-1 bg-gray-700 rounded text-yellow-400">src/App.tsx</code> and save to reload.
          </li>
          <li className="flex items-center">
            <svg className="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Use <code className="mx-2 px-2 py-1 bg-gray-700 rounded text-yellow-400">bun run dev</code> to start the development server.
          </li>
          <li className="flex items-center">
            <svg className="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Build your app with <code className="mx-2 px-2 py-1 bg-gray-700 rounded text-yellow-400">bun run build</code>.
          </li>
        </ul>
      </main>

      <footer className="mt-8 text-gray-500 text-sm">
        Powered by Bun and Vite. Deploy with Vercel.
      </footer>
    </div>
  );
}

export default App;