import { Sparkles, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">MindFlow</span>
            </div>
            <p className="text-gray-600 mb-4 max-w-sm">
              Transform your ideas into beautiful, interactive mindmaps with the power of AI.
              Simple, fast, and powerful.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                <Twitter className="w-4 h-4 text-gray-700" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                <Github className="w-4 h-4 text-gray-700" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                <Linkedin className="w-4 h-4 text-gray-700" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Examples</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">API</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            © 2025 MindFlow. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
