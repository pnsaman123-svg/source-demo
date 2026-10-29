import React, { useState } from 'react';
import { ENERGY_MODES } from '../data/energyModes';
import { Sun, Battery, Zap, Home, Radio, ArrowRight, ShieldAlert, CheckCircle2, Info } from 'lucide-react';
import { ASSET_INVENTORY } from '../data/assetInventory';

export default function InteractiveEnergyEcosystem() {
  const [selectedModeId, setSelectedModeId] = useState('on-grid');

  const currentMode = ENERGY_MODES.find((m) => m.id === selectedModeId) || ENERGY_MODES[0];

  const isSolarActive = currentMode.metrics.solar.active;
  const isBatteryActive = currentMode.metrics.battery.active;
  const isGridActive = currentMode.metrics.grid.active;
  const isLoadActive = currentMode.metrics.load.active;

  return (
    <section id="ecosystem" className="py-24 sm:py-32 bg-[#F4F4F4] border-t border-b border-black/8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Label */}
        <div className="flex items-center gap-2 mb-6 text-xs font-mono tracking-widest uppercase text-slate">
          <span className="font-bold text-obsidian">04</span>
          <span className="w-6 h-px bg-black/15"></span>
          <span>Energy Flow Simulation</span>
        </div>

        {/* Section Title */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-4xl sm:text-6xl font-light text-obsidian tracking-tight leading-[1.06]">
            Everything working <span className="font-semibold">together.</span>
          </h2>
          <p className="text-xl sm:text-2xl text-obsidian font-normal mt-3">
            One connected system. Multiple energy sources. Intelligent control.
          </p>
          <p className="text-base text-slate mt-3 font-normal leading-relaxed">
            Select an operating mode below to observe how SOURCE autonomously orchestrates solar generation, battery reserves, grid interaction, and domestic loads in real time.
          </p>
        </div>

        {/* Mode Selector Tabs Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {ENERGY_MODES.map((mode) => {
            const isSelected = mode.id === selectedModeId;
            return (
              <button
                key={mode.id}
                onClick={() => setSelectedModeId(mode.id)}
                className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden ${
                  isSelected
                    ? 'bg-obsidian text-white border-obsidian shadow-md scale-[1.01]'
                    : 'bg-white text-obsidian border-black/8 hover:border-black/20'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold ${isSelected ? 'text-cobalt' : 'text-slate'}`}>
                    {mode.code}
                  </span>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-cobalt animate-pulse"></span>
                  )}
                </div>
                <div className="text-base font-semibold tracking-tight">{mode.name}</div>
                <div className={`text-xs mt-1 truncate ${isSelected ? 'text-white/70' : 'text-slate'}`}>
                  {mode.tagline}
                </div>
              </button>
            );
          })}
        </div>

        {/* Simulation Workspace Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Diagram Visualization Stage (SVG + HTML nodes) */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-black/8 shadow-sm relative overflow-hidden flex flex-col justify-between min-h-[500px]">
            {/* Top Bar inside Canvas */}
            <div className="flex items-center justify-between border-b border-black/8 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cobalt animate-ping"></span>
                <span className="text-xs font-mono uppercase tracking-wider text-obsidian font-semibold">
                  Operating Mode: {currentMode.name}
                </span>
              </div>
              <div className="text-xs font-mono text-slate bg-[#F4F4F4] px-3 py-1 rounded-full border border-black/6">
                Transfer: {currentMode.metrics.transferTime}
              </div>
            </div>

            {/* Interactive Flow Stage */}
            <div className="relative w-full h-[400px] flex items-center justify-center my-auto">
              {/* SVG Connecting Pathways */}
              <svg 
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 700 400"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Path 1: Solar (top) to Center (Inverter) */}
                <path
                  d="M 350,70 L 350,165"
                  fill="none"
                  stroke={isSolarActive ? '#D9A441' : '#E5E7EB'}
                  strokeWidth={isSolarActive ? "3.5" : "1.5"}
                  strokeDasharray={isSolarActive ? "6 6" : "none"}
                  className={isSolarActive ? "flow-line-active" : ""}
                />

                {/* Path 2: Grid (left) to Center */}
                <path
                  d="M 140,200 L 290,200"
                  fill="none"
                  stroke={isGridActive ? '#2B5CFF' : '#E5E7EB'}
                  strokeWidth={isGridActive ? "3" : "1.5"}
                  strokeDasharray={isGridActive ? "6 6" : "none"}
                  className={isGridActive ? "flow-line-active" : ""}
                />

                {/* Path 3: Center (Inverter) to Connected Load (right) */}
                <path
                  d="M 410,200 L 560,200"
                  fill="none"
                  stroke={isLoadActive ? '#10B981' : '#E5E7EB'}
                  strokeWidth={isLoadActive ? "3.5" : "1.5"}
                  strokeDasharray={isLoadActive ? "6 6" : "none"}
                  className={isLoadActive ? "flow-line-active" : ""}
                />

                {/* Path 4: Center to Battery (bottom) */}
                <path
                  d="M 350,235 L 350,330"
                  fill="none"
                  stroke={isBatteryActive ? '#2B5CFF' : '#E5E7EB'}
                  strokeWidth={isBatteryActive ? "3.5" : "1.5"}
                  strokeDasharray={isBatteryActive ? "6 6" : "none"}
                  className={
                    isBatteryActive
                      ? currentMode.id === 'backup' || currentMode.id === 'off-grid'
                        ? "flow-line-reverse"
                        : "flow-line-active"
                      : ""
                  }
                />
              </svg>

              {/* NODE 1: SOLAR (TOP) */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex flex-col items-center justify-center p-2 border transition-all duration-300 shadow-xs ${
                  isSolarActive
                    ? 'bg-amber-50/90 border-amber-400 text-amber-900 shadow-amber-50 scale-105'
                    : 'bg-[#F8F8F8] border-black/8 text-slate opacity-60'
                }`}>
                  <Sun className={`w-6 h-6 mb-1 ${isSolarActive ? 'text-amber-500' : 'text-slate'}`} />
                  <span className="text-[10px] font-mono font-bold tracking-tight uppercase">Solar PV</span>
                  <span className="text-[10px] font-mono">{currentMode.metrics.solar.power}</span>
                </div>
                <span className="mt-1 text-[10px] font-mono text-slate">{currentMode.metrics.solar.status}</span>
              </div>

              {/* NODE 2: UTILITY GRID (LEFT) */}
              <div className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex flex-col items-center justify-center p-2 border transition-all duration-300 shadow-xs ${
                  isGridActive
                    ? 'bg-blue-50/90 border-cobalt text-blue-900 shadow-blue-50'
                    : 'bg-[#F8F8F8] border-black/8 text-slate opacity-50'
                }`}>
                  <Radio className={`w-6 h-6 mb-1 ${isGridActive ? 'text-cobalt' : 'text-slate'}`} />
                  <span className="text-[10px] font-mono font-bold tracking-tight uppercase">Utility Grid</span>
                  <span className="text-[9px] font-mono">{currentMode.metrics.grid.power}</span>
                </div>
                <span className="mt-1 text-[10px] font-mono text-center text-slate max-w-[90px]">
                  {currentMode.metrics.grid.status}
                </span>
              </div>

              {/* NODE 3: SOURCE HYBRID CORE (CENTER) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-obsidian text-white border-2 border-white/10 flex flex-col items-center justify-center p-2 shadow-2xl relative group">
                  <div className="absolute -inset-1 rounded-3xl bg-cobalt/20 blur-xs animate-pulse"></div>

                  <img
                    src="/assets/products/source-front-faceted.png"
                    alt="SOURCE Faceted Core"
                    className="w-12 h-14 sm:w-14 sm:h-16 object-contain mb-0.5 relative z-10 drop-shadow-md"
                  />
                  <span className="text-[10px] font-bold tracking-widest text-white font-mono relative z-10">
                    SOURCE™
                  </span>
                  <span className="text-[9px] text-cobalt font-mono relative z-10">
                    6 kW Core
                  </span>
                </div>
                <div className="mt-1.5 px-2.5 py-0.5 rounded-full bg-black/6 text-[9px] font-mono text-obsidian font-semibold">
                  Active Orchestrator
                </div>
              </div>

              {/* NODE 4: CONNECTED LOADS (RIGHT) */}
              <div className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex flex-col items-center justify-center p-2 border transition-all duration-300 shadow-xs ${
                  isLoadActive
                    ? 'bg-emerald-50/90 border-emerald-400 text-emerald-900 shadow-emerald-50'
                    : 'bg-[#F8F8F8] border-black/8 text-slate opacity-60'
                }`}>
                  <Home className={`w-6 h-6 mb-1 ${isLoadActive ? 'text-emerald-600' : 'text-slate'}`} />
                  <span className="text-[10px] font-mono font-bold tracking-tight uppercase">Home Load</span>
                  <span className="text-[10px] font-mono font-semibold">{currentMode.metrics.load.power}</span>
                </div>
                <span className="mt-1 text-[10px] font-mono text-center text-slate max-w-[90px]">
                  {currentMode.metrics.load.status}
                </span>
              </div>

              {/* NODE 5: BATTERY STORAGE (BOTTOM) */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex flex-col items-center justify-center p-2 border transition-all duration-300 shadow-xs ${
                  isBatteryActive
                    ? 'bg-blue-50/90 border-cobalt text-blue-900 shadow-blue-50'
                    : 'bg-[#F8F8F8] border-black/8 text-slate opacity-60'
                }`}>
                  <Battery className={`w-6 h-6 mb-1 ${isBatteryActive ? 'text-cobalt' : 'text-slate'}`} />
                  <span className="text-[10px] font-mono font-bold tracking-tight uppercase">6.5 kWh LFP</span>
                  <span className="text-[10px] font-mono font-semibold">{currentMode.metrics.battery.soc}</span>
                </div>
                <span className="mt-1 text-[10px] font-mono text-slate">{currentMode.metrics.battery.status}</span>
              </div>
            </div>

            {/* Bottom Legend */}
            <div className="border-t border-black/8 pt-4 flex flex-wrap items-center justify-between text-[11px] text-slate font-mono gap-2">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                  Solar PV Flow
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-cobalt"></span>
                  Battery / Grid Route
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  Connected Circuits
                </span>
              </div>
              <span className="text-obsidian font-semibold">Auto-Balancing Active</span>
            </div>
          </div>

          {/* Right Mode Details & Technical Explanation Panel */}
          <div className="lg:col-span-4 bg-obsidian text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-cobalt mb-3 border border-white/10">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{currentMode.badge}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-white">
                  Mode {currentMode.code} &mdash; {currentMode.name}
                </h3>
                <p className="text-xs font-mono text-white/70 mt-1">
                  {currentMode.tagline}
                </p>
              </div>

              <div className="space-y-3 text-sm text-white/80 font-normal leading-relaxed">
                <p>{currentMode.description}</p>
              </div>

              {/* Active Flow Breakdown */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2.5">
                <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-2">
                  Active Dispatch Logic:
                </div>
                {currentMode.activeFlows.map((flow, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs font-mono">
                    <span className="text-white/70 flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${flow.active ? 'bg-cobalt' : 'bg-gray-600'}`}></span>
                      {flow.label}
                    </span>
                    <span className={flow.active ? 'text-cobalt font-medium' : 'text-gray-500'}>
                      {flow.active ? 'ACTIVE' : 'IDLE'}
                    </span>
                  </div>
                ))}
              </div>

              {/* Provisional Technical Note */}
              <div className="p-3.5 rounded-xl bg-cobalt/10 border border-cobalt/20 text-xs text-white/80 leading-relaxed flex items-start gap-2.5">
                <Info className="w-4 h-4 text-cobalt flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-cobalt font-medium">Engineering Note:</strong> {currentMode.technicalNote}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/70 font-mono">
              <span>Transfer Latency:</span>
              <span className="text-cobalt font-bold">{currentMode.metrics.transferTime}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
