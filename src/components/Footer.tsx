import React from "react";
import { Phone, MapPin, Mail, MessageSquare, ExternalLink, ShieldCheck, Heart } from "lucide-react";

interface FooterProps {
  setCurrentPage: (page: string) => void;
  onOpenEnquiry: () => void;
}

export default function Footer({ setCurrentPage, onOpenEnquiry }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handlePageChange = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <button
              onClick={() => handlePageChange("home")}
              className="flex items-center focus:outline-none"
            >
              <img
                src="/assets/images/crown.jpeg"
                alt="Crown Technology"
                className="h-12 w-auto object-contain "
              />
            </button>
            <p className="text-slate-400 text-sm leading-relaxed mt-4">
              Crown Technology is a premium software training institute, staffing firm, and offshore development outsourcing center. We transform careers and scale corporate operations.
            </p>
            <div className="flex items-center gap-2 text-xs text-white/80 bg-slate-900/50 p-2.5 rounded-lg border border-slate-800 w-fit">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>ISO 9001:2015 Certified Organization</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
              Explore Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handlePageChange("courses")} className="hover:text-white hover:underline transition-colors text-left">
                  Software Training Programs
                </button>
              </li>
              <li>
                <button onClick={() => handlePageChange("services")} className="hover:text-white hover:underline transition-colors text-left">
                  IT Placement & Staffing
                </button>
              </li>
              <li>
                <button onClick={() => handlePageChange("services")} className="hover:text-white hover:underline transition-colors text-left">
                  Offshore Outsourcing Models
                </button>
              </li>
              <li>
                <button onClick={() => handlePageChange("services")} className="hover:text-white hover:underline transition-colors text-left">
                  Custom Development Sprints
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: High Conversion Pages */}
          <div className="space-y-4">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
              Career Roadmap
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handlePageChange("courses")} className="hover:text-white hover:underline transition-colors text-left">
                  All 15+ Job-Oriented Programs
                </button>
              </li>
              <li>
                <button onClick={() => handlePageChange("blogs")} className="hover:text-white hover:underline transition-colors text-left">
                  Recruiter Advice Blogs
                </button>
              </li>
              <li>
                <button onClick={() => handlePageChange("about")} className="hover:text-white hover:underline transition-colors text-left">
                  About Crown Technology
                </button>
              </li>
              <li>
                <button onClick={onOpenEnquiry} className="hover:text-white hover:underline text-crown-blue-light font-semibold transition-colors text-left">
                  Request Placement Counselling
                </button>
              </li>
              <li>
                <button onClick={() => handlePageChange("contact")} className="hover:text-white hover:underline transition-colors text-left">
                  Visit Campus & Lab Centers
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Reach Out (Exact Details) */}
          <div className="space-y-4">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
              Registered HQ
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-crown-purple shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <strong>Crown Technology</strong><br />
                  Near AAA Mall, Beside Gurudwara Temple,<br />
                  Alrich Purandev Building,<br />
                  2nd Floor, Office 203
                </span>
              </li>
              <li className="flex items-center gap-2.5 font-mono">
                <Phone className="w-4 h-4 text-crown-blue" />
                <a href="tel:9573884429" className="hover:text-white hover:underline">
                  9573884429
                </a>
              </li>
              <li className="flex items-center gap-2.5 font-mono">
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <a
                  href="https://wa.me/919573884429"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="hover:text-white hover:underline"
                >
                  WhatsApp Support
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© {currentYear} Crown Technology. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button onClick={() => handlePageChange("contact")} className="hover:text-white transition-colors">
              Locate Us
            </button>
            <span className="text-slate-800">•</span>
            <button onClick={onOpenEnquiry} className="hover:text-white transition-colors">
              Privacy Policy
            </button>
            <span className="text-slate-800">•</span>
            <button onClick={onOpenEnquiry} className="hover:text-white transition-colors">
              Terms & Certifications
            </button>
          </div>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-crown-red fill-crown-red animate-pulse" /> for tech transformation
          </p>
        </div>

      </div>
    </footer>
  );
}
