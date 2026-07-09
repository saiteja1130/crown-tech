import React from "react";
import { REAL_STATS } from "../data";
import { Award, GraduationCap, Briefcase, CalendarCheck } from "lucide-react";

export default function StatsSection() {
  const getIcon = (label: string) => {
    if (label.includes("Course")) return <Award className="w-6 h-6 text-crown-blue" />;
    if (label.includes("Student")) return <GraduationCap className="w-6 h-6 text-crown-purple" />;
    if (label.includes("Placement")) return <Briefcase className="w-6 h-6 text-emerald-500" />;
    return <CalendarCheck className="w-6 h-6 text-crown-red" />;
  };

  return (
    <section className="relative z-20 py-12 bg-white font-sans border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle decorative elements */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {REAL_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-2xl bg-gradient-to-b from-slate-50 to-white border border-slate-100 hover:border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center relative overflow-hidden"
            >
              {/* Corner Glow decoration */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-crown-blue/10 to-crown-purple/10 rounded-bl-full translate-x-4 -translate-y-4 group-hover:scale-125 transition-transform" />
              
              <div className="inline-flex p-3 rounded-xl bg-slate-100/50 mb-3 group-hover:scale-110 transition-transform">
                {getIcon(stat.label)}
              </div>

              <div className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {stat.value}
              </div>

              <div className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mt-1.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
