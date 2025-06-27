
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Star, Users, BookOpen } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="text-center space-y-8">
      <div className="space-y-4">
        <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
          🚀 Revolutionary AI-Powered Learning Platform
        </Badge>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
          Master{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Electrical Engineering
          </span>
          <br />
          with AI Guidance
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Access courses from MIT, Stanford, ETH Zurich & more. Get personalized AI tutoring, 
          step-by-step problem solving, and interactive learning experiences designed specifically 
          for electrical engineering students.
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3">
          Start Learning Free
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <Button size="lg" variant="outline" className="text-lg px-8 py-3">
          <Play className="mr-2 h-5 w-5" />
          Watch Demo
        </Button>
      </div>

      <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
        <div className="flex items-center space-x-2">
          <Users className="h-4 w-4" />
          <span>10,000+ Students</span>
        </div>
        <div className="flex items-center space-x-2">
          <BookOpen className="h-4 w-4" />
          <span>500+ Courses</span>
        </div>
        <div className="flex items-center space-x-2">
          <Star className="h-4 w-4" />
          <span>4.9/5 Rating</span>
        </div>
      </div>
    </div>
  );
};
