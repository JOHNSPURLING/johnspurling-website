import { aiToolCards, featuredVideos } from "@/app/data/site-content";
import { VideoShowcase } from "@/components/home/HomeCards";
import { PageHero, SiteFrame } from "@/components/home/PageChrome";
import { SectionIntro } from "@/components/home/SectionIntro";

function AiToolIcon({
  tool,
  className = "ai-tool-icon",
}: {
  tool: (typeof aiToolCards)[number];
  className?: string;
}) {
  return (
    <div className={className} aria-hidden="true">
      {tool.iconSrc ? (
        <img src={tool.iconSrc} alt="" loading="lazy" />
      ) : tool.iconSlug ? (
        <img
          src={`https://cdn.simpleicons.org/${tool.iconSlug}/f7f9ff`}
          alt=""
          loading="lazy"
        />
      ) : (
        <span>{tool.iconLabel}</span>
      )}
    </div>
  );
}

export default function AiTechPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="AI & Tech"
        title="AI and technology that make teaching easier."
        summary="Practical guidance on AI, productivity and digital tools that help teachers create resources, websites, presentations, voiceovers and workflows in less time."
      />

      <section className="section-shell split-section reverse" aria-labelledby="ai-focus-title">
        <SectionIntro
          id="ai-focus-title"
          eyebrow="Teacher-first technology"
          title="Useful technology, shared practically."
          summary="This section is for tools worth sharing: ChatGPT, Claude, NotebookLM, Napkin AI, Genially, ElevenLabs and other resources that genuinely help."
        />
        <div className="feature-panel accent" data-motion>
          <h3>Technology with a purpose</h3>
          <p>
            The focus is on making better resources, reducing workload and
            helping teachers create useful things more quickly.
          </p>
        </div>
      </section>

      <section className="section-shell" aria-labelledby="ai-tools-title">
        <SectionIntro
          id="ai-tools-title"
          eyebrow="Tool stack"
          title="AI tools worth knowing about."
          summary="A concise map of the tools currently shaping the AI and technology strand of the site."
        />
        <div className="ai-tool-grid" data-motion>
          {aiToolCards.map((tool) => (
            <details className="ai-tool-card ai-tool-disclosure" key={tool.name}>
              <summary className="ai-tool-summary">
                <AiToolIcon tool={tool} />
                <span className="ai-tool-summary-copy">
                  <span className="ai-tool-title">{tool.name}</span>
                  <span>{tool.description}</span>
                </span>
              </summary>
              <div className="ai-tool-detail-copy">
                {tool.detailParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="section-shell" aria-labelledby="ai-videos-title">
        <SectionIntro
          id="ai-videos-title"
          eyebrow="Videos"
          title="Technology-related videos and recent uploads."
          summary="The full media page brings video and episode material together. This page highlights recent YouTube content that can later be filtered into AI and technology topics."
        />
        <div data-motion>
          <VideoShowcase videos={featuredVideos} categories={[]} />
        </div>
      </section>
    </SiteFrame>
  );
}
