export const siteConfig = {
  name: "John Spurling",
  domain: "johnspurling.co.uk",
  canonicalUrl: "https://johnspurling.co.uk",
  title: "John Spurling | Maths, Behaviour, AI and Teacher Resources",
  description:
    "John Spurling's professional platform for maths teaching, classroom behaviour, school leadership, AI and technology, teacher tools, resources and media.",
  heroKicker: "Maths teacher, school leader and creator",
  heroTitle: "John Spurling",
  heroSummary:
    "Over 20 years in teaching and school leadership, now mainly focused on maths teaching, practical resources, behaviour thinking and useful technology for busy teachers and leaders.",
};

export const navigationItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Behaviour", href: "/behaviour" },
  { label: "Leadership", href: "/leadership" },
  { label: "AI & Tech", href: "/ai-tech" },
  { label: "Tools", href: "/tools" },
  { label: "Maths Resources", href: "/maths-resources" },
  { label: "Media", href: "/media" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export type Pathway = {
  title: string;
  href: string;
  summary: string;
  items: string[];
};

export const pathwayCards: Pathway[] = [
  {
    title: "Maths Resources",
    href: "/maths-resources",
    summary:
      "Live maths resources for quick classroom practice, explanation and student support.",
    items: ["Powers of ten", "Rounding", "Coordinates"],
  },
  {
    title: "Behaviour",
    href: "/behaviour",
    summary:
      "Strategies, resources, routines and behaviour systems for stronger classrooms.",
    items: ["Strategies", "Resources", "Routines"],
  },
  {
    title: "Leadership",
    href: "/leadership",
    summary:
      "Leadership prompts, reminders and thinking tools for better school decisions.",
    items: ["Leadership Lens", "Leadership Reminders", "Decision-making"],
  },
  {
    title: "AI & Tech",
    href: "/ai-tech",
    summary:
      "Practical ways to use AI and technology to create faster, better resources.",
    items: ["ChatGPT & Claude", "NotebookLM", "Genially & ElevenLabs"],
  },
  {
    title: "Tools",
    href: "/tools",
    summary:
      "Interactive tools, classroom utilities, games, jukebox ideas and escape rooms.",
    items: ["Conversation starters", "Games", "Jukebox"],
  },
  {
    title: "Media",
    href: "/media",
    summary:
      "YouTube videos, podcast material, assemblies and general media content.",
    items: ["YouTube", "Podcast material", "Assemblies"],
  },
];

export const toolCategories = [
  "General lesson tools",
  "Behaviour resources",
  "Tutor resources",
  "Discussion activities",
  "Assemblies",
  "Jukebox",
  "Games",
  "Escape rooms",
] as const;

export type ToolCategory = "Maths resources" | (typeof toolCategories)[number];

export type ToolCardData = {
  name: string;
  description: string;
  category: ToolCategory;
  thumbnailLabel: string;
  thumbnailSrc?: string;
  liveUrl: string | null;
  primaryLabel?: string;
  repositoryUrl: string | null;
  secondaryUrl?: string | null;
  secondaryLabel?: string;
  featured: boolean;
  status: "Ready";
};

export const mathsResourceCards: ToolCardData[] = [
  {
    name: "Multiply and divide powers of ten",
    description:
      "Interactive maths resource for practising multiplying and dividing by powers of ten.",
    category: "Maths resources",
    thumbnailLabel: "Maths",
    liveUrl: "https://multiply-divide-powers-ten.netlify.app",
    repositoryUrl: null,
    featured: true,
    status: "Ready",
  },
  {
    name: "Rounding Lab",
    description:
      "Interactive maths resource for exploring and practising rounding.",
    category: "Maths resources",
    thumbnailLabel: "Maths",
    liveUrl: "https://rounding-lab.netlify.app",
    repositoryUrl: null,
    featured: true,
    status: "Ready",
  },
  {
    name: "Using Coordinates",
    description:
      "Interactive maths resource for working with coordinates.",
    category: "Maths resources",
    thumbnailLabel: "Maths",
    liveUrl: "https://usingcoordinates.netlify.app",
    repositoryUrl: null,
    featured: true,
    status: "Ready",
  },
];

// Replace the null URLs with the live tool and GitHub/project links when supplied.
export const toolCards: ToolCardData[] = [
  {
    name: "Conversation Starters",
    description:
      "A light, fun tool for prompting discussion and conversation.",
    category: "General lesson tools",
    thumbnailLabel: "Talk",
    thumbnailSrc: "/media/tools/conversation-starters.jpg",
    liveUrl: "https://my-conversation-starters.netlify.app",
    repositoryUrl: null,
    featured: true,
    status: "Ready",
  },
  {
    name: "Jukebox",
    description:
      "A classroom jukebox tool for music, atmosphere and lesson transitions.",
    category: "Jukebox",
    thumbnailLabel: "Audio",
    liveUrl: "https://johnjukebox.netlify.app",
    repositoryUrl: null,
    featured: true,
    status: "Ready",
  },
  {
    name: "Mad Science",
    description:
      "A Genially escape room activity built around a Mad Science theme.",
    category: "Escape rooms",
    thumbnailLabel: "Escape",
    liveUrl: "https://view.genially.com/65cd5a4b03556300142f7f24",
    repositoryUrl: null,
    featured: true,
    status: "Ready",
  },
  {
    name: "Don't Butter My Toast",
    description:
      "A playful interactive game for quick classroom energy and engagement.",
    category: "Games",
    thumbnailLabel: "Toast",
    liveUrl: "https://dontbuttermytoast.netlify.app",
    repositoryUrl: null,
    featured: true,
    status: "Ready",
  },
  {
    name: "Can you find the spy?",
    description:
      "A social deduction game for groups, discussion and playful classroom interaction.",
    category: "Games",
    thumbnailLabel: "Spy",
    thumbnailSrc: "/media/tools/find-the-spy.jpg",
    liveUrl: "https://canyoufindthespy.netlify.app",
    repositoryUrl: null,
    featured: true,
    status: "Ready",
  },
  {
    name: "Lesson Starter Timer",
    description:
      "A quick classroom timer for lesson starters, transitions and focused opening tasks.",
    category: "General lesson tools",
    thumbnailLabel: "Timer",
    liveUrl: "https://lessonstartertimer.netlify.app",
    repositoryUrl: null,
    featured: true,
    status: "Ready",
  },
  {
    name: "Behaviour Training App with Random Student Selector",
    description:
      "A behaviour training and cold-calling practice tool with a built-in random student selector.",
    category: "Behaviour resources",
    thumbnailLabel: "Select",
    liveUrl: "/resources/behaviour-training-app-with-random-student-selector/",
    repositoryUrl: null,
    featured: true,
    status: "Ready",
  },
  {
    name: "Behaviour Contracts Pack",
    description:
      "Downloadable behaviour contract templates gathered into one practical pack.",
    category: "Behaviour resources",
    thumbnailLabel: "DOCX",
    liveUrl: "/resources/behaviour-contracts-pack/",
    primaryLabel: "Open pack",
    repositoryUrl: null,
    featured: true,
    status: "Ready",
  },
  {
    name: "Charlie Taylor Checklist",
    description:
      "A downloaded checklist resource from the Oh Behave archive, available as a PDF.",
    category: "Behaviour resources",
    thumbnailLabel: "PDF",
    liveUrl: "/resources/downloads/pdf/charlie-taylor-checklist.pdf",
    primaryLabel: "Download PDF",
    repositoryUrl: null,
    featured: true,
    status: "Ready",
  },
  {
    name: "Tutor PowerPoint",
    description:
      "A tutor-time PowerPoint resource from the Oh Behave archive.",
    category: "Tutor resources",
    thumbnailLabel: "PPT",
    liveUrl: "/resources/downloads/powerpoints/blank-tutor-powerpoint.pptx",
    primaryLabel: "Download PPT",
    repositoryUrl: null,
    featured: true,
    status: "Ready",
  },
  {
    name: "Balloon Debate",
    description:
      "A debate and discussion activity, with a Genially link and downloadable PowerPoint version.",
    category: "Discussion activities",
    thumbnailLabel: "Debate",
    liveUrl: "https://view.genially.com/69fa44fbeeba0a0e5f4173fa",
    primaryLabel: "Open Genially",
    repositoryUrl: null,
    secondaryUrl: "/resources/downloads/powerpoints/balloon-debate-team-building-task.pptx",
    secondaryLabel: "Download PPT",
    featured: true,
    status: "Ready",
  },
  {
    name: "Tutor Time Activity Links",
    description:
      "A small curated set of tutor-time activity links from the existing Oh Behave resources.",
    category: "Tutor resources",
    thumbnailLabel: "Links",
    liveUrl: "/resources/tutor-time-links/",
    primaryLabel: "Open links",
    repositoryUrl: null,
    featured: true,
    status: "Ready",
  },
  {
    name: "Teaching Music",
    description:
      "A Genially music resource for lessons, atmosphere and classroom routines.",
    category: "General lesson tools",
    thumbnailLabel: "Music",
    thumbnailSrc: "/media/tools/teaching-music.jpg",
    liveUrl: "https://view.genially.com/6918789f8c27d3334ff60707",
    primaryLabel: "Open Genially",
    repositoryUrl: null,
    featured: true,
    status: "Ready",
  },
  {
    name: "Role of the Form Tutor",
    description:
      "A Genially resource focused on the role, routines and expectations of the form tutor.",
    category: "Tutor resources",
    thumbnailLabel: "Tutor",
    thumbnailSrc: "/media/tools/role-of-form-tutor.jpg",
    liveUrl: "https://view.genially.com/66b34e58313e09152b4291f9",
    primaryLabel: "Open Genially",
    repositoryUrl: null,
    featured: true,
    status: "Ready",
  },
  {
    name: "Make The Call",
    description:
      "A practical Genially resource to support teachers and tutors with phone calls home.",
    category: "Behaviour resources",
    thumbnailLabel: "Call",
    thumbnailSrc: "/media/tools/make-the-call.jpg",
    liveUrl: "https://view.genially.com/66b60d7d0e563f7df81c2933",
    primaryLabel: "Open Genially",
    repositoryUrl: null,
    featured: true,
    status: "Ready",
  },
  {
    name: "School Assemblies Folder",
    description:
      "A Genially folder for school assembly material and related media resources.",
    category: "Assemblies",
    thumbnailLabel: "Assembly",
    liveUrl: "https://view.genially.com/699431499319fc24079bd609",
    primaryLabel: "Open folder",
    repositoryUrl: null,
    featured: true,
    status: "Ready",
  },
  {
    name: "Pirate Game",
    description:
      "A Genially game link added while the resource is being reviewed.",
    category: "Games",
    thumbnailLabel: "Pirate",
    liveUrl: "https://view.genially.com/676e1881c0a52fc32818883e",
    primaryLabel: "Open Genially",
    repositoryUrl: null,
    featured: false,
    status: "Ready",
  },
  {
    name: "The Island Is No Longer Safe",
    description:
      "A 50-minute tutor-time or classroom discussion activity.",
    category: "Discussion activities",
    thumbnailLabel: "Island",
    liveUrl: "https://view.genially.com/69faec52b49730ffce39732d",
    primaryLabel: "Open Genially",
    repositoryUrl: null,
    featured: true,
    status: "Ready",
  },
];

export const leadershipAssets = [
  {
    title: "Leadership Reminders",
    src: "/media/leadership-reminders.png",
    alt: "Leadership Reminders graphic with principles for evidence, communication, consistency, questions and better outcomes.",
  },
  {
    title: "John's Leadership Lens",
    src: "/media/leadership-lens.png",
    alt: "John's Leadership Lens graphic with twelve leadership prompts and the Tempest Warming symbol.",
  },
] as const;

export const behaviourPrinciples = [
  "The strongest idea should win.",
  "Evidence before opinion.",
  "Communication creates understanding, not just awareness.",
  "Seek belief, not just compliance.",
  "Consistency is fairness, not sameness.",
  "Think in systems, not symptoms.",
  "Good questions create better thinking.",
];

export const aiTechTopics = [
  "ChatGPT and Claude for planning, writing and resource creation",
  "NotebookLM for research, summaries and working with source material",
  "Napkin AI and visual thinking tools",
  "Genially for interactive lesson material",
  "ElevenLabs and voice tools for media and learning resources",
  "AI-assisted websites, PowerPoints, voiceovers and classroom workflows",
];

export type AiToolCard = {
  name: string;
  description: string;
  detailParagraphs: string[];
  iconSrc?: string;
  iconSlug: string | null;
  iconLabel: string;
};

export const aiToolCards: AiToolCard[] = [
  {
    name: "ChatGPT",
    description:
      "Planning, drafting, resource creation and practical teacher workflows.",
    detailParagraphs: [
      "ChatGPT is probably the AI tool I use most. I use it every day as a personal assistant: somewhere to develop ideas, ask questions, solve problems and, increasingly, actually create things.",
      "I use it to design websites, build online tools and resources, analyse data, create documents and develop ideas from a very rough starting point into something I can actually use. It is also one of the best AI image creators I have used, particularly when you want to keep developing and refining an image rather than accepting the first result.",
      "It is brilliant for creating resources. I can scan in an existing worksheet, for example, and ask ChatGPT to recreate it as a properly formatted document with questions, answer spaces and examples, ready to give to students.",
      "For me, its biggest strength is its versatility. I do not really use ChatGPT for one particular job. It has become the AI assistant that sits alongside pretty much everything I do.",
    ],
    iconSrc: "/media/icons/chat-gpt.png",
    iconSlug: "openai",
    iconLabel: "GPT",
  },
  {
    name: "Claude",
    description:
      "Longer writing, thinking through resources and building structured content.",
    detailParagraphs: [
      "Claude is my go-to when I want to code or build something more substantial. I use it a lot for developing websites, web apps, interactive tools and resources.",
      "I particularly like using its Design Mode because I do not just want something that works. I want it to look good as well. I can describe an idea, build it, test it and then keep refining the design and functionality until I get what I actually had in mind.",
      "I also use Claude for creating animations and interactive elements, which means I can take what would once have been a fairly static teaching resource and turn it into something much more engaging.",
    ],
    iconSlug: "anthropic",
    iconLabel: "C",
  },
  {
    name: "NotebookLM",
    description:
      "Working with source material, notes, summaries and research packs.",
    detailParagraphs: [
      "NotebookLM has become my default research tool. The important difference for me is that I can give it the sources I want it to work from: documents, PDFs, websites and other material, then ask questions based specifically on that information.",
      "That makes it particularly useful when accuracy matters and I do not want AI filling in the gaps or creating information that is not actually in my sources.",
      "I also use it extensively with YouTube. If I find a long video containing something I want to reference, I can use NotebookLM to analyse and summarise it rather than having to go back through the entire video myself.",
      "It can then turn that research into summaries, reports, infographics and other useful information. I often take those outputs and feed them into other AI tools to create resources, websites or interactive tools.",
    ],
    iconSlug: "notebooklm",
    iconLabel: "NLM",
  },
  {
    name: "Napkin AI",
    description:
      "Turning ideas into diagrams, visuals and clearer explanations.",
    detailParagraphs: [
      "Napkin AI was one of my go-to tools for creating quick infographics and visualising information. Give it some text and it can turn that information into diagrams and graphics without having to design everything yourself.",
      "I probably do not use it as much as I used to. Other AI tools have developed incredibly quickly, whereas Napkin has not progressed at quite the same rate. There have been some interesting new features added recently, so it is still one I keep an eye on.",
      "It is worth trying, particularly if you want a quick way of turning written information into something more visual, but it is not as essential to my workflow as it once was.",
    ],
    iconSrc: "/media/icons/napkin-ai.jpg",
    iconSlug: null,
    iconLabel: "N",
  },
  {
    name: "Genially",
    description:
      "Interactive lesson material, presentations and escape-room style resources.",
    detailParagraphs: [
      "Genially has become my go-to replacement for the traditional PowerPoint at school. I use it when I want to create something interactive, multimedia-based or simply more engaging than a standard presentation.",
      "One of its biggest strengths is the ability to embed code, which means you can create your own interactive tools and almost mini-websites that can then be shared with students, staff or anyone else through a link.",
      "A lot of the interactive resources on this website have been created using Genially. You will probably recognise them when they appear because you will see the Genially branding. Feel free to have a play with them.",
      "There is a free version, which is more than enough to get started. If you begin creating more sophisticated resources, you will eventually find some limitations and may want one of the paid plans. I pay for the full version yearly and, for the amount I use it, I think it is well worth it. For a teacher simply wanting to experiment, though, I would start with the free version and see how far you can push it.",
    ],
    iconSrc: "/media/icons/genially.png",
    iconSlug: "genially",
    iconLabel: "G",
  },
  {
    name: "ElevenLabs",
    description:
      "Voiceovers, audio material and media production for learning resources.",
    detailParagraphs: [
      "ElevenLabs is my go-to tool for AI voices and voiceovers. I use it across videos, presentations, social media and interactive resources whenever I want professional-sounding audio without having to sit down and record everything manually.",
      "I have also cloned my own voice, so I can create a script and have ElevenLabs generate the voiceover in a version of my voice. You will hear that used in quite a few of the resources I have created.",
      "It is one of those tools that becomes increasingly useful once you start combining it with everything else. I can develop an idea in ChatGPT, build something interactive in Claude or Genially, and then use ElevenLabs to add the voice and audio.",
    ],
    iconSrc: "/media/icons/elevenlabs.webp",
    iconSlug: "elevenlabs",
    iconLabel: "11",
  },
];

export const videoCategories: string[] = [];

export type VideoSlot = {
  title: string;
  category: string;
  description: string;
  embedUrl: string | null;
};

export const featuredVideos: VideoSlot[] = [
  {
    title: "How to Use DownloadThemAll Chrome Extension (Save Hours of Work)",
    category: "",
    description: "",
    embedUrl: "https://www.youtube-nocookie.com/embed/wmOEdzNFjdg",
  },
  {
    title: "NotebookLM Just Got A Superpower! (YouTube Import is Here)",
    category: "",
    description: "",
    embedUrl: "https://www.youtube-nocookie.com/embed/vwzFh11JWfw",
  },
  {
    title: "I Stopped Typing and 10x My Workflow (Wispr Flow Guide)",
    category: "",
    description: "",
    embedUrl: "https://www.youtube-nocookie.com/embed/uHngIlbAgn4",
  },
  {
    title: "How to use the The One Minute Manager",
    category: "",
    description: "",
    embedUrl: "https://www.youtube-nocookie.com/embed/dkOYtKHVTT0",
  },
  {
    title: "Why Willpower Is Making You Fail (The Discipline Equation)",
    category: "",
    description: "",
    embedUrl: "https://www.youtube-nocookie.com/embed/6npm8oyoKHY",
  },
  {
    title: "The Hero's Journey",
    category: "",
    description: "",
    embedUrl: "https://www.youtube-nocookie.com/embed/WsoPGzTKVKE",
  },
  {
    title: "How to use Nano Banana 2 in Education",
    category: "",
    description: "",
    embedUrl: "https://www.youtube-nocookie.com/embed/gJylKDwmHSY",
  },
  {
    title: "Half Term Bliss",
    category: "",
    description: "",
    embedUrl: "https://www.youtube-nocookie.com/embed/w97LaJGsp0Q",
  },
  {
    title: "27th June is Multiculturalism Day",
    category: "",
    description: "",
    embedUrl: "https://www.youtube-nocookie.com/embed/aHkNA4uwxq4",
  },
  {
    title: "Intro EDGE",
    category: "",
    description: "",
    embedUrl: "https://www.youtube-nocookie.com/embed/t4Yu2SJzs40",
  },
];

export type PodcastSlot = {
  title: string;
  description: string;
  youtubeEmbedUrl: string | null;
  spotifyEmbedUrl: string | null;
};

export const podcastSlots: PodcastSlot[] = [
  {
    title: "Episode 20: Behaviour Resources to Empower Teachers",
    description:
      "Episode video from the Tempest Warming YouTube channel.",
    youtubeEmbedUrl: "https://www.youtube-nocookie.com/embed/zQPT9NKSfsY",
    spotifyEmbedUrl: null,
  },
  {
    title: "Episode 19 - Establishing Routines",
    description:
      "Episode video from the Tempest Warming YouTube channel.",
    youtubeEmbedUrl: "https://www.youtube-nocookie.com/embed/fCWMp_Qy7wE",
    spotifyEmbedUrl: null,
  },
  {
    title: "Episode 18 - Peripheral Vision In The Classroom",
    description:
      "Episode video from the Tempest Warming YouTube channel.",
    youtubeEmbedUrl: "https://www.youtube-nocookie.com/embed/pcTOhmRYp8o",
    spotifyEmbedUrl: null,
  },
  {
    title: "Episode 17 - Positive Framing",
    description:
      "Episode video from the Tempest Warming YouTube channel.",
    youtubeEmbedUrl: "https://www.youtube-nocookie.com/embed/eT0U6ZSY3e0",
    spotifyEmbedUrl: null,
  },
  {
    title: "Episode 16 - UNIFORM IN SCHOOLS",
    description:
      "Episode video from the Tempest Warming YouTube channel.",
    youtubeEmbedUrl: "https://www.youtube-nocookie.com/embed/p0a088DDJFc",
    spotifyEmbedUrl: null,
  },
  {
    title: "Episode 15 - THE ISSUE WITH PHONES IN SCHOOLS",
    description:
      "Episode video from the Tempest Warming YouTube channel.",
    youtubeEmbedUrl: "https://www.youtube-nocookie.com/embed/0r20y9YZVmw",
    spotifyEmbedUrl: null,
  },
  {
    title: "Episode 14 - Why Behaviour Goes Wrong",
    description:
      "Episode video from the Tempest Warming YouTube channel.",
    youtubeEmbedUrl: "https://www.youtube-nocookie.com/embed/16JhY2Tn-NE",
    spotifyEmbedUrl: null,
  },
  {
    title: "Episode 13 - The Role of a HOD and Behaviour",
    description:
      "Episode video from the Tempest Warming YouTube channel.",
    youtubeEmbedUrl: "https://www.youtube-nocookie.com/embed/WjN76CdTIpo",
    spotifyEmbedUrl: null,
  },
  {
    title: "Episode 12 - TOP TEN BEHAVIOUR TIPS FOR CLASSROOM TEACHERS",
    description:
      "Episode video from the Tempest Warming YouTube channel.",
    youtubeEmbedUrl: "https://www.youtube-nocookie.com/embed/FoA35I3aFpE",
    spotifyEmbedUrl: null,
  },
  {
    title: "Episode 11 - How to deal with low-level disruption in the classroom",
    description:
      "Episode video from the Tempest Warming YouTube channel.",
    youtubeEmbedUrl: "https://www.youtube-nocookie.com/embed/i4NDuPKRLHo",
    spotifyEmbedUrl: null,
  },
  {
    title: "Episode 10 - How to deal with students swearing at teachers",
    description:
      "Episode video from the Tempest Warming YouTube channel.",
    youtubeEmbedUrl: "https://www.youtube-nocookie.com/embed/SljDq3IH14c",
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
    url: "https://www.youtube.com/@Tempestwarming",
  },
];

export const contentQueue = [
  {
    label: "Behaviour",
    title: "Leadership reminders",
    description:
      "A developing set of prompts for better thinking, better decisions and better outcomes.",
  },
  {
    label: "AI & Tech",
    title: "Useful AI tools",
    description:
      "Practical ideas for using AI and technology to reduce workload and create resources faster.",
  },
  {
    label: "Maths",
    title: "Interactive resources",
    description:
      "Live maths resources for powers of ten, rounding and coordinates.",
  },
];

export const aboutFocus = [
  "Teacher and school leader with over 20 years of experience",
  "Experience teaching PE, maths and other subjects including ASDAN and COPE",
  "Leadership experience including Head of Department, Head of Year, Assistant Head, Deputy Head and Acting Headteacher",
  "Behaviour specialist focused on routines, systems, culture and low-level disruption",
  "Technology problem-solver creating tools and resources to reduce workload",
  "Creator of videos, podcast material, assemblies and practical classroom media",
];

export const contactConfig = {
  heading: "Contact John",
  description:
    "The confirmed public channel currently linked from the site is YouTube. A website email can be added once it is created through the hosting account.",
};
