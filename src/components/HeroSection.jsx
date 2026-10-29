import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, ShieldCheck, Zap, Layers, Sparkles, Check } from 'lucide-react';
import { ASSET_INVENTORY } from '../data/assetInventory';

export default function HeroSection({ onOpenQuote }) {
  const [activeAngle, setActiveAngle] = useState('front'); // 'front' | 'side' | 'dual'

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const angleImages = {
    front: {
      path: '/assets/products/source-front-faceted.png',
      alt: 'SOURCE Faceted Architectural Front Enclosure',
      badge: 'Faceted Ceramic Geometry',
      desc: 'Diamond-beveled white conversion canopy meeting the carbon graphite battery bay'
    },
    side: {
      path: '/assets/products/source-side-profile.png',
      alt: 'SOURCE Side Profile with DC Isolator and Cooling Grilles',
      badge: 'Dual Louver Cooling Bay',
      desc: 'Rotary mode dial, mechanical emergency DC disconnect, and acoustic ventilation'
    },
    dual: {
      path: '/assets/products/source-dual-view.png',
      alt: 'SOURCE Dual Elevation Studio Alignment',
      badge: 'System Architecture',
      desc: 'Front and side profiles engineered for clean, minimal wall footprint'
    }
  };

  const currentView = angleImages[activeAngle];

  return (
    <section className="relative min-h-[94vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#F4F4F4]">
      {/* Subtle Warm Light Radial Backdrops on #F4F4F4 */}
      <div className="absolute top-10 right-1/4 w-[600px] h-[600px] bg-white/70 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 left-1/4 w-[500px] h-[500px] bg-white/60 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10 flex-1 flex flex-col justify-center">
        {/* Numa-style pill badge with hardware red signal dot */}
        <div className="flex items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/8 text-[11px] font-mono tracking-widest uppercase text-obsidian shadow-xs">
            <span className="w-2 h-2 rounded-full bg-signal-red animate-pulse"></span>
            <span>Energy, in Harmony</span>
          </div>
          <span className="hidden sm:inline-block text-xs text-slate font-mono tracking-wider">
            AMEC Smart Solar Hybrid Inverter & Storage
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Narrative */}
          <div className="lg:col-span-6 space-y-6 max-w-xl">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-obsidian leading-[1.06]">
              A quieter kind <br />
              <span className="font-semibold italic text-obsidian">of power.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate font-normal leading-relaxed">
              Meet <strong className="font-semibold text-obsidian">SOURCE</strong>. An intelligent hybrid energy system designed to bring solar, battery and grid power together, making energy work more seamlessly around you.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenQuote('residential')}
                className="px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-obsidian text-white hover:bg-obsidian-hover transition-all shadow-sm hover:shadow-md active:scale-98 flex items-center gap-2 group"
              >
                <span>Pre-order SOURCE</span>
                <ArrowUpRight className="w-4 h-4 text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('product')}
                className="px-6 py-3.5 rounded-full text-xs sm:text-sm font-medium bg-white hover:bg-white/90 text-obsidian border border-black/10 hover:border-black/20 transition-all shadow-xs flex items-center gap-2"
              >
                <span>Discover Technology</span>
                <ArrowDown className="w-4 h-4 text-cobalt" />
              </button>
            </div>

            {/* Key Micro Specifications Strip on #F4F4F4 */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-black/8">
              <div>
                <div className="text-xl sm:text-2xl font-light text-obsidian font-mono">6 kW</div>
                <div className="text-[11px] text-slate tracking-tight">Continuous Output</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-light text-obsidian font-mono">6.5 kWh</div>
                <div className="text-[11px] text-slate tracking-tight">LiFePO₄ Storage</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-light text-obsidian font-mono">&lt; 20 ms</div>
                <div className="text-[11px] text-slate tracking-tight">Seamless Switchover</div>
              </div>
            </div>
          </div>

          {/* Right Cinematic Product Showcase Area */}
          <div className="lg:col-span-6 relative flex flex-col items-center">
            {/* Viewport Angle Selector */}
            <div className="mb-4 inline-flex items-center gap-1 p-1 bg-white border border-black/8 rounded-full shadow-2xs text-[11px] font-medium text-slate">
              <button
                onClick={() => setActiveAngle('front')}
                className={`px-3.5 py-1 rounded-full transition-all ${
                  activeAngle === 'front'
                    ? 'bg-obsidian text-white shadow-xs font-semibold'
                    : 'hover:text-obsidian'
                }`}
              >
                Faceted Front
              </button>
              <button
                onClick={() => setActiveAngle('side')}
                className={`px-3.5 py-1 rounded-full transition-all ${
                  activeAngle === 'side'
                    ? 'bg-obsidian text-white shadow-xs font-semibold'
                    : 'hover:text-obsidian'
                }`}
              >
                Side & DC Switch
              </button>
              <button
                onClick={() => setActiveAngle('dual')}
                className={`px-3.5 py-1 rounded-full transition-all ${
                  activeAngle === 'dual'
                    ? 'bg-obsidian text-white shadow-xs font-semibold'
                    : 'hover:text-obsidian'
                }`}
              >
                Dual Elevation
              </button>
            </div>

            {/* Expansive Frame with Clean Drop Shadow on #F4F4F4 */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/12] max-w-lg lg:max-w-none rounded-3xl overflow-hidden bg-white border border-black/8 shadow-sm transition-all duration-500 flex items-center justify-center p-6 sm:p-10">
              {/* Soft Contact Floor Shadow */}
              <div className="absolute bottom-6 w-3/5 h-6 bg-black/10 blur-xl rounded-full"></div>

              {/* Render Image */}
              <img
                key={activeAngle}
                src={currentView.path}
                alt={currentView.alt}
                className="relative max-h-full max-w-full object-contain filter drop-shadow-2xl transition-all duration-500 hover:scale-103 animate-fade-in"
                loading="eager"
              />

              {/* Minimalist Floating Status Pill */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-black/8 text-[10px] font-mono text-obsidian shadow-2xs flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cobalt"></span>
                <span>{currentView.badge}</span>
              </div>

              <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-black/8 text-[10px] font-mono text-slate">
                930 × 485 × 200 mm
              </div>
            </div>

            {/* Asset Status Tag */}
            <div className="mt-3 flex items-center justify-between w-full max-w-lg px-2 text-[10px] text-slate font-mono">
              <span className="flex items-center gap-1.5 text-obsidian font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-cobalt" />
                Verified SOURCE Industrial Hardware Design
              </span>
              <span>Model: SOURCE 6 kW / 6.5 kWh</span>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full pt-8 flex items-center justify-between text-xs text-slate">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-obsidian"></span>
          <span className="font-mono text-[11px] uppercase tracking-wider text-obsidian font-medium">
            Scroll to explore
          </span>
        </div>
        <div className="text-[11px] font-mono text-slate">
          01 / 10 &mdash; INTRO
        </div>
      </div>
    </section>
  );
}
