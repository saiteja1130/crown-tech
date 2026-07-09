import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeView from "./components/HomeView";
import AboutView from "./components/AboutView";
import CoursesList from "./components/CoursesList";
import ServicesView from "./components/ServicesView";
import BlogSection from "./components/BlogSection";
import ContactView from "./components/ContactView";
import FloatingActions from "./components/FloatingActions";
import EnquiryModal from "./components/EnquiryModal";
import { Award, GraduationCap, ClipboardList, BookOpenCheck, CheckCircle2, X } from "lucide-react";

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState<string | undefined>(undefined);
  const [showMyEnquiries, setShowMyEnquiries] = useState(false);
  const [myEnquiries, setMyEnquiries] = useState<any[]>([]);

  // Resolve current active page label for Navbar highlight based on pathname
  let currentPage = "home";
  const path = location.pathname.substring(1);
  if (path === "about") currentPage = "about";
  else if (path === "courses") currentPage = "courses";
  else if (path === "services") currentPage = "services";
  else if (path === "blogs") currentPage = "blogs";
  else if (path === "contact") currentPage = "contact";

  const setCurrentPage = (page: string) => {
    if (page === "home") {
      navigate("/");
    } else {
      navigate("/" + page);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Load local enquiries on mount or when modal completes
  const loadLocalEnquiries = () => {
    try {
      const stored = localStorage.getItem("crown_enquiries");
      if (stored) {
        setMyEnquiries(JSON.parse(stored));
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    loadLocalEnquiries();
  }, [isEnquiryOpen]);

  const handleOpenEnquiry = (courseId?: string) => {
    setSelectedCourseId(courseId);
    setIsEnquiryOpen(true);
  };

  const handleClearEnquiries = () => {
    if (confirm("Clear your local placement tracking records?")) {
      localStorage.removeItem("crown_enquiries");
      setMyEnquiries([]);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col justify-between font-sans selection:bg-crown-blue/20 selection:text-crown-blue">
      
      {/* 1. Header Navigation bar */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onOpenEnquiry={() => handleOpenEnquiry()}
      />

      {/* Floating Application Tracking Quick Link */}
      {myEnquiries.length > 0 && (
        <div className="fixed top-24 right-4 z-30 font-sans">
          <button
            onClick={() => setShowMyEnquiries(true)}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-[11px] rounded-full shadow-lg hover:scale-105 transition-all cursor-pointer border border-emerald-400"
          >
            <ClipboardList className="w-4 h-4" />
            <span>Placed Applications ({myEnquiries.length})</span>
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
          </button>
        </div>
      )}

      {/* Main Content Area */}
      <main className="pt-20 flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <HomeView
                setCurrentPage={setCurrentPage}
                onOpenEnquiry={handleOpenEnquiry}
              />
            }
          />
          <Route
            path="/home"
            element={<Navigate to="/" replace />}
          />
          <Route
            path="/about"
            element={<AboutView onOpenEnquiry={() => handleOpenEnquiry()} />}
          />
          <Route
            path="/courses"
            element={
              <div className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="text-center space-y-4 max-w-3xl mx-auto text-left sm:text-center">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-crown-blue/10 to-crown-purple/10 text-crown-purple border border-crown-purple/10">
                    Job-Oriented Core Curriculum
                  </span>
                  <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
                    All 12+ Signature Software Programs
                  </h1>
                  <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
                    Choose from our carefully structured technical paths, crafted by senior enterprise architects. Fully compliant with modern industry metrics.
                  </p>
                </div>
                
                {/* Catalog Grid */}
                <CoursesList onEnroll={handleOpenEnquiry} showFilters={true} />
              </div>
            }
          />
          <Route
            path="/services"
            element={<ServicesView onOpenEnquiry={() => handleOpenEnquiry()} />}
          />
          <Route
            path="/blogs"
            element={
              <div className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="text-center space-y-4 max-w-2xl mx-auto text-left sm:text-center">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-crown-blue/10 to-crown-purple/10 text-crown-blue border border-crown-blue/10">
                    Industry Insights
                  </span>
                  <h1 className="font-display text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
                    Corporate Training & Hiring Blogs
                  </h1>
                  <p className="text-slate-600 text-xs sm:text-sm">
                    Understand code guidelines, recruitment timelines, resume optimizations, and dynamic interview tricks designed by top staffing officers.
                  </p>
                </div>
                
                {/* Blogs List */}
                <BlogSection />
              </div>
            }
          />
          <Route
            path="/contact"
            element={<ContactView />}
          />
          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* 2. Comprehensive Footer */}
      <Footer
        setCurrentPage={setCurrentPage}
        onOpenEnquiry={() => handleOpenEnquiry()}
      />

      {/* 3. Floating WhatsApp & Scroll actions */}
      <FloatingActions onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* 4. Full interactive Enquiry Modal popup */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        selectedCourseId={selectedCourseId}
      />

      {/* 5. "My Applications Tracking" Drawer Modal */}
      {showMyEnquiries && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in font-sans">
          <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[80vh]">
            
            <div className="h-1.5 bg-gradient-to-r from-emerald-400 to-teal-500" />

            <div className="p-6 pb-4 border-b border-slate-100 flex justify-between items-center">
              <div>
                <h3 className="font-display text-lg font-bold text-slate-900 flex items-center gap-1.5">
                  <ClipboardList className="w-5 h-5 text-emerald-500" />
                  Your Placements Dashboard
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">Track your submitted applications live.</p>
              </div>
              <button
                onClick={() => setShowMyEnquiries(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-50"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content list */}
            <div className="p-6 overflow-y-auto flex-1 space-y-4">
              {myEnquiries.length === 0 ? (
                <div className="text-center py-10 text-slate-400 text-xs">
                  <BookOpenCheck className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                  No open applications found. Click 'Enquire Now' to initiate recruitment tracking.
                </div>
              ) : (
                <div className="space-y-3.5 text-left">
                  {myEnquiries.map((enq) => (
                    <div key={enq.id} className="p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-2 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-1.5 h-full bg-emerald-500" />
                      
                      <div className="flex justify-between items-start gap-2">
                        <span className="font-bold text-slate-900 text-xs sm:text-sm">{enq.course}</span>
                        <span className="text-[10px] text-slate-400 font-semibold font-mono">{enq.date}</span>
                      </div>
                      
                      <div className="text-xs text-slate-500 space-y-1">
                        <div><strong>Candidate Name:</strong> {enq.name}</div>
                        <div><strong>Phone Verified:</strong> {enq.phone}</div>
                        {enq.email && <div><strong>Email:</strong> {enq.email}</div>}
                      </div>

                      <div className="pt-2 border-t border-slate-200/50 flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                        <span className="flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                          Counselor Routing Active
                        </span>
                        <span className="text-slate-400 font-mono text-[9px]">ID: {enq.id.split("_")[1]}</span>
                      </div>

                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Actions footer */}
            <div className="p-6 bg-slate-50 border-t border-slate-100 flex gap-3">
              <button
                onClick={handleClearEnquiries}
                className="px-4 py-2.5 bg-white text-crown-red hover:bg-red-50 text-xs font-bold rounded-lg border border-slate-200 transition-colors flex-1"
              >
                Clear History
              </button>
              <button
                onClick={() => setShowMyEnquiries(false)}
                className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition-all flex-1"
              >
                Close Tracking
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
