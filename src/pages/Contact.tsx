
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import { Mail, MessageSquare, Send } from "lucide-react";
import { cn } from "@/lib/utils";

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
    agreeTerms: false,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  // Handle select changes
  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      category: value,
    });
  };
  
  // Handle checkbox changes
  const handleCheckboxChange = (checked: boolean) => {
    setFormData({
      ...formData,
      agreeTerms: checked,
    });
  };
  
  // Form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name.trim()) {
      toast({
        title: "Name is required",
        description: "Please enter your name",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.subject.trim()) {
      toast({
        title: "Subject is required",
        description: "Please enter a subject for your message",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.category) {
      toast({
        title: "Category is required",
        description: "Please select a category for your message",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.message.trim()) {
      toast({
        title: "Message is required",
        description: "Please enter your message",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.agreeTerms) {
      toast({
        title: "Terms agreement required",
        description: "Please agree to the terms and conditions",
        variant: "destructive",
      });
      return;
    }
    
    // Submit form
    setIsSubmitting(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Success message
      toast({
        title: "Message sent successfully",
        description: "We'll get back to you as soon as possible",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        category: "",
        message: "",
        agreeTerms: false,
      });
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-botBlue to-botBlue-dark mx-2">
                Touch
              </span>
              With Us
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Have questions or feedback? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 bg-muted/30">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="glass-card rounded-xl p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-botBlue/20 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-botBlue" />
                </div>
                <h3 className="text-xl font-semibold">Discord Support</h3>
                <p className="text-muted-foreground">
                  Join our official Discord support server for the fastest response and community help.
                </p>
                <Button className="w-full">Join Support Server</Button>
              </div>
              
              <div className="glass-card rounded-xl p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-botBlue/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-botBlue" />
                </div>
                <h3 className="text-xl font-semibold">Email Support</h3>
                <p className="text-muted-foreground">
                  For general inquiries or business proposals, email us directly.
                </p>
                <a href="mailto:support@discordbot.com" className="text-botBlue hover:underline inline-block">
                  support@discordbot.com
                </a>
              </div>
            </div>
            
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="glass-card rounded-xl p-6 md:p-8">
                <h2 className="text-2xl font-semibold mb-6">Contact Form</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  {/* Subject & Category */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select
                        value={formData.category}
                        onValueChange={handleSelectChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="feature">Feature Request</SelectItem>
                          <SelectItem value="bug">Bug Report</SelectItem>
                          <SelectItem value="business">Business Inquiry</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Please provide as much detail as possible..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  
                  {/* Terms Checkbox */}
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.agreeTerms}
                      onCheckedChange={handleCheckboxChange}
                    />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="terms"
                        className="text-sm text-muted-foreground cursor-pointer"
                      >
                        I agree to the{" "}
                        <a href="/terms" className="text-botBlue hover:underline">
                          terms of service
                        </a>{" "}
                        and{" "}
                        <a href="/privacy" className="text-botBlue hover:underline">
                          privacy policy
                        </a>
                        .
                      </label>
                    </div>
                  </div>
                  
                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-botBlue to-botBlue-dark text-white shadow-lg btn-glow"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs & Other Ways to Connect */}
      <section className="py-16">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">Other Ways to Connect</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card rounded-xl p-6 text-center hover:shadow-lg transition-shadow flex flex-col">
              <div className="mb-4 text-4xl flex justify-center">
                <div className="w-16 h-16 rounded-full bg-botBlue/20 flex items-center justify-center">
                  <svg className="h-8 w-8 text-botBlue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Discord</h3>
              <p className="text-muted-foreground mb-4 flex-grow">
                Join our Discord server for community support and updates
              </p>
              <Button variant="outline" className="neon-border">Join Server</Button>
            </div>
            
            <div className="glass-card rounded-xl p-6 text-center hover:shadow-lg transition-shadow flex flex-col">
              <div className="mb-4 text-4xl flex justify-center">
                <div className="w-16 h-16 rounded-full bg-botBlue/20 flex items-center justify-center">
                  <svg className="h-8 w-8 text-botBlue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">GitHub</h3>
              <p className="text-muted-foreground mb-4 flex-grow">
                Report issues or contribute to our open-source projects
              </p>
              <Button variant="outline" className="neon-border">Visit GitHub</Button>
            </div>
            
            <div className="glass-card rounded-xl p-6 text-center hover:shadow-lg transition-shadow flex flex-col">
              <div className="mb-4 text-4xl flex justify-center">
                <div className="w-16 h-16 rounded-full bg-botBlue/20 flex items-center justify-center">
                  <svg className="h-8 w-8 text-botBlue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Twitter</h3>
              <p className="text-muted-foreground mb-4 flex-grow">
                Follow us for updates, tips, and community highlights
              </p>
              <Button variant="outline" className="neon-border">Follow Us</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
