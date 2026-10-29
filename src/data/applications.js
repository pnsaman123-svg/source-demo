/**
 * Applications Data
 * Real-world installation environments for SOURCE.
 */

export const APPLICATIONS_DATA = [
  {
    id: 'residential',
    category: 'Residential',
    headline: 'Modern Homes & Architectural Villas',
    copy: 'Rooftop solar integration coupled with 24/7 seamless battery backup. Silent, elegant operation that preserves domestic peace while powering HVAC, refrigeration, lighting, and home workstations without interruption.',
    stats: [
      { label: 'Typical Configuration', value: '1× SOURCE (6 kW / 6.5 kWh)' },
      { label: 'Outage Switchover', value: '< 20 milliseconds' },
      { label: 'Acoustic Signature', value: '< 28 dBA (Whisper Silent)' }
    ],
    image: '/assets/applications/app-env-residential.png',
    badge: 'Zero Aesthetic Compromise',
    keyBenefit: 'Powering everyday comforts through unpredictable grid conditions.'
  },
  {
    id: 'commercial',
    category: 'Commercial',
    headline: 'Corporate Offices, Clinics & Boutiques',
    copy: 'Peak-shaving and demand response engineered for commercial facilities. Protect servers, client workstations, and sensitive diagnostic medical equipment while reducing expensive daytime utility tariff tiers.',
    stats: [
      { label: 'Typical Configuration', value: '1–3× SOURCE Modular Array' },
      { label: 'Peak Tariff Reduction', value: 'Up to 38% Daytime Offset' },
      { label: 'Diagnostic Protection', value: 'Pure Sine Wave AC Output' }
    ],
    image: '/assets/applications/app-env-commercial.png',
    badge: 'Business Continuity',
    keyBenefit: 'Eliminating costly operational downtime and diesel generator emissions.'
  },
  {
    id: 'industrial',
    category: 'Small-Scale Industry',
    headline: 'Fabrication Workshops & Light Manufacturing',
    copy: 'Reliable, surge-resistant power for CNC equipment, pneumatic machinery, and precision tools. Handles sudden 9 kW inductive load surges without voltage sag or machine halting.',
    stats: [
      { label: 'Surge Capability', value: '9 kW for 10 Seconds' },
      { label: 'Voltage Regulation', value: '230 V AC ±5%' },
      { label: 'Uptime Reliability', value: '99.9% Critical Circuit' }
    ],
    image: '/assets/applications/app-env-industrial.png',
    badge: 'High Surge Tolerance',
    keyBenefit: 'Safeguarding production cycles against erratic industrial feeder lines.'
  },
  {
    id: 'remote',
    category: 'Remote Sites',
    headline: 'Off-Grid Estates, Resorts & Remote Facilities',
    copy: 'Microgrid-grade hybrid power engineered for isolated geography without grid connection. Maximizes every ray of sunlight, stores energy in durable LiFePO4 cells, and manages auxiliary generator dispatch.',
    stats: [
      { label: 'Grid Dependency', value: '0% (Self-Sustaining)' },
      { label: 'Operating Thermal', value: '-10 °C to 55 °C' },
      { label: 'Battery Lifespan', value: '10-Year Warranty' }
    ],
    image: '/assets/applications/app-env-remote.png',
    badge: 'Autonomous Resilience',
    keyBenefit: 'Independent clean power in the most demanding geographical frontiers.'
  }
];

export default APPLICATIONS_DATA;
