import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Download, ArrowRight, MapPin, GraduationCap, Star } from "lucide-react";
import profileImage from "@assets/LinkedIn (1)_1751560642667.jpg";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const certifications = [
    "Platform Developer I",
    "App Builder", 
    "Administrator"
  ];

  const skills = [
    "Apex", "Lightning Web Components", "React", "Node.js", "PostgreSQL"
  ];

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-16">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-blue-600">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Available for opportunities</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Parvez <span className="text-blue-600">Shaik</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Salesforce Developer & Full-Stack Engineer specializing in scalable CRM solutions and modern web applications
              </p>
            </div>

            {/* Key Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="p-4 bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 transform-gpu">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg shadow-md">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Education</p>
                    <p className="font-semibold text-gray-900">MS Computer Science</p>
                    <p className="text-sm text-gray-500">Indiana University</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 transform-gpu">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg shadow-md">
                    <Star className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Experience</p>
                    <p className="font-semibold text-gray-900">3+ Years</p>
                    <p className="text-sm text-gray-500">Development</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Skills */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900">Core Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900">Certifications</h3>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <Badge key={index} className="bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold group transform-gpu transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-md"
              >
                Get In Touch
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold transform-gpu transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-md border-2"
                onClick={() => window.open('/api/resume', '_blank')}
              >
                <Download className="mr-2 w-5 h-5" />
                Resume
              </Button>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-2 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>Indiana, USA • Open to relocation</span>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative transform-gpu">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full p-1 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <div className="w-full h-full bg-gradient-to-br from-white to-blue-50 rounded-full p-2">
                  <img
                    src={profileImage}
                    alt="Parvez Shaik - Salesforce Developer"
                    className="w-full h-full object-cover rounded-full transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </div>
              
              {/* Floating Achievement Badge */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 transform-gpu border-2 border-blue-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">5K+</div>
                  <div className="text-xs text-gray-600">Users Served</div>
                </div>
              </div>
              
              {/* Floating Years Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 transform-gpu border-2 border-green-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">3+</div>
                  <div className="text-xs text-gray-600">Years Exp</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}