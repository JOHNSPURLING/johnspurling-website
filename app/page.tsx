import {
  aboutFocus,
  contactConfig,
  contentQueue,
  featuredVideos,
  heroFocusAreas,
  mediaChannels,
  pathwayCards,
  podcastSlots,
  siteConfig,
  toolCards,
  videoCategories,
} from "@/app/data/site-content";
import {
  ContentQueue,
  MediaChannelGrid,
  PathwayGrid,
  PodcastPanel,
  ToolGrid,
  VideoShowcase,
} from "@/components/home/HomeCards";
import { SectionIntro } from "@/components/home/SectionIntro";
import { SiteHeader } from "@/components/home/SiteHeader";

export default function Home() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />

      <main id="main">
        <section
          className="hero-section section-shell"
          id="home"
          aria-labelledby="hero-title"
        >
          <div className="hero-copy" data-motion>
            <p className="eyebrow">{siteConfig.heroKicker}</p>
            <h1 id="hero-title">{siteConfig.heroTitle}</h1>
            <p className="hero-summary">{siteConfig.heroSummary}</p>
            <div className="hero-actions" aria-label="Primary actions">
              <a className="button button-primary" href="#tools">
                Explore tools
              </a>
              <a className="button button-secondary" href="#videos">
                Watch videos
              </a>
            </div>
            <div className="focus-strip" aria-label="Platform focus areas">
              {heroFocusAreas.map((area) => (
                <span key={area}>{area}</span>
              ))}
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="glass-panel panel-large">
              <span className="panel-label">Content system</span>
              <div className="signal-bars" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
            </div>
            <div className="glass-panel panel-video">
              <span className="play-dot" aria-hidden="true" />
              <div>
                <strong>YouTube</strong>
                <p>Behaviour, AI, technology, leadership</p>
              </div>
            </div>
            <div className="glass-panel panel-tools">
              <strong>Tools & Resources</strong>
              <div className="mini-grid" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </section>

        <section
          className="section-shell intro-panel"
          aria-labelledby="platform-title"
          data-motion
        >
          <SectionIntro
            id="platform-title"
            eyebrow="Platform"
            title="A professional home for education content, tools and media."
            summary="Structured around classroom behaviour, school leadership, AI and technology for teachers, resources, interactive apps, YouTube, podcasting and social channels."
          />
        </section>

        <section className="section-shell" aria-labelledby="pathways-title">
          <SectionIntro
            id="pathways-title"
            eyebrow="Main pathways"
            title="Four clear routes into the work."
            summary="Visitors can move quickly into the core areas now, with room for deeper collections later."
          />
          <div data-motion>
            <PathwayGrid pathways={pathwayCards} />
          </div>
        </section>

        <section
          className="section-shell split-section"
          id="behaviour"
          aria-labelledby="behaviour-title"
        >
          <SectionIntro
            id="behaviour-title"
            eyebrow="Behaviour"
            title="Classroom behaviour and school leadership."
            summary="A dedicated pathway for behaviour, routines, culture, leadership and practical school-facing content."
          />
          <div className="feature-panel" data-motion>
            <h3>Built for expansion</h3>
            <p>
              This area is ready for future articles, videos, resources, tools
              and leadership materials once the real content list is supplied.
            </p>
          </div>
        </section>

        <section
          className="section-shell split-section reverse"
          id="ai-tech"
          aria-labelledby="ai-tech-title"
        >
          <SectionIntro
            id="ai-tech-title"
            eyebrow="AI & Tech"
            title="AI and technology for teachers."
            summary="A home for practical AI workflows, technology guidance, tool explainers and teacher-facing digital resources."
          />
          <div className="feature-panel accent" data-motion>
            <h3>Teacher-first technology</h3>
            <p>
              The structure supports videos, tool cards, resources and project
              write-ups without locking the site into a generic blog format.
            </p>
          </div>
        </section>

        <section
          className="section-shell tools-section"
          id="tools"
          aria-labelledby="tools-title"
        >
          <SectionIntro
            id="tools-title"
            eyebrow="Tools & Resources"
            title="A data-driven hub for apps, resources and projects."
            summary="New tools can be added from the central content file without redesigning the page. Each card supports category, thumbnail label, featured status, live link and project URL."
          />
          <div data-motion>
            <ToolGrid tools={toolCards} />
          </div>
        </section>

        <section
          className="section-shell"
          id="videos"
          aria-labelledby="videos-title"
        >
          <SectionIntro
            id="videos-title"
            eyebrow="Videos"
            title="A prominent YouTube area ready for embeds and topic collections."
            summary="Designed for later categories such as Behaviour, AI for Teachers, Technology, Leadership and Resources."
          />
          <div data-motion>
            <VideoShowcase videos={featuredVideos} categories={videoCategories} />
          </div>
        </section>

        <section
          className="section-shell podcast-section"
          aria-labelledby="podcast-title"
        >
          <SectionIntro
            id="podcast-title"
            eyebrow="Podcast"
            title="A Spotify-ready podcast section."
            summary="Episode embeds, notes and related resources can be dropped in as soon as the confirmed Spotify feed or episode URLs are available."
          />
          <div data-motion>
            <PodcastPanel episodes={podcastSlots} />
          </div>
        </section>

        <section className="section-shell" aria-labelledby="latest-title">
          <SectionIntro
            id="latest-title"
            eyebrow="Latest content"
            title="A flexible feed for articles, resources and updates."
            summary="The visible placeholders are deliberately neutral until real titles, URLs and publication details are supplied."
          />
          <div data-motion>
            <ContentQueue items={contentQueue} />
          </div>
        </section>

        <section
          className="section-shell"
          id="media"
          aria-labelledby="media-title"
        >
          <SectionIntro
            id="media-title"
            eyebrow="Connect"
            title="Media channels are a core part of the platform."
            summary="YouTube, podcast/Spotify, Instagram and LinkedIn each have a dedicated card so media is part of the main experience rather than an afterthought."
          />
          <div data-motion>
            <MediaChannelGrid channels={mediaChannels} />
          </div>
        </section>

        <section
          className="section-shell about-section"
          id="about"
          aria-labelledby="about-title"
        >
          <div>
            <p className="eyebrow">About John</p>
            <h2 id="about-title">
              A professional platform for education work across practice, tools
              and media.
            </h2>
          </div>
          <div className="about-copy" data-motion>
            <p>
              This site is intentionally structured around the work areas
              supplied for John Spurling, without adding unconfirmed biography,
              claims, clients, qualifications or social links.
            </p>
            <ul>
              {aboutFocus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section
          className="section-shell contact-section"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div>
            <p className="eyebrow">Contact</p>
            <h2 id="contact-title">{contactConfig.heading}</h2>
            <p>{contactConfig.description}</p>
          </div>
          <span
            className="button button-secondary is-disabled"
            aria-disabled="true"
          >
            {contactConfig.primaryActionLabel}
          </span>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <p>{siteConfig.name}</p>
          <span>{siteConfig.domain}</span>
        </div>
        <nav aria-label="Footer navigation">
          {pathwayCards.map((pathway) => (
            <a href={pathway.href} key={pathway.title}>
              {pathway.title}
            </a>
          ))}
        </nav>
      </footer>
    </div>
  );
}
