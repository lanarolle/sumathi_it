import type { ProductCategory } from "@/types/product";

export const uavCategories: {
  title: string;
  slug: ProductCategory;
  summary: string;
  image: string;
  tagline?: string;
  description?: string;
  features?: string[];
  applications?: string[];
  services?: string[];
  whyChooseUs?: string[];
  /** Full-width image + overlay text banner shown below the intro description */
  bannerImage?: string;
  bannerEyebrow?: string;
  bannerHeading?: string;
  bannerText?: string;
  /** Drones only: full-width header video */
  videoUrl?: string;
  videoPoster?: string;
}[] = [
  {
    title: "Drones",
    slug: "drones",
    summary: "Enterprise UAV platforms for inspection, mapping, agriculture, and public safety. Our drone lineup includes advanced multi-rotor and fixed-wing aircraft designed for professional operations across diverse industries. From precision agriculture spraying and crop health monitoring to infrastructure inspection of power lines, bridges, and buildings, our drones deliver reliable performance in demanding field conditions.",
    image: "/images/uav/done.jpg",
    tagline: "Better Growth, Better Life",
    description:
    "Revolutionizing Agave Farming with Agras T50 Drones: Using drones to improve agave spraying efficiency and support tequila production in Mexico.",
    videoUrl: "/videos/uav/drone.mp4",
    videoPoster: "/images/uav/banner-drones.jpg",
    bannerImage: "/images/uav/banner-drones.jpg",
    bannerEyebrow: "Enterprise UAV",
    bannerHeading: "Built for the field, trusted for the mission",
    bannerText:
      "Reliable drone solutions for agriculture, infrastructure, and public safety operations."
  },
  {
    title: "Software",
    slug: "software",
    summary:
      "A complete mapping, modeling, mission planning, and data processing software suite that turns raw drone imagery and sensor data into actionable maps, 3D models, and analytics — streamlining the entire workflow from flight to final deliverable.",
    image: "/images/uav/software.jpg",
    description:
      "Unlock the full potential of your drone with our specialized software for flight automation, photogrammetry, and 3D modeling. Capturing good data in the field is only half the challenge — the real value comes from processing that data efficiently and accurately. Our software suite covers the entire pipeline: plan autonomous missions with precise waypoint navigation and overlap settings, capture imagery and point clouds in the field, then process that raw data into high-resolution orthomosaics, digital elevation models, and photorealistic 3D reconstructions. Built-in AI analytics tools automatically detect and classify objects such as crop stress zones, structural defects, or equipment anomalies, cutting down the manual review time that traditionally slows down large-scale mapping and inspection projects. Whether you're managing a single survey or coordinating fleets of drones across multiple sites, our software scales to match your operational needs.",
    features: [
      "Flight Planning - Autonomous missions with waypoint navigation, adjustable overlap, and terrain-aware altitude control for consistent, repeatable data capture.",
      "Photogrammetry - Convert overlapping images into accurate 2D orthomosaic maps and detailed 3D models for surveying, construction, and land management.",
      "LiDAR Processing - Generate high-accuracy, dense point clouds capable of penetrating vegetation to capture true ground elevation and structural detail.",
      "AI Analytics - Automated object detection and classification for agriculture, infrastructure inspection, and asset management, reducing manual data review."
    ],
    bannerImage: "/images/uav/banner-software.jpg",
    bannerEyebrow: "Data Processing",
    bannerHeading: "Turn raw flight data into decisions",
    bannerText:
      "Our software connects flight planning, photogrammetry, and analytics into one seamless workflow. Transform field imagery into maps and insights without manual data stitching."
  },
  {
    title: "GNSS (Global Navigation Satellite Systems)",
    slug: "gnss",
    summary:
      "High-precision GNSS positioning and geospatial accuracy tools designed for survey, construction, and GIS field operations — delivering centimeter-to-millimeter accuracy even in signal-challenged or remote environments.",
    image: "/images/uav/GNSS.jpg",
    description:
      "Achieve millimeter-level precision in surveying, construction, and GIS with our advanced GNSS solutions. Accurate positioning is the foundation of any geospatial project, and even small errors in ground control can compound into significant discrepancies across large sites. Our GNSS receivers combine RTK (Real-Time Kinematic) and PPK (Post-Processed Kinematic) correction methods to deliver reliable centimeter and millimeter-level accuracy, whether you're establishing ground control points, staking out construction layouts, or collecting GIS data in the field. Multi-constellation support means the receivers can lock onto satellites from GPS, GLONASS, Galileo, and BeiDou simultaneously, improving reliability in areas with obstructed sky view such as dense urban environments or forested terrain. Rugged, weatherproof housings ensure these devices perform consistently across extreme temperatures, rain, and dust, making them dependable tools for teams working in remote or harsh field conditions.",
    features: [
      "RTK & PPK Technology – Real-time kinematic and post-processing correction methods deliver centimeter-to-millimeter positioning accuracy in the field or during post-flight processing.",
      "Multi-Constellation Support – Simultaneous tracking of GPS, GLONASS, Galileo, and BeiDou satellites for stronger signal lock and improved reliability in obstructed environments.",
      "Rugged & Weatherproof – Built to withstand extreme temperatures, rain, dust, and rough handling, ensuring dependable performance on demanding job sites."
    ],
    bannerImage: "/images/uav/banner-gnss.jpg",
    bannerEyebrow: "Precision Positioning",
    bannerHeading: "Millimeter accuracy, wherever your team works",
    bannerText:
      "Multi-constellation GNSS receivers keep survey, construction, and GIS crews confident in every reading, even in demanding field conditions where signal obstruction and environmental extremes would compromise lesser equipment."
  },
  {
    title: "BIM (Building Information Modeling)",
    slug: "bim",
    summary:
      "End-to-end Building Information Modeling services and digital construction workflows that combine 3D visualization, clash detection, and reality capture integration to reduce rework, improve coordination, and keep projects on schedule.",
    image: "/images/uav/BIM.jpg",
    description:
      "Revolutionize your construction projects with BIM for smarter planning, collaboration, and execution. Traditional 2D drawings often leave room for misinterpretation and costly on-site conflicts that only surface once construction is underway. BIM replaces that guesswork with a coordinated, information-rich 3D model that every stakeholder — architects, engineers, contractors, and owners — can reference from the same source of truth. Our BIM services support projects from early design through construction and into facility management, including detailed 3D modeling in Revit and AutoCAD, 4D scheduling that links construction sequencing to the model timeline, and 5D cost integration that ties budget tracking directly to design changes. For existing structures, our Scan-to-BIM service converts laser scan point clouds into accurate, editable BIM models, giving renovation and retrofit projects a reliable as-built foundation to design against.",
    features: [
      "3D Visualization - Interactive virtual walkthroughs that let stakeholders review and approve designs before a single brick is laid.",
      "Clash Detection - Automated identification of conflicts between structural, mechanical, electrical, and plumbing systems early in the design phase.",
      "Cost & Time Savings – Fewer surprises on site translate directly into reduced rework, fewer change orders, and projects that stay on schedule and budget."
    ],
    services: [
      "3D Modeling (Revit, AutoCAD) - Detailed, coordinated building models built to industry standards for design and construction use.",
      "4D & 5D BIM (Time & cost integration) - Linking construction sequencing and budget data directly to the 3D model for real-time project tracking.",
      "Scan-to-BIM (Convert point clouds into BIM models) - Transforming laser scan data of existing structures into accurate, editable as-built models."
    ],
    bannerImage: "/images/uav/banner-bim.jpg",
    bannerEyebrow: "Digital Construction",
    bannerHeading: "Plan, coordinate, and build with confidence",
    bannerText:
      "BIM workflows connect design, field data, and construction teams in one coordinated model, catching clashes early and keeping projects on schedule and on budget from groundbreaking through handover."
  },
  {
    title: "Scanners",
    slug: "scanners",
    summary:
      "Advanced 3D reality capture and scanning systems built for survey and engineering teams — spanning terrestrial, mobile, and handheld platforms to document physical environments with exceptional accuracy and detail.",
    image: "/images/uav/scanners.jpg",
    description:
      "Capture highly detailed 3D data for architecture, archaeology, and industrial inspections with our advanced scanners. Physical spaces are complex, and capturing them accurately by hand is slow and prone to error. Our scanning systems solve this by generating dense, precise point clouds that faithfully represent everything from a single building interior to an entire mine site. Terrestrial LiDAR units deliver the highest ground-based accuracy for detailed engineering and architectural work, while UAV and vehicle-mounted mobile mapping systems cover large areas quickly without sacrificing precision. For smaller-scale or hard-to-reach spaces, handheld scanners offer a fast, portable option that still produces professional-grade results. Together, these tools give construction, heritage preservation, and mining teams the flexibility to choose the right capture method for each project, all while feeding directly into downstream BIM, GIS, and analysis workflows.",
    applications: [
      "Construction: As-built documentation and progress tracking that compares real-world site conditions against the design model throughout the build.",
      "Heritage Preservation: Digital archiving of historical sites and structures, preserving detailed records for restoration, research, and future generations.",
      "Mining: Accurate volume calculations and pit monitoring to track material extraction, stockpile levels, and site changes over time."
    ],
    features: [
      "Terrestrial LiDAR – High-accuracy ground-based scanning ideal for detailed architectural, engineering, and industrial documentation.",
      "Mobile Mapping – UAV and vehicle-mounted systems that capture large areas efficiently while maintaining strong positional accuracy.",
      "Handheld Scanners – Lightweight, portable devices for quick, on-the-go scans of interiors, tight spaces, and smaller assets."
    ],
    bannerImage: "/images/uav/banner-scanners.png",
    bannerEyebrow: "Reality Capture",
    bannerHeading: "Every detail, captured in 3D",
    bannerText:
      "Scanning systems provide precise 3D digital records for architecture, heritage, and mining projects."
  },
  {
    title: "UAV Services",
    slug: "uav-services",
    summary:
      "Comprehensive professional drone services covering repair, maintenance, calibration, and mission support — keeping your UAV fleet flight-ready, accurate, and operating at peak performance with minimal downtime.",
    image: "/images/uav/uav repair.jpg",
    description:
      "Beyond sales, we offer expert UAV maintenance, calibration, and repair services to keep your drones operational. A drone fleet is only as valuable as its uptime, and unexpected hardware issues or degraded sensor accuracy can quietly undermine an entire operation. Our certified technicians diagnose and repair everything from motor and gimbal failures to sensor malfunctions, using genuine OEM parts to ensure long-term reliability rather than short-term fixes. We also handle firmware upgrades to keep every platform running on the latest stable release, along with precise calibration of LiDAR, thermal, and multispectral payloads so the data your team collects remains trustworthy. Whether you operate a single enterprise drone or manage a large fleet across multiple sites, our service program is built to minimize downtime and extend the operational life of your equipment.",
    services: [
      "Drone Repairs – Motor, gimbal, and sensor fixes carried out by manufacturer-trained technicians to restore full flight performance.",
      "Battery & Propeller Replacements – Genuine battery cells and airframe parts to maintain safety, flight time, and stability.",
      "Firmware Upgrades – Keep every platform on the latest stable release for improved performance, security, and feature access.",
      "Payload Calibration – Precision calibration of LiDAR, thermal, and multispectral sensors to ensure data accuracy across every mission."
    ],
    whyChooseUs: [
      "Certified Technicians – Manufacturer-trained experts who understand the specific systems and tolerances of each platform.",
      "Quick Turnaround – Streamlined repair processes designed to minimize downtime and get your fleet back in the air fast.",
      "Genuine Parts – OEM components used throughout every repair for reliability and long-term airframe longevity."
    ],
    bannerImage: "/images/uav/banner-services.jpg",
    bannerEyebrow: "Keep Flying",
    bannerHeading: "Maintenance that keeps missions on schedule",
    bannerText:
      "Certified technicians, genuine parts, and fast turnaround times mean less downtime and more confidence in every flight, so your operations stay on schedule regardless of fleet size or mission complexity."
  }
];