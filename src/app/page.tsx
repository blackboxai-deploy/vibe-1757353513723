export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-2xl mx-auto">
        {/* Main Hello World Message */}
        <div className="space-y-6">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
            Hello World
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
            Welcome to your Next.js application with modern styling
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center space-x-4 py-8">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>

        {/* Card with Technical Details */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Built with Modern Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-600">
            <div className="bg-blue-50 rounded-lg p-3">
              <div className="font-medium text-blue-800">Next.js 15</div>
              <div className="text-blue-600">React Framework</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-3">
              <div className="font-medium text-purple-800">Tailwind CSS</div>
              <div className="text-purple-600">Utility Styling</div>
            </div>
            <div className="bg-indigo-50 rounded-lg p-3 md:col-span-1 col-span-2">
              <div className="font-medium text-indigo-800">TypeScript</div>
              <div className="text-indigo-600">Type Safety</div>
            </div>
          </div>
        </div>

        {/* Footer Message */}
        <div className="pt-8">
          <p className="text-gray-500 text-sm">
            Ready to build something amazing? Start editing{' '}
            <code className="bg-gray-100 px-2 py-1 rounded text-xs font-mono text-gray-700">
              src/app/page.tsx
            </code>
          </p>
        </div>
      </div>
    </main>
  );
}