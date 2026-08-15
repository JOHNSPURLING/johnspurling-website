# Content Migration Inventory: oh-behave.com to johnspurling.co.uk

Audit date: 2026-08-15  
Source site: https://www.oh-behave.com  
Target structure: Behaviour, AI & Tech, Tools & Resources, Media, About, Contact

## Migration Principles

- Preserve useful teacher-facing resources, behaviour guidance, downloadable tools, and media/resource links.
- Rewrite most visible copy so it fits the John Spurling brand rather than the old OH-BEHAVE.com resource-site voice.
- Merge index/menu pages into the new data-driven Tools & Resources hub where possible.
- Archive unfinished, empty, duplicate, or placeholder pages until real content is supplied.
- Do not migrate the old Wix navigation, visual style, spelling/capitalisation quirks, duplicate footer/nav text, or the OH-BEHAVE.com brand as the main identity.

## Executive Summary

The current public site is mainly a practical resource library, not a personal/professional platform. The strongest migration candidates are:

- Behaviour guidance pages: Behaviour vs Discipline, Top Ten Tips, Report Cards, Tutor PowerPoint, Role of the Tutor, Role of Head of Year.
- Downloadable resources: Pirate Game PPT, Balloon Debate PPT, Tutor PowerPoint, Charlie Taylor checklist PDF, behaviour contract DOCX files.
- AI and technology lists: AI website pages, useful websites list, escape room resource, tech tips structure.
- Media placeholders: Behaviour Videos / Behaviour Podcast page should become part of the new Media area, but needs actual embeds/links before launch.
- Assemblies and tutor-time resources: worth preserving as a resource collection, but should be grouped and rewritten rather than promoted as major homepage content.

## High-Level Site Structure Mapping

| Current OH-BEHAVE area | Recommended target area | Action | Notes |
| --- | --- | --- | --- |
| Home page | About / Home positioning | Rewrite | Keep the broad promise: teacher resources, behaviour management, technology and AI in schools. Replace OH-BEHAVE branding with John Spurling. |
| Site Menu / More Resources | Tools & Resources | Merge | Useful as an inventory of resource categories only. Do not recreate as a page. |
| Behaviour Resources menu | Behaviour + Tools & Resources | Keep / Merge | Strong source taxonomy for cards and future filters. Fix typo "RESOURCS". |
| Behaviour vs Discipline | Behaviour | Keep / Rewrite | Strong conceptual article; rewrite for voice, accuracy and premium presentation. |
| Top Ten Tips | Behaviour | Keep / Merge | Duplicate exists at `/top-10-tips` and `/portfolio/top-ten-tips`; merge into one canonical article/resource. |
| Starting the New Term | Behaviour / Tools & Resources | Archive | Page currently appears mostly image/slider shell with little accessible text. Preserve URL as possible hidden resource if files exist. |
| Scripted Conversations | Behaviour / Tools & Resources | Archive | Page shell only in accessible audit. Revisit if underlying slides/files exist. |
| Seating Plans | Behaviour / Tools & Resources | Archive | Page shell only in accessible audit. Revisit if underlying slides/files exist. |
| Book Reviews | Behaviour / Resources | Merge / Rewrite | Useful as a curated reading list. Individual summaries may need rewrite and attribution checks. |
| Report Cards | Behaviour / Tools & Resources | Keep / Rewrite | Strong practical content around student responsibility and self-monitoring. |
| Charlie Taylor checklist | Behaviour / Media / Resources | Keep | Has PDF download and audio/podcast style resource. Correct typos before publishing. |
| Tutor PowerPoint | Tools & Resources / Behaviour | Keep / Rewrite | Strong practical school-operations resource with PPT download. |
| Behaviour Contracts | Tools & Resources / Behaviour | Keep | Valuable downloadable DOCX pack. Needs careful framing to avoid overpromising universal fit. |
| Role of the Tutor | Behaviour / Tools & Resources | Keep / Rewrite | Substantial guide. Could become article plus downloadable/interactive guide. |
| Role of Head of Year | Behaviour / Leadership | Keep / Rewrite | Strong leadership/pastoral content. Should map to Behaviour initially. |
| AI Websites | AI & Tech | Keep / Rewrite | Good starter taxonomy of AI tools, but update links and copy before publishing. |
| Tech Tips | AI & Tech / Tools & Resources | Archive / Merge | Mostly "coming soon"; keep structure only. |
| Useful Websites | AI & Tech / Tools & Resources | Keep / Rewrite | Useful curated links list. Verify links and replace vague "LINK" labels. |
| Escape Rooms | Tools & Resources | Keep / Rewrite | Has Genially link and clear use case. Mark desktop/laptop note. |
| Tutor Time Activities | Tools & Resources | Merge / Rewrite | Good external links; copy reads generic and should be condensed. |
| Assembly Files | Tools & Resources | Merge | Index page only. Preserve Values and Months subcollections. |
| Values Assemblies | Tools & Resources | Merge / Rewrite | Large set of assembly text. Useful but likely too generic for major site surface. |
| Monthly Assemblies | Tools & Resources | Archive / Keep partial | January has substantial content and files. February/December appear shells pointing to same files. |
| Team Building | Tools & Resources | Keep / Rewrite | Balloon Debate PPT is useful. Page has "coming soon" wording to remove. |
| SEND Tool beta | Tools & Resources | Archive | Requires sign-up/login and visible public page contains no useful product explanation. |
| Conversation Starters | Tools & Resources | Ignore / Archive | Empty public page in audit. |
| Contact Us | Contact | Ignore / Rewrite later | Current contact URL redirects to Top 10 Tips/blank page and does not expose useful contact copy. |
| Buy Me a Coffee | Contact / Media | Archive for decision | Existing external link is `https://buymeacoffee.com/tempestwarming`; do not surface unless John confirms it should be part of the new brand. |

## Detailed Inventory

### Home

| Item | Source URL | Status | Target | Preserve | Recommendation |
| --- | --- | --- | --- | --- | --- |
| OH-BEHAVE home positioning | https://www.oh-behave.com/ | Rewrite | Home / About | Broad areas: "Teacher Resources", "Behaviour Management Resources", "Technology and AI in Schools". | Use as proof of the old site's scope, not as finished copy. Replace OH-BEHAVE.com with John Spurling and align with the new platform language. |
| Old OH-BEHAVE brand lockup/logo | https://www.oh-behave.com/ | Ignore | None | Static logo/image only. | Do not migrate as primary brand. The new site is John Spurling. |
| Buy Me a Coffee footer CTA | https://buymeacoffee.com/tempestwarming | Archive | Contact / Media | Support link exists. | Do not expose until confirmed. Handle as editable placeholder in data if needed later. |

### Site Menu and Resource Taxonomy

| Item | Source URL | Status | Target | Preserve | Recommendation |
| --- | --- | --- | --- | --- | --- |
| More Resources menu | https://www.oh-behave.com/site-menu | Merge | Tools & Resources | Categories: Behaviour Resources, Assembly Files, Behaviour Podcast, Role of the Tutor, Role of the Head of Year, AI use in teaching, Educational Escape Rooms, Tech Tips for Teachers, Team Building. | Convert into central content/data taxonomy. Do not recreate the page as a menu page. |
| Behaviour Resources menu | https://www.oh-behave.com/free-behaviour-resources | Keep / Merge | Behaviour / Tools & Resources | Categories/cards: Behaviour vs Discipline, Top Ten Tips, Starting the New Term, Scripted Conversations, Seating Plans, Book Review, Report Cards, Charlie Taylor's Checklist, Tutor PowerPoint, Specific Behaviour Contracts. | Useful resource-hub structure. Merge into Tools & Resources cards with `category`, `featured`, `status`, `sourceUrl`, and `downloadUrl` fields. |

### Behaviour

| Item | Source URL | Status | Target | Preserve | Recommendation |
| --- | --- | --- | --- | --- | --- |
| Behaviour vs Discipline | https://www.oh-behave.com/portfolio/project-name-one | Keep / Rewrite | Behaviour | Core distinction between behaviour as observable/situational action and discipline as learned self-control/responsibility. Includes language about detaching behaviour from personality. | Strong candidate for a flagship Behaviour article. Rewrite tightly, add examples, and avoid overgeneralised claims. |
| Top Ten Tips | https://www.oh-behave.com/top-10-tips and https://www.oh-behave.com/portfolio/top-ten-tips | Keep / Merge | Behaviour | Ten ideas: clear rules, consistency, positive relationships, prevention, policy use, teaching behaviour, de-escalation, sanctions/rewards, self-regulation, reflection/adaptation. | Merge duplicates into one canonical guide. Good for a "starter behaviour toolkit" card. |
| Report Cards | https://www.oh-behave.com/blank-18-2-1 | Keep / Rewrite | Behaviour / Tools & Resources | Useful framing: report cards as self-monitoring, behaviour change, parent/staff communication, targeted support. | Keep as article/resource. Add downloadable templates if available. Check screenshots/files before migration. |
| Charlie Taylor's Checklist | https://www.oh-behave.com/charlie-taylor-checklist | Keep | Behaviour / Media / Tools & Resources | Short explanation, PDF download, and audio/podcast-style item "AI Charlie Taylor's checklist Podcast". | Preserve PDF link and audio idea. Fix spelling: "BEHAVIOUIR CECKLIST", "REOURCES", "tyalor's". |
| Role of the Tutor | https://www.oh-behave.com/role-of-the-tutor | Keep / Rewrite | Behaviour / Tools & Resources | Substantial guide covering positive ethos, expectations, inclusivity, growth mindset, communication, celebration, safety, team building, respect/responsibility and community. | Strong evergreen guide. Split into article plus practical checklist/tool. |
| Role of Head of Year / Pastoral Lead | https://www.oh-behave.com/role-of-head-of-year | Keep / Rewrite | Behaviour | Substantial pastoral leadership copy: strategic vision, pastoral care, wellbeing, behaviour management, year group culture. | Good leadership content. Rewrite for precision and avoid generic manual tone. |
| Book Review list | https://www.oh-behave.com/book-review | Merge / Rewrite | Behaviour / Tools & Resources | Reading list includes Teach Like a Champion, Running the Room, Behaviour Manual, Tribe, Black Box, Limitless, Matthew Syed collection, They Don't Behave for Me, Classroom Behaviour, When the Adults Change. | Convert to curated reading/resources page or cards. Verify book titles/authors and add affiliate/disclosure decisions later if needed. |
| Individual book summaries | `/book-review/...` pages | Rewrite / Archive selectively | Behaviour / Tools & Resources | Many pages have useful key themes, takeaways and conclusions. | Do not copy wholesale. Rewrite as short annotations, cite/attribute book titles and authors, and keep only books aligned with John's positioning. |
| Starting the New Term | https://www.oh-behave.com/portfolio/starting-the-new-term | Archive | Behaviour / Tools & Resources | Page title only plus previous/next in accessible text. | Archive until original slides/text/files are available. |
| Scripted Conversations | https://www.oh-behave.com/portfolio/scripted-conversations | Archive | Behaviour / Tools & Resources | Page title only plus previous/next in accessible text. | Archive until original resource content is recovered. |
| Seating Plans | https://www.oh-behave.com/portfolio/seating-plans | Archive | Behaviour / Tools & Resources | Page title only plus previous/next in accessible text. | Archive until original resource content is recovered. |

### AI & Tech

| Item | Source URL | Status | Target | Preserve | Recommendation |
| --- | --- | --- | --- | --- | --- |
| AI Websites menu | https://www.oh-behave.com/ai-websites | Keep / Merge | AI & Tech | Tool list: Napkin AI, ChatGPT, ElevenLabs, Suno AI, Google NotebookLM, Gamma. | Good first AI directory. Convert into data-driven AI/Tech cards. |
| Napkin AI page | https://www.oh-behave.com/ai-websites/napkin-ai | Rewrite | AI & Tech | Describes AI infographics/idea organisation and classroom brainstorming. Link: https://www.napkin.ai/ | Keep tool but update copy and verify current product capabilities. |
| ChatGPT page | https://www.oh-behave.com/ai-websites/chat-gpt | Rewrite | AI & Tech | Describes lesson planning, quizzes, writing prompts, study support, summarising, role play. | Keep concept. Replace tracked/ad URL with clean official URL. Avoid generic claims; add teacher-specific examples. |
| ElevenLabs page | https://www.oh-behave.com/ai-websites/11-labs | Rewrite | AI & Tech | Text-to-speech/voice generation for accessible audio lessons and notes. Link: https://elevenlabs.io/voice-cloning | Keep, but verify current educational use cases and privacy/copyright implications before publishing. |
| Suno AI page | https://www.oh-behave.com/ai-websites/suno-ai | Rewrite | AI & Tech | AI song/lyric/audio generation for multimedia learning. Link: https://suno.com/ | Keep as optional creative tool, not core professional recommendation until vetted. |
| Google NotebookLM page | https://www.oh-behave.com/ai-websites/google-notebook-lm | Rewrite | AI & Tech | Research assistant, summaries, study guides, source-based questions. | Strong fit. Replace tracked URL with clean official URL. |
| Gamma AI page | https://www.oh-behave.com/ai-websites/gamma-ai | Rewrite | AI & Tech | AI presentation/document generation. Link: https://gamma.app/ | Strong fit for teacher workload/useful tech. |
| Tech Tips landing | https://www.oh-behave.com/tech-tips | Archive / Merge | AI & Tech | Structure for Word, PowerPoint, Excel, Teams, useful websites. | Mostly coming-soon shell. Keep category idea only. |
| Word Tips | https://www.oh-behave.com/word-tips | Ignore | AI & Tech | "Coming soon" only. | Do not migrate until real content exists. |
| PowerPoint Tips | https://www.oh-behave.com/ppt-tips | Ignore | AI & Tech | "Coming soon" only. | Do not migrate until real content exists. |
| Excel Tips | https://www.oh-behave.com/excel-tips | Ignore | AI & Tech | "Coming soon" only. | Do not migrate until real content exists. |
| Useful Websites | https://www.oh-behave.com/useful-websites | Keep / Rewrite | AI & Tech / Tools & Resources | Links to newspaper maker, Flaticon, Freepik, AnswerThePublic, fake ticket maker, Genially. | Preserve as "Useful websites for teacher resource creation". Replace vague link labels with descriptive names and verify licensing/suitability. |

### Tools & Resources

| Item | Source URL | Status | Target | Preserve | Recommendation |
| --- | --- | --- | --- | --- | --- |
| Pirate Game | https://www.oh-behave.com/the-pirates-game | Keep | Tools & Resources | Download: `The Pirate Game.pptx` at `https://www.oh-behave.com/_files/ugd/5d5455_12472764428c42aa90033aa9db64d7f1.pptx?dn=The%20Pirate%20Game.pptx`. | Add as downloadable resource card. Needs description, category and thumbnail. |
| Tutor PowerPoint | https://www.oh-behave.com/tutorppt | Keep / Rewrite | Tools & Resources | Download: `Blank TPPT.pptx`. Copy explains weekly headteacher comment, gospel/prayer if appropriate, room changes, events, sporting fixtures, successes, behaviour leaderboards and consistency. | Strong resource card plus long-form explainer. Clarify denominational/religious elements as configurable/optional. |
| Behaviour Contracts | https://www.oh-behave.com/behaviour-contracts | Keep | Tools & Resources | DOCX downloads for missing homework, off-task behaviour, uniform, failure to follow instructions, bullying, damage, phones, toilet use policy, truancy. | High-value pack. Add as a collection with each DOCX as a child resource. Consider renaming to "Behaviour Support Contracts" or "Student Reflection Agreements" if tone needs softening. |
| Charlie Taylor checklist PDF | https://www.oh-behave.com/charlie-taylor-checklist | Keep | Tools & Resources | PDF download: `https://www.oh-behave.com/_files/ugd/5d5455_355dcdbcefd34cba8da86e09cd7baf81.pdf`. | Preserve as downloadable resource; add citation/context if based on external checklist. |
| Escape Rooms | https://www.oh-behave.com/escape-rooms | Keep / Rewrite | Tools & Resources | Copy explains revision escape rooms, desktop/laptop recommended, Genially link: `https://view.genially.com/65cd5a4b03556300142f7f24`. | Keep as interactive resource. Remove "coming soon" unless there are future rooms. |
| Team Building / Balloon Debate Task | https://www.oh-behave.com/team-building | Keep / Rewrite | Tools & Resources | Download: `Balloon_Debate_Team_Building_Task.pptx`. Instructions mention scratch card stickers and printing 6 slides per sheet. | Good resource card. Remove "coming soon"; add thumbnail and clearer facilitation notes. |
| Tutor Time Activities | https://www.oh-behave.com/tutor-activites | Merge / Rewrite | Tools & Resources | External links: BBC Newsround, Michael Bach optical illusions, Form Time Ideas, AMNH optical illusions, Optics4Kids. | Convert to curated "Tutor/Form Time Links" resource. Condense generic copy. |
| Assembly Files menu | https://www.oh-behave.com/assembly-files | Merge | Tools & Resources | Values and Months of the Year subcollections. | Preserve as resource taxonomy, not standalone page. |
| Values Assemblies | https://www.oh-behave.com/assembly-files-values | Merge / Rewrite | Tools & Resources | Values list: honesty, integrity, respect, responsibility, kindness, courage, generosity, patience, humility, forgiveness, empathy, loyalty, gratitude, self-discipline, justice, compassion, perseverance, respect for life, tolerance. | Large usable bank. Consider one filterable collection rather than individual top-level pages. |
| Individual Values Assembly pages | `/values-assembly/...` | Rewrite / Archive selectively | Tools & Resources | Each follows a reusable structure: definition, examples, why it matters, daily application, final thoughts, takeaway. | Keep structure and maybe sample content, but rewrite for originality, school context and faith/non-faith adaptability. |
| Monthly Assembly pages | https://www.oh-behave.com/months-of-the-year | Archive / Keep partial | Tools & Resources | January has content around new beginnings/renewal/goals plus PPT/PDF downloads. February and December appear shell pages pointing to same files. | Keep January if files are real. Archive February/December until unique content exists. |

### Media

| Item | Source URL | Status | Target | Preserve | Recommendation |
| --- | --- | --- | --- | --- | --- |
| Behaviour Videos / Podcast page | https://www.oh-behave.com/behaviour-podcast-videos | Archive / Keep placeholder | Media | Page title "Latest Behaviour Videos" only in accessible text. | Keep the intention, but do not migrate as finished content. Needs confirmed YouTube video IDs, podcast/Spotify embeds and channel URLs. |
| Charlie Taylor audio/podcast item | https://www.oh-behave.com/charlie-taylor-checklist | Keep / Rewrite | Media / Behaviour | Audio item labelled "AI Charlie Taylor's checklist Podcast", duration 12:56. | Candidate for Media or Behaviour page if source audio file/embed can be recovered. |
| Buy Me a Coffee | https://buymeacoffee.com/tempestwarming | Archive | Contact / Media | Donation/support link. | Verify ownership/fit with John Spurling brand before using. |
| YouTube / Instagram / LinkedIn / Spotify links | Not found in audited public pages | Ignore for now | Media | No confirmed public URLs surfaced in the audit. | Use editable placeholders in project data until John supplies real links. |

### About and Contact

| Item | Source URL | Status | Target | Preserve | Recommendation |
| --- | --- | --- | --- | --- | --- |
| About/bio content | Not found | Ignore | About | No substantive personal biography surfaced. | Do not invent. Keep current placeholder approach until John supplies bio details. |
| Contact page | https://www.oh-behave.com/blank-18 | Ignore / Rewrite later | Contact | Link exists as Contact Us, but audit reached Top 10 Tips/blank-style URL rather than a usable contact page. | Do not migrate old contact details. Keep new site's contact placeholder until confirmed contact route is supplied. |

## Resource Files to Preserve or Investigate

| Resource | Source page | Type | Status | Target | URL |
| --- | --- | --- | --- | --- | --- |
| The Pirate Game | Pirate Game | PPTX | Keep | Tools & Resources | https://www.oh-behave.com/_files/ugd/5d5455_12472764428c42aa90033aa9db64d7f1.pptx?dn=The%20Pirate%20Game.pptx |
| Balloon Debate Team Building Task | Team Building | PPTX | Keep | Tools & Resources | https://www.oh-behave.com/_files/ugd/5d5455_1f967c9dc0b040c7be9aab7fe199764c.pptx?dn=Balloon_Debate_Team_Building_Task.pptx |
| Blank Tutor PowerPoint | Tutor PowerPoint | PPTX | Keep | Tools & Resources | https://www.oh-behave.com/_files/ugd/5d5455_4d98f53cbca44fca8ac2cbcefe08450c.pptx?dn=Blank%20TPPT.pptx |
| Charlie Taylor checklist | Charlie Taylor checklist | PDF | Keep | Behaviour / Tools & Resources | https://www.oh-behave.com/_files/ugd/5d5455_355dcdbcefd34cba8da86e09cd7baf81.pdf |
| Behaviour contract: incomplete/missing homework | Behaviour Contracts | DOCX | Keep | Tools & Resources | https://www.oh-behave.com/_files/ugd/5d5455_88c9d21b71a849d4aac5f25d8bd749d0.docx?dn=Student%2520Behaviour%2520Contract-%2520%2520Incomplete%2520or%2520Missing%2520Homework.docx |
| Behaviour contract: off-task/lack of focus | Behaviour Contracts | DOCX | Keep | Tools & Resources | https://www.oh-behave.com/_files/ugd/5d5455_35a6eda80b294943b187098193c56ec3.docx?dn=Student%2520Behaviour%2520Contract-%2520%2520Lack%2520of%2520Focus%2520or%2520Off-Task%2520Behaviour.docx |
| Behaviour contract: uniform violations | Behaviour Contracts | DOCX | Keep | Tools & Resources | https://www.oh-behave.com/_files/ugd/5d5455_cbe17d71a820412d8f7a369c1c0045a3.docx?dn=Student%2520Behaviour%2520Contract-%2520%2520Persistent%2520Uniform%2520Violations.docx |
| Behaviour contract: failure to follow instructions | Behaviour Contracts | DOCX | Keep | Tools & Resources | https://www.oh-behave.com/_files/ugd/5d5455_0e9e83c9cac746428b2cfd5693dde484.docx?dn=Student%2520Behaviour%2520Contract-%2520%2520Repeated%2520Failure%2520to%2520Follow%2520Instructions.docx |
| Behaviour contract: bullying behaviour | Behaviour Contracts | DOCX | Keep | Tools & Resources | https://www.oh-behave.com/_files/ugd/5d5455_2b03fdae82f34889bffa823cef324fd0.docx?dn=Student%2520Behaviour%2520Contract-%2520Bullying%2520Behaviour.docx |
| Behaviour contract: damage | Behaviour Contracts | DOCX | Keep | Tools & Resources | https://www.oh-behave.com/_files/ugd/5d5455_458652b124a845ddb762802a353923d7.docx?dn=Student%2520Behaviour%2520Contract-%2520Damage.docx |
| Behaviour contract: phones | Behaviour Contracts | DOCX | Keep | Tools & Resources | https://www.oh-behave.com/_files/ugd/5d5455_b000d6837ae447358e60c6e3e18191a3.docx?dn=Student%2520Behaviour%2520Contract-%2520PHONES.docx |
| Behaviour contract: toilet use policy | Behaviour Contracts | DOCX | Keep | Tools & Resources | https://www.oh-behave.com/_files/ugd/5d5455_960d3152fe4e4c93b3bd14615ee6c1fd.docx?dn=Student%2520Behaviour%2520Contract-%2520Toilet%2520Use%2520Policy.docx |
| Behaviour contract: truancy | Behaviour Contracts | DOCX | Keep | Tools & Resources | https://www.oh-behave.com/_files/ugd/5d5455_ca8b3523877d4a5fb40aaad80983fca7.docx?dn=Student%2520Behaviour%2520Contract-%2520Truancy.docx |
| January assembly | January | PPTX | Keep / Verify | Tools & Resources | https://www.oh-behave.com/_files/ugd/5d5455_84c7f0a24a884be199722992ea5bf38f.pptx?dn=New-Beginnings-Embrace-the-Power-of-January.pptx |
| January assembly handout/resource | January | PDF | Keep / Verify | Tools & Resources | https://www.oh-behave.com/_files/ugd/5d5455_6e9a42e503184ab3b0011f41609ced95.pdf |

## External Links Worth Preserving or Verifying

| Link | Current context | Status | Target | Notes |
| --- | --- | --- | --- | --- |
| https://www.bbc.co.uk/newsround | Tutor Time Activities | Keep | Tools & Resources | Strong tutor/form-time link. |
| https://michaelbach.de/ot/ | Tutor Time Activities | Keep | Tools & Resources | Optical illusions resource. |
| https://formtimeideas.com/ | Tutor Time Activities | Keep | Tools & Resources | Form time activity source. |
| https://www.amnh.org/explore/ology/brain/optical-illusions-and-how-they-work | Tutor Time Activities | Keep | Tools & Resources | Optical illusions explanation. |
| https://www.optics4kids.org/optical-illusions | Tutor Time Activities | Keep | Tools & Resources | Optical illusions resource. |
| https://view.genially.com/65cd5a4b03556300142f7f24 | Escape Rooms | Keep / Verify | Tools & Resources | Confirm it is public and still relevant. |
| https://www.napkin.ai/ | AI Websites | Keep / Verify | AI & Tech | Verify current capabilities. |
| https://chatgpt.com/ | AI Websites | Keep / Verify | AI & Tech | Use clean URL, not old tracked ad URL. |
| https://elevenlabs.io/voice-cloning | AI Websites | Keep / Verify | AI & Tech | Consider privacy/copyright notes. |
| https://suno.com/ | AI Websites | Keep / Verify | AI & Tech | Consider copyright/usage notes. |
| https://notebooklm.google/ | AI Websites | Keep / Verify | AI & Tech | Use clean URL. |
| https://gamma.app/ | AI Websites | Keep / Verify | AI & Tech | Good teacher workflow link. |
| https://newspaper.jaguarpaw.co.uk/ | Useful Websites | Keep / Verify | Tools & Resources | Resource creation. |
| https://www.flaticon.com/ | Useful Websites | Keep / Verify | Tools & Resources | Check licensing before recommending. |
| https://www.freepik.com/ | Useful Websites | Keep / Verify | Tools & Resources | Check licensing before recommending. |
| https://answerthepublic.com/ | Useful Websites | Keep / Verify | AI & Tech / Tools & Resources | Useful for content/question research. |
| https://www.template.net/editable/airline-ticket | Useful Websites | Archive / Verify | Tools & Resources | Fake ticket maker may be niche. Keep only if tied to a resource example. |
| https://app.genially.com/ | Useful Websites | Archive / Verify | Tools & Resources | Current link appears to a dashboard/team URL, likely not ideal for public visitors. |

## Content Quality and Rewrite Notes

- Fix typos before migration: "BEHAVIOUR RESOURCS", "BEHAVIOUIR CECKLIST", "REOURCES", "AI song an lyric generator", "resourses", "Mathew Syed", "when the adualt change".
- Remove repeated headers caused by Wix layouts.
- Replace "Start Now", "CLICK", and empty-icon links with descriptive link text.
- Avoid migrating "coming soon" labels unless a section is intentionally marked as planned.
- Convert generic AI-written explanatory paragraphs into John's own voice and practical teacher use cases.
- Confirm whether Catholic/religious assembly framing should remain, become optional, or be split into faith-school and non-faith-school variants.
- For book summaries, check copyright/attribution. Use short original annotations rather than long derivative summaries.
- Do not migrate unverified social links, personal details, credentials, testimonials, client names, contact emails, or claims.

## Suggested Data Model Additions Later

When this material is added to the site, extend the existing central content file with fields like:

```ts
type MigratedResource = {
  title: string;
  description: string;
  category: "Behaviour" | "AI & Tech" | "Tools & Resources" | "Media";
  subcategory?: string;
  sourceUrl?: string;
  liveUrl?: string;
  downloadUrl?: string;
  fileType?: "PPTX" | "PDF" | "DOCX" | "External Link" | "Article";
  status: "ready" | "rewrite-needed" | "verify-link" | "archive";
  featured?: boolean;
  notes?: string;
};
```

## Recommended Migration Order

1. Add high-value downloadable resource cards: Pirate Game, Tutor PowerPoint, Behaviour Contracts, Charlie Taylor checklist, Balloon Debate.
2. Rewrite and publish the core Behaviour articles: Behaviour vs Discipline, Top Ten Tips, Report Cards, Role of the Tutor, Role of Head of Year.
3. Build the AI & Tech directory from the AI Websites pages plus Useful Websites.
4. Add Tutor Time Activities and Escape Rooms as resource collections.
5. Decide how much of the Assembly Files bank belongs on the John Spurling platform.
6. Recover or confirm media embeds for Behaviour Videos, YouTube, Spotify/podcast, Instagram and LinkedIn before exposing the Media section as live content.

## Audit Sources

Primary pages reviewed:

- https://www.oh-behave.com/
- https://www.oh-behave.com/site-menu
- https://www.oh-behave.com/free-behaviour-resources
- https://www.oh-behave.com/assembly-files
- https://www.oh-behave.com/tutor-activites
- https://www.oh-behave.com/the-pirates-game
- https://www.oh-behave.com/sendtool
- https://www.oh-behave.com/blank-20
- https://www.oh-behave.com/top-10-tips
- https://www.oh-behave.com/behaviour-podcast-videos
- https://www.oh-behave.com/role-of-the-tutor
- https://www.oh-behave.com/role-of-head-of-year
- https://www.oh-behave.com/ai-websites
- https://www.oh-behave.com/escape-rooms
- https://www.oh-behave.com/tech-tips
- https://www.oh-behave.com/team-building
- https://www.oh-behave.com/portfolio/project-name-one
- https://www.oh-behave.com/portfolio/top-ten-tips
- https://www.oh-behave.com/portfolio/starting-the-new-term
- https://www.oh-behave.com/portfolio/scripted-conversations
- https://www.oh-behave.com/portfolio/seating-plans
- https://www.oh-behave.com/book-review
- https://www.oh-behave.com/blank-18-2-1
- https://www.oh-behave.com/charlie-taylor-checklist
- https://www.oh-behave.com/tutorppt
- https://www.oh-behave.com/behaviour-contracts
- https://www.oh-behave.com/assembly-files-values
- https://www.oh-behave.com/months-of-the-year
- https://www.oh-behave.com/ai-websites/napkin-ai
- https://www.oh-behave.com/ai-websites/chat-gpt
- https://www.oh-behave.com/ai-websites/11-labs
- https://www.oh-behave.com/ai-websites/suno-ai
- https://www.oh-behave.com/ai-websites/google-notebook-lm
- https://www.oh-behave.com/ai-websites/gamma-ai
- https://www.oh-behave.com/useful-websites
- https://www.oh-behave.com/book-review/teach-like-a-champion
- https://www.oh-behave.com/book-review/running-the-room
- https://www.oh-behave.com/book-review/behaviour-manual
- https://www.oh-behave.com/book-review/tribe
- https://www.oh-behave.com/book-review/black-box
- https://www.oh-behave.com/book-review/limitless
- https://www.oh-behave.com/book-review/mathew-syid
- https://www.oh-behave.com/book-review/they-dont-behave-for-me
- https://www.oh-behave.com/book-review/classroom-behaviour
- https://www.oh-behave.com/book-review/when-the-adualt-change
- https://www.oh-behave.com/values-assembly/honesty
- https://www.oh-behave.com/values-assembly/integrity
- https://www.oh-behave.com/values-assembly/respect
- https://www.oh-behave.com/values-assembly/responsibility
- https://www.oh-behave.com/values-assembly/kindness
- https://www.oh-behave.com/values-assembly/courage
- https://www.oh-behave.com/values-assembly/generosity
- https://www.oh-behave.com/values-assembly/patience
- https://www.oh-behave.com/values-assembly/humility
- https://www.oh-behave.com/values-assembly/forgiveness
- https://www.oh-behave.com/values-assembly/empathy
- https://www.oh-behave.com/values-assembly/loyalty
- https://www.oh-behave.com/values-assembly/gratitude
- https://www.oh-behave.com/values-assembly/self-discipline
- https://www.oh-behave.com/values-assembly/justice
- https://www.oh-behave.com/values-assembly/compassion
- https://www.oh-behave.com/values-assembly/perseverance
- https://www.oh-behave.com/values-assembly/respect-for-life
- https://www.oh-behave.com/values-assembly/tolerance
- https://www.oh-behave.com/months-of-the-year/january
- https://www.oh-behave.com/months-of-the-year/february
- https://www.oh-behave.com/months-of-the-year/december
