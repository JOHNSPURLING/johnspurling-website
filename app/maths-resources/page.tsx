import { mathsResourceCards } from "@/app/data/site-content";
import { ToolGrid } from "@/components/home/HomeCards";
import { PageHero, SiteFrame } from "@/components/home/PageChrome";
import { SectionIntro } from "@/components/home/SectionIntro";

export default function MathsResourcesPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="Maths Resources"
        title="Interactive maths resources."
        summary="Live classroom-ready maths tools for practice, explanation and student support, kept separate from the general teacher tools."
      />

      <section className="section-shell tools-section" aria-labelledby="maths-page-title">
        <SectionIntro
          id="maths-page-title"
          eyebrow="Ready to use"
          title="Current maths resources."
          summary="These resources are live now. More maths tools can be added here as they are built."
        />
        <div data-motion>
          <ToolGrid tools={mathsResourceCards} />
        </div>
      </section>
    </SiteFrame>
  );
}
