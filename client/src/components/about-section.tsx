import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, GraduationCap, Target, Code2 } from "lucide-react";

export default function AboutSection() {
  const stats = [
    { value: "3+", label: "Years Experience", icon: "💼", color: "from-blue-500 to-cyan-500" },
    { value: "5K+", label: "Users Served", icon: "👥", color: "from-purple-500 to-pink-500" },
    { value: "35%", label: "Performance Boost", icon: "📈", color: "from-green-500 to-teal-500" },
    { value: "45%", label: "Fewer Failures", icon: "🎯", color: "from-orange-500 to-red-500" },
  ];

  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6 text-sf-blue" />,
      title: "Current Education",
      content: "MS in Computer Science at Indiana University (2024-2026)"
    },
    {
      icon: <MapPin className="w-6 h-6 text-sf-blue" />,
      title: "Location Flexibility",
      content: "Open to relocate anywhere within the United States"
    },
    {
      icon: <Target className="w-6 h-6 text-sf-blue" />,
      title: "Career Focus",
      content: "Salesforce development, automation, and system integrations"
    },
    {
      icon: <Code2 className="w-6 h-6 text-sf-blue" />,
      title: "Technical Approach",
      content: "Test-driven development with 90%+ code coverage"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-sf-dark-gray mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-sf-gray max-w-3xl mx-auto">
            Passionate about driving customer-centric innovation through secure, modular design and Agile delivery
          </p>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="hover-lift bg-white border-0 shadow-lg overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${stat.color}`}></div>
              <div className="p-6 text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-sf-dark-gray mb-2">{stat.value}</div>
                <div className="text-sf-gray font-medium">{stat.label}</div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Professional Journey */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-sf-dark-gray mb-6">Professional Journey</h3>
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-sf-gray">
                  Currently pursuing a <span className="font-semibold text-sf-blue">Master's in Computer Science at Indiana University</span> while bringing 3+ years of hands-on Salesforce development experience. I specialize in building scalable CRM solutions that serve thousands of users globally.
                </p>
                <p className="text-sf-gray">
                  My expertise spans the full Salesforce ecosystem, from <span className="font-semibold text-sf-blue">custom Apex development to Lightning Web Components</span>, with a strong focus on automation, integrations, and DevOps practices. I've successfully led migrations from legacy systems and implemented CI/CD pipelines that significantly reduced deployment failures.
                </p>
                <p className="text-sf-gray">
                  I combine my Salesforce expertise with <span className="font-semibold text-sf-blue">full-stack development skills</span> in React, Node.js, and cloud technologies, enabling me to build comprehensive solutions that bridge traditional CRM capabilities with modern web applications.
                </p>
              </div>
            </div>

            {/* Key Achievements */}
            <div className="bg-sf-gradient rounded-2xl p-6 text-white">
              <h4 className="text-xl font-bold mb-4">Key Achievements</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">20+</div>
                  <div className="text-sm opacity-90">Pages Migrated</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">60%</div>
                  <div className="text-sm opacity-90">Tech Debt Reduced</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">25%</div>
                  <div className="text-sm opacity-90">SLA Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">90%+</div>
                  <div className="text-sm opacity-90">Test Coverage</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Highlights Cards */}
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="skill-card bg-white p-6 border-0 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-sf-blue/10 rounded-lg">
                    {highlight.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-sf-dark-gray mb-2">{highlight.title}</h4>
                    <p className="text-sf-gray">{highlight.content}</p>
                  </div>
                </div>
              </Card>
            ))}
            
            {/* Certifications Preview */}
            <Card className="bg-sf-light-gray p-6 border-0">
              <h4 className="text-lg font-semibold text-sf-dark-gray mb-4">Salesforce Certifications</h4>
              <div className="flex flex-wrap gap-2">
                {["Platform Developer I", "App Builder", "Administrator"].map((cert, index) => (
                  <Badge key={index} className="bg-sf-blue text-white px-3 py-1">
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
