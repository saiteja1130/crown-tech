import React, { useState } from "react";
import { X, Send, CheckCircle2, Phone, Sparkles } from "lucide-react";
import { COURSES_DATA } from "../data";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCourseId?: string;
}

export default function EnquiryModal({ isOpen, onClose, selectedCourseId }: EnquiryModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState(selectedCourseId || "general");
  const [service, setService] = useState("training");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Sync state if selectedCourseId changes
  React.useEffect(() => {
    if (selectedCourseId) {
      setCourse(selectedCourseId);
    }
  }, [selectedCourseId]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert("Please enter at least your Name and Phone Number so we can reach you!");
      return;
    }

    setLoading(true);
    
    // Simulate real database write to localStorage
    setTimeout(() => {
      const newEnquiry = {
        id: "enq_" + Date.now(),
        name,
        email,
        phone,
        course: COURSES_DATA.find(c => c.id === course)?.name || "General Enquiry",
        service,
        message,
        date: new Date().toLocaleDateString(),
      };

      const existing = localStorage.getItem("crown_enquiries");
      const list = existing ? JSON.parse(existing) : [];
      list.push(newEnquiry);
      localStorage.setItem("crown_enquiries", JSON.stringify(list));

      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setPhone("");
    setCourse("general");
    setService("training");
    setMessage("");
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg overflow-hidden bg-white rounded-2xl shadow-2xl border border-slate-100 flex flex-col max-h-[90vh]">
        
        {/* Color stripe decoration */}
        <div className="h-2 bg-gradient-to-r from-crown-blue via-crown-purple to-crown-red" />

        {/* Header */}
        <div className="p-6 pb-4 border-b border-slate-100 flex justify-between items-start">
          <div>
            <h3 className="font-display text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-crown-purple animate-pulse" />
              Admission & Enquiry
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Start your tech career with Crown Technology today.
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {submitted ? (
            <div className="flex flex-col items-center text-center py-8">
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 mb-4 animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-display text-xl font-bold text-slate-900">Enquiry Submitted Successfully!</h4>
              <p className="text-slate-600 text-sm max-w-sm mt-2">
                Thank you <strong className="text-slate-900">{name}</strong>. Our Senior Academic Counselor will call you shortly on <span className="text-crown-blue font-semibold">{phone}</span> to guide your path.
              </p>

              {/* Verified Badge */}
              <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-100 w-full text-left">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">Lead Entry Generated</div>
                <div className="text-xs text-slate-600 space-y-1">
                  <div><strong>Course Code:</strong> {course.toUpperCase()}</div>
                  <div><strong>Service Track:</strong> {service.toUpperCase()}</div>
                  <div><strong>Timestamp:</strong> {new Date().toLocaleString()}</div>
                  <div className="text-emerald-600 font-semibold flex items-center gap-1 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-ping"></span>
                    Direct Routing Active
                  </div>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="mt-6 px-6 py-2.5 bg-gradient-to-r from-crown-blue to-crown-purple text-white text-sm font-semibold rounded-xl hover:opacity-90 shadow-md transition-opacity w-full"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                  Full Name <span className="text-crown-red">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-crown-blue/20 focus:border-crown-blue transition-all text-sm"
                />
              </div>

              {/* Contact Info (Row) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                    Phone Number <span className="text-crown-red">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-3 text-slate-400 text-xs font-mono font-medium">+91</span>
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      placeholder="9573884429"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-crown-blue/20 focus:border-crown-blue transition-all text-sm font-mono"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-crown-blue/20 focus:border-crown-blue transition-all text-sm"
                  />
                </div>
              </div>

              {/* Course selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                  Program of Interest
                </label>
                <select
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-crown-blue/20 focus:border-crown-blue transition-all text-sm"
                >
                  <option value="general">-- General IT Career Guidance --</option>
                  {COURSES_DATA.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name} ({c.duration})
                    </option>
                  ))}
                </select>
              </div>

              {/* Service track */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                  Required Service Track
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: "training", label: "Software Training" },
                    { id: "staffing", label: "IT Staffing" },
                    { id: "outsourcing", label: "Outsourcing Development" },
                    { id: "custom", label: "Custom Solution" }
                  ].map((track) => (
                    <button
                      key={track.id}
                      type="button"
                      onClick={() => setService(track.id)}
                      className={`px-3 py-2 rounded-xl text-xs font-medium border text-center transition-all ${
                        service === track.id
                          ? "bg-gradient-to-r from-crown-blue/10 to-crown-purple/10 border-crown-purple text-crown-purple"
                          : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {track.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                  Message / Career Objectives
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your educational background or corporate staffing requirements..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-crown-blue/20 focus:border-crown-blue transition-all text-sm"
                />
              </div>

              {/* Guarantee warning */}
              <div className="flex gap-2.5 items-start p-3 rounded-xl bg-slate-50 border border-slate-100 text-[11px] text-slate-500">
                <Phone className="w-4 h-4 text-crown-purple shrink-0 mt-0.5" />
                <span>
                  Our staffing department maintains active links with 100+ partner companies. Submitting this form secures your placement prioritization list spot.
                </span>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-gradient-to-r from-crown-blue to-crown-purple text-white text-sm font-semibold rounded-xl shadow-lg hover:shadow-xl hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Filing Placement Application...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit Application & Secure Spot
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
