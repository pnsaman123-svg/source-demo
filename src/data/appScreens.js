/**
 * Mobile App Showcase Screens Data
 * Features official AMEC SOURCE app interfaces and detailed interactive concept previews.
 */

export const APP_SCREENS = [
  {
    id: 'remote-control',
    tab: 'Live Telemetry',
    number: '01',
    title: 'Remote Control & Live Flow',
    headline: 'Real-time visibility from anywhere in the world.',
    copy: 'The SOURCE companion app provides full dynamic oversight of energy flow between your solar array, 6.5 kWh battery, utility grid, and connected domestic circuits in real-time.',
    image: '/assets/app/app-remote-control.png',
    highlights: [
      { label: 'Instant Sync', desc: 'BLE 5.2 local & Wi-Fi cloud synchronization' },
      { label: 'Real-time Watts', desc: 'Granular generation, storage, and consumption readings' },
      { label: 'Manual Overrides', desc: 'One-touch emergency power reserve locking' }
    ]
  },
  {
    id: 'inverter-modes',
    tab: 'Mode Switching',
    number: '02',
    title: 'Inverter Operating Modes',
    headline: 'Adapt system behavior with a single tap.',
    copy: 'Switch effortlessly between Eco Mode for maximum bill savings, Backup Mode for uninterrupted energy reserve during stormy weather, and Performance Mode for demanding daytime appliances.',
    image: '/assets/app/app-inverter-modes.png',
    highlights: [
      { label: 'Eco Mode', desc: 'Prioritizes maximum solar self-consumption and battery cycling' },
      { label: 'Backup Priority', desc: 'Preserves 85%+ state-of-charge for impending storm warnings' },
      { label: 'Performance', desc: 'Unlocks peak 9 kW surge headroom for heavy motor loads' }
    ]
  },
  {
    id: 'alerts-diagnostics',
    tab: 'Diagnostics',
    number: '03',
    title: 'Alerts & Preventive Diagnostics',
    headline: 'Peace of mind with proactive health alerts.',
    copy: 'Stay informed on system health, grid brownout occurrences, temperature thresholds, and predictive battery maintenance with clean, jargon-free notifications.',
    image: '/assets/app/app-alerts-diagnostics.png',
    highlights: [
      { label: 'Proactive Warnings', desc: 'Detects grid voltage drift and micro-outages' },
      { label: 'One-Tap Service', desc: 'Direct escalation to certified AMEC technical support' },
      { label: 'Event Logs', desc: 'Detailed timestamped power quality audit history' }
    ]
  },
  {
    id: 'grid-insights',
    tab: 'Grid Insights',
    number: '04',
    title: 'Grid Stability & Dependency',
    headline: 'Understand your true energy independence.',
    copy: 'Gain transparent insights into grid uptime, peak tariff windows, outage durations, and your historical reduction in dependence on fossil-fuel utility power.',
    image: '/assets/app/app-grid-insights.png',
    highlights: [
      { label: 'Uptime Metrics', desc: 'Exact logs of blackout hours avoided' },
      { label: 'Tariff Avoidance', desc: 'Visual tracking of high peak-rate energy diverted' },
      { label: 'Frequency Stability', desc: 'Voltage harmonic and stability analytics' }
    ]
  },
  {
    id: 'savings-rewards',
    tab: 'Savings & Impact',
    number: '05',
    title: 'Financial Savings & Carbon Offset',
    headline: 'Quantify your economic and environmental return.',
    copy: 'SOURCE accurately computes currency saved through solar self-consumption, grid peak-hour avoidance, and cumulative kilograms of CO2 avoided since installation.',
    image: '/assets/app/app-savings-rewards.png',
    highlights: [
      { label: 'Cost Reductions', desc: 'Monthly electricity bill reduction estimations' },
      { label: 'CO₂ Impact', desc: 'Equivalent trees planted and carbon emissions averted' },
      { label: 'ROI Progress', desc: 'System payback amortization timeline' }
    ]
  },
  {
    id: 'clean-control',
    tab: 'Robot Cleaning',
    number: '06',
    title: 'Solar Panel Touchless Cleaning',
    headline: 'Maintain peak generation without manual washing.',
    copy: 'Integrate directly with AMEC touchless cleaning automation. Schedule automated water-efficient wiping cycles or trigger cleaning following dust storms straight from your smartphone.',
    image: '/assets/app/app-clean-control.png',
    highlights: [
      { label: 'Automated Schedules', desc: 'Pre-dawn cleaning before solar generation begins' },
      { label: 'Dust Detection', desc: 'Performance-drop trigger automatically prompts cleaning' },
      { label: 'Water Conservation', desc: 'Up to 80% water savings over manual hose washing' }
    ]
  }
];

export default APP_SCREENS;
