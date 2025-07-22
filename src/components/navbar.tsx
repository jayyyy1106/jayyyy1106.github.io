
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/features", label: "Features" },
    { to: "/docs", label: "Documentation" },
    { to: "/setup", label: "Setup Guide" },
    { to: "/support", label: "Support" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-botBlue to-botBlue-dark animate-pulse-glow"></div>
          <span className="font-poppins font-bold text-xl">
            Discord Bot
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
          <Button
            size="sm"
            className="bg-gradient-to-r from-botBlue to-botBlue-dark text-white shadow-lg btn-glow"
          >
            Invite Bot
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-x-0 top-[60px] glass-card p-4 md:hidden animate-fade-in z-50">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-medium text-foreground/80 hover:text-foreground transition-colors p-2"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                className="bg-gradient-to-r from-botBlue to-botBlue-dark text-white shadow-lg w-full mt-2"
              >
                Invite Bot
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
