import { MessageSquare, Sparkles, Eye } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Enter Your Prompt',
    description: 'Type any topic, idea, or concept you want to visualize. Be as detailed or as broad as you like.',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Sparkles,
    number: '02',
    title: 'AI Generates Structure',
    description: 'Our AI analyzes your input and creates a logical, hierarchical mindmap with all key concepts and connections.',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    icon: Eye,
    number: '03',
    title: 'Visualize & Customize',
    description: 'View your interactive mindmap, adjust the layout, customize colors, add notes, or regenerate sections.',
    color: 'from-indigo-500 to-purple-500'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, Fast, Powerful
          </h2>
          <p className="text-xl text-gray-600">
            From idea to visual mindmap in three easy steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 -z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-gray-300 transition-colors relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-5xl font-bold text-gray-100">{step.number}</span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-2xl shadow-lg border border-gray-200 p-8 max-w-2xl">
            <div className="flex items-start gap-4 text-left">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex-shrink-0 flex items-center justify-center text-white font-bold text-lg">
                ?
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Try it with any topic</h4>
                <p className="text-gray-600 mb-4">
                  "Project management workflow", "Machine learning concepts", "Marketing strategy for SaaS",
                  "Book summary of 1984", "Vacation planning" - anything works!
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Business Strategy', 'Learning Path', 'Event Planning', 'Research Topic'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
