import { featuredVideos, podcastSlots } from "@/app/data/site-content";
import { PodcastPanel, VideoShowcase } from "@/components/home/HomeCards";
import { PageHero, SiteFrame } from "@/components/home/PageChrome";
import { SectionIntro } from "@/components/home/SectionIntro";

const mediaLinks = [
  {
    name: "YouTube channel",
    href: "https://www.youtube.com/@Tempestwarming",
    status: "Ready",
  },
  {
    name: "Spotify podcast",
    href: "https://open.spotify.com/show/4Jc1qm641gi2ggLTJO5DVo?si=6a9d55f0fd3049a6",
    status: "Ready",
  },
  {
    name: "Apple Podcasts",
    href: "https://podcasts.apple.com/gb/podcast/the-behaviour-buddy/id1680335046",
    status: "Ready",
  },
] as const;

export default function MediaPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="Media"
        title="YouTube videos, podcast material and assemblies."
        summary="The home for video and media content: YouTube uploads, podcast-style episodes, assemblies, AI and technology videos and general media John creates."
      >
        <div className="hero-actions">
          <a className="button button-primary" href="https://www.youtube.com/@Tempestwarming">
            YouTube Channel
          </a>
        </div>
      </PageHero>

      <section className="section-shell" aria-labelledby="media-links-title">
        <SectionIntro
          id="media-links-title"
          eyebrow="Media links"
          title="Visit any of my other media here."
          summary="YouTube and podcast links are now available here."
        />
        <div className="media-link-grid" data-motion>
          {mediaLinks.map((link) =>
            link.href ? (
              <a className="media-link-card" href={link.href} key={link.name}>
                <span>{link.name}</span>
                <strong>{link.status}</strong>
              </a>
            ) : (
              <div className="media-link-card inactive" key={link.name}>
                <span>{link.name}</span>
                <strong>{link.status}</strong>
              </div>
            ),
          )}
        </div>
      </section>

      <section className="section-shell" aria-labelledby="media-videos-title">
        <SectionIntro
          id="media-videos-title"
          eyebrow="YouTube"
          title="Recently added videos."
          summary="A general YouTube gallery for assemblies, AI and technology videos, leadership content and other videos John creates."
        />
        <div data-motion>
          <VideoShowcase videos={featuredVideos} categories={[]} />
        </div>
      </section>

      <section className="section-shell podcast-section" aria-labelledby="media-podcast-title">
        <SectionIntro
          id="media-podcast-title"
          eyebrow="Podcast episodes on YouTube"
          title="Podcast episodes on YouTube."
          summary="Videos titled as episodes from the YouTube channel are grouped here as podcast-style material. Audio embeds can be added later if supplied."
        />
        <div data-motion>
          <PodcastPanel episodes={podcastSlots} />
        </div>
      </section>
    </SiteFrame>
  );
}
