import React from 'react';
import { ASSET_INVENTORY } from '../data/assetInventory';

export default function EmotionalStorySection() {
  return (
    <section className="py-24 sm:py-32 bg-[#F4F4F4] border-t border-b border-black/8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Label */}
        <div className="flex items-center gap-2 mb-8 text-xs font-mono tracking-widest uppercase text-slate">
          <span className="font-bold text-obsidian">02</span>
          <span className="w-6 h-px bg-black/15"></span>
          <span>The Human Need</span>
        </div>

        {/* Narrative Headline & Spacious Copy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-20">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-obsidian tracking-tight leading-[1.08]">
              Power should never be a <span className="font-semibold italic">question mark.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-4 text-base sm:text-lg text-slate font-normal leading-relaxed">
            <p>
              We depend on energy for almost everything.
            </p>
            <p>
              The lights that welcome us home. The work that keeps moving. The everyday moments that should never have to wait.
            </p>
            <p className="text-obsidian font-semibold">
              But when energy becomes unpredictable, everything feels a little less certain. It’s time for a more intelligent approach.
            </p>
          </div>
        </div>

        {/* 3-Moment Lifestyle Vignette Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: The Sanctuary of Home */}
          <div className="group rounded-3xl overflow-hidden bg-white border border-black/8 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col">
            <div className="aspect-[4/3] overflow-hidden relative bg-[#F8F8F8]">
              <img
                src={ASSET_INVENTORY.lifestyle.smartAppliance.path}
                alt="Domestic appliances functioning seamlessly"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-obsidian font-semibold shadow-2xs">
                The Living Space
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-obsidian mb-2">Unbroken Everyday Comfort</h3>
                <p className="text-xs sm:text-sm text-slate leading-relaxed">
                  Refrigeration, induction cooking, and climate comfort never stumble during surprise feeder drops or monsoon grid instability.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-black/5 text-[11px] font-mono text-cobalt font-semibold">
                Zero appliance restarts
              </div>
            </div>
          </div>

          {/* Card 2: Uninterrupted Focus & Work */}
          <div className="group rounded-3xl overflow-hidden bg-white border border-black/8 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col">
            <div className="aspect-[4/3] overflow-hidden relative bg-[#F8F8F8]">
              <img
                src={ASSET_INVENTORY.lifestyle.solarRays.path}
                alt="Modern workspace with natural light"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-obsidian font-semibold shadow-2xs">
                The Modern Workspace
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-obsidian mb-2">Continuity for What Matters</h3>
                <p className="text-xs sm:text-sm text-slate leading-relaxed">
                  Remote workstations, servers, Wi-Fi mesh routers, and collaborative screens operate seamlessly with sub-20 ms transfer speed.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-black/5 text-[11px] font-mono text-cobalt font-semibold">
                Sub-20 millisecond transition
              </div>
            </div>
          </div>

          {/* Card 3: Serene Architecture & Harmony */}
          <div className="group rounded-3xl overflow-hidden bg-white border border-black/8 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col">
            <div className="aspect-[4/3] overflow-hidden relative bg-[#F8F8F8]">
              <img
                src={ASSET_INVENTORY.lifestyle.hybridArchitecture.path}
                alt="Contemporary architecture with integrated energy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-obsidian font-semibold shadow-2xs">
                Architectural Integration
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-obsidian mb-2">Aesthetic & Quiet Presence</h3>
                <p className="text-xs sm:text-sm text-slate leading-relaxed">
                  No noxious diesel fumes, no jarring generator rattle. A whisper-quiet die-cast aluminum form that complements contemporary architectural spaces.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-black/5 text-[11px] font-mono text-cobalt font-semibold">
                &lt; 28 dBA whisper profile
              </div>
            </div>
          </div>
        </div>

        {/* Transition callout banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-obsidian text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-cobalt font-semibold">Engineering Philosophy</span>
            <p className="text-base sm:text-lg font-light text-white">
              Energy shouldn't be managed with crude manual switchboards. It requires system-level intelligence.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-xs font-mono text-white/90 border border-white/15 whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-cobalt"></span>
            <span>Intelligent Balance</span>
          </div>
        </div>
      </div>
    </section>
  );
}
