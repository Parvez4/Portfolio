import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Database, Code, Zap, Globe, Shield } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Salesforce Platform",
      icon: <Cloud className="w-8 h-8 text-blue-600" />,
      color: "bg-blue-50 border-blue-200",
      skills: [
        { name: "Apex", level: 90 },
        { name: "Lightning Web Components", level: 85 },
        { name: "Flow Builder", level: 80 },
        { name: "Custom Objects & Fields", level: 95 },
        { name: "Process Builder", level: 75 },
        { name: "Validation Rules", level: 90 }
      ]
    },
    {
      title: "Web Technologies",
      icon: <Code className="w-8 h-8 text-green-600" />,
      color: "bg-green-50 border-green-200",
      skills: [
        { name: "React", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Node.js", level: 75 },
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Tailwind CSS", level: 80 }
      ]
    },
    {
      title: "Database & Integration",
      icon: <Database className="w-8 h-8 text-purple-600" />,
      color: "bg-purple-50 border-purple-200",
      skills: [
        { name: "PostgreSQL", level: 75 },
        { name: "REST APIs", level: 85 },
        { name: "SOQL/SOSL", level: 90 },
        { name: "Data Loader", level: 80 },
        { name: "Salesforce APIs", level: 85 },
        { name: "Postman", level: 80 }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: <Zap className="w-8 h-8 text-orange-600" />,
      color: "bg-orange-50 border-orange-200",
      skills: [
        { name: "VS Code", level: 90 },
        { name: "Git", level: 85 },
        { name: "CI/CD Pipelines", level: 75 },
        { name: "Salesforce CLI", level: 80 },
        { name: "Jenkins", level: 70 },
        { name: "Docker", level: 65 }
      ]
    }
  ];

  const certifications = [
    {
      name: "Platform Developer I",
      icon: <Shield className="w-5 h-5" />,
      color: "bg-blue-600"
    },
    {
      name: "App Builder",
      icon: <Globe className="w-5 h-5" />,
      color: "bg-green-600"
    },
    {
      name: "Administrator",
      icon: <Shield className="w-5 h-5" />,
      color: "bg-purple-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive expertise in Salesforce development and modern web technologies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className={`p-6 ${category.color} border-2 hover:shadow-lg transition-shadow`}>
              <div className="flex items-center space-x-3 mb-6">
                {category.icon}
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Salesforce Certifications
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <Badge key={index} className={`${cert.color} text-white px-6 py-3 text-base font-medium`}>
                <span className="flex items-center space-x-2">
                  {cert.icon}
                  <span>{cert.name}</span>
                </span>
              </Badge>
            ))}
          </div>
        </div>

        {/* Professional Goals */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-0">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Professional Goal
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              To leverage my Salesforce expertise and full-stack development skills to build innovative, 
              scalable solutions that transform business processes and drive digital transformation for 
              organizations across various industries.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}