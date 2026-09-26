"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./UI.jsx";
import ThemeToggle from "./ThemeToggle.jsx";
import { PROFILE } from "@/data/content.js";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "var(--surface-translucent)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
      }}
    >
      <div
        className="max-w-[1200px] mx-auto flex items-center justify-between px-5 sm:px-8 transition-all duration-300"
        style={{ height: scrolled ? "64px" : "80px" }}
      >
        <a href="#home" className="text-xl font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}>
          {PROFILE.shortName}<span style={{ color: "var(--accent)" }}>.</span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="nav-link text-sm font-medium" style={{ color: "var(--muted)" }}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <a href={PROFILE.cvPath} download>
            <Button variant="primary" className="hover-accent">Download CV</Button>
          </a>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <button className="p-2 -mr-2" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X size={24} color="var(--text)" /> : <Menu size={24} color="var(--text)" />}
          </button>
        </div>
      </div>

      <div
        className="lg:hidden overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "400px" : "0px", background: "var(--surface-translucent-solid)", borderTop: open ? "1px solid var(--line)" : "none" }}
      >
        <div className="px-6 py-6 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-left py-3.5 text-base font-medium border-b"
              style={{ color: "var(--text)", borderColor: "var(--line)" }}
            >
              {l.label}
            </a>
          ))}
          <a href={PROFILE.cvPath} download onClick={() => setOpen(false)}>
            <Button variant="primary" className="mt-5 w-full">Download CV</Button>
          </a>
        </div>
      </div>
    </header>
  );
}
