/**
 * Frequently Asked Questions
 * Official technical and operational answers from AMEC Technology.
 */

export const FAQS = [
  {
    question: 'How does SOURCE decide whether to use solar, battery, or grid power?',
    answer:
      'SOURCE continuously monitors solar generation, battery status, grid availability, and power demand using intelligent energy management algorithms. It automatically prioritizes solar energy first for connected loads, then stores excess in the LiFePO4 battery, and coordinates with the utility grid only when required—ensuring maximum economic efficiency and uninterrupted power.'
  },
  {
    question: 'What happens during a power outage?',
    answer:
      'SOURCE automatically islands from the grid within 20 milliseconds and continues supplying critical circuits from stored battery energy. Because 20 ms is faster than a standard AC cycle dropout, connected computers, appliances, and lighting continue running seamlessly without rebooting or flickering.'
  },
  {
    question: 'Can SOURCE operate without a utility grid?',
    answer:
      'Yes. In Off-Grid mode, SOURCE runs the entire installation from solar and battery storage. Its autonomous frequency and voltage regulation algorithms deliver stable pure sine wave 230 V AC power without relying on any external utility feed—making it ideal for remote homes, farmhouses, and off-grid facilities.'
  },
  {
    question: 'How can I monitor and control my SOURCE system?',
    answer:
      'The SOURCE™ mobile app (available for iOS and Android) provides real-time energy flow visualizations, remote mode toggling (Eco, Backup, Performance), health diagnostics, and historical savings insights. It connects locally via Bluetooth Low Energy (BLE 5.2) and remotely over dual-band Wi-Fi with cloud telemetry.'
  },
  {
    question: 'What type of battery does SOURCE use, and how long does it last?',
    answer:
      'SOURCE utilizes premium Lithium Iron Phosphate (LiFePO₄ / LFP) battery chemistry, chosen for exceptional thermal stability, non-combustible safety, and extended cycle life (over 6,000 cycles). Every SOURCE system ships with an industry-leading 10-year comprehensive warranty covering both the inverter module and the battery module.'
  }
];

export default FAQS;
