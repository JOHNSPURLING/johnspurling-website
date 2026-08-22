import { PageHero, SiteFrame } from "@/components/home/PageChrome";
import { SectionIntro } from "@/components/home/SectionIntro";

export default function BlogPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="Blog"
        title="Practical writing for teachers and school leaders."
        summary="A space for short posts on maths teaching, behaviour, leadership and useful technology. The structure is ready; posts will be added once the first pieces are written."
      />

      <section className="section-shell" aria-labelledby="blog-plan-title">
        <SectionIntro
          id="blog-plan-title"
          eyebrow="Information"
          title="Information: Coming Soon."
          summary="No placeholder articles or invented publication dates. This page is ready for real posts when they are written."
        />
        <div className="coming-soon-panel" data-motion>
          <p>Information: Coming Soon</p>
        </div>
      </section>
    </SiteFrame>
  );
}
