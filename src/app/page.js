"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./page.module.css";

const marquee = [
  "Send cash in minutes",
  "Peer-to-peer",
  "Anyone, anywhere",
  "Built for speed",
  "Built for trust",
  "In development",
];

const dashSpecs = [
  { label: "Built for", value: "Individuals & families" },
  { label: "Speed", value: "Minutes, not days" },
  { label: "Status", value: "In development" },
];

const approach = [
  {
    num: "01",
    title: "Access before elegance.",
    body: "The hard part was never the interface. It's reaching the people the existing options never reached. We close that gap first, and make it beautiful second.",
  },
  {
    num: "02",
    title: "Africa-first by design.",
    body: "Lagos is the proving ground. We build for informal economies, for patchy connectivity, and for the texture of everyday life here — not for a demo on fast wifi.",
  },
  {
    num: "03",
    title: "One thing, done properly.",
    body: "Dash starts narrow on purpose. We earn the right to build more by being indispensable at one job first.",
  },
];

const NAV_SECTIONS = ["dash", "approach", "waitlist"];

const NAV_LABELS = {
  dash: "Dash",
  approach: "Approach",
  waitlist: "Waitlist",
};

function IconLinkedIn() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function Mark() {
  return (
    <svg width="22" height="22" viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
      <rect x="12" y="10" width="76" height="12" />
      <rect x="12" y="27" width="40" height="12" />
      <rect x="12" y="44" width="76" height="12" />
      <rect x="12" y="61" width="40" height="12" />
      <rect x="12" y="78" width="76" height="12" />
    </svg>
  );
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080";

export default function Home() {
  const [email, setEmail] = useState("");
  const [waitlistStatus, setWaitlistStatus] = useState("idle"); // idle | loading | success | error
  const [waitlistError, setWaitlistError] = useState("");
  const [activeSection, setActiveSection] = useState(null);
  const observerRef = useRef(null);

  async function handleWaitlistSubmit(e) {
    e.preventDefault();
    setWaitlistStatus("loading");
    setWaitlistError("");

    try {
      const res = await fetch(`${API_BASE_URL}/api/waitlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, product: "DASH" }),
      });

      if (!res.ok) {
        const message = await res.text();
        throw new Error(message || "Something went wrong. Please try again.");
      }

      setWaitlistStatus("success");
    } catch (err) {
      // A failed fetch surfaces as a TypeError with an unhelpful message
      // ("Failed to fetch"), so don't show it to the reader.
      const isNetworkError = err instanceof TypeError;
      setWaitlistStatus("error");
      setWaitlistError(
        isNetworkError
          ? "We couldn't reach the server. Check your connection and try again."
          : err.message || "Something went wrong. Please try again."
      );
    }
  }

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
      {/* Nav */}
      <header className={styles.header}>
        <a href="#top" className={styles.markBox} aria-label="equinoxng, home">
          <Mark />
        </a>
        <nav className={styles.nav} aria-label="Main">
          {NAV_SECTIONS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`${styles.navLink} ${activeSection === id ? styles.navLinkActive : ""}`}
              aria-current={activeSection === id ? "true" : undefined}
            >
              {NAV_LABELS[id]}
            </a>
          ))}
          <span className={styles.navRule} aria-hidden="true" />
          <a href="mailto:hello@equinoxng.com" className={styles.navLink}>
            Contact
          </a>
        </nav>
        <a href="#waitlist" className={styles.navCta}>
          Join waitlist
        </a>
      </header>

      {/* Hero */}
      <section className={styles.hero} id="top">
        <h1 className={styles.wordmark}>equinoxng</h1>
        <p className={styles.heroLine}>
          Simple, impactful products <em>for everyday life.</em>
        </p>
        <p className={styles.heroSub}>
          Equinox Nigeria is a digital services provider. We build things people actually
          use — and we&apos;re starting with Dash.
        </p>
        <div className={styles.heroActions}>
          <a href="#waitlist" className={styles.btnPrimary}>
            Join the waitlist
          </a>
          <a href="#dash" className={styles.btnGhost}>
            About Dash
          </a>
        </div>
        <p className={styles.heroMeta}>
          Lagos, Nigeria <span aria-hidden="true">·</span> Founded 2025{" "}
          <span aria-hidden="true">·</span> Digital services
        </p>
      </section>

      {/* Marquee */}
      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {[0, 1].map((copy) => (
            <div className={styles.marqueeGroup} key={copy}>
              {marquee.map((item) => (
                <span className={styles.marqueeItem} key={item}>
                  <span className={styles.marqueeDot} />
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Dash */}
      <div className={styles.sectionBar} id="dash">
        <span className={styles.sectionIndex}>01 / Dash</span>
        <span className={styles.sectionNote}>In development</span>
      </div>

      <section className={styles.dash}>
        <div className={styles.dashMain}>
          <h2 className={styles.dashName}>Dash</h2>
          <p className={styles.dashTag}>Cash delivery</p>
          <p className={styles.dashBody}>
            Send and receive cash in minutes. Peer-to-peer cash delivery, built for speed
            and trust — the fastest way to move cash to anyone, anywhere.
          </p>
          <a href="#waitlist" className={styles.btnPrimary}>
            Join the Dash waitlist
          </a>
        </div>
        <dl className={styles.specs}>
          {dashSpecs.map((s) => (
            <div className={styles.specRow} key={s.label}>
              <dt className={styles.specLabel}>{s.label}</dt>
              <dd className={styles.specValue}>{s.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Approach */}
      <div className={styles.sectionBar} id="approach">
        <span className={styles.sectionIndex}>02 / Approach</span>
        <span className={styles.sectionNote}>How we build</span>
      </div>

      <section className={styles.approach}>
        {approach.map((a) => (
          <article className={styles.approachItem} key={a.num}>
            <span className={styles.approachNum}>{a.num}</span>
            <h3 className={styles.approachTitle}>{a.title}</h3>
            <p className={styles.approachBody}>{a.body}</p>
          </article>
        ))}
      </section>

      {/* Waitlist */}
      <div className={styles.sectionBar} id="waitlist">
        <span className={styles.sectionIndex}>03 / Waitlist</span>
        <span className={styles.sectionNote}>No spam, just the signal</span>
      </div>

      <section className={styles.cta}>
        <h2 className={styles.ctaTitle}>
          Dash is coming. <em>Get early access.</em>
        </h2>
        <form className={styles.signup} onSubmit={handleWaitlistSubmit}>
          <label htmlFor="waitlist-email" className={styles.signupLabel}>
            Email address
          </label>
          <div className={styles.signupRow}>
            <input
              id="waitlist-email"
              type="email"
              placeholder="you@example.com"
              required
              className={styles.emailInput}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={waitlistStatus === "loading" || waitlistStatus === "success"}
              aria-describedby={waitlistStatus === "error" ? "waitlist-error" : undefined}
              aria-invalid={waitlistStatus === "error" ? "true" : undefined}
            />
            <button
              type="submit"
              className={styles.btnPrimary}
              disabled={waitlistStatus === "loading" || waitlistStatus === "success"}
            >
              {waitlistStatus === "success"
                ? "You're on the list"
                : waitlistStatus === "loading"
                ? "Adding…"
                : "Notify me"}
            </button>
          </div>
        </form>

        <div className={styles.formStatus} role="status" aria-live="polite">
          {waitlistStatus === "error" && (
            <p id="waitlist-error" className={styles.formError}>
              {waitlistError}
            </p>
          )}
          {waitlistStatus === "success" && (
            <p className={styles.formSuccess}>
              We&apos;ll email you the moment Dash is live.
            </p>
          )}
        </div>

        <p className={styles.privacyNote}>We don&apos;t share your email. Ever.</p>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerLeft}>
          <span className={styles.footerMark}>
            <Mark />
          </span>
          <span>© {new Date().getFullYear()} equinoxng Digital Services Ltd.</span>
        </div>

        <div className={styles.footerSocial}>
          <a href="https://linkedin.com/company/equinoxng" target="_blank" rel="noopener noreferrer" className={styles.footerSocialLink}>
            <IconLinkedIn /> LinkedIn
          </a>
          <a href="https://instagram.com/equinoxng" target="_blank" rel="noopener noreferrer" className={styles.footerSocialLink}>
            <IconInstagram /> Instagram
          </a>
          <a href="https://web.facebook.com/profile.php?id=61584780592423" target="_blank" rel="noopener noreferrer" className={styles.footerSocialLink}>
            <IconFacebook /> Facebook
          </a>
        </div>

        <div className={styles.footerRight}>
          <a href="mailto:hello@equinoxng.com" className={styles.footerLink}>
            hello@equinoxng.com
          </a>
          <a href="https://www.equinoxng.com" className={styles.footerLink}>
            www.equinoxng.com
          </a>
        </div>
      </footer>
    </div>
  );
}
