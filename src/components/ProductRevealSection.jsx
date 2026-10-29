import React, { useState } from 'react';
import { ASSET_INVENTORY } from '../data/assetInventory';
import { ArrowDown, Cpu, Battery, Layers, ShieldCheck, Check, Radio } from 'lucide-react';

export default function ProductRevealSection() {
  const [activeViewId, setActiveViewId] = useState('faceted');

  const views = [
    {
      id: 'faceted',
      label: 'Faceted Front',
      image: '/assets/products/source-front-faceted.png',
      alt: 'SOURCE geometric faceted front shell',
      caption: 'Matte pearl white upper canopy meeting the dark carbon graphite battery base.'
    },
    {
      id: 'side',
      label: 'Side & DC Switch',
      image: '/assets/products/source-side-profile.png',
      alt: 'SOURCE side profile with red DC switch',
      caption: 'Side profile showing acoustic cooling louvers and emergency red DC isolator.'
    },
    {
      id: 'dual',
      label: 'Dual Elevation',
      image: '/assets/products/source-dual-view.png',
      alt: 'SOURCE side and front elevations',
      caption: 'Precision front and side elevations showcasing the ultra-slim 200 mm depth.'
    },
    {
      id: 'internal',
      label: 'Studio Angle',
      image: ASSET_INVENTORY.hero.productRender.path,
      alt: 'SOURCE hybrid inverter studio perspective',
      caption: 'Three-quarter view highlighting internal cooling radiators and power circuitry.'
    }
  ];

  const currentView = views.find((v) => v.id === activeViewId) || views[0];

  const systemLayers = [
    {
      icon: Cpu,
      title: 'Power Conversion Module',
      spec: '6 kW Continuous / 9 kW Surge (10s)',
      desc: 'High-frequency silicon carbide power inverter converting DC solar & battery power into ultra-pure 230 V AC sine wave.'
    },
    {
      icon: Battery,
      title: 'Integrated LiFePO₄ Battery Storage',
      spec: '6.5 kWh Nominal / 51 V Architecture',
      desc: 'Automotive-grade safe Lithium Iron Phosphate cells engineered for 6,000+ deep cycles and 10-year comprehensive warranty.'
    },
    {
      icon: Layers,
      title: 'Liquid-Cooled Thermal Loop',
      spec: '-10 °C to 55 °C Operational Window',
      desc: 'Closed-loop active fluid cooling designed specifically for extreme Indian summer ambient heat without noisy fans.'
    },
    {
      icon: Radio,
      title: 'Instant DC Isolation & Safety',
      spec: 'Rotary Emergency Disconnect',
      desc: 'Dedicated physical red rotary switch enables immediate manual solar string isolation during maintenance.'
    }
  ];

  const scrollToNext = () => {
    const el = document.getElementById('ecosystem');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="product" className="py-24 sm:py-32 bg-[#F4F4F4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-6 text-xs font-mono tracking-widest uppercase text-slate">
          <span className="font-bold text-obsidian">03</span>
          <span className="w-6 h-px bg-black/15"></span>
          <span>Industrial Architecture</span>
        </div>

        <div className="max-w-3xl mb-14">
          <h2 className="text-4xl sm:text-6xl font-light text-obsidian tracking-tight leading-[1.06]">
            Meet <span className="font-semibold">SOURCE.</span>
          </h2>
          <p className="text-xl sm:text-2xl text-obsidian font-normal mt-3">
            One system. A more intelligent energy experience.
          </p>
          <p className="text-base sm:text-lg text-slate mt-4 leading-relaxed font-normal">
            SOURCE brings together power conversion, battery storage and intelligent control to manage energy across solar, grid, battery and connected loads. Engineered with a system-level approach to energy management, SOURCE is designed to improve energy utilization, reliability and visibility.
          </p>
        </div>

        {/* Interactive Product Showcase Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-10 border border-black/8 shadow-sm">
          {/* Left Visual Area with multi-angle selector */}
          <div className="lg:col-span-7 flex flex-col items-center">
            {/* View Selector Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#F4F4F4] rounded-full border border-black/8 mb-6">
              {views.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setActiveViewId(v.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                    activeViewId === v.id
                      ? 'bg-obsidian text-white shadow-xs font-semibold'
                      : 'text-slate hover:text-obsidian'
                  }`}
                >
                  {v.label}
                </button>
              ))}
            </div>

            {/* Product Display Frame */}
            <div className="relative w-full aspect-[4/3] rounded-2xl bg-[#F8F8F8] border border-black/6 p-6 sm:p-8 flex items-center justify-center overflow-hidden">
              <img
                key={activeViewId}
                src={currentView.image}
                alt={currentView.alt}
                className="max-h-full max-w-full object-contain filter drop-shadow-2xl transition-all duration-500 hover:scale-103 animate-fade-in"
                loading="lazy"
              />

              {/* Floating verified label */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-black/8 text-[10px] font-mono text-obsidian flex items-center gap-1.5 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-cobalt" />
                <span>Verified Hardware Profile</span>
              </div>
            </div>

            {/* Caption */}
            <p className="mt-3 text-xs text-slate text-center font-mono">
              {currentView.caption}
            </p>
          </div>

          {/* Right Architecture Breakdown */}
          <div className="lg:col-span-5 space-y-5">
            <div className="border-b border-black/8 pb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-cobalt font-semibold">
                Integrated Hardware Architecture
              </span>
              <h3 className="text-xl sm:text-2xl font-light text-obsidian tracking-tight mt-1">
                Engineered from the inside out.
              </h3>
            </div>

            <div className="space-y-3">
              {systemLayers.map((layer, idx) => {
                const IconComponent = layer.icon;
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-[#F8F8F8] border border-black/6 hover:border-black/15 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-xl bg-obsidian text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                        <IconComponent className="w-4 h-4 text-cobalt" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-obsidian">{layer.title}</h4>
                        <div className="text-[11px] font-mono text-cobalt font-semibold my-0.5">
                          {layer.spec}
                        </div>
                        <p className="text-xs text-slate leading-relaxed">
                          {layer.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA to section 4 */}
            <div className="pt-2">
              <button
                onClick={scrollToNext}
                className="w-full sm:w-auto px-7 py-3 rounded-full text-xs sm:text-sm font-semibold bg-obsidian text-white hover:bg-obsidian-hover transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <span>Explore the Technology Ecosystem</span>
                <ArrowDown className="w-4 h-4 text-cobalt" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
