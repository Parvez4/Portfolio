import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, RefreshCw, Bot, Users, TrendingUp, Shield, Clock } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      icon: <Cloud className="text-sf-blue text-2xl" />,
      title: "Global CRM Optimization",
      description: "Engineered scalable Apex modules and Lightning Web Components for a global CRM system serving 5,000+ users, achieving 35% performance improvement.",
      technologies: ["Apex", "LWC", "SOQL"],
      metrics: [
        { icon: <Users className="h-4 w-4" />, label: "5,000+ Users" },
        { icon: <TrendingUp className="h-4 w-4" />, label: "35% Performance Boost" }
      ]
    },
    {
      icon: <RefreshCw className="text-sf-blue text-2xl" />,
      title: "AWS Integration Platform",
      description: "Designed custom RESTful APIs and integrated Salesforce with AWS using Named Credentials and OAuth 2.0 for secure real-time data synchronization.",
      technologies: ["REST API", "OAuth 2.0", "AWS"],
      metrics: [
        { icon: <Shield className="h-4 w-4" />, label: "Secure Integration" },
        { icon: <Clock className="h-4 w-4" />, label: "Real-time Sync" }
      ]
    },
    {
      icon: <Bot className="text-sf-blue text-2xl" />,
      title: "Automation Framework",
      description: "Automated case routing, escalations, and dynamic emails using Flows and Platform Events, reducing SLA breaches by 25%.",
      technologies: ["Flows", "Platform Events", "Automation"],
      metrics: [
        { icon: <TrendingUp className="h-4 w-4" />, label: "25% SLA Improvement" },
        { icon: <Clock className="h-4 w-4" />, label: "40% Faster Processing" }
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-sf-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-sf-dark-gray mb-6">Featured Projects</h2>
          <p className="text-xl text-sf-gray max-w-3xl mx-auto">
            Showcase of technical solutions and innovations across Salesforce and full-stack development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white shadow-lg border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {project.icon}
                  <h3 className="text-xl font-semibold text-sf-dark-gray ml-3">{project.title}</h3>
                </div>
                <p className="text-sf-gray mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-sf-blue/10 text-sf-blue">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="space-y-2">
                  {project.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-sf-gray text-sm flex items-center">
                      {metric.icon}
                      <span className="ml-2">{metric.label}</span>
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
