"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";

interface ConfettiPiece {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
  color: string;
  shape: "rect" | "dot";
}

interface AnniversaryCelebrationProps {
  children: ReactNode;
  /** URL of the company logo. If omitted, a monogram placeholder is shown in the logo frame. */
  logoSrc?: string;
  logoAlt?: string;
  /** Shown under the tagline, e.g. "Ferrand & Cole" */
  companyName?: string;
  /** The milestone number the medallion counts up to. Defaults to 25. */
  years?: number;
  tagline?: string;
}

const CONFETTI_COLORS = ["#D4AF37", "#F1D592", "#F4E9D0", "#8A6A1E", "#FFFFFF"];

function generateConfetti(count: number): ConfettiPiece[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: 5 + Math.random() * 7,
    duration: 2.8 + Math.random() * 1.8,
    delay: 0.2 + Math.random() * 1.2,
    rotation: Math.random() * 360,
    color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    shape: Math.random() > 0.55 ? "dot" : "rect"
  }));
}

/**
 * Plays a brief victory/celebration reveal on page load — a gold medallion
 * that mints the milestone number into place with a coin-stamp impact,
 * flanked by a logo slot and falling confetti — then hands off to the
 * page content beneath it. Respects prefers-reduced-motion.
 *
 * IMPORTANT: the whole reveal is gated behind a `mounted` flag. Nothing
 * that belongs to the intro (medallion number, caption copy, company name)
 * is rendered on the very first paint/hydration pass — only a plain gold
 * flash to the same navy backdrop is shown, then the real reveal fades in
 * once React has mounted and the animations are wired up. This is what
 * stops the old "0 / years of trust & excellence / Sumathi IT" flash of
 * unstyled text on refresh: that text now simply doesn't exist in the DOM
 * until it's ready to animate in properly.
 */
export function AnniversaryCelebration({
  children,
  logoSrc,
  logoAlt = "Company logo",
  companyName,
  years = 25,
  tagline = "Years of Trust & Excellence"
}: AnniversaryCelebrationProps) {
  const [mounted, setMounted] = useState(false);
  const [phase, setPhase] = useState<"intro" | "leaving" | "done">("intro");
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);
  const [skip, setSkip] = useState(false);
  const [count, setCount] = useState(0);
  const [impact, setImpact] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    setMounted(true);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setSkip(true);
      setPhase("done");
      setCount(years);
      return;
    }

    setConfetti(generateConfetti(60));

    // Count the medallion number up from 0, eased, then trigger the impact flash.
    const countDelayMs = 300;
    const countDurationMs = 1000;
    let start: number | null = null;

    const tick = (now: number) => {
      if (start === null) start = now;
      const elapsed = now - start - countDelayMs;
      if (elapsed < 0) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      const progress = Math.min(elapsed / countDurationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * years));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setImpact(true);
      }
    };
    rafRef.current = requestAnimationFrame(tick);

    const leaveTimer = setTimeout(() => setPhase("leaving"), 2950);
    const doneTimer = setTimeout(() => setPhase("done"), 3500);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      clearTimeout(leaveTimer);
      clearTimeout(doneTimer);
    };
  }, [years]);

  if (skip) {
    return <>{children}</>;
  }

  return (
    <>
      {/* Seamless placeholder shown only until React mounts — same backdrop, no text, no numbers. */}
      {!mounted && <div aria-hidden="true" className="anniv-overlay anniv-preload" />}

      {mounted && phase !== "done" && (
        <div
          aria-hidden="true"
          className={`anniv-overlay ${phase === "leaving" ? "anniv-overlay-leave" : ""}`}
        >
          <div className="anniv-glow" />

          <div className="anniv-confetti">
            {confetti.map((piece) => (
              <span
                key={piece.id}
                className={`anniv-confetti-piece ${piece.shape === "dot" ? "is-dot" : ""}`}
                style={{
                  left: `${piece.left}%`,
                  width: piece.size,
                  height: piece.shape === "dot" ? piece.size : piece.size * 0.4,
                  backgroundColor: piece.color,
                  animationDuration: `${piece.duration}s`,
                  animationDelay: `${piece.delay}s`,
                  transform: `rotate(${piece.rotation}deg)`
                }}
              />
            ))}
          </div>

          <div className="anniv-stage">
            <div className="anniv-logo-frame">
              {logoSrc ? (
                <Image src={logoSrc} alt={logoAlt} className="anniv-logo-img" width={100} height={100} />
              ) : (
                <span className="anniv-logo-fallback">{companyName?.[0]?.toUpperCase() ?? "✦"}</span>
              )}
            </div>

            <div className="anniv-medallion">
              <div className="anniv-rays">
                {Array.from({ length: 24 }).map((_, i) => (
                  <span
                    key={i}
                    className="anniv-ray"
                    style={{
                      transform: `rotate(${i * 15}deg)`,
                      animationDelay: `${0.45 + i * 0.015}s`
                    }}
                  />
                ))}
              </div>

              <div className={`anniv-ring ${impact ? "is-impact" : ""}`}>
                <span className="anniv-shockwave" />
                <span className="anniv-shockwave anniv-shockwave-delay" />
                <span className="anniv-number">{count}</span>
              </div>
            </div>

            <div className="anniv-caption-wrap">
              <span className="anniv-rule" />
              <p className="anniv-caption">{tagline}</p>
              <span className="anniv-rule" />
            </div>

            {companyName && <p className="anniv-company">{companyName}</p>}
          </div>
        </div>
      )}

      <div className={`anniv-content ${phase === "done" ? "is-visible" : ""}`}>{children}</div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Inter:wght@400;500;600&display=swap");

        :root {
          --anniv-ink: #0a0a0a;
          --anniv-ink-soft: #141210;
          --anniv-gold: #d4af37;
          --anniv-gold-light: #f1d592;
          --anniv-gold-pale: #f4e9d0;
          --anniv-gold-deep: #8a6a1e;
        }

        .anniv-overlay {
          position: fixed;
          inset: 0;
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at 50% 42%, var(--anniv-ink-soft) 0%, var(--anniv-ink) 70%);
          opacity: 1;
          transition: opacity 0.55s ease-out;
          overflow: hidden;
        }
        .anniv-overlay-leave {
          opacity: 0;
          pointer-events: none;
        }
        .anniv-preload {
          /* Identical backdrop to .anniv-overlay so the hand-off from
             preload -> real reveal is invisible to the eye. */
        }

        .anniv-glow {
          position: absolute;
          width: min(70vw, 640px);
          height: min(70vw, 640px);
          border-radius: 50%;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.16) 0%, rgba(212, 175, 55, 0) 70%);
          animation: anniv-glow-pulse 2.4s ease-in-out infinite;
        }

        .anniv-confetti {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }
        .anniv-confetti-piece {
          position: absolute;
          top: -6%;
          display: block;
          border-radius: 2px;
          opacity: 0;
          animation-name: anniv-confetti-fall;
          animation-timing-function: ease-in;
          animation-fill-mode: forwards;
          box-shadow: 0 0 6px rgba(212, 175, 55, 0.25);
        }
        .anniv-confetti-piece.is-dot {
          border-radius: 50%;
        }

        .anniv-stage {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 0 1.5rem;
        }

        /* Logo slot */
        .anniv-logo-frame {
          display: flex;
          align-items: center;
          justify-content: center;
          width: clamp(90px, 14vw, 120px);
          height: clamp(90px, 14vw, 120px);
          margin-bottom: clamp(24px, 4vw, 36px);
          border-radius: 50%;
          background: rgba(244, 233, 208, 0.05);
          border: 1px solid rgba(212, 175, 55, 0.45);
          box-shadow: 0 0 0 6px rgba(212, 175, 55, 0.06);
          opacity: 0;
          animation: anniv-logo-in 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.05s both;
        }
        .anniv-logo-img {
          width: 80%;
          height: 80%;
          object-fit: contain;
        }
        .anniv-logo-fallback {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(22px, 4vw, 28px);
          color: var(--anniv-gold-light);
        }

        /* Medallion */
        .anniv-medallion {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: clamp(150px, 32vw, 200px);
          height: clamp(150px, 32vw, 200px);
        }

        .anniv-rays {
          position: absolute;
          inset: 0;
        }
        .anniv-ray {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 1px;
          height: clamp(90px, 20vw, 128px);
          margin-left: -0.5px;
          transform-origin: top center;
          background: linear-gradient(to bottom, rgba(212, 175, 55, 0.55), rgba(212, 175, 55, 0));
          opacity: 0;
          animation: anniv-ray-open 0.5s ease-out both;
        }

        .anniv-ring {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: clamp(120px, 24vw, 152px);
          height: clamp(120px, 24vw, 152px);
          border-radius: 50%;
          background: var(--anniv-ink);
          border: 1px solid rgba(212, 175, 55, 0.55);
          box-shadow: 0 0 0 1px rgba(212, 175, 55, 0.15) inset, 0 0 32px rgba(212, 175, 55, 0.18);
          opacity: 0;
          animation: anniv-ring-pop 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.15s both;
        }
        .anniv-ring::before {
          content: "";
          position: absolute;
          inset: -1px;
          border-radius: 50%;
          background: conic-gradient(
            from 0deg,
            rgba(212, 175, 55, 0) 0%,
            rgba(241, 213, 146, 0.9) 8%,
            rgba(212, 175, 55, 0) 20%
          );
          animation: anniv-ring-sheen 3.2s linear infinite;
        }
        .anniv-ring.is-impact {
          animation: anniv-ring-punch 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          box-shadow: 0 0 0 1px rgba(212, 175, 55, 0.35) inset, 0 0 46px rgba(212, 175, 55, 0.4);
        }

        .anniv-shockwave {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1px solid rgba(212, 175, 55, 0.55);
          opacity: 0;
        }
        .anniv-ring.is-impact .anniv-shockwave {
          animation: anniv-shockwave-expand 0.9s ease-out;
        }
        .anniv-ring.is-impact .anniv-shockwave-delay {
          animation-delay: 0.12s;
        }

        .anniv-number {
          position: relative;
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(48px, 9vw, 64px);
          font-weight: 600;
          line-height: 1;
          letter-spacing: -0.01em;
          color: var(--anniv-gold-light);
          background: linear-gradient(
            120deg,
            var(--anniv-gold-pale) 0%,
            var(--anniv-gold) 30%,
            #fff7e0 50%,
            var(--anniv-gold) 70%,
            var(--anniv-gold-pale) 100%
          );
          background-size: 220% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 18px rgba(212, 175, 55, 0.45));
          animation: anniv-number-shimmer 2.4s linear infinite;
        }

        .anniv-caption-wrap {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          margin-top: clamp(22px, 4vw, 32px);
          opacity: 0;
          animation: anniv-caption-rise 0.6s ease-out 1.5s both;
        }
        .anniv-rule {
          width: clamp(18px, 4vw, 32px);
          height: 1px;
          background: linear-gradient(to right, rgba(212, 175, 55, 0), rgba(212, 175, 55, 0.7));
        }
        .anniv-rule:last-child {
          background: linear-gradient(to left, rgba(212, 175, 55, 0), rgba(212, 175, 55, 0.7));
        }
        .anniv-caption {
          margin: 0;
          font-family: "Inter", sans-serif;
          font-size: clamp(11px, 2vw, 13px);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.32em;
          color: var(--anniv-gold-pale);
        }

        .anniv-company {
          margin: 0.6rem 0 0;
          font-family: "Inter", sans-serif;
          font-size: clamp(11px, 1.8vw, 12px);
          letter-spacing: 0.08em;
          color: rgba(244, 233, 208, 0.55);
          opacity: 0;
          animation: anniv-caption-rise 0.6s ease-out 1.7s both;
        }

        .anniv-content {
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.7s ease-out, transform 0.7s ease-out;
        }
        .anniv-content.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes anniv-glow-pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.08); opacity: 1; }
        }
        @keyframes anniv-confetti-fall {
          0% { transform: translateY(-10vh) rotate(0deg); opacity: 0; }
          8% { opacity: 1; }
          100% { transform: translateY(112vh) rotate(320deg); opacity: 0.85; }
        }
        @keyframes anniv-logo-in {
          0% { opacity: 0; transform: translateY(-6px) scale(0.9); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes anniv-ray-open {
          0% { opacity: 0; transform: scaleY(0); }
          100% { opacity: 1; transform: scaleY(1); }
        }
        @keyframes anniv-ring-pop {
          0% { transform: scale(0.55); opacity: 0; }
          70% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes anniv-ring-sheen {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes anniv-ring-punch {
          0% { transform: scale(1); }
          40% { transform: scale(1.12); }
          100% { transform: scale(1); }
        }
        @keyframes anniv-shockwave-expand {
          0% { transform: scale(1); opacity: 0.9; border-width: 2px; }
          100% { transform: scale(2.6); opacity: 0; border-width: 1px; }
        }
        @keyframes anniv-number-shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 220% 50%; }
        }
        @keyframes anniv-caption-rise {
          0% { opacity: 0; transform: translateY(6px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .anniv-glow,
          .anniv-confetti-piece,
          .anniv-logo-frame,
          .anniv-ray,
          .anniv-ring,
          .anniv-ring::before,
          .anniv-shockwave,
          .anniv-number,
          .anniv-caption-wrap,
          .anniv-company {
            animation: none !important;
          }
        }
      `}</style>
    </>
  );
}