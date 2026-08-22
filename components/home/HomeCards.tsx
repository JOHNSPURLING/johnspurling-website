import type {
  MediaChannel,
  Pathway,
  PodcastSlot,
  ToolCardData,
  VideoSlot,
} from "@/app/data/site-content";
import type { ReactNode } from "react";

function ActionLink({
  href,
  children,
  variant = "primary",
}: {
  href: string | null;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  if (!href) {
    return null;
  }

  return (
    <a className={`action-link action-link-${variant}`} href={href}>
      {children}
    </a>
  );
}

export function PathwayGrid({ pathways }: { pathways: Pathway[] }) {
  return (
    <div className="pathway-grid">
      {pathways.map((pathway, index) => (
        <article className="pathway-card" key={pathway.title}>
          <div>
            <div className="card-heading-row">
              <p className="card-kicker">{pathway.title}</p>
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <h3>{pathway.summary}</h3>
          </div>
          <ul aria-label={`${pathway.title} focus areas`}>
            {pathway.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a className="text-link" href={pathway.href}>
            View pathway
          </a>
        </article>
      ))}
    </div>
  );
}

export function ToolGrid({ tools }: { tools: ToolCardData[] }) {
  return (
    <div className="tool-grid">
      {tools.map((tool) => {
        const secondaryHref = tool.secondaryUrl ?? tool.repositoryUrl;
        const secondaryLabel = tool.secondaryUrl
          ? tool.secondaryLabel ?? "Open resource"
          : "Project URL";

        return (
          <article className={tool.featured ? "tool-card featured" : "tool-card"} key={tool.name}>
            <div className="tool-thumb" aria-hidden="true">
              {tool.thumbnailSrc ? (
                <img src={tool.thumbnailSrc} alt="" loading="lazy" />
              ) : (
                <span>{tool.thumbnailLabel}</span>
              )}
            </div>
            <div className="tool-card-body">
              <div className="card-meta-row">
                <span className="pill">{tool.category}</span>
                {tool.featured ? <span className="pill pill-hot">Featured</span> : null}
              </div>
              <h3>{tool.name}</h3>
              <p>{tool.description}</p>
              {tool.liveUrl || secondaryHref ? (
                <div className="tool-actions">
                  <ActionLink href={tool.liveUrl}>{tool.primaryLabel ?? "Open tool"}</ActionLink>
                  <ActionLink href={secondaryHref} variant="secondary">
                    {secondaryLabel}
                  </ActionLink>
                </div>
              ) : null}
              <span className="status-note">{tool.status}</span>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export function VideoShowcase({
  videos,
  categories,
}: {
  videos: VideoSlot[];
  categories: string[];
}) {
  return (
    <div className="media-layout">
      {categories.length > 0 ? (
        <div className="category-rail" aria-label="YouTube video grouping">
          {categories.map((category) => (
            <span key={category}>{category}</span>
          ))}
        </div>
      ) : null}
      <div className="video-grid">
        {videos.map((video) => (
          <article className="embed-card" key={video.title}>
            <div className="video-frame">
              {video.embedUrl ? (
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              ) : (
                <div className="embed-placeholder">
                  <span className="play-mark" aria-hidden="true" />
                  <p>YouTube embed slot</p>
                </div>
              )}
            </div>
            <div className="embed-copy">
              {video.category ? <span className="pill">{video.category}</span> : null}
              <h3>{video.title}</h3>
              {video.description ? <p>{video.description}</p> : null}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export function PodcastPanel({ episodes }: { episodes: PodcastSlot[] }) {
  return (
    <div className="podcast-grid">
      {episodes.map((episode) => (
        <article className="podcast-card" key={episode.title}>
          {episode.youtubeEmbedUrl ? (
            <div className="video-frame episode-frame">
              <iframe
                src={episode.youtubeEmbedUrl}
                title={episode.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          ) : (
            <div className="podcast-visual" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
          )}
          <div>
            <p className="card-kicker">
              {episode.youtubeEmbedUrl ? "Episode / YouTube" : "Podcast / Spotify"}
            </p>
            <h3>{episode.title}</h3>
            <p>{episode.description}</p>
            {episode.spotifyEmbedUrl ? (
              <iframe
                src={episode.spotifyEmbedUrl}
                title={episode.title}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            ) : episode.youtubeEmbedUrl ? (
              <a className="text-link" href={episode.youtubeEmbedUrl.replace("youtube-nocookie.com/embed/", "youtube.com/watch?v=")}>
                Open on YouTube
              </a>
            ) : (
              <span className="embed-note">Embed ready</span>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}

export function MediaChannelGrid({ channels }: { channels: MediaChannel[] }) {
  return (
    <div className="channel-grid">
      {channels.map((channel) => (
        <article className="channel-card" key={channel.name}>
          <div className="channel-icon" aria-hidden="true">
            {channel.name.slice(0, 2)}
          </div>
          <div>
            <p className="card-kicker">{channel.role}</p>
            <h3>{channel.name}</h3>
            <p>{channel.description}</p>
            <ActionLink href={channel.url} variant="secondary">
              Visit channel
            </ActionLink>
            {!channel.url ? <span className="embed-note">Link ready</span> : null}
          </div>
        </article>
      ))}
    </div>
  );
}

export function ContentQueue({
  items,
}: {
  items: { label: string; title: string; description: string }[];
}) {
  return (
    <div className="content-list">
      {items.map((item) => (
        <article className="content-row" key={item.title}>
          <span>{item.label}</span>
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
