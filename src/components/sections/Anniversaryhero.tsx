"use client";

import Image from "next/image";

interface AnniversaryHeroProps {
  /** Company logo shown in the ring-framed badge. */
  logoSrc?: string;
  logoAlt?: string;
  /** Optional company / office / team photo shown beneath the title. */
  companyImageSrc?: string;
  companyImageAlt?: string;
  years?: number;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}

/**
 * Hero banner for the anniversary page. Renders after AnniversaryCelebration's
 * intro has handed off to the page. The backdrop is a set of slow-rotating
 * orbit rings, each carrying a single travelling point of light — a quiet
 * visual echo of the GNSS/satellite and UAV work Sumathi IT actually does,
 * rather than a generic decorative gradient.
 */
export function AnniversaryHero({
  logoSrc,
  logoAlt = "Company logo",
  companyImageSrc,
  companyImageAlt = "Sumathi IT",
  years = 25,
  eyebrow = "Sumathi IT — Anniversary",
  title = "25 Years of Trust & Excellence",
  subtitle = "Two and a half decades of enterprise IT, UAV, GNSS and geospatial partnership across Sri Lanka."
}: AnniversaryHeroProps) {
  return (
    <section className="anniv-hero">
      <div className="anniv-hero-field" aria-hidden="true">
        <span className="orbit orbit-1">
          <i className="orbit-dot" />
        </span>
        <span className="orbit orbit-2">
          <i className="orbit-dot" />
        </span>
        <span className="orbit orbit-3">
          <i className="orbit-dot" />
        </span>
        <span className="anniv-hero-glow" />
      </div>

      <div className="anniv-hero-inner container-padded">
        <div className="anniv-hero-logo-frame">
          {logoSrc ? (
            <Image src={logoSrc} alt={logoAlt} width={72} height={72} className="anniv-hero-logo-img" />
          ) : (
            <span className="anniv-hero-logo-fallback">S</span>
          )}
        </div>

        <p className="anniv-hero-eyebrow">{eyebrow}</p>

        <h1 className="anniv-hero-title">
          <span className="anniv-hero-number">{years}</span>
          <span className="anniv-hero-title-text">{title.replace(`${years}`, "").trim()}</span>
        </h1>

        <p className="anniv-hero-sub">{subtitle}</p>

        <div className="anniv-hero-image-frame">
          {companyImageSrc ? (
            <Image
              src={companyImageSrc}
              alt={companyImageAlt}
              fill
              className="anniv-hero-image"
              sizes="(max-width: 768px) 100vw, 960px"
            />
          ) : (
            <div className="anniv-hero-image-placeholder">
              <span>Company photo</span>
              <span className="anniv-hero-image-placeholder-hint">
                Drop a team, office, or fleet image at this path to replace this placeholder.
              </span>
            </div>
          )}
          <span className="anniv-hero-image-caption">{companyImageAlt}</span>
        </div>
      </div>

      <style jsx>{`
        .anniv-hero {
          position: relative;
          overflow: hidden;
          padding: clamp(64px, 10vw, 108px) 0 clamp(48px, 8vw, 80px);
          background: radial-gradient(circle at 50% 0%, #12213f 0%, #0a1226 55%, #060a17 100%);
          color: #f4e9d0;
        }

        .anniv-hero-field {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }

        .anniv-hero-glow {
          position: absolute;
          width: min(60vw, 560px);
          height: min(60vw, 560px);
          border-radius: 50%;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.16) 0%, rgba(212, 175, 55, 0) 70%);
        }

        .orbit {
          position: absolute;
          border-radius: 50%;
          border: 1px dashed rgba(212, 175, 55, 0.22);
          animation: anniv-hero-spin linear infinite;
        }
        .orbit-1 {
          width: clamp(260px, 42vw, 380px);
          height: clamp(260px, 42vw, 380px);
          animation-duration: 34s;
        }
        .orbit-2 {
          width: clamp(400px, 62vw, 560px);
          height: clamp(400px, 62vw, 560px);
          border-style: solid;
          border-color: rgba(212, 175, 55, 0.12);
          animation-duration: 54s;
          animation-direction: reverse;
        }
        .orbit-3 {
          width: clamp(540px, 82vw, 760px);
          height: clamp(540px, 82vw, 760px);
          animation-duration: 78s;
        }

        .orbit-dot {
          position: absolute;
          top: -3px;
          left: 50%;
          width: 6px;
          height: 6px;
          margin-left: -3px;
          border-radius: 50%;
          background: #f1d592;
          box-shadow: 0 0 10px 2px rgba(241, 213, 146, 0.6);
        }
        .orbit-2 .orbit-dot {
          width: 4px;
          height: 4px;
          margin-left: -2px;
          background: rgba(244, 233, 208, 0.85);
          box-shadow: 0 0 6px 1px rgba(244, 233, 208, 0.5);
        }

        .anniv-hero-inner {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .anniv-hero-logo-frame {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 84px;
          height: 84px;
          margin-bottom: 22px;
          border-radius: 50%;
          background: rgba(244, 233, 208, 0.06);
          border: 1px solid rgba(212, 175, 55, 0.4);
          box-shadow: 0 0 0 6px rgba(212, 175, 55, 0.05);
        }
        .anniv-hero-logo-img {
          width: 62%;
          height: 62%;
          object-fit: contain;
        }
        .anniv-hero-logo-fallback {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 26px;
          color: #f1d592;
        }

        .anniv-hero-eyebrow {
          margin: 0 0 14px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #d4af37;
        }

        .anniv-hero-title {
          margin: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }
        .anniv-hero-number {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(56px, 11vw, 92px);
          font-weight: 600;
          line-height: 1;
          background: linear-gradient(120deg, #f4e9d0 0%, #d4af37 35%, #fff7e0 50%, #d4af37 65%, #f4e9d0 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .anniv-hero-title-text {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(20px, 3vw, 28px);
          font-weight: 500;
          color: #f4e9d0;
        }

        .anniv-hero-sub {
          max-width: 560px;
          margin: 18px 0 0;
          font-size: 15px;
          line-height: 1.8;
          color: rgba(244, 233, 208, 0.7);
        }

        .anniv-hero-image-frame {
          position: relative;
          width: min(100%, 780px);
          aspect-ratio: 16 / 7;
          margin-top: clamp(36px, 6vw, 56px);
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(212, 175, 55, 0.35);
          box-shadow: 0 20px 60px -20px rgba(0, 0, 0, 0.6);
        }
        .anniv-hero-image {
          object-fit: cover;
        }
        .anniv-hero-image-placeholder {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          background: repeating-linear-gradient(
            135deg,
            rgba(212, 175, 55, 0.06),
            rgba(212, 175, 55, 0.06) 10px,
            rgba(212, 175, 55, 0.02) 10px,
            rgba(212, 175, 55, 0.02) 20px
          );
        }
        .anniv-hero-image-placeholder span {
          font-family: "Inter", sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(244, 233, 208, 0.55);
        }
        .anniv-hero-image-placeholder-hint {
          max-width: 320px;
          font-size: 11px !important;
          font-weight: 400 !important;
          letter-spacing: 0 !important;
          text-transform: none !important;
          color: rgba(244, 233, 208, 0.35) !important;
        }
        .anniv-hero-image-caption {
          position: absolute;
          left: 16px;
          bottom: 14px;
          font-family: "Inter", sans-serif;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(244, 233, 208, 0.75);
          background: rgba(6, 10, 23, 0.55);
          padding: 4px 10px;
          border-radius: 999px;
          border: 1px solid rgba(212, 175, 55, 0.3);
        }

        @keyframes anniv-hero-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (prefers-reduced-motion: reduce) {
          .orbit {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}