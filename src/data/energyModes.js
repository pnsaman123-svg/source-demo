/**
 * Energy Operating Modes Data
 * Configures the interactive energy ecosystem simulation.
 * Decoupled data model allowing straightforward updates following engineering verification.
 */

export const ENERGY_MODES = [
  {
    id: 'on-grid',
    code: '01',
    name: 'ON-GRID',
    tagline: 'Solar first, grid connected interaction',
    badge: 'High Self-Consumption & Net-Metering',
    description:
      'SOURCE prioritizes solar power for connected loads while intelligently interacting with the utility grid. Excess solar generation can be exported or stored, while the grid seamlessly supplements power when solar generation is insufficient.',
    technicalNote:
      'Provisional flow logic: Grid export enabled if net-metering permits. Real-time anti-islanding monitors grid voltage and frequency within strict regulatory boundaries.',
    metrics: {
      solar: { power: '4.2 kW', status: 'Generating', active: true, direction: 'inward' },
      battery: { power: '1.1 kW', soc: '82%', status: 'Charging', active: true, direction: 'inward' },
      grid: { power: '0.0 kW', status: 'Exporting 1.1 kW', active: true, direction: 'outward' },
      load: { power: '3.1 kW', status: 'Full Solar Supply', active: true, direction: 'outward' },
      transferTime: '< 20 ms standby'
    },
    activeFlows: [
      { from: 'solar', to: 'inverter', active: true, rate: 'fast', label: '4.2 kW Solar PV' },
      { from: 'inverter', to: 'load', active: true, rate: 'fast', label: '3.1 kW Home Load' },
      { from: 'inverter', to: 'battery', active: true, rate: 'normal', label: '1.1 kW Storage' },
      { from: 'inverter', to: 'grid', active: false, rate: 'normal', label: 'Export Standby' },
      { from: 'grid', to: 'inverter', active: false, rate: 'none', label: 'Grid Suppressed' }
    ]
  },
  {
    id: 'off-grid',
    code: '02',
    name: 'OFF-GRID',
    tagline: 'Complete energy autonomy & independence',
    badge: '100% Self-Sustained',
    description:
      'SOURCE operates completely independently of the utility grid, managing available solar and battery energy to supply connected loads, subject to system sizing and energy availability.',
    technicalNote:
      'Provisional flow logic: Utility grid isolated. Inverter forms a microgrid voltage and frequency reference. Battery and solar dynamic balancing handles heavy appliance surge.',
    metrics: {
      solar: { power: '3.8 kW', status: 'Generating', active: true, direction: 'inward' },
      battery: { power: '0.7 kW', soc: '85%', status: 'Supplying Deficit', active: true, direction: 'inward' },
      grid: { power: '0.0 kW', status: 'Physically Isolated', active: false, direction: 'none' },
      load: { power: '4.5 kW', status: 'Supplied (Solar + Storage)', active: true, direction: 'outward' },
      transferTime: 'Autonomous Microgrid'
    },
    activeFlows: [
      { from: 'solar', to: 'inverter', active: true, rate: 'fast', label: '3.8 kW Solar PV' },
      { from: 'battery', to: 'inverter', active: true, rate: 'normal', label: '0.7 kW LiFePO4' },
      { from: 'inverter', to: 'load', active: true, rate: 'fast', label: '4.5 kW Load' },
      { from: 'grid', to: 'inverter', active: false, rate: 'none', label: 'Grid Disconnected' }
    ]
  },
  {
    id: 'hybrid',
    code: '03',
    name: 'HYBRID',
    tagline: 'Intelligent multi-source real-time routing',
    badge: 'Algorithmic Optimization',
    description:
      'SOURCE coordinates solar, battery, and grid power simultaneously based on system conditions, tariff schedules, and predictive load algorithms for optimal economic balance and uninterrupted power.',
    technicalNote:
      'Provisional flow logic: Dynamic power arbitration. Coordinates all 3 power paths with microsecond sampling to ensure zero flicker and minimum grid tariff expenditure.',
    metrics: {
      solar: { power: '4.2 kW', status: 'Peak Generation', active: true, direction: 'inward' },
      battery: { power: '1.2 kW', soc: '78%', status: 'Buffer & Float', active: true, direction: 'inward' },
      grid: { power: '0.1 kW', status: 'Synchronized Standby', active: true, direction: 'inward' },
      load: { power: '3.1 kW', status: 'Harmonized Supply', active: true, direction: 'outward' },
      transferTime: 'Continuous Sync'
    },
    activeFlows: [
      { from: 'solar', to: 'inverter', active: true, rate: 'fast', label: '4.2 kW PV Array' },
      { from: 'inverter', to: 'battery', active: true, rate: 'normal', label: '1.2 kW Storage' },
      { from: 'inverter', to: 'load', active: true, rate: 'fast', label: '3.1 kW Household' },
      { from: 'grid', to: 'inverter', active: true, rate: 'slow', label: 'Grid Reference' }
    ]
  },
  {
    id: 'backup',
    code: '04',
    name: 'BACKUP',
    tagline: 'Instantaneous islanding during grid blackouts',
    badge: 'Sub-20 Millisecond Transition',
    description:
      'During grid outages, SOURCE transitions to emergency backup operation in under 20 milliseconds, supplying supported critical loads from stored battery energy without appliance reboot or flicker.',
    technicalNote:
      'Provisional flow logic: Internal high-speed transfer switch trips open the grid breaker within 20 ms. LiFePO4 battery steps in up to 9 kW surge capability for motor loads.',
    metrics: {
      solar: { power: '0.0 kW', status: 'Night / Offline', active: false, direction: 'none' },
      battery: { power: '1.8 kW', soc: '85%', status: 'Discharging to Load', active: true, direction: 'outward' },
      grid: { power: '0.0 kW', status: 'Grid Outage Detected', active: false, direction: 'none' },
      load: { power: '1.8 kW', status: 'Protected Critical Loads', active: true, direction: 'outward' },
      transferTime: '< 20 ms Transfer Achieved'
    },
    activeFlows: [
      { from: 'battery', to: 'inverter', active: true, rate: 'fast', label: '1.8 kW Battery Reserve' },
      { from: 'inverter', to: 'load', active: true, rate: 'fast', label: '1.8 kW Critical Circuits' },
      { from: 'grid', to: 'inverter', active: false, rate: 'none', label: 'Grid Outage (Isolated)' },
      { from: 'solar', to: 'inverter', active: false, rate: 'none', label: 'Solar Inactive' }
    ]
  }
];

export default ENERGY_MODES;
