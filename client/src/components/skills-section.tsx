import { Card, CardContent } from "@/components/ui/card";
import { Cloud, ServerCog, Wrench } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: <Cloud className="text-sf-blue text-2xl" />,
      title: "Core Salesforce",
      skills: [
        "Apex (Triggers, Batch, Queueable)",
        "Lightning Web Components",
        "Aura Framework",
        "SOQL/SOSL",
        "Test Classes (90%+ coverage)"
      ]
    },
    {
      icon: <ServerCog className="text-sf-blue text-2xl" />,
      title: "Automation & APIs",
      skills: [
        "Flows & Process Builder",
        "REST APIs",
        "OAuth 2.0",
        "Platform Events",
        "External Services"
      ]
    },
    {
      icon: <Wrench className="text-sf-blue text-2xl" />,
      title: "DevOps & Tools",
      skills: [
        "Gearset CI/CD",
        "Salesforce CLI",
        "Git & Version Control",
        "Jenkins",
        "Agile/Scrum"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-sf-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-sf-dark-gray mb-6">Technical Skills</h2>
          <p className="text-xl text-sf-gray max-w-3xl mx-auto">
            Comprehensive expertise across the Salesforce platform and modern development technologies
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-white shadow-lg border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  {category.icon}
                  <h3 className="text-xl font-semibold text-sf-dark-gray ml-3">{category.title}</h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-sf-blue rounded-full mr-3"></div>
                      <span className="text-sf-gray">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
