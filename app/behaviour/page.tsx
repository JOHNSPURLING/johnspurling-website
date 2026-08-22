import { toolCards } from "@/app/data/site-content";
import { ToolGrid } from "@/components/home/HomeCards";
import { PageHero, SiteFrame } from "@/components/home/PageChrome";
import { SectionIntro } from "@/components/home/SectionIntro";

export default function BehaviourPage() {
  const behaviourResources = toolCards.filter(
    (tool) => tool.category === "Behaviour resources",
  );

  return (
    <SiteFrame>
      <PageHero
        eyebrow="Behaviour"
        title="Behaviour systems and resources."
        summary="Strategies, resources, routines and behaviour systems for improving classrooms and shifting culture."
      />

      <section className="section-shell split-section" aria-labelledby="behaviour-focus-title">
        <SectionIntro
          id="behaviour-focus-title"
          eyebrow="Focus"
          title="Practical behaviour support, not theory for its own sake."
          summary="This area is for clear, usable behaviour support: routines, systems, low-level disruption, classroom culture and resources teachers can actually use."
        />
        <div className="feature-panel" data-motion>
          <h3>Built around classroom reality</h3>
          <p>
            The aim is to make behaviour thinking useful in the moment: calm
            routines, consistent systems and practical resources that support
            teachers and students.
          </p>
        </div>
      </section>

      <section className="section-shell" aria-labelledby="behaviour-support-title">
        <SectionIntro
          id="behaviour-support-title"
          eyebrow="Behaviour support"
          title="Behaviour resources."
          summary="Practical tools and resources that support behaviour systems, routines, conversations and classroom culture."
        />
        <div data-motion>
          <ToolGrid tools={behaviourResources} />
        </div>
      </section>
    </SiteFrame>
  );
}
