import React, { useState } from "react";
import { PROCESS_STEPS } from "../data";
import { Compass, BookOpen, Cpu, LineChart, Award, ChevronRight } from "lucide-react";

export default function ProcessUI() {
  const [activeStep, setActiveStep] = useState(0);

  const icons = [
    <Compass className="w-6 h-6 text-crown-blue" />,
    <BookOpen className="w-6 h-6 text-crown-purple" />,
    <Cpu className="w-6 h-6 text-emerald-500" />,
    <LineChart className="w-6 h-6 text-amber-500" />,
    <Award className="w-6 h-6 text-crown-red" />
  ];

  return (
    <div className="font-sans">
      
      {/* Dynamic 5 Step Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {PROCESS_STEPS.map((stepItem, idx) => {
          const isActive = idx === activeStep;
          return (
            <div
              key={stepItem.step}
              onClick={() => setActiveStep(idx)}
              className={`group p-6 rounded-2xl border transition-all duration-300 cursor-pointer text-left relative overflow-hidden ${
                isActive
                  ? "bg-gradient-to-br from-slate-900 to-slate-950 border-slate-900 text-white shadow-xl scale-[1.03]"
                  : "bg-white border-slate-100 hover:border-slate-200 hover:bg-slate-50/50 text-slate-800"
              }`}
            >
              
              {/* Highlight Line */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 ${
                isActive 
                  ? "bg-gradient-to-r from-crown-blue to-crown-purple" 
                  : "bg-transparent group-hover:bg-slate-100"
              }`} />

              {/* Number and Icon Header */}
              <div className="flex justify-between items-center mb-4">
                <span className={`font-display text-3xl font-black ${
                  isActive ? "text-white/20" : "text-slate-200 group-hover:text-slate-300"
                }`}>
                  {stepItem.step}
                </span>
                <div className={`p-2.5 rounded-xl ${
                  isActive ? "bg-white/10 text-white" : "bg-slate-50 text-slate-500"
                }`}>
                  {icons[idx]}
                </div>
              </div>

              {/* Step Title */}
              <h4 className={`font-display font-extrabold text-base mb-2 ${
                isActive ? "text-white" : "text-slate-900"
              }`}>
                {stepItem.title}
              </h4>

              {/* Step Description */}
              <p className={`text-xs leading-relaxed ${
                isActive ? "text-slate-300" : "text-slate-500"
              }`}>
                {stepItem.description}
              </p>

              {/* Click instruction */}
              {!isActive && (
                <div className="mt-4 flex items-center gap-1 text-[10px] font-bold text-crown-blue uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Explore Stage</span>
                  <ChevronRight className="w-3.5 h-3.5 animate-pulse" />
                </div>
              )}

            </div>
          );
        })}
      </div>

      {/* Selected Step Detailed Feature Banner */}
      <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl text-left">
          <div className="inline-block px-3 py-1 bg-gradient-to-r from-crown-blue/10 to-crown-purple/10 border border-crown-blue/10 rounded-full text-[10px] font-bold text-crown-purple uppercase tracking-widest">
            Currently Highlighted Stage: {PROCESS_STEPS[activeStep].step}
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
            {PROCESS_STEPS[activeStep].title} Overview
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            During this phase, Crown Technology ensures you achieve deep theoretical familiarity alongside real-world implementation exercises. You are mentored by engineers who audit your progress, providing individual code critiques.
          </p>
        </div>
        
        {/* Stat highlight */}
        <div className="p-5 bg-white rounded-2xl border border-slate-100 text-center shadow-sm w-full md:w-56 shrink-0">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Method Status</div>
          <div className="text-xl font-extrabold text-emerald-600">100% Verified</div>
          <div className="text-[10px] text-slate-500 mt-1">Certified Methodology</div>
        </div>
      </div>

    </div>
  );
}
