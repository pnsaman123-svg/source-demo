import React, { useState } from 'react';
import { APP_SCREENS } from '../data/appScreens';
import { ASSET_INVENTORY } from '../data/assetInventory';

export default function SmartAppShowcase() {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);

  const currentScreen = APP_SCREENS[activeScreenIndex];

  return (
    <section id="experience" className="py-24 sm:py-32 bg-[#F4F4F4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-6 text-xs font-mono tracking-widest uppercase text-slate">
          <span className="font-bold text-obsidian">06</span>
          <span className="w-6 h-px bg-black/15"></span>
          <span>Digital Telemetry & Control</span>
        </div>

        <div className="max-w-3xl mb-14">
          <h2 className="text-4xl sm:text-6xl font-light text-obsidian tracking-tight leading-[1.06]">
            Your energy. <br />
            <span className="font-semibold text-cobalt">Within reach.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate mt-4 font-normal leading-relaxed">
            Understand how your energy system performs. Monitor system status, review available energy insights, manage supported settings and stay informed through the SOURCE monitoring experience.
          </p>
        </div>

        {/* Tab Buttons for the 6 features */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {APP_SCREENS.map((screen, idx) => {
            const isActive = idx === activeScreenIndex;
            return (
              <button
                key={screen.id}
                onClick={() => setActiveScreenIndex(idx)}
                className={`px-5 py-2.5 rounded-full text-xs font-medium whitespace-nowrap transition-all border flex items-center gap-2 ${
                  isActive
                    ? 'bg-obsidian text-white border-obsidian shadow-sm'
                    : 'bg-white text-obsidian border-black/8 hover:border-black/20'
                }`}
              >
                <span className={`text-[10px] font-mono ${isActive ? 'text-cobalt' : 'text-slate'}`}>
                  {screen.number}
                </span>
                <span>{screen.tab}</span>
              </button>
            );
          })}
        </div>

        {/* App Showcase Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white rounded-3xl p-6 sm:p-12 border border-black/8 shadow-sm">
          {/* Smartphone Mockup Frame */}
          <div className="lg:col-span-5 flex justify-center">
            {/* Phone Bezel */}
            <div className="relative w-[280px] sm:w-[310px] rounded-[44px] p-3.5 bg-gradient-to-b from-[#2E312F] to-[#141615] shadow-2xl border-4 border-[#3D403E] ring-1 ring-black/20">
              {/* Dynamic Island / Speaker Notch */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-20 flex items-center justify-end pr-2">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-950/80 border border-blue-900/40"></div>
              </div>

              {/* Screen Glass Container */}
              <div className="relative aspect-[9/19.5] w-full rounded-[36px] overflow-hidden bg-black shadow-inner flex flex-col justify-center">
                <img
                  key={currentScreen.id}
                  src={currentScreen.image}
                  alt={currentScreen.title}
                  className="w-full h-full object-cover animate-fade-in"
                  loading="lazy"
                />

                {/* Subtle glass reflection highlight */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none"></div>
              </div>

              {/* Bottom Home Indicator Bar */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/40 rounded-full"></div>
            </div>
          </div>

          {/* Right Narrative & Screen Capabilities */}
          <div className="lg:col-span-7 space-y-6">
            <div className="border-b border-black/8 pb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono font-semibold text-cobalt uppercase tracking-widest">
                  Tool {currentScreen.number} of 06
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-cobalt"></span>
                <span className="text-[11px] font-mono text-slate">BLE 5.2 / Cloud Telemetry</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-light text-obsidian tracking-tight">
                {currentScreen.title}
              </h3>
              <p className="text-base text-obsidian font-normal mt-1">
                {currentScreen.headline}
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate font-normal leading-relaxed">
              {currentScreen.copy}
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {currentScreen.highlights.map((h, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-[#F8F8F8] border border-black/6">
                  <div className="text-xs font-semibold text-obsidian mb-1">{h.label}</div>
                  <div className="text-[11px] text-slate leading-tight">{h.desc}</div>
                </div>
              ))}
            </div>

            {/* App Store Download & Ecosystem Strip */}
            <div className="pt-6 border-t border-black/8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img
                  src={ASSET_INVENTORY.app.remoteControl.path}
                  alt=""
                  className="w-10 h-10 rounded-xl object-contain bg-obsidian p-1 shadow-xs"
                />
                <div>
                  <div className="text-xs font-semibold text-obsidian">SOURCE™ App for iOS & Android</div>
                  <div className="text-[11px] text-slate font-mono">Compatible with iPhone & Android devices</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <img
                  src="/assets/app/app-store-badges.png"
                  alt="Download on App Store and Google Play"
                  className="h-9 w-auto object-contain"
                />
              </div>
            </div>

            {/* Educational disclaimer */}
            <p className="text-[10px] text-slate font-mono pt-1">
              * Note: Screen telemetry shown illustrates representative operating metrics and diagnostics. Real-time readings depend on your site-specific solar irradiance and connected appliance demand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
