export const siteConfig = {
  name: "John Spurling",
  domain: "johnspurling.co.uk",
  canonicalUrl: "https://johnspurling.co.uk",
  title: "John Spurling | Education, Behaviour, AI, Tools and Media",
  description:
    "John Spurling's professional platform for education, classroom behaviour, school leadership, AI and technology for teachers, tools, resources, video and media.",
  heroKicker: "Education, behaviour and technology",
  heroTitle: "John Spurling",
  heroSummary:
    "A focused professional platform for classroom behaviour, school leadership, AI and technology for teachers, digital tools, resources and media.",
};

export const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Behaviour", href: "#behaviour" },
  { label: "AI & Tech", href: "#ai-tech" },
  { label: "Tools & Resources", href: "#tools" },
  { label: "Videos", href: "#videos" },
  { label: "Media", href: "#media" },
  { label: "Contact", href: "#contact" },
] as const;

export const heroFocusAreas = [
  "Education",
  "Classroom behaviour",
  "School leadership",
  "AI for teachers",
  "Interactive tools",
  "Media",
];

export type Pathway = {
  title: string;
  href: string;
  summary: string;
  items: string[];
};

export const pathwayCards: Pathway[] = [
  {
    title: "Behaviour",
    href: "#behaviour",
    summary:
      "Classroom behaviour, routines, culture and practical leadership content.",
    items: ["Classroom practice", "Leadership", "Staff development"],
  },
  {
    title: "AI & Tech",
    href: "#ai-tech",
    summary:
      "Classroom-focused AI and technology guidance for teachers.",
    items: ["AI for teachers", "EdTech workflows", "Digital confidence"],
  },
  {
    title: "Tools & Resources",
    href: "#tools",
    summary:
      "Interactive apps, teacher resources and GitHub-backed projects.",
    items: ["Interactive apps", "Teacher resources", "Project links"],
  },
  {
    title: "Media",
    href: "#media",
    summary:
      "YouTube, podcast, Spotify, Instagram and LinkedIn content in one place.",
    items: ["YouTube", "Podcast", "Social channels"],
  },
];

export type ToolCardData = {
  name: string;
  description: string;
  category: "Behaviour" | "AI & Tech" | "Resource" | "Interactive Tool";
  thumbnailLabel: string;
  liveUrl: string | null;
  repositoryUrl: string | null;
  featured: boolean;
  status: "Editable placeholder" | "Ready";
};

// Replace these placeholder entries with real tool names, thumbnails and links.
export const toolCards: ToolCardData[] = [
  {
    name: "Behaviour tool",
    description:
      "Reserved for a classroom behaviour or school leadership web app.",
    category: "Behaviour",
    thumbnailLabel: "Behaviour",
    liveUrl: null,
    repositoryUrl: null,
    featured: true,
    status: "Editable placeholder",
  },
  {
    name: "AI teacher tool",
    description:
      "Reserved for an AI or technology workflow designed for teachers.",
    category: "AI & Tech",
    thumbnailLabel: "AI",
    liveUrl: null,
    repositoryUrl: null,
    featured: true,
    status: "Editable placeholder",
  },
  {
    name: "Resource hub",
    description:
      "Reserved for a downloadable or browsable teacher resource collection.",
    category: "Resource",
    thumbnailLabel: "Resource",
    liveUrl: null,
    repositoryUrl: null,
    featured: true,
    status: "Editable placeholder",
  },
  {
    name: "Interactive app",
    description:
      "Reserved for one of the standalone HTML, JavaScript or GitHub projects.",
    category: "Interactive Tool",
    thumbnailLabel: "App",
    liveUrl: null,
    repositoryUrl: null,
    featured: false,
    status: "Editable placeholder",
  },
];

export const videoCategories = [
  "Behaviour",
  "AI for Teachers",
  "Technology",
  "Leadership",
  "Resources",
];

export type VideoSlot = {
  title: string;
  category: string;
  description: string;
  embedUrl: string | null;
};

// Add YouTube embed URLs when the channel/video list is confirmed.
export const featuredVideos: VideoSlot[] = [
  {
    title: "Featured YouTube video",
    category: "Behaviour",
    description:
      "A prominent space for a classroom behaviour or school leadership video.",
    embedUrl: null,
  },
  {
    title: "AI for teachers video",
    category: "AI for Teachers",
    description:
      "A space for a practical AI or education technology video embed.",
    embedUrl: null,
  },
];

export type PodcastSlot = {
  title: string;
  description: string;
  spotifyEmbedUrl: string | null;
};

// Add Spotify episode embed URLs when the podcast feed is confirmed.
export const podcastSlots: PodcastSlot[] = [
  {
    title: "Spotify episode",
    description:
      "A featured podcast area ready for Spotify episode embeds and show notes.",
    spotifyEmbedUrl: null,
  },
];

export type MediaChannel = {
  name: "YouTube" | "Instagram" | "LinkedIn" | "Spotify";
  role: string;
  description: string;
  url: string | null;
};

// Add real public channel URLs here when confirmed.
export const mediaChannels: MediaChannel[] = [
  {
    name: "YouTube",
    role: "Video channel",
    description:
      "Long-form and short-form education, behaviour, AI and technology video content.",
    url: null,
  },
  {
    name: "Instagram",
    role: "Visual updates",
    description:
      "Short-form media, updates and behind-the-scenes education content.",
    url: null,
  },
  {
    name: "LinkedIn",
    role: "Professional network",
    description:
      "Professional posts, platform updates and education technology discussion.",
    url: null,
  },
  {
    name: "Spotify",
    role: "Podcast distribution",
    description:
      "Podcast episodes and audio content once the public Spotify link is confirmed.",
    url: null,
  },
];

export const contentQueue = [
  {
    label: "Article slot",
    title: "Latest writing",
    description:
      "Reserved for future articles, resource notes, video summaries or platform updates.",
  },
  {
    label: "Resource slot",
    title: "Teacher resource",
    description:
      "Reserved for new classroom resources or tool launch notes.",
  },
  {
    label: "Media slot",
    title: "Media update",
    description:
      "Reserved for new video, podcast, Instagram or LinkedIn updates.",
  },
];

export const aboutFocus = [
  "Education",
  "Classroom behaviour and school leadership",
  "AI and technology for teachers",
  "Teacher resources",
  "Interactive tools and apps",
  "Video, podcast and social media content",
];

export const contactConfig = {
  heading: "Contact John",
  description:
    "Contact details, enquiry routes and confirmed social links will be added here once supplied.",
  primaryActionLabel: "Contact route pending",
  primaryActionUrl: null,
};
