import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Sparkles, Compass, CheckCircle } from "lucide-react";

interface HeroSliderProps {
  onExploreCourses: () => void;
  onEnquireNow: () => void;
}

export default function HeroSlider({ onExploreCourses, onEnquireNow }: HeroSliderProps) {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1600",
      tagline: "LEADING IT TRAINING ACADEMY",
      title: "Build Your Tech Career with Crown Technology",
      description: "Acquire the exact hands-on experience, real-time enterprise architecture skills, and certification preparation preferred by top software corporations.",
    },
    {
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1600",
      tagline: "GLOBAL STRATEGIC STAFFING",
      title: "Vetted Tech Talent & Strategic Recruitment Sprints",
      description: "Our corporate staffing division bridges elite software developers, database architects, and QA professionals with leading Fortune 500 enterprises.",
    },
    {
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1600",
      tagline: "ENTERPRISE OUTSOURCING & SOLUTIONS",
      title: "Sovereign Offshore Custom Software Engineering",
      description: "From lightweight React applications to massive enterprise-grade microservice backends, we design, code, and secure high-availability systems.",
    }
  ];

  const [activeIdx, setActiveIdx] = useState(0);

  // Auto-scroll logic
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative h-[90vh] sm:h-[90vh] min-h-[600px] w-full overflow-hidden bg-slate-950 font-sans">

      {/* Background Slides */}
      {slides.map((slide, idx) => {
        const isActive = idx === activeIdx;
        return (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              }`}
          >
            {/* Dark background overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/10 z-10" />

            <img
              src={slide.image}
              alt={slide.title}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover object-center transform scale-105 transition-transform duration-10000 ease-out"
            />

            {/* Inner Content overlay */}
            <div className="absolute inset-0 z-20 flex items-end sm:items-center pb-16 sm:pb-0">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl lg:max-w-3xl space-y-4 sm:space-y-6">

                  {/* Tagline */}
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-crown-blue/20 to-crown-purple/20 border border-crown-blue/30 px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-bold text-white/90 uppercase tracking-widest animate-pulse max-w-[90vw] flex-wrap">
                    <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-crown-purple flex-shrink-0" />
                    <span className="leading-tight">{slide.tagline}</span>
                  </div>

                  {/* Core Heading */}
                  <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
                    {slide.title.includes("Crown Technology") ? (
                      <>
                        Build Your Tech Career with <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-crown-blue-light to-crown-purple">
                          Crown Technology
                        </span>
                      </>
                    ) : slide.title.includes("Vetted Tech Talent") ? (
                      <>
                        Vetted Tech Talent & <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-crown-blue-light to-crown-purple">
                          Strategic Recruitment
                        </span>
                      </>
                    ) : slide.title.includes("Sovereign Offshore") ? (
                      <>
                        Sovereign Offshore <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-crown-blue-light to-crown-purple">
                          Custom Software Engineering
                        </span>
                      </>
                    ) : (
                      slide.title
                    )}
                  </h1>

                  {/* Corporate Subtext */}
                  <div className="flex flex-row items-center gap-2 sm:gap-3 text-xs sm:text-base font-semibold text-crown-purple uppercase tracking-widest">
                    <span>Innovate</span>
                    <span className="text-slate-700">|</span>
                    <span>Integrate</span>
                    <span className="text-slate-700">|</span>
                    <span>Inspire</span>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-base lg:text-lg leading-relaxed max-w-xl">
                    {slide.description}
                  </p>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                    <button
                      onClick={onExploreCourses}
                      className="px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-crown-blue via-crown-blue-light to-crown-purple text-white font-bold rounded-xl shadow-lg shadow-crown-blue/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                      <Compass className="w-4 h-4 sm:w-5 sm:h-5" />
                      Explore Job-Oriented Courses
                    </button>
                    <button
                      onClick={onEnquireNow}
                      className="px-6 sm:px-8 py-3.5 sm:py-4 bg-slate-900/80 backdrop-blur-md border border-slate-700 hover:border-slate-400 text-white font-bold rounded-xl hover:bg-slate-900 transition-all cursor-pointer flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-crown-purple animate-pulse" />
                      Enquire / Apply Now
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Control Arrows — hidden on mobile, visible on sm+ */}
      <button
        onClick={handlePrev}
        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-xl bg-slate-900/60 backdrop-blur-sm hover:bg-slate-900 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition-all focus:outline-none items-center justify-center"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={handleNext}
        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-xl bg-slate-900/60 backdrop-blur-sm hover:bg-slate-900 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition-all focus:outline-none items-center justify-center"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dynamic Slide Indicator Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIdx(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${idx === activeIdx ? "w-8 bg-crown-blue" : "w-2.5 bg-slate-700 hover:bg-slate-500"
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

    </div>
  );
}
