import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "home" },
    { label: "About", href: "about" },
    { label: "Skills", href: "skills" },
    { label: "Experience", href: "experience" },
    { label: "Projects", href: "projects" },
    { label: "Education", href: "education" },
    { label: "Contact", href: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg border-b border-gray-200" style={{zIndex: 9999}}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="flex justify-center items-center h-16">
            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex items-center space-x-8 relative">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 relative z-10",
                    activeSection === item.href 
                      ? "bg-blue-600 text-white shadow-lg scale-105 border border-blue-500" 
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50 hover:shadow-md hover:-translate-y-0.5"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden absolute right-6">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg relative z-10"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200",
                    activeSection === item.href 
                      ? "bg-blue-600 text-white" 
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}