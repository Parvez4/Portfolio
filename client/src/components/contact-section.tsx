import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import { Mail, Phone, Linkedin, Github, ExternalLink } from "lucide-react";

type ContactFormData = z.infer<typeof insertContactSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: <Mail className="text-sf-blue text-xl" />,
      label: "Email",
      value: "parshaik@iu.edu",
      href: "mailto:parshaik@iu.edu"
    },
    {
      icon: <Phone className="text-sf-blue text-xl" />,
      label: "Phone",
      value: "(930) 904-4515",
      href: "tel:+19309044515"
    },
    {
      icon: <Linkedin className="text-sf-blue text-xl" />,
      label: "LinkedIn",
      value: "linkedin.com/in/parvez-shaik",
      href: "https://linkedin.com/in/parvez-shaik"
    },
    {
      icon: <Github className="text-sf-blue text-xl" />,
      label: "GitHub",
      value: "github.com/ParvezShaik",
      href: "https://github.com/ParvezShaik"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-sf-dark-gray to-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-sf-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-sf-light-blue/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Open to new opportunities and relocating within the U.S. Let's discuss how I can contribute to your Salesforce initiatives.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info - Enhanced */}
          <div className="lg:col-span-2">
            <div className="glass-effect rounded-2xl p-8 backdrop-blur-md">
              <h3 className="text-3xl font-bold mb-8 text-gradient">Get In Touch</h3>
              
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group flex items-center p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
                    <div className="p-3 bg-sf-gradient rounded-xl group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div className="ml-6">
                      <p className="font-semibold text-lg text-white">{info.label}</p>
                      <a 
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-gray-300 hover:text-sf-blue transition-colors text-lg"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Add Trailhead Link */}
              <div className="group flex items-center p-4 rounded-xl hover:bg-white/5 transition-all duration-300 mt-8">
                <div className="p-3 bg-sf-gradient rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <ExternalLink className="text-white text-xl" />
                </div>
                <div className="ml-6">
                  <p className="font-semibold text-lg text-white">Trailhead</p>
                  <a 
                    href="https://www.salesforce.com/trailblazer/parvez"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-sf-blue transition-colors text-lg"
                  >
                    salesforce.com/trailblazer/parvez
                  </a>
                </div>
              </div>

              {/* Availability Status */}
              <div className="mt-8 p-6 bg-sf-gradient/20 rounded-xl border border-sf-blue/30">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-3"></div>
                  <span className="font-semibold text-white">Available for Opportunities</span>
                </div>
                <p className="text-gray-300">
                  Currently pursuing MS in Computer Science • Open to full-time Salesforce developer roles • Willing to relocate within the U.S.
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Form - Enhanced */}
          <div className="lg:col-span-3">
            <div className="glass-effect rounded-2xl p-8 backdrop-blur-md">
              <h3 className="text-3xl font-bold mb-8 text-gradient">Send a Message</h3>
              
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="block text-lg font-medium mb-3 text-white">
                      Name
                    </Label>
                    <Input
                      id="name"
                      {...form.register("name")}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-sf-blue focus:bg-white/20 h-12 text-lg rounded-xl backdrop-blur-sm"
                      placeholder="Your name"
                    />
                    {form.formState.errors.name && (
                      <p className="text-red-400 text-sm mt-2">{form.formState.errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="block text-lg font-medium mb-3 text-white">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...form.register("email")}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-sf-blue focus:bg-white/20 h-12 text-lg rounded-xl backdrop-blur-sm"
                      placeholder="your.email@example.com"
                    />
                    {form.formState.errors.email && (
                      <p className="text-red-400 text-sm mt-2">{form.formState.errors.email.message}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="message" className="block text-lg font-medium mb-3 text-white">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    rows={6}
                    {...form.register("message")}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-sf-blue focus:bg-white/20 text-lg rounded-xl backdrop-blur-sm"
                    placeholder="Tell me about your project or opportunity..."
                  />
                  {form.formState.errors.message && (
                    <p className="text-red-400 text-sm mt-2">{form.formState.errors.message.message}</p>
                  )}
                </div>
                
                <Button 
                  type="submit" 
                  disabled={contactMutation.isPending}
                  className="w-full bg-sf-gradient text-white py-4 text-lg font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-sf-blue/25"
                >
                  {contactMutation.isPending ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Mail className="mr-2 h-5 w-5" />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
