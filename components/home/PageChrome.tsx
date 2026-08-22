import { navigationItems, siteConfig } from "@/app/data/site-content";
import { SiteHeader } from "@/components/home/SiteHeader";
import type { ReactNode } from "react";

export function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <p>{siteConfig.name}</p>
        <span>{siteConfig.domain}</span>
      </div>
      <nav aria-label="Footer navigation">
        {navigationItems.slice(1).map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </footer>
  );
}

export function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-emblem-frame">
        <img
          src="/media/john-spurling-growth-through-challenge-transparent.png"
          alt=""
          loading="eager"
        />
      </div>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  summary,
  children,
}: {
  eyebrow: string;
  title: string;
  summary: string;
  children?: ReactNode;
}) {
  return (
    <section className="page-hero section-shell" aria-labelledby="page-title">
      <div data-motion>
        <p className="eyebrow">{eyebrow}</p>
        <h1 id="page-title">{title}</h1>
        <p className="hero-summary">{summary}</p>
        {children}
      </div>
    </section>
  );
}
