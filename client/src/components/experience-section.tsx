import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Salesforce Developer",
      company: "Cognizant Technology Solutions",
      period: "Aug 2023 – Apr 2024",
      location: "Bengaluru, India",
      achievements: [
        "Engineered scalable Apex modules and LWC for global CRM system serving 5,000+ users, improving performance by 35%",
        "Designed custom RESTful APIs and integrated with AWS using OAuth and Named Credentials",
        "Implemented CI/CD pipelines using Gearset, reducing deployment failures by 45%",
        "Migrated 20+ Visualforce pages to LWC, reducing technical debt by 60%",
        "Automated case routing via Flows, cutting SLA breaches by 25%",
        "Led peer code reviews and UAT cycles with U.S.-based stakeholders"
      ]
    },
    {
      title: "Associate Salesforce Developer",
      company: "Cognizant Technology Solutions",
      period: "Aug 2021 – Sep 2022",
      location: "Hyderabad, India",
      achievements: [
        "Built Apex triggers and custom objects for automated lead qualification flows",
        "Created interactive dashboards improving forecasting accuracy by 30%",
        "Developed Aura components for Lightning migration projects",
        "Implemented validation rules and approval processes for complex business logic"
      ]
    },
    {
      title: "Software Development Intern – Salesforce Track",
      company: "Widhya",
      period: "Jan 2021 – July 2021",
      location: "New Delhi, India",
      achievements: [
        "Developed backend logic in Java and Spring Boot, integrated with Salesforce APIs",
        "Enhanced student dashboard using MongoDB and Lightning App Builder, improving data retrieval speed by 30%",
        "Assisted in designing secure user access flows and basic approval automation"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-sf-dark-gray mb-6">Professional Experience</h2>
          <p className="text-xl text-sf-gray max-w-3xl mx-auto">
            Proven track record of delivering scalable Salesforce solutions in enterprise environments
          </p>
        </div>
        
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <Card key={index} className="bg-sf-light-gray border-0">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-sf-dark-gray mb-2">{experience.title}</h3>
                    <p className="text-sf-blue font-medium">{experience.company}</p>
                    <p className="text-sf-gray text-sm">{experience.location}</p>
                  </div>
                  <div className="text-sf-gray flex items-center mt-2 md:mt-0">
                    <Calendar className="mr-2 h-4 w-4" />
                    {experience.period}
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-sf-blue rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span 
                        className="text-sf-gray" 
                        dangerouslySetInnerHTML={{ 
                          __html: achievement.replace(/(\d+%)/g, '<strong class="text-sf-blue">$1</strong>') 
                        }} 
                      />
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
