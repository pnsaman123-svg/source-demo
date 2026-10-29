/**
 * Engineering Story Features
 * Based on verified AMEC SOURCE engineering pillars.
 */

export const ENGINEERING_FEATURES = [
  {
    id: '01',
    code: '01',
    title: 'Smart Energy Intelligence',
    subtitle: 'Predictive algorithmic orchestration',
    copy: 'Intelligent energy management algorithms continuously analyze solar generation, household consumption demand, grid tariff windows, and battery storage levels to coordinate real-time power flow with minimal losses.',
    metric: 'Real-time arbitration',
    metricLabel: 'Microsecond DSP dispatching',
    icon: '/assets/engineering/icon-energy-intelligence.png',
    bgTheme: 'light',
    detailList: [
      'Solar-to-load direct routing minimizes double conversion losses',
      'Learns daily load patterns to forecast evening power requirements',
      'Autonomous peak shaving reduces expensive grid tier usage'
    ]
  },
  {
    id: '02',
    code: '02',
    title: 'Liquid-Cooled Thermal Management',
    subtitle: 'Uncompromising thermal headroom in extreme climates',
    copy: 'An integrated closed-loop liquid cooling system maintains critical power electronics and battery cells at optimal operating temperatures, ensuring sustained 6 kW continuous rating even during high ambient Indian summer conditions.',
    metric: '-10°C to 55°C',
    metricLabel: 'Operational thermal window',
    icon: '/assets/engineering/icon-liquid-cooling.png',
    bgTheme: 'dark',
    detailList: [
      'Eliminates noisy external high-RPM fans, maintaining <28 dBA whisper operation',
      'Uniform heat dissipation extends semiconductor and capacitor longevity',
      'Automotive-grade coolant loop sealed for long-term maintenance-free life'
    ]
  },
  {
    id: '03',
    code: '03',
    title: 'Grid Interaction & Protection',
    subtitle: 'Resilience against surges, fluctuations, and sags',
    copy: 'Comprehensive grid monitoring and active protection mechanisms detect voltage sags, over-frequency surges, and lightning transients, isolating the system safely in under 20 ms to safeguard sensitive residential appliances.',
    metric: '< 20 ms',
    metricLabel: 'Anti-islanding transfer time',
    icon: '/assets/engineering/icon-grid-protection.png',
    bgTheme: 'light',
    detailList: [
      'Fast-acting solid-state disconnect disconnects utility before appliances notice',
      'Surge capability up to 9 kW for 10 seconds handles heavy inductive compressor starts',
      'Certified anti-islanding protects grid maintenance workers during blackouts'
    ]
  },
  {
    id: '04',
    code: '04',
    title: 'Intelligent Auto Diagnostics',
    subtitle: 'Proactive telemetry and early fault containment',
    copy: 'High-frequency telemetry monitors cell balancing, DC string impedance, and thermal gradients across 48 internal sensor checkpoints to identify potential irregularities before they can trigger service interruptions.',
    metric: '48+',
    metricLabel: 'Internal telemetry checkpoints',
    icon: '/assets/engineering/icon-auto-diagnostics.png',
    bgTheme: 'dark',
    detailList: [
      'Automated cloud diagnostic reports sent directly to AMEC certified service centers',
      'Over-the-air (OTA) firmware enhancements keep inverter algorithms continuously updated',
      'Clear, actionable plain-language diagnostic notifications in the mobile app'
    ]
  },
  {
    id: '05',
    code: '05',
    title: 'Designed for Serviceability',
    subtitle: 'Modular field-replaceable subassemblies',
    copy: 'An ergonomic, service-friendly modular architecture enables qualified technicians to rapidly inspect, isolate, and service subassemblies through a dedicated front service hatch without removing the entire wall chassis.',
    metric: 'Modular chassis',
    metricLabel: 'Front-accessible service bay',
    icon: '/assets/engineering/icon-serviceability.png',
    bgTheme: 'light',
    detailList: [
      'Separated high-voltage DC, AC wiring bay, and low-voltage telemetry compartments',
      'Quick-release mechanical fasteners reduce onsite maintenance duration',
      'Direct BLE 5.2 diagnostic interface for field service engineering diagnostics'
    ]
  }
];

export default ENGINEERING_FEATURES;
