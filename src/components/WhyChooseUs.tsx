import React from "react";
import { WHY_CHOOSE_US } from "../data";
import { ShieldAlert, BookOpen, HardDrive, UserCheck, Briefcase, RefreshCw, Layers } from "lucide-react";

export default function WhyChooseUs() {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <BookOpen className="w-5 h-5 text-crown-blue" />;
      case 1: return <HardDrive className="w-5 h-5 text-crown-purple" />;
      case 2: return <UserCheck className="w-5 h-5 text-emerald-500" />;
      case 3: return <UserCheck className="w-5 h-5 text-amber-500" />;
      case 4: return <Briefcase className="w-5 h-5 text-crown-red" />;
      default: return <RefreshCw className="w-5 h-5 text-slate-500" />;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-sans">
      {WHY_CHOOSE_US.map((item, idx) => (
        <div
          key={idx}
          className="group p-6 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden text-left"
        >
          {/* Subtle colored side accent */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-crown-blue to-crown-purple opacity-0 group-hover:opacity-100 transition-opacity" />

          {/* Icon frame */}
          <div className="inline-flex p-3 rounded-xl bg-slate-50 mb-4 group-hover:bg-gradient-to-br group-hover:from-crown-blue/10 group-hover:to-crown-purple/10 group-hover:scale-110 transition-all">
            {getIcon(idx)}
          </div>

          <h4 className="font-display text-base font-bold text-slate-900 mb-2">
            {item.title}
          </h4>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            {item.description}
          </p>

        </div>
      ))}
    </div>
  );
}
