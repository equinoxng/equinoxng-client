"use client";
import { useState } from "react";
import styles from "./page.module.css";

const products = [
  {
    id: "EQX-01",
    name: "Dash",
    tagline: "Cash Delivery",
    desc: "Send and receive cash in minutes. The fastest way to move cash to anyone, anywhere.",
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
    desc: "Salary-linked credit, BNPL, and lending services that flex with your cash flow when you need it most.",
    status: "future",
    statusLabel: "Coming soon",
    target: "Salaried workers & SMEs",
  },
  {
    id: "EQX-03",
    name: "Shield",
    tagline: "Insurance Services",
    desc: "Straightforward, accessible insurance products built for everyday Nigerians.",
    status: "future",
    statusLabel: "Coming soon",
    target: "Individuals & households",
  },
  {
    id: "EQX-04",
    name: "Nest",
    tagline: "Long-Term Savings",
    desc: "Compound-interest savings designed to grow your wealth over time. Set goals, stay disciplined, watch it compound.",
    status: "future",
    statusLabel: "Coming soon",
    target: "Goal-oriented savers",
  },
  {
    id: "EQX-05",
    name: "Mount",
    tagline: "Offline Card Payments",
    desc: "A virtual card that works even offline. Seamless payments without depending on connectivity.",
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

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className={styles.root}>
      <div className={styles.blueprint} aria-hidden="true" />
      <div className={styles.grain} aria-hidden="true" />

      {/* Announcement bar */}
      <div className={styles.announce}>
        <span className={styles.announceDot} />
        <span>Dash is in development.</span>
        <a href="#notify" className={styles.announceLink}>Join the waitlist →</a>
      </div>

      <div className={styles.wrap}>
        {/* Nav */}
        <header className={styles.header}>
          <div className={styles.mark}>
            <span className={styles.markDot} />
            <span className={styles.markName}>equinox</span>
            <span className={styles.markAccent}>ng</span>
          </div>
          <nav className={styles.nav}>
            <a href="#lineup">Lineup</a>
            <a href="#outlook">Outlook</a>
            <a href="#notify">Get notified</a>
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
        </section>

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
        </section>

        <footer className={styles.footer}>
          <div className={styles.footerLeft}>
            <span>© {new Date().getFullYear()} equinoxng.</span>
            <span className={styles.footerMeta}>Registered in Nigeria</span>
          </div>
          <div className={styles.footerRight}>
            <span className={styles.footerLabel}>Get in touch</span>
            <a href="mailto:hello@equinoxng.com" className={styles.footerLink}>hello@equinoxng.com</a>
            <span>Lagos, Nigeria</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
