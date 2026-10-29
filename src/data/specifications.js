/**
 * Technical Specifications Data
 * Verified against AMEC Technology official technical documentation and prompt requirements.
 */

export const TECHNICAL_SPECS = {
  inverter: {
    category: 'Inverter Module',
    headline: '6 kW Continuous • 230 V AC Pure Sine Wave',
    description: 'High-efficiency hybrid inverter delivering clean, stable AC output with sub-20ms uninterruptible transfer switching.',
    items: [
      { label: 'Continuous Power Output', value: '6 kW', highlight: true, note: 'Tested for continuous load at nominal ambient' },
      { label: 'AC Output Voltage', value: '230 V AC ±5%, 50 Hz', note: 'Pure Sine Wave, Total Harmonic Distortion < 3%' },
      { label: 'DC Input Voltage Range', value: '42 V – 60 V', note: 'Compatible with standard 48V/51.2V LFP configurations' },
      { label: 'Surge Power Protection', value: '9 kW (for 10 seconds)', highlight: true, note: 'Handles air conditioning & pump startup surges' },
      { label: 'Transfer Switch Time', value: '< 20 ms', highlight: true, note: 'Seamless transition prevents equipment reboot' },
      { label: 'Supported Operating Modes', value: 'On-Grid, Off-Grid, Hybrid, Backup', note: 'Selectable via SOURCE Mobile App' },
      { label: 'Peak Inverter Efficiency', value: '97.6%', note: 'Calculated at optimal nominal load condition' },
      { label: 'Thermal Architecture', value: 'Liquid-Cooled Thermal Management', note: 'Engineered for sustained performance in hot climates' }
    ]
  },
  battery: {
    category: 'Battery Module',
    headline: '6.5 kWh Storage • LiFePO₄ Chemistry',
    description: 'Automotive-grade Lithium Iron Phosphate chemistry engineered for thermal runaway resistance and an industry-leading 10-year lifespan.',
    items: [
      { label: 'Battery Usable Capacity', value: '6.5 kWh', highlight: true, note: 'Modular expansion ready for scaling' },
      { label: 'Nominal System Voltage', value: '51 V (51.2 V Nominal)', note: 'Low-voltage safe DC topology' },
      { label: 'Battery Chemistry', value: 'LiFePO₄ (Lithium Iron Phosphate)', highlight: true, note: 'Highest thermal stability & non-toxic formulation' },
      { label: 'Operating Temperature Range', value: '-10 °C to 55 °C', note: 'Validated for demanding tropical & northern Indian conditions' },
      { label: 'Cycle Life Expectancy', value: '6,000+ Cycles @ 80% DoD', note: 'Over 15 years under typical daily cycling' },
      { label: 'Manufacturer Warranty', value: '10 Years Comprehensive', highlight: true, note: 'Covers both Inverter & Battery modules' },
      { label: 'Internal BMS Protection', value: 'Cell balancing, over-voltage, short-circuit, over-temp' },
      { label: 'Depth of Discharge (DoD)', value: 'Up to 90%', note: 'Maximizes usable stored energy daily' }
    ]
  },
  general: {
    category: 'Physical & Environmental',
    headline: 'Die-Cast Aluminum • IP65 Weather-Resistant',
    description: 'Precision industrial design combining extreme structural rigidity with effortless wall or ground installation.',
    items: [
      { label: 'Total System Weight', value: '65 kg', note: 'Integrated inverter + battery combined chassis' },
      { label: 'Physical Dimensions (H × W × D)', value: '930 × 485 × 200 mm', highlight: true, note: 'Ultra-slim wall footprint under 8 inches deep' },
      { label: 'Enclosure Material', value: 'Die-Cast Aluminum Alloy', note: 'Superior heat dissipation and corrosion resistance' },
      { label: 'Mounting Flexibility', value: 'Wall Mount / Ground Mount Base', note: 'Heavy-duty wall bracket included in package' },
      { label: 'Connectivity & Wireless', value: 'BLE 5.2 / Dual-band Wi-Fi (2.4 & 5 GHz)', highlight: true, note: 'Instant local discovery + cloud telemetry sync' },
      { label: 'Acoustic Noise Level', value: '< 28 dBA @ 1 meter', note: 'Ultra-quiet liquid cooling loop eliminates loud fan whine' },
      { label: 'Ingress Protection', value: 'Designed to IP65 Standard', note: 'Protected against dust and driving monsoon rain' },
      { label: 'Certifications & Compliance', value: 'Engineered to IEC 62109, IEC 62619, CE, BIS Ready', note: 'Meets national grid code standards' }
    ]
  }
};

export default TECHNICAL_SPECS;
