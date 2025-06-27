
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Clock, Users, Star, Play } from "lucide-react";

export const CourseGrid = () => {
  const courses = [
    {
      title: "Circuit Analysis Fundamentals",
      university: "MIT",
      instructor: "Prof. James Anderson",
      level: "Beginner",
      duration: "12 weeks",
      students: "2,347",
      rating: 4.8,
      progress: 65,
      description: "Master the fundamentals of electrical circuits including Ohm's law, Kirchhoff's laws, and AC/DC analysis.",
      topics: ["Ohm's Law", "Kirchhoff's Laws", "AC/DC Analysis", "Thevenin Equivalent"]
    },
    {
      title: "Digital Signal Processing",
      university: "Stanford",
      instructor: "Dr. Sarah Chen",
      level: "Advanced",
      duration: "16 weeks",
      students: "1,829",
      rating: 4.9,
      progress: 30,
      description: "Deep dive into digital signal processing techniques, FFT, filters, and real-world applications.",
      topics: ["FFT", "Digital Filters", "Z-Transform", "Signal Reconstruction"]
    },
    {
      title: "Power Electronics",
      university: "ETH Zurich",
      instructor: "Prof. Michael Weber",
      level: "Intermediate",
      duration: "14 weeks",
      students: "1,456",
      rating: 4.7,
      progress: 0,
      description: "Comprehensive coverage of power electronic circuits, converters, and motor drives.",
      topics: ["DC-DC Converters", "Inverters", "Motor Drives", "Power Quality"]
    },
    {
      title: "Electromagnetic Fields",
      university: "NTUA",
      instructor: "Prof. Dimitris Kostas",
      level: "Intermediate",
      duration: "10 weeks",
      students: "987",
      rating: 4.6,
      progress: 85,
      description: "Understanding electromagnetic field theory and its applications in electrical engineering.",
      topics: ["Maxwell's Equations", "Wave Propagation", "Antennas", "Transmission Lines"]
    },
    {
      title: "Control Systems",
      university: "Caltech",
      instructor: "Dr. Lisa Rodriguez",
      level: "Advanced",
      duration: "12 weeks",
      students: "1,234",
      rating: 4.8,
      progress: 45,
      description: "Modern control theory including state-space methods, optimal control, and robust design.",
      topics: ["State-Space", "PID Control", "Root Locus", "Frequency Response"]
    },
    {
      title: "VLSI Design",
      university: "UC Berkeley",
      instructor: "Prof. Kevin Zhang",
      level: "Advanced",
      duration: "18 weeks",
      students: "756",
      rating: 4.9,
      progress: 20,
      description: "Complete VLSI design flow from concept to silicon including layout and verification.",
      topics: ["CMOS Design", "Layout Techniques", "Timing Analysis", "Power Design"]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-green-100 text-green-700";
      case "Intermediate": return "bg-yellow-100 text-yellow-700";
      case "Advanced": return "bg-red-100 text-red-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {courses.map((course, index) => (
        <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
          <CardHeader className="space-y-3">
            <div className="flex justify-between items-start">
              <Badge variant="secondary" className="text-xs font-medium">
                {course.university}
              </Badge>
              <Badge className={`text-xs ${getLevelColor(course.level)}`}>
                {course.level}
              </Badge>
            </div>
            <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              {course.title}
            </CardTitle>
            <CardDescription className="text-sm text-gray-600">
              {course.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-sm text-gray-600">
              <p className="font-medium">{course.instructor}</p>
            </div>
            
            {course.progress > 0 && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-medium text-blue-600">{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="h-2" />
              </div>
            )}

            <div className="flex justify-between items-center text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>{course.students}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-current text-yellow-400" />
                <span>{course.rating}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-1">
              {course.topics.slice(0, 3).map((topic, topicIndex) => (
                <Badge key={topicIndex} variant="outline" className="text-xs">
                  {topic}
                </Badge>
              ))}
              {course.topics.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{course.topics.length - 3} more
                </Badge>
              )}
            </div>

            <Button 
              className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300"
              variant={course.progress > 0 ? "default" : "outline"}
            >
              {course.progress > 0 ? (
                <>
                  Continue Learning
                  <Play className="ml-2 h-4 w-4" />
                </>
              ) : (
                "Start Course"
              )}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
