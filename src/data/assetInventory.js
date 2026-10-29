/**
 * Centralized Asset Inventory & Mapping Structure
 * 
 * Tracks all imagery, diagrams, and assets across the SOURCE experience.
 * Distinguishes verified manufacturer assets from provisional/concept assets.
 */

export const ASSET_INVENTORY = {
  hero: {
    productRender: {
      id: 'hero-product-render',
      name: 'SOURCE Inverter & Battery System Hero Render',
      section: 'Section 01: Hero',
      path: '/assets/products/source-hero-render.png',
      source: 'AMEC Technology Official Web Asset (Shot.png)',
      approvalStatus: 'Approved Web Asset',
      replacementRequired: false,
      alt: 'SOURCE Smart Hybrid Inverter and Battery Energy Storage Enclosure'
    },
    morningArchitecture: {
      id: 'hero-morning-architecture',
      name: 'Architectural Residence Morning Environment',
      section: 'Section 01: Hero / Section 02: Story',
      path: '/assets/lifestyle/architectural-residence-morning.png',
      source: 'AMEC Technology Official Asset (SourceMorning.png)',
      approvalStatus: 'Approved Lifestyle Asset',
      replacementRequired: false,
      alt: 'Contemporary residence bathed in morning sunlight with SOURCE hybrid energy'
    }
  },
  lifestyle: {
    morningArchitecture: {
      id: 'lifestyle-morning',
      name: 'Architectural Residence Morning Environment',
      section: 'Section 01: Hero / Section 02: Story',
      path: '/assets/lifestyle/architectural-residence-morning.png',
      source: 'AMEC Technology Official Asset (SourceMorning.png)',
      approvalStatus: 'Approved Lifestyle Asset',
      replacementRequired: false,
      alt: 'Contemporary residence bathed in morning sunlight with SOURCE hybrid energy'
    },
    smartAppliance: {
      id: 'lifestyle-smart-appliance',
      name: 'Unbroken Everyday Comfort & Smart Appliances',
      section: 'Section 02: Emotional Story',
      path: '/assets/lifestyle/smart-appliance-home.png',
      source: 'AMEC Technology Official Asset (Source-smartappliance.png)',
      approvalStatus: 'Approved Lifestyle Asset',
      replacementRequired: false,
      alt: 'Modern kitchen and living room appliances powered uninterrupted'
    },
    solarRays: {
      id: 'lifestyle-solar-rays',
      name: 'Modern Workspace in Natural Daylight',
      section: 'Section 02: Emotional Story',
      path: '/assets/lifestyle/solar-rays-lifestyle.png',
      source: 'AMEC Technology Official Asset (Source-rays.png)',
      approvalStatus: 'Approved Lifestyle Asset',
      replacementRequired: false,
      alt: 'Productive workspace environment with reliable solar hybrid power'
    },
    hybridArchitecture: {
      id: 'lifestyle-hybrid-arch',
      name: 'Contemporary Residence Architectural Exterior',
      section: 'Section 02: Emotional Story',
      path: '/assets/lifestyle/hybrid-architecture-exterior.png',
      source: 'AMEC Technology Official Asset (Hybrid-energy.png)',
      approvalStatus: 'Approved Lifestyle Asset',
      replacementRequired: false,
      alt: 'Modern residential architecture harmonized with hybrid energy'
    }
  },
  productReveal: {
    frontFaceted: {
      id: 'reveal-front-faceted',
      name: 'SOURCE Faceted Architectural Shell (Front)',
      section: 'Section 01: Hero / Section 03: Product Reveal',
      path: '/assets/products/source-front-faceted.png',
      source: 'AMEC Technology Official 3D Render',
      approvalStatus: 'Approved Product Render',
      replacementRequired: false,
      alt: 'SOURCE geometric faceted front shell with silkscreened logo'
    },
    sideProfile: {
      id: 'reveal-side-profile',
      name: 'SOURCE Slim Profile with Emergency DC Switch & Louvers',
      section: 'Section 03: Product Reveal',
      path: '/assets/products/source-side-profile.png',
      source: 'AMEC Technology Official 3D Render',
      approvalStatus: 'Approved Product Render',
      replacementRequired: false,
      alt: 'SOURCE side profile showing dual acoustic cooling louvers and red DC isolator'
    },
    dualView: {
      id: 'reveal-dual-view',
      name: 'SOURCE Dual Elevation Studio Alignment',
      section: 'Section 03: Product Reveal',
      path: '/assets/products/source-dual-view.png',
      source: 'AMEC Technology Official 3D Render',
      approvalStatus: 'Approved Product Render',
      replacementRequired: false,
      alt: 'SOURCE side and front elevations in precision studio alignment'
    },
    frontView: {
      id: 'reveal-front-view',
      name: 'SOURCE Front Elevation & LED Interface',
      section: 'Section 03: Product Reveal',
      path: '/assets/products/source-product-front.png',
      source: 'AMEC Technology Official (source-product1.png)',
      approvalStatus: 'Approved Web Asset',
      replacementRequired: false,
      alt: 'SOURCE front profile with sleek architectural finish and status lighting'
    },
    perspectiveView: {
      id: 'reveal-perspective-view',
      name: 'SOURCE Perspective 3/4 View',
      section: 'Section 03: Product Reveal',
      path: '/assets/products/source-product-angle.png',
      source: 'AMEC Technology Official (source-product2.png)',
      approvalStatus: 'Approved Web Asset',
      replacementRequired: false,
      alt: 'SOURCE three-quarter perspective highlighting compact depth'
    },
    panelDetail: {
      id: 'reveal-panel-detail',
      name: 'Front Fascia & Intelligent Status Bar',
      section: 'Section 03: Product Reveal',
      path: '/assets/products/source-panel-detail.png',
      source: 'AMEC Technology Official (Visual panel.png)',
      approvalStatus: 'Approved Web Asset',
      replacementRequired: false,
      alt: 'Close-up of the SOURCE intelligent optical status indicator'
    },
    panelNight: {
      id: 'reveal-panel-night',
      name: 'Night Interface Glow',
      section: 'Section 03: Product Reveal',
      path: '/assets/products/source-panel-night.png',
      source: 'AMEC Technology Official (Visual panel (1).png)',
      approvalStatus: 'Approved Web Asset',
      replacementRequired: false,
      alt: 'Subtle ambient status bar illuminated during night backup operation'
    }
  },
  engineering: {
    dimensions: {
      id: 'eng-dimensions',
      name: 'Engineering Dimensions & Mounting Schematic',
      section: 'Section 08: Technical Specifications',
      path: '/assets/products/source-technical-dimensions.png',
      source: 'AMEC Technology Official CAD Drawing (Model-dimensions.png)',
      approvalStatus: 'Approved Engineering Asset',
      replacementRequired: false,
      alt: 'Technical blueprint showing 930 mm height, 485 mm width, and 200 mm depth'
    },
    adaptiveTech: {
      id: 'eng-adaptive-tech',
      name: 'Adaptive Energy Intelligence Diagram',
      section: 'Section 05: Engineering Story',
      path: '/assets/engineering/adaptive-intelligence.png',
      source: 'AMEC Technology Official (source-adapti.png)',
      approvalStatus: 'Approved Concept Graphic',
      replacementRequired: false,
      alt: 'Adaptive algorithms diagram illustrating power optimization'
    },
    solarCleanRobot: {
      id: 'eng-solar-clean',
      name: 'Touchless Solar Panel Cleaning Robotic Integration',
      section: 'Section 05: Engineering / Section 06: App',
      path: '/assets/engineering/solar-clean-robot.png',
      source: 'AMEC Technology Official (Source-Solar-panel-cleaning-machine.png)',
      approvalStatus: 'Approved Hardware Feature',
      replacementRequired: false,
      alt: 'Automated solar panel cleaning mechanism controlled via SOURCE'
    },
    realTimeManagement: {
      id: 'eng-real-time',
      name: 'Real-time Load Management Architecture',
      section: 'Section 05: Engineering Story',
      path: '/assets/engineering/real-time-management.png',
      source: 'AMEC Technology Official (Source-real-time.png)',
      approvalStatus: 'Approved Graphic',
      replacementRequired: false,
      alt: 'Sub-20 millisecond power transfer and real-time load management'
    }
  },
  app: {
    remoteControl: {
      id: 'app-remote',
      name: 'SOURCE App — Remote Control & Live Flow',
      section: 'Section 06: Smart Digital Experience',
      path: '/assets/app/app-remote-control.png',
      source: 'AMEC Technology UI (Source-remotecontrol.png)',
      approvalStatus: 'Approved Interface UI',
      replacementRequired: false,
      alt: 'SOURCE Mobile App interface displaying live power generation and storage'
    },
    inverterModes: {
      id: 'app-modes',
      name: 'SOURCE App — Mode Selection (Eco, Backup, Performance)',
      section: 'Section 06: Smart Digital Experience',
      path: '/assets/app/app-inverter-modes.png',
      source: 'AMEC Technology UI (Source-Invertermodes.png)',
      approvalStatus: 'Approved Interface UI',
      replacementRequired: false,
      alt: 'Operating mode selector for Eco, Backup, and Performance modes'
    },
    alertsDiagnostics: {
      id: 'app-alerts',
      name: 'SOURCE App — Real-time Alerts & System Diagnostics',
      section: 'Section 06: Smart Digital Experience',
      path: '/assets/app/app-alerts-diagnostics.png',
      source: 'AMEC Technology UI (Source-Aletrs&Diagnostic.png)',
      approvalStatus: 'Approved Interface UI',
      replacementRequired: false,
      alt: 'Predictive maintenance warnings and diagnostic telemetry'
    },
    gridInsights: {
      id: 'app-grid',
      name: 'SOURCE App — Grid Stability & Dependency Insights',
      section: 'Section 06: Smart Digital Experience',
      path: '/assets/app/app-grid-insights.png',
      source: 'AMEC Technology UI (Source-GridInsights.png)',
      approvalStatus: 'Approved Interface UI',
      replacementRequired: false,
      alt: 'Grid reliability analysis and blackout prevention history'
    },
    savingsRewards: {
      id: 'app-savings',
      name: 'SOURCE App — Financial Savings & Carbon Offset',
      section: 'Section 06: Smart Digital Experience',
      path: '/assets/app/app-savings-rewards.png',
      source: 'AMEC Technology UI (Source-Savings.png)',
      approvalStatus: 'Approved Interface UI',
      replacementRequired: false,
      alt: 'Estimated tariff savings, solar self-consumption, and CO2 reduction'
    },
    cleaningControl: {
      id: 'app-cleaning',
      name: 'SOURCE App — Solar Panel Touchless Cleaning System',
      section: 'Section 06: Smart Digital Experience',
      path: '/assets/app/app-clean-control.png',
      source: 'AMEC Technology UI (Source-6th-image.png)',
      approvalStatus: 'Approved Interface UI',
      replacementRequired: false,
      alt: 'Scheduling and triggering automated panel washing'
    }
  },
  applications: {
    residential: {
      id: 'app-env-res',
      name: 'Residential Installation — Luxury Modern Home',
      section: 'Section 07: Applications',
      path: '/assets/applications/app-env-residential.png',
      source: 'AMEC Technology Official Asset (Source-Residential.png)',
      approvalStatus: 'Approved Context Asset',
      replacementRequired: false,
      alt: 'Rooftop solar and backup battery setup for modern villa'
    },
    commercial: {
      id: 'app-env-comm',
      name: 'Commercial Facility — Corporate & Retail Center',
      section: 'Section 07: Applications',
      path: '/assets/applications/app-env-commercial.png',
      source: 'AMEC Technology Official Asset (Source-commercial.png)',
      approvalStatus: 'Approved Context Asset',
      replacementRequired: false,
      alt: 'Peak shaving and uninterrupted productivity in modern commercial building'
    },
    industrial: {
      id: 'app-env-ind',
      name: 'Small-Scale Industry — Workshop & Fabrication',
      section: 'Section 07: Applications',
      path: '/assets/applications/app-env-industrial.png',
      source: 'AMEC Technology Official Asset (source-smallscale.png)',
      approvalStatus: 'Approved Context Asset',
      replacementRequired: false,
      alt: 'Continuous 3-phase clean power for precision manufacturing and tools'
    },
    remote: {
      id: 'app-env-rem',
      name: 'Remote & Grid-Isolated Installation',
      section: 'Section 07: Applications',
      path: '/assets/applications/app-env-remote.png',
      source: 'AMEC Technology Official Asset (Source-remote.png)',
      approvalStatus: 'Approved Context Asset',
      replacementRequired: false,
      alt: 'Self-sufficient microgrid hybrid setup in remote off-grid geography'
    }
  },
  brand: {
    logo: {
      id: 'brand-logo',
      name: 'AMEC Technology Official Logo',
      section: 'Global Navigation & Footer',
      path: '/assets/brand/amec-logo.png',
      source: 'AMEC Technology Official Web Asset',
      approvalStatus: 'Approved Brand Asset',
      replacementRequired: false,
      alt: 'AMEC Technology'
    },
    shield: {
      id: 'brand-shield',
      name: 'AMEC Shield Emblem',
      section: 'Hero / Product Details / Quality Badge',
      path: '/assets/brand/amec-shield-emblem.png',
      source: 'AMEC Technology Official Asset',
      approvalStatus: 'Approved Brand Asset',
      replacementRequired: false,
      alt: 'AMEC Shield Symbol'
    }
  }
};

export default ASSET_INVENTORY;
