
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Check, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Home = () => {
  const animationsApplied = useRef(false);

  // Function to create animate-on-scroll effect
  useEffect(() => {
    // Skip animation setup if it's already been applied
    if (animationsApplied.current) return;
    
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

    // Delay slightly to ensure DOM elements are ready
    setTimeout(() => {
      const animateElements = document.querySelectorAll(".animate-on-scroll");
      animateElements.forEach((el) => observer.observe(el));
      animationsApplied.current = true;
    }, 100);

    return () => {
      if (animationsApplied.current) {
        const animateElements = document.querySelectorAll(".animate-on-scroll");
        animateElements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 overflow-hidden relative">
        {/* Background Elements */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-botBlue/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-botBlue-dark/10 rounded-full blur-3xl" />
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-botBlue to-botBlue-dark">
                All-In-One
              </span>{" "}
              Discord Bot
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              A powerful, feature-rich bot designed to enhance your Discord server with moderation tools, utilities, games, logging, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-botBlue to-botBlue-dark text-white font-medium shadow-lg shadow-botBlue/25 btn-glow"
              >
                Invite Bot
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
            
            {/* Discord Mock Preview */}
            <div className="mt-16 glass-card rounded-xl overflow-hidden shadow-2xl mx-auto max-w-4xl animate-float">
              <div className="bg-botBlue-dark p-3 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 text-center text-white text-sm font-medium">
                  Discord Bot - All In One
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
                      Hello! I'm your new All-In-One bot. Type <span className="bg-gray-700 px-1 rounded">/help</span> to see what I can do!
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-500"></div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">User</span>
                      <span className="text-xs text-gray-400">Today at 12:31 PM</span>
                    </div>
                    <div className="mt-1 text-sm">
                      /help
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Highlights Section */}
      <section className="py-20 relative bg-gradient-to-b from-background to-muted/30">
        <div className="container">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Supercharge Your Discord Server
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From advanced moderation to fun games, our bot provides everything you need in one package
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="glass-card rounded-xl p-6 animate-on-scroll opacity-0" style={{animationDelay: "0.1s"}}>
              <div className="w-12 h-12 rounded-lg bg-botBlue/20 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-botBlue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced Moderation</h3>
              <p className="text-muted-foreground mb-4">
                Keep your server safe with powerful moderation tools including auto-mod, anti-spam, and customizable warning systems.
              </p>
              <Link to="/features" className="text-botBlue font-medium flex items-center hover:underline">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            {/* Feature Card 2 */}
            <div className="glass-card rounded-xl p-6 animate-on-scroll opacity-0" style={{animationDelay: "0.2s"}}>
              <div className="w-12 h-12 rounded-lg bg-botBlue/20 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-botBlue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Engagement</h3>
              <p className="text-muted-foreground mb-4">
                Boost community interaction with polls, giveaways, reaction roles, and an economy system that keeps members engaged.
              </p>
              <Link to="/features" className="text-botBlue font-medium flex items-center hover:underline">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            {/* Feature Card 3 */}
            <div className="glass-card rounded-xl p-6 animate-on-scroll opacity-0" style={{animationDelay: "0.3s"}}>
              <div className="w-12 h-12 rounded-lg bg-botBlue/20 flex items-center justify-center mb-4">
                <Bot className="w-6 h-6 text-botBlue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Utility & Customization</h3>
              <p className="text-muted-foreground mb-4">
                Powerful commands for server management, custom embeds, auto-roles, welcome messages, and much more.
              </p>
              <Link to="/features" className="text-botBlue font-medium flex items-center hover:underline">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Statistics Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-on-scroll opacity-0" style={{animationDelay: "0.1s"}}>
              <div className="text-4xl font-bold text-botBlue mb-2">10K+</div>
              <p className="text-muted-foreground">Servers</p>
            </div>
            <div className="animate-on-scroll opacity-0" style={{animationDelay: "0.2s"}}>
              <div className="text-4xl font-bold text-botBlue mb-2">2M+</div>
              <p className="text-muted-foreground">Users Reached</p>
            </div>
            <div className="animate-on-scroll opacity-0" style={{animationDelay: "0.3s"}}>
              <div className="text-4xl font-bold text-botBlue mb-2">50+</div>
              <p className="text-muted-foreground">Commands</p>
            </div>
            <div className="animate-on-scroll opacity-0" style={{animationDelay: "0.4s"}}>
              <div className="text-4xl font-bold text-botBlue mb-2">99.9%</div>
              <p className="text-muted-foreground">Uptime</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-botBlue/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-botBlue-dark/10 rounded-full blur-3xl" />
        
        <div className="container relative">
          <div className="max-w-3xl mx-auto glass-card rounded-2xl p-8 md:p-12 text-center animate-on-scroll opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to transform your server?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Invite Discord Bot - All In One to your server today and unlock all premium features for free.
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
              >
                Join Support Server
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
