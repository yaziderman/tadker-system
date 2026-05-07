import React from 'react';
import { Button } from '../Button';
import { Icon } from '../Icon';
import styles from './TopNav.module.css';

export type NavLinkId = 'home' | 'services' | 'facilities' | 'news' | 'contact';

export interface NavUser {
  name: string;
  idMasked: string;
}

export interface TopNavProps {
  active?: NavLinkId;
  lang?: 'en' | 'ar';
  onLangSwitch?: () => void;
  user?: NavUser;
  onLogin?: () => void;
  onLogout?: () => void;
  onNavigate?: (id: NavLinkId) => void;
  className?: string;
}

const NAV_LINKS: { id: NavLinkId; en: string; ar: string }[] = [
  { id: 'home',       en: 'Home',       ar: 'الرئيسية' },
  { id: 'services',   en: 'Services',   ar: 'الخدمات' },
  { id: 'facilities', en: 'Facilities', ar: 'المنشآت' },
  { id: 'news',       en: 'News',       ar: 'الأخبار' },
  { id: 'contact',    en: 'Contact',    ar: 'اتصل بنا' },
];

export function TopNav({
  active = 'services',
  lang = 'en',
  onLangSwitch,
  user,
  onLogin,
  onLogout,
  onNavigate,
  className,
}: TopNavProps) {
  const isAr = lang === 'ar';
  return (
    <nav className={[styles.nav, className].filter(Boolean).join(' ')} aria-label="Main navigation">
      <a
        className={styles.logoLink}
        onClick={() => onNavigate?.('home')}
        role="link"
        tabIndex={0}
        aria-label="SAIS — Home"
      >
        <span className={styles.logoMark} aria-hidden="true">هـ</span>
        <span className={styles.logoText}>
          <span className={styles.logoEn}>SAIS</span>
          <span className={styles.logoAr}>الأمن الصناعي</span>
        </span>
      </a>

      <ul className={styles.links} role="list">
        {NAV_LINKS.map((link) => {
          const isActive = link.id === active;
          return (
            <li key={link.id}>
              <a
                className={[styles.link, isActive ? styles.linkActive : ''].filter(Boolean).join(' ')}
                onClick={() => onNavigate?.(link.id)}
                role="link"
                tabIndex={0}
                aria-current={isActive ? 'page' : undefined}
                style={isAr ? { fontFamily: 'var(--font-arabic)' } : undefined}
              >
                {isAr ? link.ar : link.en}
                {isActive && <span className={styles.activeUnderline} aria-hidden="true" />}
              </a>
            </li>
          );
        })}
      </ul>

      <div className={styles.actions}>
        <button className={styles.langToggle} onClick={onLangSwitch} aria-label="Switch language">
          <Icon name="globe" size={14} />
          {isAr ? 'English' : 'العربية'}
        </button>

        {user ? (
          <div className={styles.userBlock}>
            <div className={styles.userInfo}>
              <span className={styles.userName}>{user.name}</span>
              <span className={styles.userId} dir="ltr">ID: {user.idMasked}</span>
            </div>
            <Button
              variant="gold"
              size="sm"
              onClick={onLogout}
              iconLeft={<Icon name="logout" size={14} />}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            variant="gold"
            size="sm"
            onClick={onLogin}
            iconLeft={<Icon name="lock" size={14} />}
          >
            Login · NafaZ
          </Button>
        )}
      </div>
    </nav>
  );
}
