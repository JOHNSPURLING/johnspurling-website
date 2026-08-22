import { siteConfig } from "@/app/data/site-content";
import { HeroVisual, SiteFrame } from "@/components/home/PageChrome";
import { SectionIntro } from "@/components/home/SectionIntro";

export default function Home() {
  return (
    <SiteFrame>
      <section
        className="hero-section section-shell"
        aria-labelledby="hero-title"
      >
        <div className="hero-copy" data-motion>
          <p className="eyebrow">{siteConfig.heroKicker}</p>
          <h1 id="hero-title">{siteConfig.heroTitle}</h1>
          <p className="hero-summary">{siteConfig.heroSummary}</p>
        </div>

        <div data-motion>
          <HeroVisual />
        </div>
      </section>

      <section className="section-shell intro-panel" data-motion>
        <SectionIntro
          id="platform-title"
          eyebrow="What this site is for"
          title="Practical support for the real work of teaching."
          summary="A focused professional platform for classroom-ready maths resources, behaviour systems, useful AI and technology, teacher tools, media and practical thinking for busy teachers and school leaders."
        />
      </section>
    </SiteFrame>
  );
}
