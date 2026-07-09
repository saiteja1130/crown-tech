import React from "react";
import { Users, Award, ShieldCheck, Target, TrendingUp, History, Sparkles, Phone, ArrowRight } from "lucide-react";

interface AboutViewProps {
  onOpenEnquiry: () => void;
}

export default function AboutView({ onOpenEnquiry }: AboutViewProps) {
  const coreValues = [
    {
      icon: <Target className="w-6 h-6 text-crown-blue" />,
      title: "Direct Placement Sourcing",
      description: "We don't just provide standard training templates. We utilize our established IT staffing division to map pre-vetted graduates directly into vacant corporate roles."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-crown-purple" />,
      title: "ISO 9001:2015 Compliance",
      description: "Our training procedures, lab facilities, and syllabus update cycles are certified by international quality standards, assuring world-class learning structures."
    },
    {
      icon: <Users className="w-6 h-6 text-emerald-500" />,
      title: "Industry Veteran Mentorship",
      description: "Every single program is directed and taught by senior engineers and active architects with extensive tenures inside leading global corporations."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-crown-red" />,
      title: "Evolving Tech Architectures",
      description: "We constantly update our training modules quarterly to integrate Generative AI, cloud scaling, offensive cyber security, and automated testing methods."
    }
  ];

  const milestones = [
    { value: "15+", label: "Professional Courses" },
    { value: "50,000+", label: "Engineers Trained" },
    { value: "10,000+", label: "Placed Candidates" },
    { value: "100+", label: "Global Campus Drives" }
  ];

  const leaders = [
    {
      name: "Srinivas Rao K.",
      role: "Founder & Director of Staffing",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300",
      bio: "An IT staffing veteran with over 18 years of executive recruitment experience across global banking MNCs and modern technology enterprises."
    },
    {
      name: "Sneha Sen",
      role: "Lead Technical Recruiter",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300",
      bio: "Expert HR strategist specializing in pipeline orchestration, resume optimization, and high-volume placement drives for domestic developers."
    },
    {
      name: "Ravi Teja P.",
      role: "Head of Training & Curriculum",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300",
      bio: "Former Principal Architect who leads our software labs, specializing in Python scripting, full-stack systems engineering, and AI pipelines."
    }
  ];

  return (
    <div className="font-sans text-slate-800">
      
      {/* 1. Header Banner */}
      <section className="relative bg-slate-950 py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-6">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse" />
            ISO 9001:2015 Certified IT Partner
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight max-w-3xl">
            Innovate, Integrate, and Inspire with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-crown-blue-light via-crown-purple to-crown-red">
              Crown Technology
            </span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
            We operate as a dynamic dual-force: powering students with world-class, job-oriented technical education, and fueling Fortune 500 enterprises with pre-vetted, high-retention software engineering talent.
          </p>
        </div>
      </section>

      {/* 2. Milestones Grid */}
      <section className="bg-slate-50 border-y border-slate-100 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {milestones.map((m, idx) => (
              <div key={idx} className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-crown-blue to-crown-purple">
                  {m.value}
                </div>
                <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest mt-1.5 font-bold">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Our Identity Section */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-crown-blue/10 to-crown-purple/10 text-crown-purple border border-crown-purple/10">
              Our Professional Mission
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
              Bridging the Gap Between Industry Needs & Technical Skills
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Founded in India's booming technological landscape, Crown Technology realized that conventional classroom programs teach code blocks, not system design. Our core philosophy centers on hands-on practical execution—building APIs, configuring CI/CD pipelines, tuning relational queries, and creating automated testing structures.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              As an ISO 9001:2015 organization, we operate alongside our robust IT Staffing and Offshore Development divisions. This means our training program syllabus is continuously refreshed based on what corporations are actively searching for in our recruiting pipelines.
            </p>
            
            <div className="flex gap-4 pt-2">
              <button
                onClick={onOpenEnquiry}
                className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
              >
                Get Free Counselling
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="tel:9573884429"
                className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs rounded-xl border border-slate-200 transition-all flex items-center gap-1.5"
              >
                <Phone className="w-4 h-4 text-crown-purple" />
                9573884429
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-crown-blue to-crown-purple rounded-3xl blur-xl opacity-20" />
            <div className="relative rounded-2xl overflow-hidden border border-slate-100 shadow-xl aspect-video bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                alt="Crown Training Lab"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 4. Core Values Bento Grid */}
      <section className="bg-slate-50 py-16 sm:py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-left md:text-center space-y-3 max-w-2xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-crown-blue/10 to-crown-purple/10 text-crown-blue border border-crown-blue/10">
              Our Pillars
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
              The Principles Guarding Our Growth
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              We stand firm on delivering honest metrics, practical labs, direct pipeline opportunities, and strict international quality alignments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreValues.map((val, idx) => (
              <div key={idx} className="p-6 sm:p-8 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row items-start gap-4 hover:shadow-md transition-shadow text-left">
                <div className="p-3 bg-slate-50 rounded-xl shrink-0">
                  {val.icon}
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-display text-base sm:text-lg font-bold text-slate-900">
                    {val.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Team / Leadership */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-left md:text-center space-y-3 max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-crown-blue/10 to-crown-purple/10 text-crown-purple border border-crown-purple/10">
            Expert Leadership
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
            Meet the Directors & Architects
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm">
            Our leadership team has placed thousands of graduates and established engineering workflows for global enterprise centers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-lg transition-all p-6 text-left space-y-4">
              <div className="w-16 h-16 rounded-2xl overflow-hidden bg-slate-100 shrink-0 border border-slate-100 shadow-inner">
                <img
                  src={leader.avatar}
                  alt={leader.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-display text-base sm:text-lg font-bold text-slate-900">
                  {leader.name}
                </h3>
                <span className="text-xs text-crown-purple font-semibold uppercase tracking-wider font-mono">
                  {leader.role}
                </span>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2.5">
                  {leader.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* 6. Professional Call-to-Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white p-8 sm:p-12 md:p-16 overflow-hidden text-left shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-crown-blue/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-crown-purple/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-1.5 text-xs text-crown-blue-light font-bold uppercase tracking-widest font-mono">
              <Sparkles className="w-4 h-4 animate-spin-slow" />
              Placement Assured Roadmaps
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
              Ready to Accelerate Your <br className="hidden sm:block" />
              IT Career with Crown?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
              Connect with our senior technical advisors today for a personalized career assessment. We'll map your profile to our active client requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={onOpenEnquiry}
                className="px-8 py-3.5 bg-gradient-to-r from-crown-blue via-crown-blue-light to-crown-purple text-white font-bold text-sm rounded-xl shadow-lg hover:scale-[1.02] active:scale-95 transition-all text-center cursor-pointer"
              >
                Apply for Consultation
              </button>
              <a
                href="https://wa.me/919573884429"
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className="px-8 py-3.5 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm rounded-xl backdrop-blur-sm transition-all text-center flex items-center justify-center gap-1.5"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
