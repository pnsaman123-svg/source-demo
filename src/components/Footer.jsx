import React from 'react';
import { ASSET_INVENTORY } from '../data/assetInventory';
import { ArrowUp, MapPin, ExternalLink, Database } from 'lucide-react';

export default function Footer({ onOpenQuote, onOpenAssets }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-obsidian text-white border-t border-white/10 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Brand & Purpose Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-white/10 items-start">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={ASSET_INVENTORY.brand.logo.path}
                alt="AMEC Technology"
                className="h-7 w-auto object-contain filter invert"
              />
              <div className="h-4 w-px bg-white/20"></div>
              <span className="font-semibold text-base tracking-widest text-white uppercase font-sans">
                SOURCE
              </span>
            </div>
            <p className="text-sm text-white/70 font-normal leading-relaxed max-w-sm">
              AMEC Technology builds, designs, and engineers industry-defining powertrain, solar hybrid inverters, and scalable energy platforms for the inevitable future.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onOpenAssets}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-cobalt bg-cobalt/10 hover:bg-cobalt/20 border border-cobalt/20 transition-colors"
              >
                <Database className="w-3.5 h-3.5" />
                <span>Asset Inventory Registry</span>
              </button>
            </div>
          </div>

          {/* Quick Nav Columns */}
          <div className="md:col-span-2 space-y-3 text-xs">
            <div className="text-[11px] font-mono uppercase tracking-wider text-cobalt font-semibold">
              Architecture
            </div>
            <ul className="space-y-2 text-white/70">
              <li><a href="#product" className="hover:text-white transition-colors">Technology Core</a></li>
              <li><a href="#ecosystem" className="hover:text-white transition-colors">Energy Ecosystem</a></li>
              <li><a href="#engineering" className="hover:text-white transition-colors">Smart Features</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Mobile Telemetry</a></li>
              <li><a href="#specifications" className="hover:text-white transition-colors">IEC Datasheet</a></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-3 text-xs">
            <div className="text-[11px] font-mono uppercase tracking-wider text-cobalt font-semibold">
              Applications
            </div>
            <ul className="space-y-2 text-white/70">
              <li><a href="#applications" className="hover:text-white transition-colors">Residential (Homes & Villas)</a></li>
              <li><a href="#applications" className="hover:text-white transition-colors">Commercial (Offices)</a></li>
              <li><a href="#applications" className="hover:text-white transition-colors">Small-Scale Industry</a></li>
              <li><a href="#applications" className="hover:text-white transition-colors">Remote Off-Grid Sites</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3 text-xs">
            <div className="text-[11px] font-mono uppercase tracking-wider text-cobalt font-semibold">
              Verified Locations
            </div>
            <div className="space-y-3 text-white/70">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cobalt flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Nagpur Engineering Hub:</span>
                  <p className="text-[11px] leading-tight mt-0.5">Plot No. 5A, 13A MIDC, Beside Tata Motors Service Centre, Hingna MIDC, Nagpur – 440016</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cobalt flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Bangalore Tech Center:</span>
                  <p className="text-[11px] leading-tight mt-0.5">25th Main Rd, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal, Contacts & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div className="flex flex-wrap items-center gap-4 text-[11px] font-mono">
            <span>© 2026 AMEC Group. All Rights Reserved.</span>
            <span className="text-white/20">|</span>
            <a
              href="https://www.amectechnology.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <span>amectechnology.com</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-white/20">|</span>
            <span>Terms & Conditions</span>
            <span className="text-white/20">|</span>
            <span>Privacy Policy</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white text-xs font-mono transition-colors"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cobalt" />
          </button>
        </div>
      </div>
    </footer>
  );
}
