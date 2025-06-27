
import { Card, CardContent } from "@/components/ui/card";
import { Users, BookOpen, Globe, Trophy } from "lucide-react";

export const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: "Active Students",
      description: "Learning worldwide"
    },
    {
      icon: BookOpen,
      value: "500+",
      label: "EE Courses",
      description: "From top universities"
    },
    {
      icon: Globe,
      value: "50+",
      label: "Universities",
      description: "Global partnerships"
    },
    {
      icon: Trophy,
      value: "95%",
      label: "Success Rate",
      description: "Course completion"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index} className="text-center bg-white/60 backdrop-blur-sm border-0 hover:bg-white/80 transition-all duration-300">
            <CardContent className="p-6 space-y-3">
              <div className="flex justify-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm font-medium text-gray-700">{stat.label}</p>
                <p className="text-xs text-gray-500">{stat.description}</p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
