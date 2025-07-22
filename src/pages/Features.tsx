
import React, { useEffect } from "react";
import { ArrowRight, Bot, Check, Code, MessageSquare, Search, Settings, Shield, User, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Features = () => {
  // Function to create animate-on-scroll effect
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll(".animate-on-scroll");
    animateElements.forEach((el) => observer.observe(el));

    return () => {
      animateElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Feature categories
  const featureCategories = [
    {
      title: "Moderation",
      icon: <Shield className="w-6 h-6 text-botBlue" />,
      description: "Keep your server safe and secure with powerful moderation tools",
      features: [
        "Auto-moderation with customizable filters",
        "Anti-spam protection",
        "Temporary and permanent bans",
        "Warning system with logs",
        "Message purging and chat cleanup",
        "Slowmode and lockdown capabilities",
      ],
    },
    {
      title: "Utility",
      icon: <Settings className="w-6 h-6 text-botBlue" />,
      description: "Useful tools to enhance server management and user experience",
      features: [
        "Custom welcome messages",
        "Role management and reaction roles",
        "Server statistics and analytics",
        "Custom embeds and announcements",
        "Scheduled messages and reminders",
        "User information and server info commands",
      ],
    },
    {
      title: "Games",
      icon: <Bot className="w-6 h-6 text-botBlue" />,
      description: "Fun games to entertain and engage your server members",
      features: [
        "Trivia with various categories",
        "Economy system with currency and shop",
        "Mini-games like rock-paper-scissors",
        "Polls and giveaways",
        "Meme generator",
        "Music player with queue system",
      ],
    },
    {
      title: "Logging",
      icon: <MessageSquare className="w-6 h-6 text-botBlue" />,
      description: "Comprehensive logging to monitor all server activities",
      features: [
        "Message edit and delete logs",
        "Member join and leave tracking",
        "Voice channel activity monitoring",
        "Role and permission changes",
        "Server setting modifications",
        "Customizable log channels",
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Packed with
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-botBlue to-botBlue-dark ml-2">
                Powerful Features
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Discord Bot - All In One combines everything you need to create the perfect Discord community in one easy-to-use bot.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Categories */}
      <section className="py-12 bg-gradient-to-b from-background to-muted/30">
        <div className="container">
          {featureCategories.map((category, index) => (
            <div
              key={category.title}
              className={cn(
                "py-12 animate-on-scroll opacity-0",
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse",
              )}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/2">
                  <div className="glass-card rounded-xl p-8 h-full">
                    <div className="w-14 h-14 rounded-lg bg-botBlue/20 flex items-center justify-center mb-6">
                      {category.icon}
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{category.title}</h2>
                    <p className="text-lg text-muted-foreground mb-8">
                      {category.description}
                    </p>
                    <ul className="space-y-3">
                      {category.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-botBlue mr-3 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="glass-card rounded-xl overflow-hidden animate-float shadow-2xl">
                    <div className="bg-botBlue-dark p-3 flex items-center">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                      </div>
                      <div className="flex-1 text-center text-white text-sm font-medium">
                        {category.title} Commands
                      </div>
                    </div>
                    <div className="p-4 bg-gray-800 text-white">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-botBlue flex items-center justify-center">
                          <Bot className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-botBlue">Discord Bot</span>
                            <span className="text-xs text-gray-400">Today at 12:30 PM</span>
                          </div>
                          <div className="mt-1 text-sm">
                            <div className="bg-gray-700 p-3 rounded-lg">
                              <p className="text-botBlue font-medium">{category.title} - Help</p>
                              <div className="mt-2 space-y-1 text-gray-300">
                                {category.features.slice(0, 3).map((feature, i) => (
                                  <p key={i}>• {feature}</p>
                                ))}
                                <p>• And more...</p>
                              </div>
                              <p className="mt-2 text-gray-400 text-xs">Type /help {category.title.toLowerCase()} for more details</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-botBlue/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-botBlue-dark/10 rounded-full blur-3xl" />
        
        <div className="container relative">
          <div className="max-w-3xl mx-auto glass-card rounded-2xl p-8 md:p-12 text-center animate-on-scroll opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience all features now</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Ready to elevate your Discord server? Add our bot for free and unlock all premium features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-botBlue to-botBlue-dark text-white font-medium shadow-lg shadow-botBlue/25 btn-glow"
              >
                Add to Discord
              </Button>
              <Button
                size="lg" 
                variant="outline"
                className="neon-border"
                asChild
              >
                <Link to="/docs">
                  View Documentation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
