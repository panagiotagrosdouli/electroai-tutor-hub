
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BookOpen, Brain, Zap, Globe, Trophy, Users, ArrowRight, Play, Star, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { FeatureCards } from "@/components/FeatureCards";
import { CourseGrid } from "@/components/CourseGrid";
import { AITutorChat } from "@/components/AITutorChat";
import { StatsSection } from "@/components/StatsSection";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-2">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ElectroAI
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <Button variant="ghost" onClick={() => setActiveTab("dashboard")}>Dashboard</Button>
              <Button variant="ghost" onClick={() => setActiveTab("courses")}>Courses</Button>
              <Button variant="ghost" onClick={() => setActiveTab("tutor")}>AI Tutor</Button>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsContent value="dashboard" className="space-y-8">
            <HeroSection />
            <StatsSection />
            <FeatureCards />
          </TabsContent>

          <TabsContent value="courses" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Electrical Engineering Courses
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive curriculum from top universities worldwide, powered by AI tutoring
              </p>
            </div>
            <CourseGrid />
          </TabsContent>

          <TabsContent value="tutor" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                AI Tutor Assistant
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get instant help with concepts, problem solving, and personalized learning paths
              </p>
            </div>
            <AITutorChat />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
