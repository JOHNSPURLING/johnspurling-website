import { PageHero, SiteFrame } from "@/components/home/PageChrome";
import { SectionIntro } from "@/components/home/SectionIntro";

export default function ContactPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="Contact"
        title="Contact John"
        summary="Site being built. Information to come soon."
      />

      <section className="section-shell" aria-labelledby="contact-soon-title">
        <SectionIntro
          id="contact-soon-title"
          eyebrow="Information"
          title="Contact John: Site being built."
          summary="Information to come soon once the preferred contact route is confirmed."
        />
        <div className="coming-soon-panel" data-motion>
          <p>Information: Coming Soon</p>
        </div>
      </section>
    </SiteFrame>
  );
}
