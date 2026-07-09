import React, { useState } from "react";
import { COURSES_DATA } from "../data";
import { Course } from "../types";
import { Search, Star, Clock, BookOpen, Sparkles, ChevronRight, CheckCircle2, SlidersHorizontal, BookOpenCheck } from "lucide-react";

interface CoursesListProps {
  onEnroll: (courseId: string) => void;
  showFilters?: boolean;
}

export default function CoursesList({ onEnroll, showFilters = true }: CoursesListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const categories = [
    { id: "all", label: "All Programs" },
    { id: "development", label: "Software Development" },
    { id: "data", label: "Data Science & AI" },
    { id: "cloud", label: "Cloud & DevOps" },
    { id: "management", label: "Business & HR" }
  ];

  // Filter logic
  const filteredCourses = COURSES_DATA.filter((course) => {
    const matchesSearch =
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.syllabus.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = activeCategory === "all" || course.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="font-sans">
      
      {/* Filters Bar (Only if requested) */}
      {showFilters && (
        <div className="mb-10 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-100">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search courses (e.g. React, DevOps, AWS)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-crown-blue/20 focus:border-crown-blue bg-white text-sm"
              />
            </div>

            {/* Total count badge */}
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-crown-purple" />
              Showing {filteredCourses.length} of {COURSES_DATA.length} Programs
            </div>

          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap gap-2.5 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-slate-900 text-white shadow-md shadow-slate-900/10"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Grid Listing */}
      {filteredCourses.length === 0 ? (
        <div className="text-center py-16 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
          <BookOpenCheck className="w-12 h-12 text-slate-400 mx-auto mb-3" />
          <p className="text-slate-600 font-semibold">No job-oriented courses match your filters.</p>
          <button
            onClick={() => {
              setSearchTerm("");
              setActiveCategory("all");
            }}
            className="text-crown-blue font-bold text-sm mt-2 hover:underline"
          >
            Clear Search Filter
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="group flex flex-col justify-between bg-white rounded-2xl border border-slate-100 hover:border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden text-left"
            >
              
              {course.image && (
                <div className="relative h-48 overflow-hidden bg-slate-100 shrink-0 border-b border-slate-100">
                  <img
                    src={course.image}
                    alt={course.name}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest bg-white/95 text-slate-900 font-mono shadow-sm border border-slate-100">
                    {course.category}
                  </span>
                </div>
              )}

              {/* Header Gradient highlight */}
              <div className="p-6 pb-4 flex-1">
                <div className="flex justify-between items-start gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700">
                    {course.level}
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-500 stroke-none" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 leading-snug group-hover:text-crown-blue transition-colors">
                  {course.name}
                </h3>

                {/* Duration/Hours Pill Row */}
                <div className="flex flex-wrap gap-2.5 mt-3 mb-4 text-xs font-semibold text-slate-500">
                  <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-slate-50 rounded-lg">
                    <Clock className="w-3.5 h-3.5 text-crown-blue" />
                    {course.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-slate-50 rounded-lg">
                    <BookOpen className="w-3.5 h-3.5 text-crown-purple" />
                    {course.hours}
                  </span>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                  {course.shortDescription}
                </p>

                {/* Micro Syllabus Preview */}
                <div className="mt-4 pt-4 border-t border-slate-50">
                  <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Key Core Modules</span>
                  <div className="grid grid-cols-1 gap-1.5">
                    {course.syllabus.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom Action Grid */}
              <div className="p-6 pt-0 bg-slate-50/50 border-t border-slate-50 grid grid-cols-2 gap-3">
                <button
                  onClick={() => setSelectedCourse(course)}
                  className="px-3 py-2.5 bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs rounded-xl border border-slate-200 transition-all text-center cursor-pointer"
                >
                  View Details
                </button>
                <button
                  onClick={() => onEnroll(course.id)}
                  className="px-3 py-2.5 bg-gradient-to-r from-crown-blue to-crown-purple text-white font-bold text-xs rounded-xl shadow-md hover:opacity-90 transition-all text-center cursor-pointer flex items-center justify-center gap-1"
                >
                  Enroll Now
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>
      )}

      {/* Course Detail Overlay Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col max-h-[85vh]">
            
            <div className="h-2 bg-gradient-to-r from-crown-blue via-crown-purple to-crown-red" />

            <div className="p-6 sm:p-8 overflow-y-auto flex-1 text-left">
              
              {selectedCourse.image && (
                <div className="relative h-60 w-full rounded-xl overflow-hidden mb-6 bg-slate-100 shrink-0 border border-slate-100 shadow-inner">
                  <img
                    src={selectedCourse.image}
                    alt={selectedCourse.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-2.5 py-1 rounded bg-crown-purple text-white text-[10px] font-bold uppercase tracking-widest font-mono">
                      {selectedCourse.category} Track
                    </span>
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="flex justify-between items-start gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-[10px] font-bold uppercase tracking-widest">
                      {selectedCourse.level} Program
                    </span>
                    <span className="px-2 py-0.5 bg-purple-50 text-crown-purple rounded text-[10px] font-bold uppercase tracking-widest">
                      Real-Time Projects
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-slate-900 leading-tight">
                    {selectedCourse.name}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-slate-50 rounded-xl mb-6 text-xs font-semibold">
                <div>
                  <span className="block text-slate-400 font-bold uppercase tracking-wider text-[10px] mb-0.5">Program Duration</span>
                  <span className="text-slate-900">{selectedCourse.duration}</span>
                </div>
                <div>
                  <span className="block text-slate-400 font-bold uppercase tracking-wider text-[10px] mb-0.5">Lab Lectures</span>
                  <span className="text-slate-900">{selectedCourse.hours}</span>
                </div>
                <div>
                  <span className="block text-slate-400 font-bold uppercase tracking-wider text-[10px] mb-0.5">Satisfaction Rating</span>
                  <span className="text-slate-900 flex items-center gap-1">
                    <Star className="w-3 h-3 fill-amber-500 stroke-none" />
                    {selectedCourse.rating} ({selectedCourse.reviewsCount} reviews)
                  </span>
                </div>
                <div>
                  <span className="block text-slate-400 font-bold uppercase tracking-wider text-[10px] mb-0.5">Format</span>
                  <span className="text-slate-900">Hybrid Classroom</span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4 text-slate-600 text-sm leading-relaxed mb-6">
                <p>{selectedCourse.fullDescription}</p>
              </div>

              {/* Two Column Layout (Curriculum & Features) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                
                {/* Complete Syllabus Modules */}
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-sm mb-3 flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-crown-blue" />
                    Full Curriculum Modules
                  </h4>
                  <ul className="space-y-2">
                    {selectedCourse.syllabus.map((item, idx) => (
                      <li key={idx} className="flex gap-2 text-xs text-slate-600 leading-relaxed bg-slate-50 p-2 rounded-lg border border-slate-100">
                        <span className="font-mono font-bold text-crown-blue">{idx + 1}.</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Unique Crown Benefits */}
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-sm mb-3 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-crown-purple" />
                    Exclusive Course Features
                  </h4>
                  <ul className="space-y-2">
                    {selectedCourse.features.map((item, idx) => (
                      <li key={idx} className="flex gap-2 text-xs text-slate-600 leading-relaxed p-2.5 rounded-lg border border-slate-100">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>

            {/* Sticky Action Footer */}
            <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-left text-xs text-slate-500">
                Placement drives conducted in 100+ partner corporations weekly.
              </div>
              <div className="flex gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="px-5 py-2.5 bg-white text-slate-700 font-bold text-sm rounded-xl border border-slate-200 hover:bg-slate-100 transition-all flex-1 sm:flex-initial text-center cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const cId = selectedCourse.id;
                    setSelectedCourse(null);
                    onEnroll(cId);
                  }}
                  className="px-6 py-2.5 bg-gradient-to-r from-crown-blue to-crown-purple text-white font-bold text-sm rounded-xl shadow-md hover:opacity-95 transition-all flex-1 sm:flex-initial text-center cursor-pointer"
                >
                  Enroll Now
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
