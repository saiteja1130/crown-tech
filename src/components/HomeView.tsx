import React from "react";
import HeroSlider from "./HeroSlider";
import StatsSection from "./StatsSection";
import ProcessUI from "./ProcessUI";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "./Testimonials";
import { BLOG_POSTS } from "../data";
import { ChevronRight, Sparkles, Star, Quote, ArrowUpRight, GraduationCap, Code2, Users, Rocket } from "lucide-react";

interface HomeViewProps {
  setCurrentPage: (page: string) => void;
  onOpenEnquiry: (courseId?: string) => void;
}

export default function HomeView({ setCurrentPage, onOpenEnquiry }: HomeViewProps) {
  
  const handleExploreCourses = () => {
    setCurrentPage("courses");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="font-sans text-slate-800 bg-white">
      
      {/* 1. Hero Carousel */}
      <HeroSlider
        onExploreCourses={handleExploreCourses}
        onEnquireNow={() => onOpenEnquiry()}
      />

      {/* 2. Stats Counters */}
      <StatsSection />

      {/* 3. Core Business Pillars Intro */}
      <section className="py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-crown-blue/10 to-crown-purple/10 border border-crown-blue/10 px-3.5 py-1.5 rounded-full text-[11px] font-bold text-crown-purple uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              Unified Technology Ecosystem
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              One Partner for Training, Staffing, and Development
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Crown Technology integrates professional training, workforce staffing solutions, and offshore engineering services under a single cohesive, high-performance infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            
            {/* Card 1 */}
            <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-lg transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-crown-blue to-crown-blue-light text-white flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900">1. Software Training Institute</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Learn 15+ job-oriented skills including Gen-AI, full-stack frameworks, testing pipelines, and mainframe systems under live project mentors.
              </p>
              <button onClick={handleExploreCourses} className="text-xs font-bold text-crown-blue hover:text-crown-purple inline-flex items-center gap-1 transition-colors">
                Browse Curriculum <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Card 2 */}
            <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-lg transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-crown-purple to-purple-800 text-white flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900">2. Professional IT Staffing</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Connect with elite corporate staffing. We offer permanent, contract, and contract-to-hire recruitment with vetted candidates.
              </p>
              <button onClick={() => { setCurrentPage("services"); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="text-xs font-bold text-crown-purple hover:text-crown-blue inline-flex items-center gap-1 transition-colors">
                Staffing Solutions <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Card 3 */}
            <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-lg transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-crown-blue to-crown-purple text-white flex items-center justify-center">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900">3. Offshore Outsourcing</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Leverage dedicated team models, managed services, and project based sprints to deliver secure web, mobile, and cloud software.
              </p>
              <button onClick={() => { setCurrentPage("services"); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="text-xs font-bold text-crown-blue hover:text-crown-purple inline-flex items-center gap-1 transition-colors">
                Development Models <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Why Choose Us (Bento) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold text-crown-purple uppercase tracking-widest block">
              Organizational Advantages
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Choose Crown Technology?
            </h2>
            <p className="text-slate-600 text-sm">
              We focus on measurable placement figures and production-grade curriculum architectures.
            </p>
          </div>

          <WhyChooseUs />

        </div>
      </section>

      {/* 5. 5-Step Training Process (Timeline cards) */}
      <section className="py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold text-crown-blue uppercase tracking-widest block">
              Step-by-Step Methodology
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our 5-Step Training Lifecycle
            </h2>
            <p className="text-slate-600 text-sm">
              We guide absolute beginners and veterans through complete practical roadmaps into top tier placements.
            </p>
          </div>

          <ProcessUI />

        </div>
      </section>

      {/* 6. Placement Testimonials (Reviews carousel) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block">
              Student Placement Records
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Alumni Placed Worldwide
            </h2>
            <p className="text-slate-600 text-sm">
              Over 10,000 placements and counting. See reviews from Crown Technology graduates.
            </p>
          </div>

          <Testimonials />

        </div>
      </section>

      {/* 7. Blog Preview */}
      <section className="py-20 bg-slate-50/30 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold text-crown-blue uppercase tracking-widest block">
              Crown Insights & Blogs
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Articles on Tech & Interviews
            </h2>
            <p className="text-slate-600 text-sm">
              Stay ahead with up-to-date perspectives on the modern tech workforce.
            </p>
          </div>

          {/* Render blog posts cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {BLOG_POSTS.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl border border-slate-100 p-6 flex flex-col justify-between hover:shadow-lg transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono font-bold">
                    <span>{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h4 className="font-display text-base font-bold text-slate-900 line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-50 flex justify-between items-center">
                  <span className="text-[10px] text-slate-400 font-semibold">By {post.author.split(" ")[0]}</span>
                  <button
                    onClick={() => {
                      setCurrentPage("blogs");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="text-xs font-bold text-crown-blue inline-flex items-center gap-1 hover:underline"
                  >
                    Read Blog <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. High-Conversion CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-crown-purple text-white relative overflow-hidden">
        
        {/* Subtle glowing elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-crown-blue/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-white/90">
            <Rocket className="w-4 h-4 text-crown-blue-light animate-bounce" />
            100+ Campus Drives Awaiting You
          </div>

          <h2 className="font-display text-4xl sm:text-5xl font-black tracking-tight leading-tight max-w-3xl mx-auto">
            Start Your IT Career Today with Crown Technology
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Secure your future. Acquire technical skills under active developer guidance and unlock placement lists inside leading software companies.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => onOpenEnquiry()}
              className="px-8 py-4 bg-gradient-to-r from-crown-blue to-crown-purple text-white font-bold rounded-xl shadow-lg shadow-crown-blue/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              Request Free Placement Counselling
            </button>
            <a
              href="https://wa.me/919573884429"
              target="_blank"
              rel="noopener noreferrer"
              referrerPolicy="no-referrer"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/10 text-white font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              Chat With Placement Officer
            </a>
          </div>

          <div className="text-xs text-slate-500 font-mono pt-4">
            * Average counseling turnaround time is less than 30 minutes during standard office hours.
          </div>

        </div>
      </section>

    </div>
  );
}
