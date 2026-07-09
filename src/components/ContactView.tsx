import React, { useState } from "react";
import { Phone, MapPin, Mail, MessageSquare, CheckCircle, Send, Landmark, Sparkles } from "lucide-react";
import { COURSES_DATA } from "../data";

export default function ContactView() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("general");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert("Please specify your Name and Phone Number so we can reach you!");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const contactSubmission = {
        id: "msg_" + Date.now(),
        name,
        email,
        phone,
        course,
        message,
        date: new Date().toLocaleDateString(),
      };

      const existing = localStorage.getItem("crown_messages");
      const list = existing ? JSON.parse(existing) : [];
      list.push(contactSubmission);
      localStorage.setItem("crown_messages", JSON.stringify(list));

      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setPhone("");
    setCourse("general");
    setMessage("");
    setSubmitted(false);
  };

  return (
    <div className="font-sans text-slate-800 bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Header Title */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-crown-blue/10 to-crown-purple/10 border border-crown-blue/10 px-3 py-1 rounded-full text-xs font-bold text-crown-purple uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Connect With Our Campus
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
            Schedule a Free Classroom Walkthrough & Counseling
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Have any questions? Walk in during standard office hours to consult directly with our technical subject trainers and placement leads.
          </p>
        </div>

        {/* Contact info grid & form block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left Column (Contact Details & Map) */}
          <div className="lg:col-span-5 space-y-8 text-left">

            {/* Quick Actions card */}
            <div className="p-6 sm:p-8 bg-slate-50 border border-slate-100 rounded-3xl space-y-6">
              <h3 className="font-display text-lg font-bold text-slate-900">Registered HQ & Campus</h3>

              <ul className="space-y-5 text-sm">

                <li className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-white text-crown-purple shadow-sm shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900">Physical Address</strong>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-1">
                      Crown Technology<br />
                      Near AAA Mall, Beside Gurudwara Temple,<br />
                      Alrich Purandev Building, 2nd Floor, Office 203
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-white text-crown-blue shadow-sm shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900">Direct Phone Link</strong>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-1">
                      <a href="tel:9573884429" className="hover:text-crown-blue hover:underline font-mono font-semibold">
                        9573884429
                      </a>
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-white text-emerald-500 shadow-sm shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900">WhatsApp Career Desk</strong>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-1">
                      <a
                        href="https://wa.me/919573884429"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-emerald-600 hover:underline font-mono font-semibold"
                      >
                        Click to Chat (9573884429)
                      </a>
                    </p>
                  </div>
                </li>

              </ul>
            </div>

          </div>

          {/* Right Column (Message form) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm text-left">

            {submitted ? (
              <div className="text-center py-12 flex flex-col items-center">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 mb-4 animate-bounce">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900">Message Filed Successfully!</h3>
                <p className="text-slate-600 text-sm max-w-sm mt-2 leading-relaxed">
                  Thank you <strong className="text-slate-900">{name}</strong>. Our senior placement or technical team will contact you back shortly on <span className="text-crown-blue font-semibold">{phone}</span>.
                </p>

                <button
                  onClick={handleReset}
                  className="mt-6 px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl shadow-sm transition-all"
                >
                  File Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <h3 className="font-display text-xl font-bold text-slate-900">Enquire Online</h3>
                  <p className="text-xs text-slate-500 mt-1">Fill in the application parameters to reserve a corporate workshop seat.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                      Full Name <span className="text-crown-red">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Sen"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-crown-blue/20 focus:border-crown-blue text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                      Phone Number <span className="text-crown-red">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="9573884429"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-crown-blue/20 focus:border-crown-blue text-sm font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. anand@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-crown-blue/20 focus:border-crown-blue text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                      Program Target
                    </label>
                    <select
                      value={course}
                      onChange={(e) => setCourse(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-crown-blue/20 focus:border-crown-blue text-sm"
                    >
                      <option value="general">-- General / Staffing Enquiry --</option>
                      {COURSES_DATA.map((c) => (
                        <option key={c.id} value={c.id}>{c.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your technical background or organizational staffing parameters..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-crown-blue/20 focus:border-crown-blue text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-gradient-to-r from-crown-blue to-crown-purple text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-xl hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Transmitting Lead...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit Enquiry Online
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
