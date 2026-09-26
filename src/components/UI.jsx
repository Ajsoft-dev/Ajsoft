"use client";

import React, { useState, useEffect, useRef } from "react";

export function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return [ref, visible];
}

export function Reveal({ as: Tag = "div", className = "", delay = 0, style = {}, children }) {
  const [ref, visible] = useReveal();
  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(18px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s cubic-bezier(.2,.7,.2,1) ${delay}s`,
      }}
    >
      {children}
    </Tag>
  );
}

export const SectionLabel = ({ children }) => (
  <div className="flex items-center gap-3 mb-5">
    <span className="inline-block w-8 h-px" style={{ background: "var(--accent)" }} />
    <span className="text-xs tracking-[0.18em] font-semibold uppercase" style={{ color: "var(--accent-soft)", fontFamily: "'Space Grotesk', sans-serif" }}>
      {children}
    </span>
  </div>
);

export const Button = ({ children, variant = "primary", className = "", ...props }) => {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold transition-all duration-300 whitespace-nowrap";
  const styles = {
    primary: { background: "var(--accent)", color: "#fff" },
    warm: { background: "var(--warm)", color: "#1a1200" },
    outline: { background: "transparent", color: "var(--text)", border: "1.5px solid var(--line)" },
  };
  return (
    <button className={`${base} ${className}`} style={styles[variant]} {...props}>
      {children}
    </button>
  );
};

export const LinkButton = ({ children, variant = "primary", className = "", href, ...props }) => {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold transition-all duration-300 whitespace-nowrap";
  const styles = {
    primary: { background: "var(--accent)", color: "#fff" },
    warm: { background: "var(--warm)", color: "#1a1200" },
    outline: { background: "transparent", color: "var(--text)", border: "1.5px solid var(--line)" },
  };
  return (
    <a href={href} className={`${base} ${className}`} style={styles[variant]} {...props}>
      {children}
    </a>
  );
};

export const Chip = ({ children }) => (
  <span
    className="chip inline-flex items-center px-3.5 py-2 text-sm font-medium"
    style={{ color: "var(--text)" }}
  >
    {children}
  </span>
);
