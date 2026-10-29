import React, { useState } from 'react';
import { TECHNICAL_SPECS } from '../data/specifications';
import { FileText, Cpu, Battery, Ruler } from 'lucide-react';
import { ASSET_INVENTORY } from '../data/assetInventory';

export default function TechnicalSpecsSection({ onOpenQuote }) {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Specifications' },
    { id: 'inverter', label: 'Inverter Module' },
    { id: 'battery', label: 'Battery Module' },
    { id: 'general', label: 'Physical & Mounting' }
  ];

  return (
    <section id="specifications" className="py-24 sm:py-32 bg-[#F4F4F4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-6 text-xs font-mono tracking-widest uppercase text-slate">
          <span className="font-bold text-obsidian">08</span>
          <span className="w-6 h-px bg-black/15"></span>
          <span>Datasheet & Standards</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <h2 className="text-4xl sm:text-6xl font-light text-obsidian tracking-tight leading-[1.06]">
              Every detail has <br />
              <span className="font-semibold text-cobalt">a purpose.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate mt-4 font-normal leading-relaxed">
              Every SOURCE system is engineered to strict IEC safety guidelines and tested for extreme tropical heat dissipation and sustained 6 kW continuous throughput.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenQuote('residential')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold bg-obsidian text-white hover:bg-obsidian-hover transition-all shadow-sm"
            >
              <FileText className="w-4 h-4 text-cobalt" />
              <span>Request Engineering Datasheet</span>
            </button>
          </div>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex items-center gap-2 border-b border-black/8 pb-4 mb-8 overflow-x-auto no-scrollbar">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveTab(c.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                activeTab === c.id
                  ? 'bg-obsidian text-white font-semibold shadow-xs'
                  : 'text-slate hover:text-obsidian hover:bg-black/5'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Main Grid: Spec Tables + Dimensional CAD Blueprint */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Spec Tables */}
          <div className="lg:col-span-8 space-y-8">
            {/* INVERTER MODULE */}
            {(activeTab === 'all' || activeTab === 'inverter') && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/8 shadow-xs">
                <div className="flex items-center justify-between border-b border-black/8 pb-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-obsidian text-white flex items-center justify-center">
                      <Cpu className="w-4 h-4 text-cobalt" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-obsidian">
                        {TECHNICAL_SPECS.inverter.category}
                      </h3>
                      <p className="text-xs text-slate font-mono">{TECHNICAL_SPECS.inverter.headline}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono bg-[#F4F4F4] text-obsidian px-2.5 py-1 rounded-full border border-black/8 font-semibold">
                    6 kW Continuous
                  </span>
                </div>

                <div className="divide-y divide-black/6">
                  {TECHNICAL_SPECS.inverter.items.map((item, idx) => (
                    <div key={idx} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                      <div>
                        <span className="font-medium text-obsidian">{item.label}</span>
                        {item.note && <p className="text-[11px] text-slate">{item.note}</p>}
                      </div>
                      <div className="font-mono text-sm font-semibold text-obsidian text-left sm:text-right">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* BATTERY MODULE */}
            {(activeTab === 'all' || activeTab === 'battery') && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/8 shadow-xs">
                <div className="flex items-center justify-between border-b border-black/8 pb-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-obsidian text-white flex items-center justify-center">
                      <Battery className="w-4 h-4 text-cobalt" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-obsidian">
                        {TECHNICAL_SPECS.battery.category}
                      </h3>
                      <p className="text-xs text-slate font-mono">{TECHNICAL_SPECS.battery.headline}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono bg-blue-50 text-cobalt px-2.5 py-1 rounded-full border border-cobalt/20 font-semibold">
                    10-Year Warranty
                  </span>
                </div>

                <div className="divide-y divide-black/6">
                  {TECHNICAL_SPECS.battery.items.map((item, idx) => (
                    <div key={idx} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                      <div>
                        <span className="font-medium text-obsidian">{item.label}</span>
                        {item.note && <p className="text-[11px] text-slate">{item.note}</p>}
                      </div>
                      <div className="font-mono text-sm font-semibold text-obsidian text-left sm:text-right">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* GENERAL & PHYSICAL MODULE */}
            {(activeTab === 'all' || activeTab === 'general') && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/8 shadow-xs">
                <div className="flex items-center justify-between border-b border-black/8 pb-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-obsidian text-white flex items-center justify-center">
                      <Ruler className="w-4 h-4 text-cobalt" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-obsidian">
                        {TECHNICAL_SPECS.general.category}
                      </h3>
                      <p className="text-xs text-slate font-mono">{TECHNICAL_SPECS.general.headline}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono bg-[#F4F4F4] text-obsidian px-2.5 py-1 rounded-full border border-black/8 font-semibold">
                    Die-Cast Aluminum
                  </span>
                </div>

                <div className="divide-y divide-black/6">
                  {TECHNICAL_SPECS.general.items.map((item, idx) => (
                    <div key={idx} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                      <div>
                        <span className="font-medium text-obsidian">{item.label}</span>
                        {item.note && <p className="text-[11px] text-slate">{item.note}</p>}
                      </div>
                      <div className="font-mono text-sm font-semibold text-obsidian text-left sm:text-right">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Engineering Dimensions CAD Graphic */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-8 border border-black/8 shadow-xs space-y-6">
            <div className="border-b border-black/8 pb-4">
              <span className="text-[11px] font-mono uppercase text-cobalt font-semibold tracking-wider">
                Official Engineering CAD Drawing
              </span>
              <h3 className="text-xl font-semibold text-obsidian tracking-tight mt-1">
                Model Dimensions
              </h3>
              <p className="text-xs text-slate mt-1 leading-relaxed">
                Compact enough for any residential wall, engineered to fit tight utility chases and mechanical alcoves.
              </p>
            </div>

            {/* CAD Image */}
            <div className="rounded-2xl bg-[#F8F8F8] border border-black/6 p-4 flex items-center justify-center overflow-hidden">
              <img
                src={ASSET_INVENTORY.engineering.dimensions.path}
                alt={ASSET_INVENTORY.engineering.dimensions.alt}
                className="w-full h-auto object-contain drop-shadow-xs"
                loading="lazy"
              />
            </div>

            {/* Verified Measurements Callout */}
            <div className="grid grid-cols-3 gap-2 text-center p-3 rounded-2xl bg-[#F4F4F4] border border-black/6">
              <div>
                <div className="text-base font-bold font-mono text-obsidian">930 mm</div>
                <div className="text-[10px] font-mono uppercase text-slate">Height</div>
              </div>
              <div className="border-x border-black/8">
                <div className="text-base font-bold font-mono text-obsidian">485 mm</div>
                <div className="text-[10px] font-mono uppercase text-slate">Width</div>
              </div>
              <div>
                <div className="text-base font-bold font-mono text-obsidian">200 mm</div>
                <div className="text-[10px] font-mono uppercase text-slate">Depth</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
