import { Brain, Zap, Share2, Palette, GitBranch, Download } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Generation',
    description: 'Transform any text prompt into structured mindmaps using advanced AI that understands context and relationships.',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Zap,
    title: 'Instant Creation',
    description: 'Generate comprehensive mindmaps in seconds. No manual drawing or complex tools required.',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    icon: GitBranch,
    title: 'Smart Hierarchies',
    description: 'Automatically organize ideas into logical hierarchies with proper parent-child relationships.',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Palette,
    title: 'Beautiful Design',
    description: 'Production-ready visualizations with customizable themes, colors, and layouts that look professional.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Share2,
    title: 'Easy Sharing',
    description: 'Share your mindmaps with anyone via link, or collaborate in real-time with your team.',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: Download,
    title: 'Export Anywhere',
    description: 'Download as PNG, SVG, PDF, or JSON. Use your mindmaps in presentations, documents, and more.',
    color: 'from-rose-500 to-orange-500'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need to Visualize Ideas
          </h2>
          <p className="text-xl text-gray-600">
            Powerful features designed to make mind mapping effortless and intuitive
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
