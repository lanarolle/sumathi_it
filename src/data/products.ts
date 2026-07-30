import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    title: "DJI Dock 3",
    slug: "dji-dock-3",
    category: "drones",
    summary: "Remote drone-in-a-box deployment platform for automated operations and infrastructure monitoring.",
    description:
      "DJI Dock 3 is designed for remote, automated UAV operations where teams need repeatable flight missions, centralized monitoring, and reliable field deployment.",
    images: ["/images/uav/drone products/dji dock3/dji dock3.jpg", "/images/uav/drone products/dji dock3/dji dock3-1.jpg", "/images/uav/drone products/dji dock3/Dock3-2.jpg"],
    features: ["Automated drone deployment", "Remote mission management", "Weather-aware operation", "Enterprise-ready monitoring", "Ideal for inspection and public safety"],
    specifications: {
      "Use case": "Remote inspection, security, monitoring, emergency response",
      "Operation model": "Automated dock-based deployment",
      "Control": "Cloud-based mission operation",
      "Recommended for": "Enterprise and government users"
    },
    comparison: {
      rechargeTime: "Approx. 30 minutes",
      takeOffTime: "Fast automated launch",
      droneAutonomy: "High",
      protectionClass: "Industrial-grade",
      temperatureRange: "Wide operating range",
      sealingSystem: "Weather-resistant dock design",
      baseAndMounting: "Fixed or field deployment",
      preciseLanding: "Supported",
      rtkRelayCompatibility: "Supported",
      mobileDeployment: "Supported with correct setup",
      antiVibrationSystem: "Integrated protection",
      obstacleDetectionSensors: "Multi-direction sensing",
      securityAndGeocaging: "Enterprise security controls",
      thermalManagement: "Integrated thermal control"
    },
    relatedSlugs: ["dji-matrice-350-rtk", "dji-mavic-3-enterprise", "pix4dmapper"],
    seoTitle: "DJI Dock 3 Sri Lanka",
    seoDescription: "Explore DJI Dock 3 drone-in-a-box solutions in Sri Lanka for automated UAV inspection, monitoring, and remote operations."
  },
  {
    title: "DJI Matrice 350 RTK",
    slug: "dji-matrice-350-rtk",
    category: "drones",
    summary: "Heavy-duty enterprise drone platform for inspection, mapping, and industrial missions.",
    description:
      "DJI Matrice 350 RTK supports demanding enterprise missions with payload flexibility, RTK positioning, and professional-grade flight performance.",
    images: ["/images/uav/drone products/dji matrice 350 rtk/matrice 350rtk 1.jpg", "/images/uav/drone products/dji matrice 350 rtk/matrice 350rtk 2.jpg", "/images/uav/drone products/dji matrice 350 rtk/matrice 350rtk 3.jpg", "/images/uav/drone products/dji matrice 350 rtk/matrice 350rtk 4.jpg"],
    features: ["Enterprise flight platform", "RTK positioning", "Payload flexibility", "Industrial inspection ready", "Long-range mission support"],
    specifications: {
      "Use case": "Mapping, inspection, emergency response",
      "Positioning": "RTK supported",
      "Payload": "Multiple enterprise payload options",
      "Recommended for": "Survey, inspection, and industrial teams"
    },
    comparison: {
      rechargeTime: "Battery-dependent",
      takeOffTime: "Manual or planned mission launch",
      droneAutonomy: "Very high",
      protectionClass: "Enterprise outdoor operation",
      temperatureRange: "Wide operating range",
      sealingSystem: "Aircraft weather resilience",
      baseAndMounting: "Portable field deployment",
      preciseLanding: "Supported",
      rtkRelayCompatibility: "Supported",
      mobileDeployment: "Supported",
      antiVibrationSystem: "Payload stabilization",
      obstacleDetectionSensors: "Multi-direction sensing",
      securityAndGeocaging: "Supported",
      thermalManagement: "Aircraft-level thermal design"
    },
    relatedSlugs: ["dji-dock-3", "dji-mavic-3-enterprise", "gnss-field-receiver"],
    seoTitle: "DJI Matrice 350 RTK Sri Lanka",
    seoDescription: "DJI Matrice 350 RTK enterprise drone solutions in Sri Lanka for mapping, inspection, and industrial operations."
  },
  {
    title: "DJI Mavic 3 Enterprise",
    slug: "dji-mavic-3-enterprise",
    category: "drones",
    summary: "Compact enterprise drone for mapping, inspection, and fast fieldwork.",
    description:
      "DJI Mavic 3 Enterprise is a compact professional UAV for teams that need quick deployment, efficient data capture, and practical field performance.",
    images: ["/images/uav/drone products/DJI mavic 3/mavic 1.png", "/images/uav/drone products/DJI mavic 3/mavic2.png", "/images/uav/drone products/DJI mavic 3/mavic3.png", "/images/uav/drone products/DJI mavic 3/mavic4.png"],
    features: ["Compact enterprise design", "Fast field deployment", "Mapping and inspection workflows", "RTK module compatibility", "Efficient image capture"],
    specifications: {
      "Use case": "Survey, inspection, mapping",
      "Form factor": "Compact foldable aircraft",
      "Positioning": "RTK module compatibility",
      "Recommended for": "Field teams and survey crews"
    },
    comparison: {
      rechargeTime: "Battery-dependent",
      takeOffTime: "Rapid field launch",
      droneAutonomy: "High",
      protectionClass: "Professional outdoor operation",
      temperatureRange: "Standard enterprise range",
      sealingSystem: "Compact aircraft body",
      baseAndMounting: "Portable deployment",
      preciseLanding: "Supported",
      rtkRelayCompatibility: "Optional RTK support",
      mobileDeployment: "Highly suitable",
      antiVibrationSystem: "Camera stabilization",
      obstacleDetectionSensors: "Omnidirectional sensing",
      securityAndGeocaging: "Supported",
      thermalManagement: "Compact thermal design"
    },
    relatedSlugs: ["dji-matrice-350-rtk", "pix4dmapper", "gnss-field-receiver"],
    seoTitle: "DJI Mavic 3 Enterprise Sri Lanka",
    seoDescription: "DJI Mavic 3 Enterprise drone solutions in Sri Lanka for mapping, inspection, survey, and field operations."
  },
  {
    title: "Terra Solid",
    slug: "terra-solid",
    category: "software",
    summary: "LiDAR processing software for surveying, mapping, and geospatial analysis.",
    description:
      "Terra Solid provides comprehensive LiDAR data processing tools for surveying, mapping, infrastructure inspection, forestry monitoring, mining management, disaster assessment, and urban planning applications.",
    images: ["/images/uav/softwares/TerraSolid.png"],
    features: ["LiDAR Surveying & Mapping", "Infrastructure & Utility Inspection", "Forestry & Environmental Monitoring", "Mining & Quarry Management", "Disaster Management & Damage Assessment", "Urban Planning & Civil Engineering"],
    specifications: {
      "Product type": "Software",
      "Use case": "LiDAR processing and analysis",
      "Data output": "Point clouds, classified data, deliverables",
      "Recommended for": "Surveyors, engineers, and geospatial teams"
    },
    relatedSlugs: ["dji-matrice-350-rtk", "zenmuse-l2", "pix4dmapper"],
    seoTitle: "Terra Solid Software Sri Lanka",
    seoDescription: "Terra Solid LiDAR processing software solutions in Sri Lanka for surveying, mapping, and geospatial analysis."
  },
  {
    title: "DJI Terra",
    slug: "dji-terra",
    category: "software",
    summary: "Aerial surveying and 3D mapping software for construction, agriculture, and inspection.",
    description:
      "DJI Terra enables professional aerial surveying, 3D mapping, construction site monitoring, volume calculation, precision agriculture, disaster response, infrastructure inspection, and law enforcement applications.",
    images: ["/images/uav/softwares/dji terra.jpg"],
    features: ["Aerial Surveying & 3D Mapping", "Construction Site Monitoring & Volume Calculation", "Precision Agriculture & Crop Analysis", "Disaster Response & Damage Assessment", "Infrastructure & Utility Inspection", "Law Enforcement & Crime Scene Reconstruction"],
    specifications: {
      "Product type": "Software",
      "Use case": "Aerial surveying and mapping",
      "Data output": "3D models, orthomosaics, analysis",
      "Recommended for": "Surveyors, construction teams, and agricultural professionals"
    },
    relatedSlugs: ["dji-matrice-350-rtk", "dji-mavic-3-enterprise", "pix4dmapper"],
    seoTitle: "DJI Terra Software Sri Lanka",
    seoDescription: "DJI Terra aerial surveying and 3D mapping software solutions in Sri Lanka for construction, agriculture, and inspection."
  },
  {
    title: "DJI FlightHub",
    slug: "dji-flighthub",
    category: "software",
    summary: "Cloud-based drone fleet management and data processing platform.",
    description:
      "DJI FlightHub provides comprehensive drone fleet management, real-time monitoring, and data processing capabilities. With Pix4D integration, agricultural field mapping enables early pest identification, fertilizer planning, crop protection, and targeted input application.",
    images: ["/images/uav/softwares/dji flight hub.jpg"],
    features: ["Cloud-based fleet management", "Real-time drone monitoring", "Data processing and analysis", "Pix4D integration for agriculture", "Pest identification and crop analysis", "Fertilizer planning and application"],
    specifications: {
      "Product type": "Software",
      "Use case": "Fleet management and data processing",
      "Integration": "Pix4D mapping integration",
      "Recommended for": "Enterprise drone operators and agricultural teams"
    },
    relatedSlugs: ["dji-dock-3", "dji-matrice-350-rtk", "pix4dmapper"],
    seoTitle: "DJI FlightHub Sri Lanka",
    seoDescription: "DJI FlightHub cloud-based drone fleet management and data processing platform in Sri Lanka."
  },
  {
    title: "Pix4Dmapper",
    slug: "pix4dmapper",
    category: "software",
    summary: "Photogrammetry software for drone mapping, 3D modeling, and geospatial deliverables.",
    description:
      "Pix4Dmapper enables professional processing of aerial imagery into maps, point clouds, orthomosaics, and 3D models for engineering and survey workflows. With Pix4D, agricultural field mapping enables early pest identification, fertilizer planning, crop protection, and targeted input application.",
    images: ["/images/uav/softwares/Pix4Dmapper.png"],
    features: ["Photogrammetry processing", "Orthomosaic generation", "Point cloud creation", "3D model output", "Survey workflow support", "Agricultural field analysis"],
    specifications: {
      "Product type": "Software",
      "Use case": "Mapping, survey, 3D modeling",
      "Data output": "Orthomosaic, point cloud, 3D model",
      "Recommended for": "Surveyors, engineers, and UAV teams"
    },
    relatedSlugs: ["dji-mavic-3-enterprise", "dji-matrice-350-rtk", "gnss-field-receiver"],
    seoTitle: "Pix4Dmapper Sri Lanka",
    seoDescription: "Pix4Dmapper software solutions in Sri Lanka for UAV photogrammetry, mapping, point clouds, and 3D modeling."
  },
  {
    title: "GNSS (Global Navigation Satellite Systems) Field Receiver",
    slug: "gnss-field-receiver",
    category: "gnss",
    summary: "High-accuracy positioning tool for survey, mapping, construction, and geospatial fieldwork.",
    description:
      "GNSS field receivers support accurate positioning for teams working in surveying, construction, mapping, and geospatial data collection.",
    images: ["/images/uav/GNSS.jpg"],
    features: ["High-accuracy positioning", "Field-ready design", "Survey workflow compatibility", "Geospatial data support", "Reliable outdoor operation"],
    specifications: {
      "Product type": "GNSS hardware",
      "Use case": "Survey and geospatial fieldwork",
      "Recommended for": "Surveyors and engineering teams",
      "Integration": "Compatible with mapping workflows"
    },
    relatedSlugs: ["dji-matrice-350-rtk", "dji-mavic-3-enterprise", "pix4dmapper"],
    seoTitle: "GNSS Solutions Sri Lanka",
    seoDescription: "GNSS field receiver solutions in Sri Lanka for survey, mapping, construction, and geospatial engineering teams."
  },
  {
    title: "3D Modeling Service (Revit, AutoCAD)",
    slug: "3d-modeling-service",
    category: "bim",
    summary: "Professional 3D modeling services using Revit and AutoCAD for construction and engineering projects.",
    description:
      "Our 3D modeling services provide detailed digital models using Revit and AutoCAD for construction, architecture, and engineering projects, enabling accurate visualization and planning.",
    images: ["/images/uav/BIM/revit.png", "/images/uav/BIM/autocad.png"],
    features: ["Revit 3D modeling", "AutoCAD drafting", "Architectural visualization", "Engineering documentation", "BIM integration"],
    specifications: {
      "Product type": "Service",
      "Use case": "3D modeling and documentation",
      "Software": "Revit, AutoCAD",
      "Recommended for": "Architects, engineers, and contractors"
    },
    relatedSlugs: ["bim-reality-capture-service", "laser-scanner-pro", "pix4dmapper"],
    seoTitle: "3D Modeling Services Sri Lanka",
    seoDescription: "Professional 3D modeling services using Revit and AutoCAD in Sri Lanka for construction and engineering projects."
  },
  {
    title: "4D & 5D BIM (Building Information Modeling) Service",
    slug: "4d-5d-bim-service",
    category: "bim",
    summary: "Time and cost integration BIM services for construction project management.",
    description:
      "Our 4D & 5D BIM services integrate time scheduling and cost estimation into building information models, enabling better project planning, cost control, and timeline management.",
    images: ["/images/uav/BIM.jpg"],
    features: ["4D BIM (Time integration)", "5D BIM (Cost integration)", "Project scheduling", "Cost estimation", "Construction planning"],
    specifications: {
      "Product type": "Service",
      "Use case": "Time and cost management in BIM",
      "Capabilities": "4D scheduling, 5D costing",
      "Recommended for": "Project managers and construction teams"
    },
    relatedSlugs: ["3d-modeling-service", "bim-reality-capture-service", "pix4dmapper"],
    seoTitle: "4D & 5D BIM Services Sri Lanka",
    seoDescription: "4D & 5D BIM services for time and cost integration in construction projects in Sri Lanka."
  },
  {
    title: "Scan-to-BIM (Building Information Modeling) Service",
    slug: "scan-to-bim-service",
    category: "bim",
    summary: "Convert point clouds into BIM models for as-built documentation and renovation projects.",
    description:
      "Our Scan-to-BIM services convert laser scanner point cloud data into accurate BIM models, supporting as-built documentation, renovation projects, and facility management workflows.",
    images: ["/images/uav/BIM.jpg"],
    features: ["Point cloud to BIM conversion", "As-built documentation", "Renovation support", "Facility management", "High-accuracy modeling"],
    specifications: {
      "Product type": "Service",
      "Use case": "Point cloud to BIM conversion",
      "Input": "LiDAR point clouds",
      "Output": "BIM models (Revit, IFC)",
      "Recommended for": "Architects, engineers, and facility managers"
    },
    relatedSlugs: ["laser-scanner-pro", "3d-modeling-service", "zenmuse-l2"],
    seoTitle: "Scan-to-BIM Services Sri Lanka",
    seoDescription: "Scan-to-BIM services for converting point clouds into BIM models in Sri Lanka."
  },
  {
    title: "BIM (Building Information Modeling) Reality Capture Service",
    slug: "bim-reality-capture-service",
    category: "bim",
    summary: "BIM and reality capture support for construction, architecture, and engineering projects.",
    description:
      "Our BIM reality capture support helps project teams connect field conditions with digital construction workflows and 3D visualization.",
    images: ["/images/uav/BIM/bim-2.jpg"],
    features: ["3D visualization", "Construction documentation", "Reality capture workflow", "Digital project coordination", "Engineering support"],
    specifications: {
      "Product type": "Service",
      "Use case": "BIM, digital construction, 3D visualization",
      "Recommended for": "Architects, contractors, and consultants"
    },
    relatedSlugs: ["laser-scanner-pro", "pix4dmapper", "gnss-field-receiver"],
    seoTitle: "BIM and Reality Capture Services Sri Lanka",
    seoDescription: "BIM and reality capture services in Sri Lanka for construction, engineering, architecture, and 3D visualization workflows."
  },
  {
    title: "Zenmuse L2",
    slug: "zenmuse-l2",
    category: "scanners",
    summary: "UAV-mounted LiDAR scanner for high-density mapping and surveying.",
    description:
      "Zenmuse L2 is a UAV-mounted LiDAR scanner designed for high-density mapping and surveying applications, providing accurate point cloud data for topographic surveys, infrastructure inspection, and environmental monitoring.",
    images: ["/images/uav/scanners/Zenmuse L2/Zenmuse L2 -1.jpg", "/images/uav/scanners/Zenmuse L2/Zenmuse L2-2.jpg", "/images/uav/scanners/Zenmuse L2/Zenmuse L2-3.png", "/images/uav/scanners/Zenmuse L2/Zenmuse L2-4.jpg"],
    features: ["UAV-mounted LiDAR", "High-density point clouds", "RTK integration", "Multi-return capability", "Survey-grade accuracy"],
    specifications: {
      "Product type": "LiDAR Sensor",
      "Use case": "Aerial mapping and surveying",
      "Mounting": "UAV-compatible",
      "Recommended for": "Surveyors and mapping professionals"
    },
    relatedSlugs: ["dji-matrice-350-rtk", "terra-solid", "scan-to-bim-service"],
    seoTitle: "Zenmuse L2 LiDAR Scanner Sri Lanka",
    seoDescription: "Zenmuse L2 UAV-mounted LiDAR scanner for high-density mapping and surveying in Sri Lanka."
  },
  {
    title: "FARO FocusS 350",
    slug: "faro-focuss-350",
    category: "scanners",
    summary: "High-precision 3D laser scanner for architecture, construction, and engineering.",
    description:
      "FARO FocusS 350 is a high-precision 3D laser scanner widely used for architecture, construction, engineering documentation, and heritage preservation projects, delivering accurate point cloud data for BIM workflows.",
    images: ["/images/uav/scanners/FARO FocusS 350/FARO FocusS 350 -1.jpg", "/images/uav/scanners/FARO FocusS 350/FARO FocusS 350 -2.png", "/images/uav/scanners/FARO FocusS 350/FARO FocusS 350 -3.jpg"],
    features: ["High-precision scanning", "Long-range capability", "Fast data capture", "BIM workflow integration", "Heritage preservation support"],
    specifications: {
      "Product type": "Terrestrial Scanner",
      "Use case": "Architecture, construction, engineering",
      "Range": "Up to 350m",
      "Recommended for": "Surveyors, architects, and engineers"
    },
    relatedSlugs: ["scan-to-bim-service", "3d-modeling-service", "laser-scanner-pro"],
    seoTitle: "FARO FocusS 350 Scanner Sri Lanka",
    seoDescription: "FARO FocusS 350 high-precision 3D laser scanner for architecture and construction in Sri Lanka."
  },
  {
    title: "SLAM Hand Scanner",
    slug: "slam-hand-scanner",
    category: "scanners",
    summary: "Portable 3D mapping and scanning device for indoor and mobile applications.",
    description:
      "SLAM hand scanner provides portable 3D mapping and scanning capabilities for indoor environments, mobile applications, and confined spaces where traditional scanners cannot easily operate.",
    images: ["/images/uav/scanners/SLAM Hand Scanner/handheld-SLAM-3d-Lidar-scanner.png"],
    features: ["Portable handheld design", "SLAM technology", "Indoor mapping", "Mobile scanning", "Real-time data capture"],
    specifications: {
      "Product type": "Handheld Scanner",
      "Use case": "Indoor and mobile scanning",
      "Technology": "SLAM (Simultaneous Localization and Mapping)",
      "Recommended for": "Surveyors and facility managers"
    },
    relatedSlugs: ["scan-to-bim-service", "faro-focuss-350", "3d-modeling-service"],
    seoTitle: "SLAM Hand Scanner Sri Lanka",
    seoDescription: "Portable SLAM hand scanner for 3D mapping and scanning in Sri Lanka."
  },
  {
    title: "Laser Scanner Pro",
    slug: "laser-scanner-pro",
    category: "scanners",
    summary: "Scanning solution for detailed site capture, engineering documentation, and 3D modeling workflows.",
    description:
      "Laser scanning solutions help engineering and construction teams capture precise site data for documentation, design, and digital twin workflows.",
    images: ["/images/uav/scanners/Laser Scanner Pro/laser scanner.png"],
    features: ["Accurate site capture", "Point cloud output", "Engineering documentation", "Reality capture support", "BIM workflow compatibility"],
    specifications: {
      "Product type": "Scanner",
      "Use case": "Reality capture and point cloud workflows",
      "Recommended for": "Engineering and construction teams"
    },
    relatedSlugs: ["bim-reality-capture-service", "pix4dmapper", "gnss-field-receiver"],
    seoTitle: "3D Laser Scanners Sri Lanka",
    seoDescription: "3D laser scanner and reality capture solutions in Sri Lanka for engineering, construction, and BIM workflows."
  },
  {
    title: "UAV Mapping Service",
    slug: "uav-mapping-service",
    category: "uav-services",
    summary: "Professional UAV mapping and inspection service for businesses, projects, and public-sector operations.",
    description:
      "Our UAV mapping service supports project teams with professional data capture, inspection, aerial imagery, and survey-ready deliverables.",
    images: ["/images/uav/banner-services.jpg"],
    features: ["Aerial mapping", "Inspection support", "Survey deliverables", "Data processing", "Professional field operation"],
    specifications: {
      "Product type": "Service",
      "Use case": "Mapping, inspection, survey support",
      "Recommended for": "Enterprise, engineering, and government projects"
    },
    relatedSlugs: ["dji-matrice-350-rtk", "pix4dmapper", "gnss-field-receiver"],
    seoTitle: "UAV Mapping Services Sri Lanka",
    seoDescription: "Professional UAV mapping and drone inspection services in Sri Lanka for enterprise, engineering, and government projects."
  }
];

export const droneProducts = products.filter((product) => product.category === "drones" && product.comparison);
