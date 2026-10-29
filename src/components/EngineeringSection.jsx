import React, { useState } from 'react';
import { ENGINEERING_FEATURES } from '../data/engineeringFeatures';
import { ShieldCheck, Droplet, Zap, ChevronRight, Check } from 'lucide-react';
import { ASSET_INVENTORY } from '../data/assetInventory';

export default function EngineeringSection() {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

  const featureGraphics = [
    {
      image: ASSET_INVENTORY.engineering.adaptiveTech.path,
      caption: 'Adaptive Energy Intelligence — Algorithmic load matching and peak avoidance logic.',
      sourceTag: 'Verified AMEC Graphic'
    },
    {
      image: '/assets/products/source-side-profile.png',
      caption: 'Liquid-Cooled Thermal Enclosure — Dual airflow acoustic louvers maintaining <28 dBA whisper acoustics in 55°C ambient.',
      sourceTag: 'Official Enclosure Profile'
    },
    {
      image: ASSET_INVENTORY.engineering.realTimeManagement.path,
      caption: 'Sub-20ms Grid Islanding — High-speed solid-state transfer protects connected electronics.',
      sourceTag: 'Verified Architecture'
    },
    {
      image: '/assets/products/source-front-faceted.png',
      caption: '48+ Diagnostic Telemetry Checkpoints — Monitored continuously across the faceted power unit.',
      sourceTag: 'Official Hardware Status'
    },
    {
      image: ASSET_INVENTORY.engineering.dimensions.path,
      caption: 'Modular Front-Serviceable Enclosure — 930 × 485 × 200 mm die-cast chassis.',
      sourceTag: 'Official Engineering Blueprint'
    }
  ];

  const currentFeature = ENGINEERING_FEATURES[activeFeatureIndex];
  const currentGraphic = featureGraphics[activeFeatureIndex];

  return (
    <section id="engineering" className="py-24 sm:py-32 bg-[#111214] text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-cobalt/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-6 text-xs font-mono tracking-widest uppercase text-cobalt font-semibold">
          <span>05</span>
          <span className="w-6 h-px bg-cobalt/30"></span>
          <span>Engineering Integrity</span>
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl sm:text-6xl font-light tracking-tight leading-[1.06] text-white">
            Intelligence, built into <br />
            <span className="font-semibold text-cobalt">every layer.</span>
          </h2>
          <p className="text-base sm:text-lg text-white/70 mt-4 font-normal leading-relaxed">
            SOURCE is engineered with automotive and aerospace rigor. Every circuit, fluid loop, and algorithm is built to endure demanding conditions while operating silently in residential and commercial environments.
          </p>
        </div>

        {/* Feature Explorer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Feature Selection List */}
          <div className="lg:col-span-5 space-y-3 flex flex-col justify-between">
            {ENGINEERING_FEATURES.map((feat, idx) => {
              const isActive = idx === activeFeatureIndex;
              return (
                <button
                  key={feat.id}
                  onClick={() => setActiveFeatureIndex(idx)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 relative ${
                    isActive
                      ? 'bg-[#181A1D] border-cobalt/50 shadow-xl'
                      : 'bg-[#141518]/60 border-white/5 hover:border-white/15 opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-black/40 border border-white/10 flex items-center justify-center p-1.5 flex-shrink-0">
                        <img src={feat.icon} alt="" className="w-full h-full object-contain filter invert" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono text-cobalt font-semibold">FEATURE {feat.code}</span>
                          {isActive && (
                            <span className="w-1.5 h-1.5 rounded-full bg-cobalt animate-pulse"></span>
                          )}
                        </div>
                        <h3 className="text-base font-semibold text-white tracking-tight">{feat.title}</h3>
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 text-cobalt transition-transform ${isActive ? 'rotate-90' : ''}`} />
                  </div>

                  {isActive && (
                    <div className="mt-3 pt-3 border-t border-white/10 animate-fade-in text-xs text-white/75 space-y-2">
                      <p className="leading-relaxed">{feat.copy}</p>
                      <div className="flex items-center justify-between pt-1 text-[11px] font-mono text-cobalt">
                        <span>{feat.metricLabel}:</span>
                        <span className="font-bold text-white">{feat.metric}</span>
                      </div>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Large Engineering Visual Showcase */}
          <div className="lg:col-span-7 bg-[#16171A] rounded-3xl p-6 sm:p-10 border border-white/10 flex flex-col justify-between shadow-2xl relative">
            <div>
              <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono uppercase text-cobalt tracking-wider font-semibold">
                    Pillar {currentFeature.code} Architecture
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-cobalt bg-cobalt/10 px-3 py-1 rounded-full border border-cobalt/30">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{currentGraphic.sourceTag}</span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight mb-2">
                {currentFeature.title}
              </h3>
              <p className="text-xs font-mono text-cobalt mb-6">
                {currentFeature.subtitle}
              </p>

              {/* Graphic Display Area */}
              <div className="w-full aspect-[16/10] rounded-2xl bg-black/60 border border-white/10 overflow-hidden relative flex items-center justify-center p-4">
                <img
                  key={activeFeatureIndex}
                  src={currentGraphic.image}
                  alt={currentGraphic.caption}
                  className="max-h-full max-w-full object-contain filter drop-shadow-xl transition-all duration-500 animate-fade-in"
                  loading="lazy"
                />
              </div>

              <p className="mt-3 text-xs text-white/50 font-mono text-center">
                {currentGraphic.caption}
              </p>
            </div>

            {/* Engineering Detail Checklist */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="text-xs font-mono uppercase tracking-wider text-white/80 font-semibold mb-3">
                Key Technical Implementations:
              </div>
              <ul className="grid grid-cols-1 gap-2.5">
                {currentFeature.detailList.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-white/75">
                    <div className="w-4 h-4 rounded-full bg-cobalt/20 text-cobalt flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Liquid-Cooled & Touchless Clean Tech Callout Strip */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-[#16171A] border border-white/10 flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-cobalt/10 text-cobalt flex items-center justify-center flex-shrink-0 border border-cobalt/20">
              <Droplet className="w-7 h-7" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-cobalt tracking-widest font-semibold">
                Extreme Thermal Resilience
              </span>
              <h4 className="text-base font-semibold text-white mt-0.5">Liquid-Cooled Internal Radiator</h4>
              <p className="text-xs text-white/70 mt-1 leading-relaxed">
                Prevents high-temperature power derating during peak 45°C+ summer midday solar peaks.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#16171A] border border-white/10 flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-cobalt/10 text-cobalt flex items-center justify-center flex-shrink-0 border border-cobalt/20">
              <Zap className="w-7 h-7" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-cobalt tracking-widest font-semibold">
                Integrated Hardware Ecosystem
              </span>
              <h4 className="text-base font-semibold text-white mt-0.5">Touchless Clean Tech Support</h4>
              <p className="text-xs text-white/70 mt-1 leading-relaxed">
                Directly orchestrates automated rooftop solar cleaning machines to counter dust-induced yield drop.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
