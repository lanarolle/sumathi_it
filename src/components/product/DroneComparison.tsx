"use client";

import { useMemo, useState } from "react";
import { droneProducts } from "@/data/products";
import type { Product } from "@/types/product";

const rows: { label: string; key: keyof NonNullable<Product["comparison"]> }[] = [
  { label: "Recharge time", key: "rechargeTime" },
  { label: "Take-off time", key: "takeOffTime" },
  { label: "Drone autonomy", key: "droneAutonomy" },
  { label: "Protection class", key: "protectionClass" },
  { label: "Temperature range", key: "temperatureRange" },
  { label: "Sealing system", key: "sealingSystem" },
  { label: "Base and mounting", key: "baseAndMounting" },
  { label: "Precise landing", key: "preciseLanding" },
  { label: "RTK relay compatibility", key: "rtkRelayCompatibility" },
  { label: "Mobile deployment", key: "mobileDeployment" },
  { label: "Anti-vibration system", key: "antiVibrationSystem" },
  { label: "Obstacle detection sensors", key: "obstacleDetectionSensors" },
  { label: "Security and geocaging", key: "securityAndGeocaging" },
  { label: "Thermal management", key: "thermalManagement" }
];

export function DroneComparison({ defaultFirstSlug }: { defaultFirstSlug?: string }) {
  const firstDefault = defaultFirstSlug ?? droneProducts[0]?.slug;
  const secondDefault = droneProducts.find((item) => item.slug !== firstDefault)?.slug ?? droneProducts[1]?.slug;
  const [firstSlug, setFirstSlug] = useState(firstDefault);
  const [secondSlug, setSecondSlug] = useState(secondDefault);

  const first = useMemo(() => droneProducts.find((item) => item.slug === firstSlug), [firstSlug]);
  const second = useMemo(() => droneProducts.find((item) => item.slug === secondSlug), [secondSlug]);

  if (!first || !second) return null;

  return (
    <div className="premium-card overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-lavender/55 p-5">
        <div className="mb-5 flex items-center gap-3">
          <div>
            <p className="text-sm text-slate-600">Select two UAV platforms and review operational fit.</p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-semibold text-navy-950">
            Drone 1
            <select value={firstSlug} onChange={(e) => setFirstSlug(e.target.value)} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 font-normal outline-none focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/10">
              {droneProducts.map((product) => <option key={product.slug} value={product.slug}>{product.title}</option>)}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-semibold text-navy-950">
            Drone 2
            <select value={secondSlug} onChange={(e) => setSecondSlug(e.target.value)} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 font-normal outline-none focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/10">
              {droneProducts.map((product) => <option key={product.slug} value={product.slug}>{product.title}</option>)}
            </select>
          </label>
        </div>
      </div>
      <div className="overflow-x-auto scrollbar-clean">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead className="bg-white text-navy-950">
            <tr>
              <th className="w-1/3 px-5 py-4 font-semibold">Feature</th>
              <th className="px-5 py-4 font-semibold text-brand-purple">{first.title}</th>
              <th className="px-5 py-4 font-semibold text-brand-purple">{second.title}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.key} className="border-t border-slate-100 transition hover:bg-slate-50">
                <td className="px-5 py-4 font-medium text-navy-950">{row.label}</td>
                <td className="px-5 py-4 text-slate-600">{first.comparison?.[row.key] ?? "-"}</td>
                <td className="px-5 py-4 text-slate-600">{second.comparison?.[row.key] ?? "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
