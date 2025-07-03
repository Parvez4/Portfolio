import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Award, TrendingUp } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Salesforce Developer",
      company: "Cognizant Technology Solutions",
      period: "Aug 2023 – Apr 2024",
      location: "Bengaluru, India",
      type: "Full-time",
      achievements: [
        "Engineered scalable Apex modules and LWC for global CRM system serving 5,000+ users, improving performance by 35%",
        "Designed custom RESTful APIs and integrated with AWS using OAuth and Named Credentials",
        "Implemented CI/CD pipelines using Gearset, reducing deployment failures by 45%",
        "Migrated 20+ Visualforce pages to LWC, reducing technical debt by 60%",
        "Automated case routing via Flows, cutting SLA breaches by 25%",
        "Led peer code reviews and UAT cycles with U.S.-based stakeholders"
      ],
      skills: ["Apex", "LWC", "AWS Integration", "CI/CD", "Flow Builder"]
    },
    {
      title: "Associate Salesforce Developer",
      company: "Cognizant Technology Solutions",
      period: "Aug 2021 – Sep 2022",
      location: "Hyderabad, India",
      type: "Full-time",
      achievements: [
        "Built Apex triggers and custom objects for automated lead qualification flows",
        "Created interactive dashboards improving forecasting accuracy by 30%",
        "Developed Aura components for Lightning migration projects",
        "Implemented validation rules and approval processes for complex business logic"
      ],
      skills: ["Apex Triggers", "Dashboards", "Aura Components", "Process Builder"]
    },
    {
      title: "Software Development Intern – Salesforce Track",
      company: "Widhya",
      period: "Jan 2021 – July 2021",
      location: "New Delhi, India",
      type: "Internship",
      achievements: [
        "Developed backend logic in Java and Spring Boot, integrated with Salesforce APIs",
        "Enhanced student dashboard using MongoDB and Lightning App Builder, improving data retrieval speed by 30%",
        "Assisted in designing secure user access flows and basic approval automation"
      ],
      skills: ["Java", "Spring Boot", "MongoDB", "Lightning App Builder"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-blue-100 rounded-full">
              <Award className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proven track record of delivering scalable Salesforce solutions in enterprise environments
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card key={index} className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <h3 className="text-2xl font-bold text-gray-900 mr-3">{experience.title}</h3>
                      <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                        {experience.type}
                      </Badge>
                    </div>
                    <p className="text-xl text-blue-600 font-semibold mb-2">{experience.company}</p>
                    <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {experience.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {experience.location}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <TrendingUp className="w-12 h-12 text-green-500 opacity-20" />
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Achievements</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span 
                          className="text-gray-700 leading-relaxed" 
                          dangerouslySetInnerHTML={{ 
                            __html: achievement.replace(/(\d+%)/g, '<strong class="text-blue-600">$1</strong>') 
                          }} 
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}