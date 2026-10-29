# SOURCE — Premium Product Experience Website
> **Concept:** ENERGY, IN HARMONY  
> **Brand:** SOURCE by AMEC Technology  
> **Product:** Intelligent Smart Solar Hybrid Inverter & Energy Management Platform (6 kW Continuous / 6.5 kWh LiFePO₄ / < 20 ms Switchover)

A product launch website for **SOURCE**, blending the lifestyle storytelling of premium architectural home product brands (inspired by Sepura Home) with the precision and engineering rigor of AMEC Technology.

---

## 🌟 Live Demo & Architecture

The application is built with a modern frontend stack:
- **Framework:** React 18 + Vite 6
- **Styling:** Tailwind CSS with custom editorial design palette (Warm Ivory `#F7F5F0`, Graphite `#242724`, Muted Grey `#777970`, Solar Amber `#D9A441`, Deep Technical Green `#142C27`)
- **Typography:** Plus Jakarta Sans & JetBrains Mono
- **Components:** Fully responsive, modular component architecture with accessible semantics

### Running Locally
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Or build and preview production bundle
npm run build
npm run preview
```
The server runs by default at `http://localhost:5173`.

---

## 📐 Section Storyline & Narrative Flow

1. **SECTION 01 — CINEMATIC HERO**
   - **Headline:** *A quieter kind of power.*
   - **Copy:** Meet SOURCE. An intelligent hybrid energy system designed to bring solar, battery and grid power together, making energy work more seamlessly around you.
   - **Features:** Expedited dual-mode visual switch (Product Profile studio render vs. Architectural daylight setting), verified micro-specifications strip (6 kW Continuous, 6.5 kWh LiFePO₄, < 20 ms transfer).

2. **SECTION 02 — EMOTIONAL STORY**
   - **Headline:** *Power should never be a question mark.*
   - **Copy:** Dependability narrative covering modern residential sanctuaries, workspaces, and architectural harmony.
   - **Vignettes:** Unbroken everyday comfort, workstation continuity, whisper-quiet `< 28 dBA` acoustic signature.

3. **SECTION 03 — PRODUCT REVEAL**
   - **Headline:** *Meet SOURCE.*
   - **Subheading:** *One system. A more intelligent energy experience.*
   - **Features:** Interactive 4-angle viewer (3/4 Perspective, Front Elevation, Fascia & Status Bar, Night Ambience) + verified hardware layer callouts.

4. **SECTION 04 — INTERACTIVE ENERGY ECOSYSTEM**
   - **Headline:** *Everything working together.*
   - **Subheading:** *One connected system. Multiple energy sources. Intelligent control.*
   - **Simulation:** Interactive SVG directional power flows connecting Solar PV, Utility Grid, SOURCE Core, LiFePO₄ Battery, and Connected Home Loads.
   - **Modes:** Selectable across **01 ON-GRID**, **02 OFF-GRID**, **03 HYBRID**, and **04 BACKUP** with real-time wattage telemetry, active dispatch logic breakdown, and provisional engineering notes.

5. **SECTION 05 — ENGINEERING STORY**
   - **Headline:** *Intelligence, built into every layer.*
   - **Pillars:** 
     1. Smart Energy Intelligence
     2. Liquid-Cooled Thermal Management (-10°C to 55°C)
     3. Grid Interaction & Protection (< 20 ms anti-islanding)
     4. Intelligent Auto Diagnostics (48+ telemetry checkpoints)
     5. Designed for Serviceability (front-accessible modular bay)
     + Extreme thermal resilience & touchless robotic solar cleaning integration.

6. **SECTION 06 — SMART DIGITAL EXPERIENCE**
   - **Headline:** *Your energy. Within reach.*
   - **Features:** Smartphone device showcase with 6 authentic companion app screens:
     1. Remote Control & Live Flow
     2. Inverter Modes (Eco, Backup, Performance)
     3. Alerts & Diagnostics
     4. Grid Insights & Stability
     5. Savings & Carbon Offset
     6. Solar Panel Touchless Cleaning System
     + App Store / Google Play badges and BLE 5.2 / Wi-Fi telemetry notes.

7. **SECTION 07 — APPLICATIONS**
   - **Headline:** *Designed for the way we live and work.*
   - **Environments:** 
     - **Residential:** Rooftop solar with 24/7 backup for modern homes and villas.
     - **Commercial:** Peak shaving and demand response for offices, clinics, and retail.
     - **Small-Scale Industry:** 9 kW surge protection for workshops and fabrication tools.
     - **Remote Sites:** Autonomous microgrid-grade hybrid power for off-grid estates.

8. **SECTION 08 — TECHNICAL SPECIFICATIONS**
   - **Headline:** *Every detail has a purpose.*
   - **Modules:** Complete categorized specifications across Inverter Module (6 kW, 230 V AC, 9 kW surge), Battery Module (6.5 kWh, 51 V, LiFePO₄, 10-year warranty), Physical & General.
   - **Engineering CAD Blueprint:** Verified 930 × 485 × 200 mm dimensional drawing.

9. **SECTION 09 — CLOSING STORY & FAQS**
   - **Sub-section:** 5 official AMEC technical FAQs addressing automatic source arbitration, power outage transitions, off-grid capability, app control, and LiFePO₄ battery lifespan.
   - **Headline:** *More than power. Peace of mind.*
   - **CTAs:** Direct "Request a Quote" and "Talk to an Expert" consultation triggers.

10. **SECTION 10 — FOOTER**
    - Brand mark: SOURCE by AMEC Technology
    - Verified contact information: `info@amectechnology.com`, `+91 9021510318`
    - Facilities: Nagpur MIDC Hub & Bangalore HSR Layout Center
    - Official links to `amectechnology.com`, legal policies, and interactive Asset Registry.

---

## 🗂️ Asset Management Strategy

All assets are strictly decoupled and governed through `src/data/assetInventory.js`:
- **Traceability:** Every asset records its name, target section, origin, approval status, and replacement requirement.
- **Independence:** Replacing temporary or provisional CAD renders with newer high-resolution photography requires only updating files in `public/assets/` without touching component code.
- **Transparency:** The live **Asset Inventory Registry** can be opened anytime via the header or footer pill to review all 22 tracked assets and their verification status.
