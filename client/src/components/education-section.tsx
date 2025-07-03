import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, BookOpen, Calendar, MapPin, Trophy, Star } from "lucide-react";

export default function EducationSection() {
  const education = {
    degree: "Master of Science in Computer Science",
    university: "Indiana University, Bloomington",
    period: "Aug 2024 – May 2026",
    location: "Indiana, USA",
    gpa: "In Progress",
    focus: "Distributed Systems, Machine Learning, Software Engineering"
  };

  const certifications = [
    {
      name: "Salesforce Certified Platform Developer I",
      issuer: "Salesforce",
      year: "2023",
      level: "Professional",
      icon: <Trophy className="w-5 h-5" />
    },
    {
      name: "Salesforce Certified Platform App Builder",
      issuer: "Salesforce",
      year: "2022",
      level: "Professional",
      icon: <Award className="w-5 h-5" />
    },
    {
      name: "Salesforce Certified Administrator",
      issuer: "Salesforce",
      year: "2021",
      level: "Associate",
      icon: <Star className="w-5 h-5" />
    }
  ];

  const achievements = [
    "Dean's List Recognition (Expected 2025)",
    "Graduate Research Assistant Position", 
    "Advanced Coursework in Cloud Computing",
    "Won 2 back-to-back Luddy Hackathons for building AI agents from scratch"
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-green-100 rounded-full">
              <GraduationCap className="w-8 h-8 text-green-600" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education & Certifications</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Continuous learning and professional development in technology and Salesforce ecosystem
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Education */}
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg border-0">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-lg mr-4">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Current Education</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">{education.degree}</h4>
                  <p className="text-blue-600 font-medium text-lg">{education.university}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    {education.period}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {education.location}
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Areas of Focus</h5>
                  <p className="text-gray-600">{education.focus}</p>
                </div>
                
                <div>
                  <h5 className="font-semibold text-gray-900 mb-3">Academic Achievements</h5>
                  <div className="space-y-2">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Certifications */}
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 shadow-lg border-0">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-lg mr-4">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Professional Certifications</h3>
              </div>
              
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <Card key={index} className="bg-white shadow-sm border-0 hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3">
                          <div className="p-2 bg-blue-100 rounded-lg">
                            {cert.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">{cert.name}</h4>
                            <p className="text-blue-600 font-medium">{cert.issuer}</p>
                            <p className="text-gray-500 text-sm">Earned in {cert.year}</p>
                          </div>
                        </div>
                        <Badge className={`${
                          cert.level === 'Professional' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                        }`}>
                          {cert.level}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-white rounded-lg">
                <div className="flex items-center text-green-600 mb-2">
                  <Trophy className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Certification Journey</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Continuously expanding Salesforce expertise through hands-on experience and certification achievements.
                  Currently preparing for Platform Developer II certification.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Timeline */}
        <Card className="bg-gradient-to-r from-gray-50 to-blue-50 shadow-lg border-0">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Learning & Development Timeline</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2021</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Foundation</h4>
                <p className="text-gray-600 text-sm">Started Salesforce journey with Administrator certification and internship</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2022</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Advancement</h4>
                <p className="text-gray-600 text-sm">Earned App Builder certification and gained professional development experience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">2024</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Mastery</h4>
                <p className="text-gray-600 text-sm">Platform Developer I certification while pursuing Master's degree</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}