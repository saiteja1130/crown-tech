import React, { useState } from "react";
import { BLOG_POSTS } from "../data";
import { BlogPost } from "../types";
import { Clock, Calendar, ArrowRight, BookOpen, X, Sparkles } from "lucide-react";

export default function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const highlight = (text: string) => {
    const parts = text.split("Crown Technology");
    return parts.map((part, i) =>
      i < parts.length - 1 ? (
        <React.Fragment key={i}>
          {part}
          <span className="text-crown-red font-bold">Crown Technology</span>
        </React.Fragment>
      ) : part
    );
  };

  return (
    <div className="font-sans">
      
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => (
          <article
            key={post.id}
            className="group flex flex-col justify-between bg-white rounded-2xl border border-slate-100 hover:border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden text-left"
          >
            
            {/* Post Image Container */}
            <div className="relative h-48 overflow-hidden bg-slate-100 shrink-0">
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest bg-white/90 backdrop-blur-sm text-crown-purple shadow-sm">
                {post.category}
              </span>
            </div>

            {/* Inner Content */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              
              <div className="space-y-3">
                
                {/* Meta details */}
                <div className="flex items-center gap-3 text-xs font-semibold text-slate-400 font-mono">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-crown-blue transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

              </div>

              {/* Action */}
              <div className="pt-5 mt-5 border-t border-slate-50">
                <button
                  onClick={() => setSelectedPost(post)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-crown-blue group-hover:text-crown-purple transition-colors cursor-pointer"
                >
                  Read Full Article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

          </article>
        ))}
      </div>

      {/* Full Article Readout Overlay Drawer */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col max-h-[85vh]">
            
            <div className="h-2 bg-gradient-to-r from-crown-blue via-crown-purple to-crown-red" />

            {/* Body */}
            <div className="p-6 sm:p-8 overflow-y-auto flex-1">
              
              {/* Header block */}
              <div className="flex justify-between items-start gap-4 mb-4">
                <div className="space-y-1.5">
                  <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-widest bg-purple-50 text-crown-purple border border-crown-purple/10">
                    {selectedPost.category} Guidance
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                    {selectedPost.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Author Banner */}
              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl mb-6 text-xs text-slate-500">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-crown-blue to-crown-purple text-white font-bold flex items-center justify-center shrink-0">
                  {selectedPost.author.charAt(0)}
                </div>
                <div>
                  <div>Written by <strong>{selectedPost.author}</strong></div>
                  <div className="font-mono mt-0.5">{selectedPost.date} • {selectedPost.readTime}</div>
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-slate max-w-none text-slate-600 text-sm leading-relaxed space-y-4">
                <p className="font-medium text-slate-800 text-base">
                  {selectedPost.excerpt}
                </p>
                <div className="h-px bg-slate-100 my-4" />
                <p>
                  {highlight(selectedPost.content)}
                </p>
                <p>
                  As part of <span className="text-crown-red font-bold">Crown Technology</span>'s rigorous ecosystem, we ensure our candidates are constantly exposed to critical thinking models, coding standards, and system security frameworks. Our corporate relationships open direct pathways to high-ticket roles for those who validate their skills with consistent performance.
                </p>
              </div>

            </div>

            {/* Actions Footer */}
            <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
              <div className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                <Sparkles className="w-3.5 h-3.5 text-crown-purple animate-spin-slow" />
                Crown Insights Portal
              </div>
              <button
                onClick={() => setSelectedPost(null)}
                className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-sm transition-all cursor-pointer"
              >
                Close Article
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
