import React, { useState, useEffect } from "react";
import { MessageCircle, ArrowUp, Send, Sparkles } from "lucide-react";

interface FloatingActionsProps {
  onOpenEnquiry: () => void;
}

export default function FloatingActions({ onOpenEnquiry }: FloatingActionsProps) {
  const [isVisible, setIsVisible] = useState(false);

  // Show buttons when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Middle Right - Floating Vertical "Quick Enquiry" Banner from reference design */}
      <div className="fixed top-1/3 right-0 z-50 hidden sm:block">
        <button
          onClick={onOpenEnquiry}
          className="bg-crown-red text-white py-4 px-2 text-xs font-bold [writing-mode:vertical-lr] rounded-l-xl shadow-xl uppercase tracking-widest cursor-pointer hover:pr-6 active:scale-95 transition-all flex items-center gap-2 focus:outline-none border-l border-y border-white/20"
        >
          <Sparkles className="w-3.5 h-3.5 shrink-0 transform -rotate-90 text-white animate-pulse" />
          Quick Enquiry
        </button>
      </div>

      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3.5 font-sans">

        {/* Scroll to Top Trigger */}
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="p-3 bg-white hover:bg-slate-50 text-slate-700 hover:text-crown-blue border border-slate-200 rounded-full shadow-lg hover:shadow-xl transition-all scale-95 hover:scale-105 cursor-pointer flex items-center justify-center focus:outline-none"
            title="Scroll to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Sticky Enquiry Badge Trigger */}
        <button
          onClick={onOpenEnquiry}
          className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-crown-blue to-crown-purple text-white font-bold text-xs sm:text-sm rounded-full shadow-lg shadow-crown-blue/20 hover:scale-105 active:scale-95 transition-all cursor-pointer group"
        >
          <Sparkles className="w-4 h-4 text-white animate-pulse" />
          <span>Quick Enquiry</span>
        </button>

        {/* Floating WhatsApp Support Action (Bottom Right) */}
        <a
          href="https://wa.me/919573884429"
          target="_blank"
          rel="noopener noreferrer"
          referrerPolicy="no-referrer"
          className="relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-xl shadow-emerald-500/10 hover:scale-105 active:scale-95 transition-all cursor-pointer group"
          title="Chat on WhatsApp"
        >
          {/* Ring radar animation */}
          <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping opacity-75" />
          <MessageCircle className="relative z-10 w-7 h-7" />

          {/* Floating tooltip */}
          <span className="absolute right-16 top-3 bg-slate-900 text-white text-[11px] font-bold py-1 px-3.5 rounded-lg whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-slate-800">
            Chat With Us (Active)
          </span>
        </a>

      </div>
    </>
  );
}
