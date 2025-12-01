import {
  BookOpen,
  Bot,
  Briefcase,
  Clock,
  Star,
  TrendingUp,
  Zap,
} from 'lucide-react';
import { useEffect, useState } from 'react';

function App() {
  // Removed 'hoveredItem' state as CSS group-hover handles the UI better (and faster)
  const [isVisible, setIsVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // FIX: Use setTimeout to move the state update to the next tick
    // This solves the "synchronous setState in effect" error
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleGetStarted = () => {
    setShowPopup(true);
    // Auto-close popup after 3 seconds
    setTimeout(() => setShowPopup(false), 3000);
  };

  const features = [
    {
      icon: Zap,
      text: "Your DevOps sidekick that actually knows what it's talking about—no more googling at 3 AM.",
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Bot,
      text: 'Chat with AI thatDebOps: Debug + DevOps = instant answers to your pipeline nightmares.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: TrendingUp,
      text: "Flex harder than senior devs—show recruiters you're building the future, not just using it.",
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Clock,
      text: 'Stop troubleshooting for hours. Get automated solutions faster than your CI/CD can fail.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Star,
      text: 'Master Kubernetes, Docker, Terraform without drowning in docs—your AI mentor that scales infinitely.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Briefcase,
      text: "Walk into interviews with 'I built an AI-powered DevOps assistant' energy. Instant credibility unlocked.",
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: BookOpen,
      text: 'Portfolio project that screams modern engineering: AI integration, automation, cloud-native—the holy trinity.',
      color: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-br from-gray-900 via-slate-800 to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 animate-pulse rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
        <div
          className="absolute -bottom-40 -left-40 h-80 w-80 animate-pulse rounded-full bg-purple-500 opacity-10 blur-3xl"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-green-500 opacity-5 blur-3xl"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className="relative flex min-h-screen items-center justify-center px-4 py-5 text-white">
        <div
          className={`w-full max-w-6xl transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <div className="flex flex-col items-center gap-12 md:flex-row md:items-start md:gap-16">
            {/* Logo Section */}
            <div className="flex shrink-0 flex-col items-center">
              <div className="group relative">
                <div className="absolute inset-0 rounded-full bg-linear-to-r from-blue-500 via-green-500 to-yellow-500 opacity-75 blur-xl transition-opacity duration-500 group-hover:opacity-100"></div>
                <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-2 border-gray-700 bg-gray-800 shadow-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 md:h-40 md:w-40">
                  <img
                    src="/google-developers-seeklogo.svg"
                    alt="GDGC-ACE"
                    className="p-2"
                  />
                </div>
              </div>
              <div className="mt-4 text-center">
                <span className="bg-linear-to-r from-blue-500 via-green-500 to-yellow-500 bg-clip-text text-sm font-bold tracking-widest text-transparent">
                  GDGC-ACE
                </span>
              </div>
            </div>

            {/* Content Section */}
            <main
              className="flex-1 text-center md:text-left"
              role="main"
            >
              {/* Header */}
              <div className="mb-8">
                <h1 className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-4xl font-black tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
                  GDGC Vacation Project
                </h1>
                <div className="mt-4 flex items-center justify-center gap-3 md:justify-start">
                  <Bot className="h-6 w-6 animate-pulse text-blue-400" />
                  <h2 className="text-xl font-semibold text-gray-300 sm:text-2xl md:text-3xl">
                    Creating a DevOps ChatBot
                  </h2>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid gap-4 sm:grid-cols-2 lg:gap-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-xl border border-gray-700/50 bg-gray-800/50 p-5 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-gray-600 hover:shadow-2xl"
                      style={{
                        transitionDelay: `${index * 50}ms`,
                      }}
                    >
                      {/* Gradient overlay on hover */}
                      <div
                        className={`absolute inset-0 bg-linear-to-r ${feature.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
                      ></div>

                      <div className="relative flex items-start gap-4">
                        <div
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br ${feature.color} shadow-lg transition-transform duration-300 group-hover:rotate-12`}
                        >
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <p className="text-sm leading-relaxed text-gray-300 transition-colors duration-300 group-hover:text-white sm:text-base">
                          {feature.text}
                        </p>
                      </div>

                      {/* Number badge */}
                      <div className="absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-gray-700/50 text-xs font-bold text-gray-400 transition-colors duration-300 group-hover:bg-gray-600 group-hover:text-white">
                        {index + 1}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA Section */}
              <div className="mt-10 flex items-center justify-center md:justify-start">
                <button
                  className="group relative overflow-hidden rounded-full bg-linear-to-r from-blue-500 to-purple-600 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  onClick={handleGetStarted}
                >
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </button>
              </div>
            </main>
          </div>
        </div>
      </div>
      {/* Popup */}
      {showPopup && (
        <div className="animate-in fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm duration-200">
          <div className="animate-in zoom-in relative mx-4 max-w-md rounded-2xl border border-gray-700 bg-linear-to-br from-gray-800 to-gray-900 p-8 shadow-2xl duration-300">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-purple-600 shadow-lg">
                <Bot className="h-12 w-12 text-white" />
              </div>
            </div>
            <div className="mt-8 text-center">
              <h3 className="mb-3 text-2xl font-bold text-white">
                Hold Up! 🚀
              </h3>
              <p className="leading-relaxed text-gray-300">
                Nothing's gonna happen yet... because{' '}
                <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text font-semibold text-transparent">
                  YOU
                </span>{' '}
                have to build this awesome application first!
              </p>
              <p className="mt-3 text-sm text-gray-400">
                Time to turn this landing page into reality. Let's go! 💪
              </p>
            </div>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-6 w-full rounded-lg bg-linear-to-r from-blue-500 to-purple-600 py-2 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
