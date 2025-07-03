import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Mail } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

export default function HeroSection() {
  const handleResumeDownload = () => {
    window.open("/api/resume", "_blank");
  };

  return (
    <section id="home" className="pt-16 pb-20 bg-gradient-to-br from-sf-light-gray to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* Professional Avatar */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-sf-blue to-sf-light-blue flex items-center justify-center shadow-xl">
            <span className="text-white text-4xl font-bold">PS</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-sf-dark-gray mb-6">
            Parvez Shaik
          </h1>
          <p className="text-xl md:text-2xl text-sf-gray mb-8 max-w-3xl mx-auto">
            Certified Salesforce Developer with 3+ years of experience building scalable, testable solutions using Apex, LWC, Flows, and REST APIs
          </p>
          
          {/* Certifications Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Badge variant="secondary" className="bg-white shadow-lg px-6 py-3 border border-sf-blue/10">
              <i className="fas fa-certificate text-sf-blue mr-2"></i>
              <span className="font-semibold text-sf-dark-gray">Platform Developer I</span>
            </Badge>
            <Badge variant="secondary" className="bg-white shadow-lg px-6 py-3 border border-sf-blue/10">
              <i className="fas fa-certificate text-sf-blue mr-2"></i>
              <span className="font-semibold text-sf-dark-gray">App Builder</span>
            </Badge>
            <Badge variant="secondary" className="bg-white shadow-lg px-6 py-3 border border-sf-blue/10">
              <i className="fas fa-certificate text-sf-blue mr-2"></i>
              <span className="font-semibold text-sf-dark-gray">Administrator</span>
            </Badge>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-sf-blue text-white px-8 py-3 hover:bg-sf-dark-blue shadow-lg"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button 
              variant="outline"
              onClick={handleResumeDownload}
              className="bg-white text-sf-blue px-8 py-3 border-sf-blue/20 hover:bg-sf-light-gray shadow-lg"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-8">
            <a 
              href="https://linkedin.com/in/parvez-shaik" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sf-gray hover:text-sf-blue transition-colors duration-200"
            >
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a 
              href="https://github.com/ParvezShaik" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sf-gray hover:text-sf-blue transition-colors duration-200"
            >
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a 
              href="mailto:parshaik@iu.edu"
              className="text-sf-gray hover:text-sf-blue transition-colors duration-200"
            >
              <i className="fas fa-envelope text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
