import React, { useState } from 'react';
import { APPLICATIONS_DATA } from '../data/applications';
import { Building, Home, Factory, Mountain, ArrowUpRight, ShieldAlert } from 'lucide-react';

export default function ApplicationsSection({ onOpenQuote }) {
  const [selectedAppId, setSelectedAppId] = useState('residential');

  const icons = {
    residential: Home,
    commercial: Building,
    industrial: Factory,
    remote: Mountain
  };

  const currentApp = APPLICATIONS_DATA.find((a) => a.id === selectedAppId) || APPLICATIONS_DATA[0];

  return (
    <section id="applications" className="py-24 sm:py-32 bg-[#F4F4F4] border-t border-b border-black/8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-6 text-xs font-mono tracking-widest uppercase text-slate">
          <span className="font-bold text-obsidian">07</span>
          <span className="w-6 h-px bg-black/15"></span>
          <span>Deployment Environments</span>
        </div>

        <div className="max-w-3xl mb-14">
          <h2 className="text-4xl sm:text-6xl font-light text-obsidian tracking-tight leading-[1.06]">
            Designed for the way <br />
            <span className="font-semibold text-cobalt">we live and work.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate mt-4 font-normal leading-relaxed">
            From modern residences and commercial facilities to manufacturing workshops and off-grid landscapes, SOURCE adapts its intelligent control logic to match diverse power demands.
          </p>
        </div>

        {/* 4 Application Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {APPLICATIONS_DATA.map((app) => {
            const Icon = icons[app.id] || Home;
            const isSelected = app.id === selectedAppId;
            return (
              <button
                key={app.id}
                onClick={() => setSelectedAppId(app.id)}
                className={`p-5 rounded-2xl border text-left transition-all ${
                  isSelected
                    ? 'bg-obsidian text-white border-obsidian shadow-md scale-[1.01]'
                    : 'bg-white text-obsidian border-black/8 hover:border-black/20'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                    isSelected ? 'bg-white/15 text-cobalt' : 'bg-[#F4F4F4] text-obsidian'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className={`text-[10px] font-mono uppercase tracking-wider ${
                    isSelected ? 'text-cobalt font-semibold' : 'text-slate'
                  }`}>
                    0{APPLICATIONS_DATA.indexOf(app) + 1}
                  </span>
                </div>
                <div className="text-base font-semibold tracking-tight">{app.category}</div>
                <div className={`text-xs mt-1 truncate ${isSelected ? 'text-white/70' : 'text-slate'}`}>
                  {app.headline}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Application Detailed Card */}
        <div className="bg-white rounded-3xl overflow-hidden border border-black/8 shadow-sm grid grid-cols-1 lg:grid-cols-12">
          {/* Left Environmental Imagery */}
          <div className="lg:col-span-7 relative aspect-[4/3] lg:aspect-auto overflow-hidden bg-[#F8F8F8]">
            <img
              src={currentApp.image}
              alt={currentApp.headline}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-between p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-[11px] font-mono text-cobalt border border-white/10 self-start">
                <span>{currentApp.badge}</span>
              </div>
              <p className="text-sm sm:text-base text-white font-light italic">
                "{currentApp.keyBenefit}"
              </p>
            </div>
          </div>

          {/* Right Narrative & Technical Sizing Guide */}
          <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2 text-xs font-mono uppercase text-cobalt tracking-wider font-semibold">
                <span>Application Sizing & Capabilities</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-light text-obsidian tracking-tight">
                {currentApp.headline}
              </h3>
              <p className="text-sm text-slate mt-3 font-normal leading-relaxed">
                {currentApp.copy}
              </p>

              {/* Sizing Specifications List */}
              <div className="mt-6 space-y-2.5">
                {currentApp.stats.map((s, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#F8F8F8] border border-black/6 flex items-center justify-between text-xs">
                    <span className="text-slate font-medium">{s.label}:</span>
                    <span className="font-mono font-semibold text-obsidian">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sizing Advisory Notice */}
            <div className="pt-4 border-t border-black/8 space-y-4">
              <div className="flex items-start gap-2 text-[11px] text-slate leading-relaxed">
                <ShieldAlert className="w-4 h-4 text-cobalt flex-shrink-0 mt-0.5" />
                <span>
                  Load profiling is recommended for industrial machinery with inductive startup surges over 9 kW. Contact AMEC engineering for custom multi-unit modular parallel arrays.
                </span>
              </div>

              <button
                onClick={() => onOpenQuote(currentApp.id)}
                className="w-full py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-obsidian text-white hover:bg-obsidian-hover transition-all shadow-sm flex items-center justify-center gap-2 group"
              >
                <span>Request {currentApp.category} Sizing & Quotation</span>
                <ArrowUpRight className="w-4 h-4 text-cobalt group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
