import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ExperienceSection from "@/components/experience-section";
import ProjectsSection from "@/components/projects-section";
import EducationSection from "@/components/education-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <footer className="bg-gradient-to-r from-gray-900 via-sf-dark-gray to-black text-white py-12 border-t border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand & Quote */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 bg-sf-gradient bg-clip-text text-transparent">
                Parvez Shaik
              </h3>
              <p className="text-gray-300 mb-4 max-w-md">
                Transforming business processes into powerful Salesforce solutions—one automation at a time.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-400">Available for new opportunities</span>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
              <div className="space-y-2">
                {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="block text-gray-400 hover:text-sf-blue transition-colors duration-200"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-700/50">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">© 2025 Parvez Shaik. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              {[
                { href: "https://linkedin.com/in/parvez-shaik", icon: "fab fa-linkedin", label: "LinkedIn" },
                { href: "https://github.com/ParvezShaik", icon: "fab fa-github", label: "GitHub" },
                { href: "https://www.salesforce.com/trailblazer/parvez", icon: "fas fa-cloud", label: "Trailhead" },
                { href: "mailto:parshaik@iu.edu", icon: "fas fa-envelope", label: "Email" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-gray-400 hover:text-sf-blue transition-all duration-300 hover:scale-110 p-2 rounded-lg hover:bg-sf-blue/10"
                  title={social.label}
                >
                  <i className={`${social.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
