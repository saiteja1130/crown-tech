import React, { useState } from "react";
import { SERVICES_DATA } from "../data";
import { GraduationCap, Users, Globe, Cpu, CheckCircle2, Star, Sparkles, Phone, ArrowUpRight } from "lucide-react";

interface ServicesViewProps {
  onOpenEnquiry: () => void;
}

export default function ServicesView({ onOpenEnquiry }: ServicesViewProps) {
  const [activeTab, setActiveTab] = useState("training");

  const getIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case "GraduationCap": return <GraduationCap className={className} />;
      case "Users": return <Users className={className} />;
      case "Globe": return <Globe className={className} />;
      default: return <Cpu className={className} />;
    }
  };

  return (
    <div className="font-sans text-slate-800 bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Title */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-crown-blue/10 to-crown-purple/10 border border-crown-blue/10 px-3 py-1 rounded-full text-xs font-bold text-crown-purple uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Corporate Capabilities
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
            Comprehensive Training, Staffing & Outsourcing Services
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Crown Technology delivers reliable expertise. We support ambitious software engineers and assist global enterprises in securing pristine product delivery.
          </p>
        </div>

        {/* Dynamic Division Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-slate-50 p-2 rounded-2xl border border-slate-100 max-w-4xl mx-auto">
          {SERVICES_DATA.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === service.id
                  ? "bg-gradient-to-r from-crown-blue to-crown-purple text-white shadow-md shadow-crown-blue/10"
                  : "text-slate-600 hover:bg-white hover:text-slate-900"
              }`}
            >
              {getIcon(service.iconName, "w-4 h-4")}
              <span>{service.id.charAt(0).toUpperCase() + service.id.slice(1)}</span>
            </button>
          ))}
        </div>

        {/* Selected Division Detailed Explanation Section */}
        {SERVICES_DATA.map((service) => {
          if (service.id !== activeTab) return null;
          return (
            <div
              key={service.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start p-6 sm:p-10 bg-gradient-to-b from-slate-50/50 to-white border border-slate-100 rounded-3xl"
            >
              
              {/* Left Column (Core info) */}
              <div className="lg:col-span-7 space-y-6 text-left">
                
                <div className="flex items-center gap-3">
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-crown-blue/10 to-crown-purple/10 text-crown-purple">
                    {getIcon(service.iconName, "w-6 h-6")}
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                    {service.title}
                  </h2>
                </div>

                <p className="text-slate-800 text-sm font-medium leading-relaxed">
                  {service.summary}
                </p>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.details}
                </p>

                {/* Sub offerings list */}
                <div className="space-y-3 pt-4">
                  <h4 className="font-display font-extrabold text-sm text-slate-900 uppercase tracking-wider">
                    Our Program Capabilities
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {service.offerings.map((item, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start text-xs text-slate-600 leading-relaxed bg-white p-3 rounded-xl border border-slate-100">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Right Column (Benefits and Call to Actions) */}
              <div className="lg:col-span-5 space-y-6 text-left">
                
                <div className="p-6 bg-slate-900 text-white rounded-2xl border border-slate-800 space-y-4">
                  <h3 className="font-display text-base font-bold flex items-center gap-2">
                    <Star className="w-5 h-5 text-amber-400 fill-amber-400 stroke-none" />
                    Key Core Benefits
                  </h3>
                  <ul className="space-y-3.5 text-xs text-slate-300">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start leading-relaxed">
                        <div className="w-5 h-5 rounded-full bg-crown-blue/20 text-crown-blue-light font-mono font-bold flex items-center justify-center shrink-0 text-[10px]">
                          {idx + 1}
                        </div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* High conversion CTA panel */}
                <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm space-y-4">
                  <h4 className="font-display text-sm font-bold text-slate-900">
                    Need Specific Vetted Talent or Custom Consulting?
                  </h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    Request a live technical briefing with our Managing Director to structure your custom offshore developer team or campus recruitment slot.
                  </p>
                  <button
                    onClick={onOpenEnquiry}
                    className="w-full py-3 bg-gradient-to-r from-crown-blue to-crown-purple text-white text-xs font-bold rounded-xl shadow-md hover:opacity-95 transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Initiate Strategic Briefing</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>
          );
        })}

        {/* Sub bottom panel for corporate track record */}
        <div className="p-8 bg-slate-950 text-white rounded-3xl border border-slate-900 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
            <div className="space-y-2">
              <h3 className="font-display text-xl sm:text-2xl font-bold">Deploying Enterprise Sprints Since 2018</h3>
              <p className="text-slate-400 text-xs sm:text-sm max-w-xl leading-relaxed">
                We handle standard agile systems, complete server migrations, scalable REST APIs, automated testing modules, and security audits according to international standards.
              </p>
            </div>
            <a
              href="tel:9573884429"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 shrink-0"
            >
              <Phone className="w-4 h-4 text-crown-blue-light" />
              Call Technical Lead
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
