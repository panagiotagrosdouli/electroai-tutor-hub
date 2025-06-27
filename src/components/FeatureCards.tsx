
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, BookOpen, Globe, Trophy, Zap, CheckCircle } from "lucide-react";

export const FeatureCards = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Tutor",
      description: "Get personalized explanations, step-by-step solutions, and instant answers to your EE questions.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: BookOpen,
      title: "Global Curriculum",
      description: "Access courses from MIT, Stanford, ETH Zurich, NTUA, and other top universities worldwide.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Compare & Learn",
      description: "See how the same subject is taught across different universities and learning approaches.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Trophy,
      title: "Gamified Learning",
      description: "Earn points, unlock achievements, and compete with peers through interactive challenges.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Zap,
      title: "Circuit Simulation",
      description: "Interactive circuit diagrams, signal analysis, and real-time simulations for hands-on learning.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: CheckCircle,
      title: "Progress Tracking",
      description: "Monitor your learning journey with detailed analytics and personalized study recommendations.",
      gradient: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Why Choose ElectroAI?
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Revolutionary features designed specifically for electrical engineering education
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/60 backdrop-blur-sm hover:bg-white/80">
              <CardHeader className="space-y-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
