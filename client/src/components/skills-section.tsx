import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, ServerCog, Wrench, Code, Database, Settings, GitBranch, Zap } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: <Cloud className="text-sf-blue text-3xl" />,
      title: "Core Salesforce",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Apex Development", level: 95 },
        { name: "Lightning Web Components", level: 90 },
        { name: "SOQL/SOSL", level: 88 },
        { name: "Aura Framework", level: 85 },
        { name: "Test Classes", level: 92 }
      ]
    },
    {
      icon: <ServerCog className="text-sf-blue text-3xl" />,
      title: "Automation & APIs",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Flows & Process Builder", level: 90 },
        { name: "REST APIs", level: 88 },
        { name: "OAuth 2.0", level: 85 },
        { name: "Platform Events", level: 82 },
        { name: "External Services", level: 80 }
      ]
    },
    {
      icon: <Wrench className="text-sf-blue text-3xl" />,
      title: "DevOps & Tools",
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "Gearset CI/CD", level: 88 },
        { name: "Salesforce CLI", level: 90 },
        { name: "Git & Version Control", level: 85 },
        { name: "Jenkins", level: 78 },
        { name: "Agile/Scrum", level: 92 }
      ]
    }
  ];

  const additionalSkills = [
    { icon: <Code className="w-5 h-5" />, name: "React.js", category: "Frontend" },
    { icon: <Database className="w-5 h-5" />, name: "PostgreSQL", category: "Database" },
    { icon: <Settings className="w-5 h-5" />, name: "Node.js", category: "Backend" },
    { icon: <GitBranch className="w-5 h-5" />, name: "Docker", category: "DevOps" },
    { icon: <Zap className="w-5 h-5" />, name: "AWS Lambda", category: "Cloud" },
    { icon: <Database className="w-5 h-5" />, name: "GraphQL", category: "API" }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-sf-dark-gray mb-6">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-sf-gray max-w-3xl mx-auto">
            Comprehensive expertise across the Salesforce platform and modern development technologies
          </p>
        </div>
        
        {/* Main Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="skill-card bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-8">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-sf-dark-gray ml-4">{category.title}</h3>
                </div>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sf-gray font-medium">{skill.name}</span>
                        <span className="text-sf-blue text-sm font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-sf-dark-gray mb-8">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {additionalSkills.map((skill, index) => (
              <Badge 
                key={index} 
                className="px-6 py-3 bg-white text-sf-dark-gray border border-sf-blue/20 hover:bg-sf-blue hover:text-white transition-all duration-300 hover:scale-105 shadow-md"
              >
                {skill.icon}
                <span className="ml-2 font-medium">{skill.name}</span>
                <span className="ml-2 text-xs opacity-70">• {skill.category}</span>
              </Badge>
            ))}
          </div>
        </div>

        {/* Professional Goals Section */}
        <div className="bg-sf-gradient rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-6">Seeking Salesforce Opportunities</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="space-y-2">
              <h4 className="text-xl font-semibold">Senior Developer Roles</h4>
              <p className="text-gray-200">Lead complex Salesforce implementations and architect scalable solutions</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xl font-semibold">Technical Leadership</h4>
              <p className="text-gray-200">Mentor teams and drive best practices in Salesforce development</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xl font-semibold">Integration Specialist</h4>
              <p className="text-gray-200">Design and implement complex system integrations and data migrations</p>
            </div>
          </div>
          <p className="text-lg text-gray-200">
            Open to relocating anywhere in the United States • Available for immediate opportunities
          </p>
        </div>
      </div>
    </section>
  );
}
