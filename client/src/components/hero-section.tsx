import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

export default function HeroSection() {
  const handleResumeDownload = () => {
    window.open("/api/resume", "_blank");
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-sf-hero-gradient">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sf-blue/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-sf-light-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sf-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-1.5s' }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Professional Avatar with Glass Effect */}
          <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-sf-gradient flex items-center justify-center shadow-2xl glass-effect animate-float">
            <span className="text-white text-5xl font-bold">PS</span>
          </div>
          
          {/* Main Heading with Gradient Text */}
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 animate-slide-up">
            <span className="text-white">Hello, I'm</span>
            <br />
            <span className="text-gradient">Parvez Shaik</span>
          </h1>
          
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl text-gray-200 mb-4 max-w-4xl mx-auto leading-relaxed">
              Transforming business processes into powerful Salesforce solutions—one automation at a time.
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Certified Salesforce Developer with 3+ years of experience building scalable, testable solutions using Apex, LWC, Flows, and REST APIs
            </p>
          </div>
          
          {/* Certifications with Enhanced Design */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            {[
              { icon: "fas fa-certificate", text: "Platform Developer I" },
              { icon: "fas fa-certificate", text: "App Builder" },
              { icon: "fas fa-certificate", text: "Administrator" }
            ].map((cert, index) => (
              <Badge key={index} className="glass-effect px-6 py-3 text-white border-white/20 hover-lift">
                <i className={`${cert.icon} text-sf-accent mr-2`}></i>
                <span className="font-semibold">{cert.text}</span>
              </Badge>
            ))}
          </div>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              onClick={() => scrollToSection("projects")}
              className="bg-sf-gradient text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-sf-blue/25 hover:scale-105 transition-all duration-300"
            >
              View My Work
            </Button>
            <Button 
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="glass-effect text-white px-10 py-4 text-lg font-semibold rounded-xl border-white/30 hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </div>
          
          {/* Enhanced Social Links */}
          <div className="flex justify-center space-x-8 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            {[
              { 
                href: "https://linkedin.com/in/parvez-shaik", 
                icon: <Linkedin className="w-6 h-6" />, 
                label: "LinkedIn" 
              },
              { 
                href: "https://github.com/ParvezShaik", 
                icon: <Github className="w-6 h-6" />, 
                label: "GitHub" 
              },
              { 
                href: "https://www.salesforce.com/trailblazer/parvez", 
                icon: <ExternalLink className="w-6 h-6" />, 
                label: "Trailhead" 
              },
              { 
                href: "mailto:parshaik@iu.edu", 
                icon: <Mail className="w-6 h-6" />, 
                label: "Email" 
              }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex flex-col items-center space-y-2 text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <div className="p-3 rounded-full glass-effect group-hover:bg-sf-blue/20 transition-all duration-300">
                  {social.icon}
                </div>
                <span className="text-sm font-medium opacity-70 group-hover:opacity-100">{social.label}</span>
              </a>
            ))}
          </div>
          
          {/* Download Resume Button */}
          <div className="mt-12 animate-slide-up" style={{ animationDelay: '1s' }}>
            <Button 
              variant="ghost"
              onClick={handleResumeDownload}
              className="text-gray-300 hover:text-white px-6 py-2 rounded-lg border border-gray-500/30 hover:border-white/50 transition-all duration-300"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
