import { leadershipAssets } from "@/app/data/site-content";
import { PageHero, SiteFrame } from "@/components/home/PageChrome";
import { SectionIntro } from "@/components/home/SectionIntro";

export default function LeadershipPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="Leadership"
        title="Leadership thinking for better decisions."
        summary="Prompts, reminders and resources for Heads of Year, senior leaders and anyone thinking seriously about culture, systems and decision-making."
      />

      <section className="section-shell" aria-labelledby="leadership-assets-title">
        <SectionIntro
          id="leadership-assets-title"
          eyebrow="Reference graphics"
          title="Leadership Reminders and John's Leadership Lens."
          summary="These visual resources hold the leadership thinking separately from the classroom behaviour strand, ready to become downloadable resources later."
        />
        <div className="asset-grid" data-motion>
          {leadershipAssets.map((asset) => (
            <figure className="asset-card" key={asset.src}>
              <img src={asset.src} alt={asset.alt} loading="lazy" />
              <figcaption>{asset.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </SiteFrame>
  );
}
