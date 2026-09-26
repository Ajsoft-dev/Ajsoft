import React from "react";
import { Instagram, Linkedin, Twitter, Github, Music2 } from "lucide-react";
import { PROFILE } from "@/data/content.js";

export default function Footer() {
  const socials = [
    { Icon: Instagram, url: PROFILE.social.instagram, label: "Instagram" },
    { Icon: Music2, url: PROFILE.social.tiktok, label: "TikTok" },
    { Icon: Linkedin, url: PROFILE.social.linkedin, label: "LinkedIn" },
    { Icon: Twitter, url: PROFILE.social.twitter, label: "Twitter / X" },
    { Icon: Github, url: PROFILE.social.github, label: "GitHub" },
  ];

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="pt-16 pb-8 px-5 sm:px-8" style={{ background: "var(--panel)", borderTop: "1px solid var(--line)" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid sm:grid-cols-3 gap-10 pb-12" style={{ borderBottom: "1px solid var(--line)" }}>
          <div>
            <p className="text-xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}>
              {PROFILE.shortName}<span style={{ color: "var(--accent)" }}>.</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed max-w-xs" style={{ color: "var(--muted)" }}>
              {PROFILE.name} — Web Developer &amp; Designer based in {PROFILE.location}.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-wide uppercase mb-4" style={{ color: "var(--accent-soft)" }}>Navigate</p>
            <div className="flex flex-col gap-2.5">
              {links.map((l) => (
                <a key={l.label} href={l.href} className="text-sm" style={{ color: "var(--muted)" }}>{l.label}</a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-wide uppercase mb-4" style={{ color: "var(--accent-soft)" }}>Contact</p>
            <a href={`mailto:${PROFILE.email}`} className="text-sm block mb-2" style={{ color: "var(--muted)" }}>{PROFILE.email}</a>
            {PROFILE.phones.map((p) => (
              <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="text-sm block mb-2" style={{ color: "var(--muted)" }}>{p}</a>
            ))}
            <div className="flex gap-3 mt-4">
              {socials.map(({ Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 flex items-center justify-center social-icon"
                  style={{ border: "1px solid var(--line)" }}
                  title={label}
                >
                  <Icon size={15} color="var(--text)" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-xs" style={{ color: "var(--muted)" }}>© {PROFILE.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
