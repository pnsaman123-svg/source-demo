import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import EmotionalStorySection from './components/EmotionalStorySection';
import ProductRevealSection from './components/ProductRevealSection';
import InteractiveEnergyEcosystem from './components/InteractiveEnergyEcosystem';
import EngineeringSection from './components/EngineeringSection';
import SmartAppShowcase from './components/SmartAppShowcase';
import ApplicationsSection from './components/ApplicationsSection';
import TechnicalSpecsSection from './components/TechnicalSpecsSection';
import ClosingStorySection from './components/ClosingStorySection';
import Footer from './components/Footer';
import QuotationModal from './components/QuotationModal';
import AssetStatusModal from './components/AssetStatusModal';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteAppType, setQuoteAppType] = useState('residential');
  const [assetModalOpen, setAssetModalOpen] = useState(false);

  const handleOpenQuote = (appType = 'residential') => {
    setQuoteAppType(appType);
    setQuoteModalOpen(true);
  };

  const handleOpenAssets = () => {
    setAssetModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F4F4F4] text-obsidian flex flex-col font-sans selection:bg-cobalt/20 selection:text-obsidian">
      {/* Global Navigation */}
      <Navbar
        onOpenQuote={handleOpenQuote}
        onOpenAssets={handleOpenAssets}
      />

      {/* Main Narrative Experience */}
      <main className="flex-1">
        {/* Section 01: Cinematic Hero */}
        <HeroSection onOpenQuote={handleOpenQuote} />

        {/* Section 02: Emotional Story */}
        <EmotionalStorySection />

        {/* Section 03: Product Reveal */}
        <ProductRevealSection />

        {/* Section 04: Interactive Energy Ecosystem */}
        <InteractiveEnergyEcosystem />

        {/* Section 05: Engineering Story */}
        <EngineeringSection />

        {/* Section 06: Smart Digital Experience */}
        <SmartAppShowcase />

        {/* Section 07: Applications */}
        <ApplicationsSection onOpenQuote={handleOpenQuote} />

        {/* Section 08: Technical Specifications */}
        <TechnicalSpecsSection onOpenQuote={handleOpenQuote} />

        {/* Section 09: Closing Story & FAQs */}
        <ClosingStorySection onOpenQuote={handleOpenQuote} />
      </main>

      {/* Section 10: Footer */}
      <Footer
        onOpenQuote={handleOpenQuote}
        onOpenAssets={handleOpenAssets}
      />

      {/* Interactive Quotation & Sizing Modal */}
      <QuotationModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        defaultApplication={quoteAppType}
      />

      {/* Asset Inventory & Governance Modal */}
      <AssetStatusModal
        isOpen={assetModalOpen}
        onClose={() => setAssetModalOpen(false)}
      />
    </div>
  );
}
