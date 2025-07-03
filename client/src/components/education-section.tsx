import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

export default function EducationSection() {
  const certifications = [
    "Salesforce Certified Platform Developer I",
    "Salesforce Certified Platform App Builder",
    "Salesforce Certified Administrator"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-sf-dark-gray mb-6">Education & Certifications</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <Card className="bg-sf-light-gray border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-sf-dark-gray mb-6">Education</h3>
              <div className="flex items-start">
                <GraduationCap className="text-sf-blue text-xl mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sf-dark-gray">Master of Science in Computer Science</h4>
                  <p className="text-sf-gray">Indiana University, Bloomington, IN</p>
                  <p className="text-sf-gray text-sm">Aug 2024 – May 2026</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Certifications */}
          <Card className="bg-sf-light-gray border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-sf-dark-gray mb-6">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center">
                    <Award className="text-sf-blue mr-4 h-5 w-5 flex-shrink-0" />
                    <span className="text-sf-gray">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
