import React from 'react';
import styles from './Footer.module.css';

export interface FooterSection {
  heading: string;
  items: string[];
}

export interface FooterProps {
  dgaRegistration?: string;
  sections?: FooterSection[];
  className?: string;
}

const DEFAULT_SECTIONS: FooterSection[] = [
  { heading: 'Services', items: ['Industrial Licensing', 'Facility Inspection', 'Identity Verification', 'Incident Reporting'] },
  { heading: 'Authority', items: ['About SAIS', 'Leadership', 'News & Announcements', 'Annual Reports'] },
  { heading: 'Contact',  items: ['Help Center', '+966 11 ••• ••••', 'contact@sais.gov.sa', 'Riyadh HQ Location'] },
];

export function Footer({
  dgaRegistration = 'nnn-nnnnnnn',
  sections = DEFAULT_SECTIONS,
  className,
}: FooterProps) {
  return (
    <footer className={[styles.footer, className].filter(Boolean).join(' ')}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logoRow}>
              <span className={styles.logoMark} aria-hidden="true">هـ</span>
              <div className={styles.logoText}>
                <span className={styles.logoEn}>SAIS</span>
                <span className={styles.logoAr} dir="rtl">الهيئة العليا للأمن الصناعي</span>
              </div>
            </div>
            <p className={styles.tagline}>
              Supreme Authority for Industrial Security · Kingdom of Saudi Arabia.
              Established to safeguard industrial facilities, infrastructure, and operators across the Kingdom.
            </p>
          </div>

          {sections.map((s) => (
            <div key={s.heading} className={styles.section}>
              <h5 className={styles.sectionHeading}>{s.heading}</h5>
              <ul className={styles.sectionList}>
                {s.items.map((item) => (
                  <li key={item}>
                    <a className={styles.sectionLink} href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <div className={styles.dga}>
            <span className={styles.dgaBadge}>DGA</span>
            <span dir="ltr">Registration {dgaRegistration} · sais.gov.sa · HTTPS verified</span>
          </div>
          <div className={styles.legalLinks}>
            <a className={styles.legalLink} href="#">Privacy</a>
            <a className={styles.legalLink} href="#">Terms</a>
            <a className={styles.legalLink} href="#">Accessibility</a>
            <span>© 2026 SAIS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
