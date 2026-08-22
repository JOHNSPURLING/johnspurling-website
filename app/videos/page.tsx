import { PageHero, SiteFrame } from "@/components/home/PageChrome";
import { SectionIntro } from "@/components/home/SectionIntro";

export default function VideosPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="Videos"
        title="Videos now live in Media."
        summary="The site now brings YouTube videos, podcast material, episode-style content and assemblies together on the Media page."
      />

      <section className="section-shell" aria-labelledby="videos-page-title">
        <SectionIntro
          id="videos-page-title"
          eyebrow="Redirected section"
          title="A simpler media structure."
          summary="Videos have been removed from the main navigation so visitors have one clear media destination."
        />
        <div className="feature-panel" data-motion>
          <h3>Go to Media</h3>
          <p>
            Use the Media page for YouTube uploads, podcast material, episode
            content, assemblies and general videos.
          </p>
          <a className="button button-secondary panel-action" href="/media">
            Open Media
          </a>
        </div>
      </section>
    </SiteFrame>
  );
}
