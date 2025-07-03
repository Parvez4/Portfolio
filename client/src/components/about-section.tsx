import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, GraduationCap, Target, Code2, TrendingUp, Users, CheckCircle, Award } from "lucide-react";

export default function AboutSection() {
  const stats = [
    { 
      value: "3+", 
      label: "Years Experience", 
      icon: <Award className="w-6 h-6" />,
      color: "text-blue-600" 
    },
    { 
      value: "5K+", 
      label: "Users Served", 
      icon: <Users className="w-6 h-6" />,
      color: "text-green-600" 
    },
    { 
      value: "35%", 
      label: "Performance Boost", 
      icon: <TrendingUp className="w-6 h-6" />,
      color: "text-purple-600" 
    },
    { 
      value: "90%+", 
      label: "Test Coverage", 
      icon: <CheckCircle className="w-6 h-6" />,
      color: "text-emerald-600" 
    },
  ];

  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6 text-blue-600" />,
      title: "Current Education",
      content: "MS in Computer Science at Indiana University (2024-2026)"
    },
    {
      icon: <MapPin className="w-6 h-6 text-green-600" />,
      title: "Location Flexibility",
      content: "Open to relocate anywhere within the United States"
    },
    {
      icon: <Target className="w-6 h-6 text-purple-600" />,
      title: "Career Focus",
      content: "Salesforce development, automation, and system integrations"
    },
    {
      icon: <Code2 className="w-6 h-6 text-orange-600" />,
      title: "Technical Approach",
      content: "Test-driven development with comprehensive code coverage"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about driving customer-centric innovation through secure, modular design and Agile delivery
          </p>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
              <div className={`${stat.color} mb-3 flex justify-center`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Professional Journey */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Journey</h3>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Currently pursuing a <span className="font-semibold text-blue-600">Master's in Computer Science at Indiana University</span> while bringing 3+ years of hands-on Salesforce development experience. I specialize in building scalable CRM solutions that serve thousands of users globally.
              </p>
              
              <p>
                My expertise spans the full Salesforce ecosystem, from <span className="font-semibold text-blue-600">custom Apex development to Lightning Web Components</span>, with a strong focus on automation, integrations, and DevOps practices. I've successfully led migrations from legacy systems and implemented CI/CD pipelines.
              </p>
              
              <p>
                I combine my Salesforce expertise with <span className="font-semibold text-blue-600">full-stack development skills</span> in React, Node.js, and cloud technologies, enabling me to build comprehensive solutions that bridge traditional CRM capabilities with modern web applications.
              </p>
            </div>

            {/* Key Achievements */}
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-0">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Key Achievements</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">20+</div>
                  <div className="text-sm text-gray-600">Pages Migrated</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">60%</div>
                  <div className="text-sm text-gray-600">Tech Debt Reduced</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">25%</div>
                  <div className="text-sm text-gray-600">SLA Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">45%</div>
                  <div className="text-sm text-gray-600">Fewer Failures</div>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Highlights Cards */}
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-6 bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    {highlight.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{highlight.title}</h4>
                    <p className="text-gray-600">{highlight.content}</p>
                  </div>
                </div>
              </Card>
            ))}
            
            {/* Certifications */}
            <Card className="p-6 bg-gradient-to-br from-slate-50 to-gray-50 border-0">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Salesforce Certifications</h4>
              <div className="flex flex-wrap gap-2">
                {["Platform Developer I", "App Builder", "Administrator"].map((cert, index) => (
                  <Badge key={index} className="bg-blue-600 text-white px-3 py-1">
                    {cert}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}