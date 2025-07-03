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
import { Mail, Phone, Linkedin, Github } from "lucide-react";

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
    <section id="contact" className="py-20 bg-sf-dark-gray text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Open to new opportunities and relocating within the U.S. Let's discuss how I can contribute to your Salesforce initiatives.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Get In Touch</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center">
                  {info.icon}
                  <div className="ml-4">
                    <p className="font-medium">{info.label}</p>
                    <a 
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Send a Message</h3>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </Label>
                <Input
                  id="name"
                  {...form.register("name")}
                  className="bg-gray-700 border-gray-600 text-white focus:border-sf-blue"
                  placeholder="Your name"
                />
                {form.formState.errors.name && (
                  <p className="text-red-400 text-sm mt-1">{form.formState.errors.name.message}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...form.register("email")}
                  className="bg-gray-700 border-gray-600 text-white focus:border-sf-blue"
                  placeholder="your.email@example.com"
                />
                {form.formState.errors.email && (
                  <p className="text-red-400 text-sm mt-1">{form.formState.errors.email.message}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </Label>
                <Textarea
                  id="message"
                  rows={4}
                  {...form.register("message")}
                  className="bg-gray-700 border-gray-600 text-white focus:border-sf-blue"
                  placeholder="Tell me about your project or opportunity..."
                />
                {form.formState.errors.message && (
                  <p className="text-red-400 text-sm mt-1">{form.formState.errors.message.message}</p>
                )}
              </div>
              
              <Button 
                type="submit" 
                disabled={contactMutation.isPending}
                className="w-full bg-sf-blue text-white py-3 hover:bg-sf-dark-blue"
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
