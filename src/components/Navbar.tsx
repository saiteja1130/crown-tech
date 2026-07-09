import React, { useState, useEffect } from "react";
import { Menu, X, Phone, GraduationCap, Building2, Sparkles } from "lucide-react";

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  onOpenEnquiry: () => void;
}

export default function Navbar({ currentPage, setCurrentPage, onOpenEnquiry }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "courses", label: "Programs" },
    { id: "services", label: "Services" },
    { id: "blogs", label: "Articles" },
    { id: "contact", label: "Contact Us" }
  ];

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
        ? "bg-white/80 backdrop-blur-md shadow-md border-b border-slate-100 py-3"
        : "bg-white/40 backdrop-blur-sm py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Brand Logo with Custom Styling */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center focus:outline-none"
          >
            <img
              src="/assets/images/crown-nav.jpeg"
              alt="Crown Technology"
              className="h-14 w-36 md:h-14 w-24 object-cover"
            />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all ${isActive
                    ? "text-crown-blue bg-slate-50"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-1.5 left-4 right-4 h-0.5 bg-gradient-to-r from-crown-blue to-crown-purple rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Call-to-Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:9573884429"
              className="flex items-center gap-2 text-slate-600 hover:text-crown-blue text-sm font-semibold transition-colors font-mono"
            >
              <Phone className="w-4 h-4 text-crown-purple" />
              9573884429
            </a>
            <button
              onClick={onOpenEnquiry}
              className="relative px-5 py-2.5 bg-gradient-to-r from-crown-blue via-crown-blue-light to-crown-purple text-white text-sm font-bold rounded-xl shadow-lg shadow-crown-blue/25 hover:shadow-xl hover:scale-[1.02] transition-all cursor-pointer overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 animate-spin-slow" />
                Enquire Now
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-crown-purple to-crown-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={onOpenEnquiry}
              className="px-3 py-1.5 bg-gradient-to-r from-crown-blue to-crown-purple text-white text-xs font-bold rounded-lg shadow-md"
            >
              Enquire
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl py-4 px-4 space-y-2 animate-fade-in">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all ${isActive
                  ? "bg-slate-50 text-crown-blue border-l-4 border-crown-blue"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <a
              href="tel:9573884429"
              className="flex items-center gap-2 px-4 text-slate-600 text-sm font-semibold font-mono"
            >
              <Phone className="w-4 h-4 text-crown-purple" />
              +91 9573884429
            </a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full py-3 bg-gradient-to-r from-crown-blue to-crown-purple text-white text-center text-sm font-bold rounded-xl shadow-md"
            >
              Request Free Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
