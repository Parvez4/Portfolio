import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Cloud, RefreshCw, Bot, Users, TrendingUp, Shield, Clock, 
  Database, BarChart3, Server, Container, Github, ExternalLink 
} from "lucide-react";

export default function ProjectsSection() {
  const salesforceProjects = [
    {
      icon: <Cloud className="text-white text-3xl" />,
      title: "Global CRM Optimization",
      description: "Engineered scalable Apex modules and Lightning Web Components for a global CRM system serving 5,000+ users, achieving 35% performance improvement.",
      technologies: ["Apex", "LWC", "SOQL", "Custom Metadata"],
      gradient: "from-blue-600 to-purple-600",
      metrics: [
        { icon: <Users className="h-4 w-4" />, label: "5,000+ Users", value: "5K+" },
        { icon: <TrendingUp className="h-4 w-4" />, label: "Performance Boost", value: "35%" }
      ]
    },
    {
      icon: <RefreshCw className="text-white text-3xl" />,
      title: "AWS Integration Platform",
      description: "Designed custom RESTful APIs and integrated Salesforce with AWS using Named Credentials and OAuth 2.0 for secure real-time data synchronization.",
      technologies: ["REST API", "OAuth 2.0", "AWS", "Named Credentials"],
      gradient: "from-purple-600 to-pink-600",
      metrics: [
        { icon: <Shield className="h-4 w-4" />, label: "Secure Integration", value: "100%" },
        { icon: <Clock className="h-4 w-4" />, label: "Real-time Sync", value: "Live" }
      ]
    },
    {
      icon: <Bot className="text-white text-3xl" />,
      title: "Automation Framework",
      description: "Automated case routing, escalations, and dynamic emails using Flows and Platform Events, reducing SLA breaches by 25%.",
      technologies: ["Flows", "Platform Events", "Process Builder", "Approval Processes"],
      gradient: "from-green-600 to-teal-600",
      metrics: [
        { icon: <TrendingUp className="h-4 w-4" />, label: "SLA Improvement", value: "25%" },
        { icon: <Clock className="h-4 w-4" />, label: "Faster Processing", value: "40%" }
      ]
    }
  ];

  const personalProjects = [
    {
      icon: <BarChart3 className="text-white text-3xl" />,
      title: "Real-Time Analytics Dashboard",
      description: "Designed and implemented a real-time analytics dashboard with React.js, Recharts, GraphQL, Python, and Django that reduced load times by 40% and enabled 30% faster decision-making.",
      technologies: ["React.js", "Recharts", "GraphQL", "Python", "Django", "AWS Lambda"],
      gradient: "from-orange-500 to-red-500",
      github: "https://github.com/ParvezShaik/analytics-dashboard",
      metrics: [
        { icon: <Clock className="h-4 w-4" />, label: "Load Time Reduction", value: "40%" },
        { icon: <TrendingUp className="h-4 w-4" />, label: "Decision Speed", value: "30%" }
      ]
    },
    {
      icon: <Container className="text-white text-3xl" />,
      title: "CI/CD Pipeline Automation",
      description: "Engineered an automated CI/CD pipeline using Jenkins, Kubernetes, Terraform, and AWS that cut deployment times by 30% and increased release frequency by 50%.",
      technologies: ["Jenkins", "Kubernetes", "Terraform", "AWS S3", "Slack"],
      gradient: "from-cyan-500 to-blue-500",
      github: "https://github.com/ParvezShaik/cicd-automation",
      metrics: [
        { icon: <Clock className="h-4 w-4" />, label: "Deployment Time", value: "-30%" },
        { icon: <TrendingUp className="h-4 w-4" />, label: "Release Frequency", value: "+50%" }
      ]
    },
    {
      icon: <Server className="text-white text-3xl" />,
      title: "E-Commerce Microservices",
      description: "Developed a scalable e-commerce microservices platform using Node.js, Express, PostgreSQL, and Docker on AWS EC2, improving API response times by 35%.",
      technologies: ["Node.js", "Express", "PostgreSQL", "Docker", "AWS EC2"],
      gradient: "from-violet-500 to-purple-500",
      github: "https://github.com/ParvezShaik/ecommerce-microservices",
      metrics: [
        { icon: <Clock className="h-4 w-4" />, label: "API Response", value: "+35%" },
        { icon: <TrendingUp className="h-4 w-4" />, label: "Success Rate", value: "+25%" }
      ]
    }
  ];

  interface ProjectCardProps {
    project: any;
    index: number;
    isPersonal?: boolean;
  }

  const ProjectCard = ({ project, index, isPersonal = false }: ProjectCardProps) => (
    <Card className="project-card bg-white border-0 shadow-lg overflow-hidden">
      <CardContent className="p-0">
        {/* Project Header with Gradient */}
        <div className={`bg-gradient-to-r ${project.gradient} p-6 text-white`}>
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
              {project.icon}
            </div>
            {isPersonal && project.github && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open(project.github, '_blank')}
                className="text-white hover:bg-white/20"
              >
                <Github className="w-4 h-4" />
              </Button>
            )}
          </div>
          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
          
          {/* Metrics in Header */}
          <div className="flex gap-4">
            {project.metrics.map((metric, metricIndex) => (
              <div key={metricIndex} className="flex items-center text-white/90">
                {metric.icon}
                <span className="ml-2 text-sm font-medium">{metric.value}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Project Content */}
        <div className="p-6">
          <p className="text-gray-600 mb-6 leading-relaxed">
            {project.description}
          </p>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, techIndex) => (
              <Badge 
                key={techIndex} 
                className="bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
          
          {/* Metrics Details */}
          <div className="space-y-3">
            {project.metrics.map((metric, metricIndex) => (
              <div key={metricIndex} className="flex items-center justify-between text-sm">
                <div className="flex items-center text-sf-gray">
                  {metric.icon}
                  <span className="ml-2">{metric.label}</span>
                </div>
                <span className="font-semibold text-sf-blue">{metric.value}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-sf-dark-gray mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-sf-gray max-w-3xl mx-auto">
            Showcase of technical solutions and innovations across CRM platforms and full-stack development
          </p>
        </div>
        
        {/* Professional Projects */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-sf-dark-gray mb-8 text-center">
            <span className="sf-blue">⚡</span> Professional Solutions
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {salesforceProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Personal Projects */}
        <div>
          <h3 className="text-3xl font-bold text-sf-dark-gray mb-8 text-center">
            <span className="sf-blue">🚀</span> Personal Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} isPersonal={true} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-lg">
            <h3 className="text-3xl font-bold mb-4 text-white">Ready to Build Something Amazing?</h3>
            <p className="text-xl mb-6 text-white/90">
              Let's discuss how I can help transform your business processes with innovative Salesforce solutions
            </p>
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-3 text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-md"
            >
              Start a Conversation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
