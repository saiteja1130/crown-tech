import React, { useState } from "react";
import { TESTIMONIALS } from "../data";
import { Star, ChevronLeft, ChevronRight, Quote, Landmark } from "lucide-react";

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const highlight = (text: string) => {
    const parts = text.split("Crown Technology");
    return parts.map((part, i) =>
      i < parts.length - 1 ? (
        <React.Fragment key={i}>
          {part}
          <span className="text-crown-red font-bold not-italic">Crown Technology</span>
        </React.Fragment>
      ) : part
    );
  };

  return (
    <div className="font-sans max-w-4xl mx-auto">
      
      {/* Testimonials Frame */}
      <div className="relative p-6 sm:p-10 bg-slate-50 border border-slate-100 rounded-3xl shadow-sm overflow-hidden text-left">
        
        {/* Background Quotes Watermark */}
        <Quote className="absolute right-8 top-8 w-24 h-24 text-slate-200/50 -z-0 pointer-events-none" />

        <div className="relative z-10 space-y-6">
          
          {/* Star Ratings */}
          <div className="flex items-center gap-1 text-amber-500">
            {[...Array(TESTIMONIALS[activeIdx].rating)].map((_, idx) => (
              <Star key={idx} className="w-5 h-5 fill-amber-500 stroke-none" />
            ))}
          </div>

          {/* Core Quote Content */}
          <p className="text-slate-700 text-sm sm:text-base md:text-lg font-medium leading-relaxed italic">
            "{highlight(TESTIMONIALS[activeIdx].text)}"
          </p>

          {/* User Bio and placed tag */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-200/60">
            
            <div className="flex items-center gap-3">
              <img
                src={TESTIMONIALS[activeIdx].avatar}
                alt={TESTIMONIALS[activeIdx].name}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm shrink-0"
              />
              <div>
                <h4 className="font-display font-bold text-slate-900 text-sm">
                  {TESTIMONIALS[activeIdx].name}
                </h4>
                <p className="text-xs text-slate-500">
                  {TESTIMONIALS[activeIdx].role}
                </p>
              </div>
            </div>

            {/* Placement target */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-700 font-bold text-xs sm:text-sm">
              <Landmark className="w-4 h-4" />
              <span>Placed @ {TESTIMONIALS[activeIdx].company}</span>
            </div>

          </div>

        </div>

      </div>

      {/* Controller Buttons */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={handlePrev}
          className="p-2 rounded-lg bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-600 transition-all focus:outline-none cursor-pointer"
          aria-label="Previous review"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <span className="text-xs font-semibold text-slate-500 font-mono">
          {activeIdx + 1} of {TESTIMONIALS.length} placements
        </span>
        <button
          onClick={handleNext}
          className="p-2 rounded-lg bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-600 transition-all focus:outline-none cursor-pointer"
          aria-label="Next review"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
}
