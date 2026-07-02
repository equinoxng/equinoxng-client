"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./page.module.css";

const products = [
  {
    id: "EQX-01",
    name: "Dash",
    tagline: "Cash Delivery",
    desc: "Send and receive cash in minutes. The fastest way to move cash to anyone, anywhere.",
    teaser: "Peer-to-peer cash delivery, built for speed and trust.",
    cta: { label: "Join the waitlist", href: "#notify" },
    status: "build",
    statusLabel: "In development",
    target: "Individuals & families",
    featured: true,
  },
  {
    id: "EQX-02",
    name: "Float",
    tagline: "On-Demand Liquidity",
    desc: "Credit that bends around your paycheck, not the other way around.",
    status: "future",
    statusLabel: "Coming soon",
    target: "Salaried workers & SMEs",
  },
  {
    id: "EQX-03",
    name: "Shield",
    tagline: "Insurance Services",
    desc: "Insurance that actually shows up when you need it. Simple plans, real coverage.",
    status: "future",
    statusLabel: "Coming soon",
    target: "Individuals & households",
  },
  {
    id: "EQX-04",
    name: "Nest",
    tagline: "Long-Term Savings",
    desc: "Set a goal, automate it, watch compound interest do the heavy lifting.",
    status: "future",
    statusLabel: "Coming soon",
    target: "Goal-oriented savers",
  },
  {
    id: "EQX-05",
    name: "Mount",
    tagline: "Offline Card Payments",
    desc: "A card that doesn't need the internet to work. Pay anywhere, every time.",
    status: "future",
    statusLabel: "Coming soon",
    target: "Merchants & consumers",
  },
];

const stats = [
  { value: "5", label: "Products planned" },
  { value: "1", label: "In active development" },
  { value: "2025", label: "Founded" },
  { value: "Lagos", label: "Headquarters" },
];

const outlook = [
  {
    num: "01",
    title: "Access before elegance.",
    body: "Cash that doesn't move, savings that don't exist, insurance that never reaches people. We fix the gap first.",
  },
  {
    num: "02",
    title: "Africa-first by design.",
    body: "Lagos is the proving ground. Our infrastructure is built for informal economies, patchy connectivity, and the diversity of African financial lives.",
  },
  {
    num: "03",
    title: "One wedge, then depth.",
    body: "Each product starts narrow on purpose. We earn the right to expand by being indispensable at the first job, then layer in the rest of the suite.",
  },
  {
    num: "04",
    title: "Connected, not siloed.",
    body: "Dash, Float, Shield, Nest, Mount. Each stands alone but works better together. One ecosystem, one identity, built over time.",
  },
];

const NAV_SECTIONS = ["lineup", "outlook", "notify"];

function IconLinkedIn() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

function IconChevron() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  );
}

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const sections = NAV_SECTIONS.map((id) => document.getElementById(id)).filter(Boolean);
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observerRef.current.observe(s));
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.blueprint} aria-hidden="true" />
      <div className={styles.grain} aria-hidden="true" />

      {/* Announcement bar */}
      <div className={styles.announce}>
        <span className={styles.announceDot} />
        <span>Dash is coming.</span>
        <a href="#notify" className={styles.announceLink}>Get early access →</a>
      </div>

      <div className={styles.wrap}>
        {/* Nav */}
        <header className={styles.header}>
          <div className={styles.mark}>
            <span className={styles.markDot} />
            <div className={styles.markText}>
              <div>
                <span className={styles.markName}>equinox</span>
                <span className={styles.markAccent}>ng</span>
              </div>
              <span className={styles.markTagline}>Digital Made Easy</span>
            </div>
          </div>
          <nav className={styles.nav}>
            {NAV_SECTIONS.slice(0, -1).map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={`${styles.navLink} ${activeSection === id ? styles.navLinkActive : ""}`}
              >
                {id === "lineup" ? "Lineup" : "Outlook"}
              </a>
            ))}
            <a
              href="#notify"
              className={`${styles.navLink} ${activeSection === "notify" ? styles.navLinkActive : ""}`}
            >
              Get notified
            </a>
            <a href="mailto:hello@equinoxng.com" className={styles.navContact}>Contact</a>
          </nav>
        </header>

        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.eyebrow}>A digital services company</div>
          <h1 className={styles.heroTitle}>
            Simple, impactful products<br />
            <em>for everyday life in Africa.</em>
          </h1>
          <p className={styles.heroSub}>
            Equinox Nigeria builds a connected suite of financial tools, starting with cash access
            and expanding across savings, insurance, credit, and beyond.
          </p>
          <div className={styles.heroActions}>
            <a href="#lineup" className={`${styles.btn} ${styles.btnPrimary}`}>View the lineup →</a>
            <a href="#notify" className={styles.heroTextLink}>Get notified</a>
          </div>
          <a href="#lineup" className={styles.scrollHint} aria-label="Scroll down">
            <IconChevron />
          </a>
        </section>

        {/* Trust strip */}
        <div className={styles.trustStrip}>
          <span className={styles.trustItem}>
            <span className={styles.trustDot} />
            CAC Registered · Private Company Limited by Shares
          </span>
          <span className={styles.trustItem}>
            <span className={styles.trustDot} />
            Incorporated August 2025
          </span>
          <span className={styles.trustItem}>
            <span className={styles.trustDot} />
            www.equinoxng.com
          </span>
        </div>

        {/* Stat strip */}
        <div className={styles.statStrip}>
          {stats.map((s) => (
            <div key={s.label} className={styles.statItem}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* Build log */}
        <section id="lineup">
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Build log</h2>
            <span className={styles.sectionTag}>1 in development · 4 coming soon</span>
          </div>

          <div className={styles.log}>
            <div className={`${styles.logRow} ${styles.logHead}`}>
              <div className={styles.logCell}>Status</div>
              <div className={styles.logCell}>Product</div>
              <div className={styles.logCell}>Built for</div>
              <div className={`${styles.logCell} ${styles.logCellRight}`}>ID</div>
            </div>
            {products.map((p) => (
              <div
                key={p.id}
                className={`${styles.logRow} ${p.featured ? styles.logRowFeatured : ""}`}
              >
                <div className={styles.logCell}>
                  <span className={`${styles.status} ${styles[`status_${p.status}`]}`}>
                    {p.statusLabel}
                  </span>
                </div>
                <div className={styles.logCell}>
                  <p className={styles.prodName}>{p.name}</p>
                  <p className={styles.prodTagline}>{p.tagline}</p>
                  <p className={styles.prodDesc}>{p.desc}</p>
                  {p.cta && (
                    <a href={p.cta.href} className={styles.prodCta}>{p.cta.label} →</a>
                  )}
                </div>
                <div className={`${styles.logCell} ${styles.logCellMeta}`}>{p.target}</div>
                <div className={`${styles.logCell} ${styles.logCellRight} ${styles.logCellMeta}`}>{p.id}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Outlook */}
        <section id="outlook">
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Where this goes</h2>
            <span className={styles.sectionTag}>Product outlook</span>
          </div>
          <div className={styles.outlookGrid}>
            {outlook.map((o) => (
              <div key={o.num} className={styles.outlookItem}>
                <div className={styles.outlookNum}>{o.num}</div>
                <h3 className={styles.outlookTitle}>{o.title}</h3>
                <p className={styles.outlookBody}>{o.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaBlock} id="notify">
          <h2 className={styles.ctaTitle}>Dash is coming. Get early access.</h2>
          <p className={styles.ctaSub}>Be the first to know when we launch. No spam, just the signal.</p>
          <form
            className={styles.signup}
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          >
            <input type="email" placeholder="you@example.com" required className={styles.emailInput} />
            <button type="submit" className={`${styles.btn} ${styles.btnPrimary}`}>
              {submitted ? "Added ✓" : "Notify me"}
            </button>
          </form>
          <p className={styles.privacyNote}>We don't share your email. Ever.</p>
        </section>

        <footer className={styles.footer}>
          <div className={styles.footerLeft}>
            <span>© {new Date().getFullYear()} equinoxng Digital Services Ltd.</span>
<div className={styles.footerSocial}>
              <a href="https://linkedin.com/company/equinoxng" target="_blank" rel="noopener noreferrer" className={styles.footerSocialLink} aria-label="LinkedIn">
                <IconLinkedIn /> LinkedIn
              </a>
              <span className={styles.footerDivider}>·</span>
              <a href="https://instagram.com/equinoxng" target="_blank" rel="noopener noreferrer" className={styles.footerSocialLink} aria-label="Instagram">
                <IconInstagram /> Instagram
              </a>
              <span className={styles.footerDivider}>·</span>
              <a href="https://web.facebook.com/profile.php?id=61584780592423" target="_blank" rel="noopener noreferrer" className={styles.footerSocialLink} aria-label="Facebook">
                <IconFacebook /> Facebook
              </a>
            </div>
          </div>
          <div className={styles.footerRight}>
            <span className={styles.footerLabel}>Get in touch</span>
            <a href="mailto:hello@equinoxng.com" className={styles.footerLink}>hello@equinoxng.com</a>
            <a href="https://www.equinoxng.com" className={styles.footerLink}>www.equinoxng.com</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
