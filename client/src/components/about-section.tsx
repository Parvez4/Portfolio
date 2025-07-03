import { Card } from "@/components/ui/card";

export default function AboutSection() {
  const stats = [
    { value: "3+", label: "Years Experience" },
    { value: "5K+", label: "Users Served" },
    { value: "35%", label: "Performance Boost" },
    { value: "45%", label: "Fewer Failures" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-sf-dark-gray mb-6">About Me</h2>
          <p className="text-xl text-sf-gray max-w-3xl mx-auto">
            Passionate about driving customer-centric innovation through secure, modular design and Agile delivery
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-sf-dark-gray mb-6">Professional Journey</h3>
            <p className="text-sf-gray mb-6 leading-relaxed">
              Currently pursuing a Master's in Computer Science at Indiana University while bringing 3+ years of hands-on Salesforce development experience. I specialize in building scalable CRM solutions that serve thousands of users globally.
            </p>
            <p className="text-sf-gray mb-6 leading-relaxed">
              My expertise spans the full Salesforce ecosystem, from custom Apex development to Lightning Web Components, with a strong focus on automation, integrations, and DevOps practices. I've successfully led migrations from legacy systems and implemented CI/CD pipelines that significantly reduced deployment failures.
            </p>
            <p className="text-sf-gray leading-relaxed">
              Open to relocate within the U.S. and excited to bring my technical skills and passion for innovation to new challenges in the Salesforce ecosystem.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-sf-light-gray p-6 text-center border-0">
                <div className="text-3xl font-bold text-sf-blue mb-2">{stat.value}</div>
                <div className="text-sf-gray">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
