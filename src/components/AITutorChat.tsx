
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Send, Lightbulb, Calculator, BookOpen, Zap } from "lucide-react";
import { useState } from "react";

export const AITutorChat = () => {
  const [message, setMessage] = useState("");
  const [activeSubject, setActiveSubject] = useState("circuits");

  const subjects = [
    { id: "circuits", name: "Circuit Analysis", icon: Zap, color: "bg-blue-500" },
    { id: "signals", name: "Signal Processing", icon: Calculator, color: "bg-purple-500" },
    { id: "power", name: "Power Electronics", icon: Lightbulb, color: "bg-green-500" },
    { id: "control", name: "Control Systems", icon: BookOpen, color: "bg-orange-500" }
  ];

  const chatHistory = [
    {
      type: "ai",
      message: "Hello! I'm your AI tutor specialized in Electrical Engineering. How can I help you today?",
      timestamp: "2 minutes ago"
    },
    {
      type: "user", 
      message: "Can you explain Kirchhoff's Current Law with an example?",
      timestamp: "2 minutes ago"
    },
    {
      type: "ai",
      message: "Absolutely! Kirchhoff's Current Law (KCL) states that the sum of currents entering a node equals the sum of currents leaving that node. This is based on the principle of charge conservation.\n\nExample: At node A, if we have currents I₁ = 5A entering, I₂ = 3A entering, and I₃ leaving, then:\nI₁ + I₂ = I₃\n5A + 3A = 8A\n\nSo I₃ = 8A leaving the node.",
      timestamp: "1 minute ago"
    },
    {
      type: "user",
      message: "That's clear! Can you show me a more complex circuit example?",
      timestamp: "30 seconds ago"
    },
    {
      type: "ai",
      message: "Great question! Let me create a more complex example with multiple nodes...\n\n[Circuit Diagram would be rendered here]\n\nFor a circuit with 3 nodes and 5 branches, we would apply KCL at each node:\n- Node 1: I₁ - I₂ - I₃ = 0\n- Node 2: I₂ + I₄ - I₅ = 0\n- Node 3: I₃ + I₅ - I₄ = 0\n\nWould you like me to solve this step by step?",
      timestamp: "Just now"
    }
  ];

  const quickPrompts = [
    "Explain Ohm's Law with examples",
    "How do op-amps work?", 
    "Calculate impedance in AC circuits",
    "Design a simple amplifier circuit",
    "Explain Fourier Transform applications"
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Subject Selection */}
      <Card className="lg:col-span-1">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Brain className="h-5 w-5 text-blue-600" />
            <span>AI Tutor</span>
          </CardTitle>
          <CardDescription>
            Choose your subject area
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {subjects.map((subject) => {
            const Icon = subject.icon;
            return (
              <Button
                key={subject.id}
                variant={activeSubject === subject.id ? "default" : "outline"}
                className="w-full justify-start space-x-2"
                onClick={() => setActiveSubject(subject.id)}
              >
                <div className={`w-4 h-4 rounded ${subject.color} flex items-center justify-center`}>
                  <Icon className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">{subject.name}</span>
              </Button>
            );
          })}
          
          <div className="pt-4 space-y-2">
            <p className="text-sm font-medium text-gray-700">Quick Actions:</p>
            <div className="grid grid-cols-1 gap-2">
              <Button variant="outline" size="sm" className="justify-start text-xs">
                📊 Generate Quiz
              </Button>
              <Button variant="outline" size="sm" className="justify-start text-xs">
                🔧 Circuit Simulator
              </Button>
              <Button variant="outline" size="sm" className="justify-start text-xs">
                📈 Progress Report
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Chat Interface */}
      <Card className="lg:col-span-3">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Circuit Analysis Tutor</CardTitle>
              <CardDescription>
                AI-powered assistance for electrical engineering concepts
              </CardDescription>
            </div>
            <Badge className="bg-green-100 text-green-700">
              🟢 Online
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Chat History */}
          <div className="h-96 overflow-y-auto space-y-4 p-4 bg-gray-50 rounded-lg">
            {chatHistory.map((chat, index) => (
              <div key={index} className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex space-x-3 max-w-3xl ${chat.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className={chat.type === 'ai' ? 'bg-blue-100 text-blue-600' : 'bg-purple-100 text-purple-600'}>
                      {chat.type === 'ai' ? '🤖' : '👤'}
                    </AvatarFallback>
                  </Avatar>
                  <div className={`rounded-lg p-3 ${chat.type === 'user' ? 'bg-blue-600 text-white' : 'bg-white border'}`}>
                    <p className="text-sm whitespace-pre-line">{chat.message}</p>
                    <p className={`text-xs mt-2 ${chat.type === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                      {chat.timestamp}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Prompts */}
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-700">Quick Prompts:</p>
            <div className="flex flex-wrap gap-2">
              {quickPrompts.map((prompt, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="text-xs"
                  onClick={() => setMessage(prompt)}
                >
                  {prompt}
                </Button>
              ))}
            </div>
          </div>

          {/* Message Input */}
          <div className="flex space-x-2">
            <Input
              placeholder="Ask me anything about electrical engineering..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1"
              onKeyPress={(e) => e.key === 'Enter' && console.log('Send message:', message)}
            />
            <Button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              onClick={() => console.log('Send message:', message)}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
