import { navigationItems, siteConfig } from "@/app/data/site-content";

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand-lockup" href="#home" aria-label="John Spurling home">
        <span className="brand-mark">JS</span>
        <span className="brand-text">{siteConfig.name}</span>
      </a>
      <nav className="primary-nav" aria-label="Primary navigation">
        {navigationItems.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
