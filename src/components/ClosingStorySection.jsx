import React, { useState } from 'react';
import { FAQS } from '../data/faqs';
import { Plus, Minus, ArrowUpRight, Phone, Mail } from 'lucide-react';

export default function ClosingStorySection({ onOpenQuote }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section className="py-24 sm:py-32 bg-[#F4F4F4] border-t border-black/8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* FAQS SUB-SECTION */}
        <div className="mb-24">
          <div className="flex items-center gap-2 mb-6 text-xs font-mono tracking-widest uppercase text-slate">
            <span className="font-bold text-obsidian">09.1</span>
            <span className="w-6 h-px bg-black/15"></span>
            <span>Clarity & Questions</span>
          </div>

          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-5xl font-light text-obsidian tracking-tight leading-[1.08]">
              Frequently asked <span className="font-semibold text-cobalt">questions.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate mt-3 font-normal leading-relaxed">
              Straightforward answers, so you can move forward with confidence.
            </p>
          </div>

          <div className="max-w-4xl space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-black/8 overflow-hidden transition-all shadow-2xs"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-semibold text-cobalt">0{idx + 1}</span>
                      <span className="text-base font-semibold text-obsidian tracking-tight">
                        {faq.question}
                      </span>
                    </div>
                    <div className={`w-7 h-7 rounded-full bg-[#F4F4F4] flex items-center justify-center flex-shrink-0 transition-transform ${
                      isOpen ? 'bg-obsidian text-white rotate-180' : 'text-obsidian'
                    }`}>
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-slate leading-relaxed border-t border-black/5 animate-fade-in pl-12 sm:pl-14">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* SECTION 09 CLOSING STORY HERO */}
        <div className="relative rounded-3xl overflow-hidden bg-obsidian text-white p-8 sm:p-14 lg:p-20 shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cobalt/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-cobalt font-semibold">
                <span>09.2</span>
                <span className="w-6 h-px bg-cobalt/30"></span>
                <span>The Vision</span>
              </div>

              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[1.04] text-white">
                More than power. <br />
                <span className="font-semibold italic text-cobalt">Peace of mind.</span>
              </h2>

              <p className="text-base sm:text-lg text-white/75 font-normal leading-relaxed max-w-xl">
                Energy should support the moments that matter. SOURCE brings solar, battery and grid power together through intelligent energy management, designed for a more connected and reliable energy experience.
              </p>

              {/* CTAs */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenQuote('residential')}
                  className="px-8 py-4 rounded-full text-xs sm:text-sm font-semibold bg-cobalt text-white hover:bg-cobalt-hover transition-all shadow-lg active:scale-98 flex items-center gap-2"
                >
                  <span>Pre-order SOURCE</span>
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </button>

                <button
                  onClick={() => onOpenQuote('expert')}
                  className="px-7 py-4 rounded-full text-xs sm:text-sm font-medium bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-cobalt" />
                  <span>Talk to an Expert</span>
                </button>
              </div>

              {/* Direct Contacts Info */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-white/70 font-mono">
                <a href="mailto:info@amectechnology.com" className="hover:text-cobalt transition-colors flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-cobalt" />
                  <span>info@amectechnology.com</span>
                </a>
                <a href="tel:+919021510318" className="hover:text-cobalt transition-colors flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-cobalt" />
                  <span>+91 9021510318</span>
                </a>
              </div>
            </div>

            {/* Right Callback Visual */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 shadow-2xl group bg-black/40 p-6 flex items-center justify-center">
                <img
                  src="/assets/products/source-front-faceted.png"
                  alt="SOURCE Faceted Inverter"
                  className="max-h-full max-w-full object-contain filter drop-shadow-2xl group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-transparent to-transparent flex flex-col justify-end p-6 pointer-events-none">
                  <span className="text-[10px] font-mono text-cobalt uppercase tracking-wider font-semibold">
                    ENERGY, IN HARMONY.
                  </span>
                  <p className="text-xs text-white/80 mt-1">
                    Quiet, intelligent energy storage ready for your space.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
