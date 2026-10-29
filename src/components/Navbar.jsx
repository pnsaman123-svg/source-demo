import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Database } from 'lucide-react';
import { ASSET_INVENTORY } from '../data/assetInventory';

export default function Navbar({ onOpenQuote, onOpenAssets }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Technology', href: '#product' },
    { name: 'Ecosystem', href: '#ecosystem' },
    { name: 'Engineering', href: '#engineering' },
    { name: 'App Experience', href: '#experience' },
    { name: 'Applications', href: '#applications' },
    { name: 'Specifications', href: '#specifications' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F4F4F4]/90 backdrop-blur-md shadow-2xs border-b border-black/8 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a 
          href="#" 
          className="flex items-center gap-3 group"
          aria-label="SOURCE by AMEC Homepage"
        >
          <img 
            src={ASSET_INVENTORY.brand.logo.path} 
            alt="AMEC Technology" 
            className="h-6 w-auto object-contain filter brightness-0 opacity-85 group-hover:opacity-100 transition-opacity" 
          />
          <div className="h-4 w-px bg-black/15"></div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-semibold text-base tracking-widest text-obsidian uppercase font-sans">
              SOURCE
            </span>
            <span className="text-[10px] uppercase font-mono tracking-wider text-slate hidden sm:inline">
              Hybrid Inverter
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-medium text-slate">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-slate hover:text-obsidian transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-obsidian hover:after:w-full after:transition-all after:duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenAssets}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono text-slate hover:text-obsidian bg-white hover:bg-black/5 transition-colors border border-black/8 shadow-2xs"
            title="Inspect Asset Inventory & Verification Status"
          >
            <Database className="w-3.5 h-3.5 text-cobalt" />
            <span>Asset Status</span>
          </button>

          <button
            onClick={() => onOpenQuote('residential')}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold bg-obsidian text-white hover:bg-obsidian-hover transition-all shadow-xs active:scale-95"
          >
            <span>Pre-order SOURCE</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => onOpenQuote('residential')}
            className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-obsidian text-white shadow-2xs"
          >
            Pre-order
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-obsidian rounded-lg hover:bg-black/5"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#F4F4F4] border-b border-black/8 px-6 py-5 space-y-4 shadow-xl animate-fade-in">
          <nav className="flex flex-col space-y-3 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-obsidian py-1 text-sm border-b border-black/5"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAssets();
              }}
              className="w-full py-2.5 rounded-xl text-xs font-mono text-slate bg-white border border-black/8 flex items-center justify-center gap-2"
            >
              <Database className="w-3.5 h-3.5 text-cobalt" />
              <span>Asset Inventory Registry</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote('residential');
              }}
              className="w-full py-3 rounded-full text-xs font-semibold bg-obsidian text-white text-center"
            >
              Pre-order SOURCE & Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
