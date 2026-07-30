export type ProductCategory = "drones" | "software" | "gnss" | "bim" | "scanners" | "uav-services";

export type DroneComparisonSpecs = {
  rechargeTime?: string;
  takeOffTime?: string;
  droneAutonomy?: string;
  protectionClass?: string;
  temperatureRange?: string;
  sealingSystem?: string;
  baseAndMounting?: string;
  preciseLanding?: string;
  rtkRelayCompatibility?: string;
  mobileDeployment?: string;
  antiVibrationSystem?: string;
  obstacleDetectionSensors?: string;
  securityAndGeocaging?: string;
  thermalManagement?: string;
};

export type Product = {
  title: string;
  slug: string;
  category: ProductCategory;
  summary: string;
  description: string;
  images: string[];
  features: string[];
  specifications: Record<string, string>;
  comparison?: DroneComparisonSpecs;
  relatedSlugs: string[];
  seoTitle: string;
  seoDescription: string;
};
