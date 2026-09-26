"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowUpRight, ArrowRight, MapPin, Mail, Phone, MessageCircle,
  CheckCircle2, Briefcase, GraduationCap, Award, Languages, Sparkles,
} from "lucide-react";
import { Reveal, SectionLabel, Button, LinkButton, Chip } from "@/components/UI.jsx";
import {
  PROFILE, ABOUT, STATS, SKILLS, EXPERIENCE, EDUCATION, CERTIFICATIONS,
  LANGUAGES, INTERESTS, PROJECTS, DESIGNS,
} from "@/data/content.js";


/*  HERO  */
export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const iv = setInterval(() => setRoleIdx((i) => (i + 1) % PROFILE.roles.length), 2400);
    return () => clearInterval(iv);
  }, []);

  const stage = (n) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.8s cubic-bezier(.2,.7,.2,1) ${n * 0.1}s, transform 0.8s cubic-bezier(.2,.7,.2,1) ${n * 0.1}s`,
  });

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-24" style={{ background: "var(--ink)" }}>
      {/* subtle grid backdrop for a "developer" feel */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,92,252,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(124,92,252,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)",
        }}
      />

      <div className="relative max-w-[1200px] mx-auto w-full px-5 sm:px-8 py-16">
        <div style={stage(0)} className="flex items-center gap-2.5 mb-6">
          <MapPin size={14} style={{ color: "var(--accent-soft)" }} />
          <span className="text-xs tracking-[0.16em] font-semibold uppercase" style={{ color: "var(--accent-soft)" }}>
            {PROFILE.location}
          </span>
        </div>

        <h1 className="max-w-3xl text-[2.4rem] leading-[1.1] sm:text-5xl sm:leading-[1.08] lg:text-6xl lg:leading-[1.05] font-bold tracking-tight" style={{ ...stage(1), fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}>
          I'm {PROFILE.name.split(" ")[0]} {PROFILE.name.split(" ")[1]}.
          <br />
          I'm a{" "}
          <span style={{ color: "var(--accent-soft)" }}>{PROFILE.roles[roleIdx]}</span>.
        </h1>

        <p className="max-w-xl mt-7 text-base sm:text-lg leading-relaxed" style={{ ...stage(2), color: "var(--muted)" }}>
          {ABOUT.heroIntro}
        </p>

        <div style={stage(3)} className="flex flex-col sm:flex-row gap-3.5 mt-10">
          <a href={`https://wa.me/${PROFILE.whatsappNumber}`} target="_blank" rel="noreferrer">
            <Button variant="primary" className="hover-accent">
              Hire Me <ArrowUpRight size={17} />
            </Button>
          </a>
          <a href={PROFILE.cvPath} download>
            <Button variant="outline">Download CV</Button>
          </a>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-16 max-w-md pt-8" style={{ ...stage(4), borderTop: "1px solid var(--line)" }}>
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="text-2xl sm:text-3xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}>{s.value}</div>
              <div className="mt-1 text-xs sm:text-sm" style={{ color: "var(--muted)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/*  ABOUT  */
export function About() {
  return (
    <section id="about" className="py-24 sm:py-28 px-5 sm:px-8" style={{ background: "var(--panel)" }}>
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
        <Reveal>
          <div className="aspect-[4/5] max-w-sm overflow-hidden" style={{ border: "1px solid var(--line)" }}>
            <img src="/images/profile/ajsoft.jpg" alt={PROFILE.name} className="w-full h-full object-cover" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <SectionLabel>About Me</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}>
            My Introduction
          </h2>
          <p className="mt-6 text-base leading-relaxed" style={{ color: "var(--muted)" }}>{ABOUT.introduction}</p>

          {ABOUT.paragraphs.map((p, i) => (
            <p key={i} className="mt-4 text-base leading-relaxed" style={{ color: "var(--muted)" }}>{p}</p>
          ))}

          <h3 className="mt-9 text-lg font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}>My Approach</h3>
          <p className="mt-3 text-base leading-relaxed" style={{ color: "var(--muted)" }}>{ABOUT.approach}</p>

          <a href={PROFILE.cvPath} download className="inline-flex items-center gap-2 mt-8">
            <Button variant="outline">Download Full CV <ArrowRight size={15} /></Button>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* SKILLS  */
export function Skills() {
  return (
    <section className="py-24 sm:py-28 px-5 sm:px-8" style={{ background: "var(--ink)" }}>
      <div className="max-w-[1200px] mx-auto">
        <Reveal className="max-w-xl mb-12">
          <SectionLabel>Skills</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}>
            What I bring to a project.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-8">
          {Object.entries(SKILLS).map(([category, items], i) => (
            <Reveal key={category} delay={i * 0.05} className="p-6" style={{ background: "var(--panel)", border: "1px solid var(--line)" }}>
              <h3 className="text-sm font-semibold uppercase tracking-wide mb-4" style={{ color: "var(--accent-soft)" }}>{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((it) => <Chip key={it}>{it}</Chip>)}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/*  EXPERIENCE  */
export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-28 px-5 sm:px-8" style={{ background: "var(--panel)" }}>
      <div className="max-w-[1200px] mx-auto">
        <Reveal className="max-w-xl mb-12">
          <SectionLabel>Experience</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}>
            Where I've worked.
          </h2>
        </Reveal>

        <div className="space-y-8">
          {EXPERIENCE.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.08} className="p-7" style={{ background: "var(--ink)", border: "1px solid var(--line)" }}>
              <div className="flex items-start gap-4">
                <Briefcase size={22} style={{ color: "var(--accent-soft)" }} className="mt-1 shrink-0" />
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}>{job.role}</h3>
                    <span className="text-xs font-medium" style={{ color: "var(--muted)" }}>{job.period}</span>
                  </div>
                  <p className="mt-1 text-sm font-medium" style={{ color: "var(--accent-soft)" }}>{job.company} — {job.location}</p>
                  <ul className="mt-4 space-y-2">
                    {job.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                        <CheckCircle2 size={14} className="mt-1 shrink-0" style={{ color: "var(--accent-soft)" }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* EDUCATION + CERTS/LANGUAGES/INTERESTS */
export function Education() {
  return (
    <section className="py-24 sm:py-28 px-5 sm:px-8" style={{ background: "var(--ink)" }}>
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[1.3fr_1fr] gap-14">
        <div>
          <Reveal className="mb-10">
            <SectionLabel>Education</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}>
              How I got here.
            </h2>
          </Reveal>
          <div className="space-y-6">
            {EDUCATION.map((ed, i) => (
              <Reveal key={ed.degree} delay={i * 0.06} className="flex items-start gap-4">
                <GraduationCap size={20} className="mt-1 shrink-0" style={{ color: "var(--accent-soft)" }} />
                <div>
                  <h3 className="text-base font-semibold" style={{ color: "var(--text)" }}>{ed.degree}</h3>
                  <p className="text-sm mt-0.5" style={{ color: "var(--muted)" }}>{ed.school}</p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--accent-soft)" }}>{ed.period}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="space-y-10">
          <Reveal>
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide mb-4" style={{ color: "var(--accent-soft)" }}>
              <Award size={16} /> Certifications
            </h3>
            {CERTIFICATIONS.map((c) => (
              <div key={c.name} className="text-sm" style={{ color: "var(--muted)" }}>
                <span style={{ color: "var(--text)" }}>{c.name}</span> — {c.issuer} ({c.date})
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.05}>
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide mb-4" style={{ color: "var(--accent-soft)" }}>
              <Languages size={16} /> Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {LANGUAGES.map((l) => <Chip key={l.name}>{l.name} — {l.level}</Chip>)}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide mb-4" style={{ color: "var(--accent-soft)" }}>
              <Sparkles size={16} /> Interests
            </h3>
            <div className="flex flex-wrap gap-2">
              {INTERESTS.map((it) => <Chip key={it}>{it}</Chip>)}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* PROJECTS  */
export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-28 px-5 sm:px-8" style={{ background: "var(--panel)" }}>
      <div className="max-w-[1200px] mx-auto">
        <Reveal className="max-w-xl mb-14">
          <SectionLabel>Projects</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}>
            Things I've built.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.08} className="group" style={{ background: "var(--ink)", border: "1px solid var(--line)" }}>
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-base font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}>{p.name}</h3>
                <p className="mt-2.5 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{p.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/*  DESIGNS  */
export function Designs() {
  return (
    <section
  id="designs" className="py-24 sm:py-28 px-5 sm:px-8" style={{ background: "var(--panel)" }}
>
      <div className="max-w-[1200px] mx-auto">
        <Reveal className="max-w-xl mb-14">
          <SectionLabel>Design</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}>
            Visual work I've created.
          </h2>
          <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
            Selected work across branding, letterheads, promotional graphics and other visual designs.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {DESIGNS.map((design, i) => (
  <Reveal
    key={design.id}
    delay={(i % 3) * 0.08}
    className={`group ${design.id === "more-design" ? "sm:col-span-2 lg:col-span-3" : ""}`}
    style={{ background: "var(--ink)", border: "1px solid var(--line)",}}
  >
    {design.id === "more-design" ? (
      <div className="p-6 sm:p-8">
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 items-center">

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {design.images.map((image, index) => (
              <div
                key={index}
                className="w-full overflow-hidden"
              >
                <img
                  src={image} alt={`${design.name} ${index + 1}`}
                  className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>

          <div>
            <h3
              className="text-base font-semibold"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: "var(--text)",
              }}
            >
              {design.name}
            </h3>

            <p
              className="mt-2.5 text-sm leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              {design.description}
            </p>
          </div>

        </div>
      </div>
    ) : (
      <>
        <div className="w-full overflow-hidden">
          <img
            src={design.images[0]}
            alt={design.name}
            className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          <h3
            className="text-base font-semibold"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "var(--text)",
            }}
          >
            {design.name}
          </h3>

          <p
            className="mt-2.5 text-sm leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            {design.description}
          </p>
        </div>
      </>
    )}
  </Reveal>
))}
        </div>
      </div>
    </section>
  );
}


/*  CONTACT  */
export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Your name is required.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email address.";
    if (!form.message.trim()) e.message = "Tell me a bit about the project or role.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await res.json();
      if (!res.ok || !result.ok) {
        throw new Error(result.error || "Unable to send your message. Please try again.");
      }
      setSent(true);
    } catch (err) {
      setServerError(err instanceof Error
        ? err.message
        : "Something went wrong sending your message. Please try again, or email me directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = "w-full bg-transparent text-sm py-3 border-b focus:outline-none transition-colors duration-200";

  return (
    <section id="contact" className="py-24 sm:py-28 px-5 sm:px-8" style={{ background: "var(--ink)" }}>
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-16">
        <Reveal>
          <SectionLabel>Get In Touch</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}>
            Let's work together.
          </h2>
          <p className="mt-5 text-base leading-relaxed max-w-sm" style={{ color: "var(--muted)" }}>
            Have a project in mind, or an opening you think I'd be a good fit for? I'd like to hear about it.
          </p>

          <div className="mt-9 space-y-4">
            <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-3 text-sm font-medium" style={{ color: "var(--text)" }}>
              <Mail size={16} style={{ color: "var(--accent-soft)" }} /> {PROFILE.email}
            </a>
            {PROFILE.phones.map((p) => (
              <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="flex items-center gap-3 text-sm font-medium" style={{ color: "var(--text)" }}>
                <Phone size={16} style={{ color: "var(--accent-soft)" }} /> {p}
              </a>
            ))}
            <a href={`https://wa.me/${PROFILE.whatsappNumber}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm font-medium" style={{ color: "var(--text)" }}>
              <MessageCircle size={16} style={{ color: "var(--accent-soft)" }} /> Chat on WhatsApp
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          {sent ? (
            <div className="p-8" style={{ background: "var(--panel)", border: "1px solid var(--line)" }}>
              <CheckCircle2 size={28} style={{ color: "var(--accent-soft)" }} />
              <h3 className="mt-4 text-xl font-semibold" style={{ color: "var(--text)" }}>Message received</h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                Thanks for reaching out — I'll get back to you as soon as I can.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="grid sm:grid-cols-2 gap-x-6 gap-y-5">
              <div className="sm:col-span-1">
                <label className="text-xs font-medium" style={{ color: "var(--muted)" }}>Your Name</label>
                <input value={form.name} onChange={set("name")} className={inputClass} style={{ borderColor: errors.name ? "#E05252" : "var(--line)", color: "var(--text)" }} />
                {errors.name && <p className="text-xs mt-1" style={{ color: "#E05252" }}>{errors.name}</p>}
              </div>
              <div className="sm:col-span-1">
                <label className="text-xs font-medium" style={{ color: "var(--muted)" }}>Your Email</label>
                <input value={form.email} onChange={set("email")} className={inputClass} style={{ borderColor: errors.email ? "#E05252" : "var(--line)", color: "var(--text)" }} />
                {errors.email && <p className="text-xs mt-1" style={{ color: "#E05252" }}>{errors.email}</p>}
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-medium" style={{ color: "var(--muted)" }}>Message</label>
                <textarea rows={5} value={form.message} onChange={set("message")} className={inputClass} style={{ borderColor: errors.message ? "#E05252" : "var(--line)", color: "var(--text)", resize: "vertical" }} />
                {errors.message && <p className="text-xs mt-1" style={{ color: "#E05252" }}>{errors.message}</p>}
              </div>
              {serverError && <div className="sm:col-span-2 text-sm" style={{ color: "#E05252" }}>{serverError}</div>}
              <div className="sm:col-span-2 mt-2">
                <Button variant="primary" className="hover-accent" type="submit" disabled={submitting}>
                  {submitting ? "Sending…" : "Send Message"}
                </Button>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
