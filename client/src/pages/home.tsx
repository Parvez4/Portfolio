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
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-2">Parvez Shaik</h3>
              <p className="text-gray-400">Salesforce Developer & Full-Stack Engineer</p>
            </div>
            
            <div className="flex space-x-6">
              {[
                { href: "https://linkedin.com/in/parvez-shaik", icon: "fab fa-linkedin", label: "LinkedIn" },
                { href: "https://github.com/ParvezShaik", icon: "fab fa-github", label: "GitHub" },
                { href: "mailto:parshaik@iu.edu", icon: "fas fa-envelope", label: "Email" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-gray-400 hover:text-blue-400 transition-all duration-300 p-3 rounded-lg hover:bg-gray-800 hover:shadow-lg transform hover:-translate-y-1"
                  title={social.label}
                >
                  <i className={`${social.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2025 Parvez Shaik. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
