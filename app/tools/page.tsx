import { toolCards } from "@/app/data/site-content";
import { ToolGrid } from "@/components/home/HomeCards";
import { PageHero, SiteFrame } from "@/components/home/PageChrome";
import { SectionIntro } from "@/components/home/SectionIntro";

export default function ToolsPage() {
  const lessonTools = toolCards.filter((tool) =>
    ["General lesson tools", "Tutor resources", "Assemblies"].includes(tool.category),
  );
  const funAndGames = toolCards.filter((tool) =>
    ["Jukebox", "Games", "Escape rooms", "Discussion activities"].includes(tool.category),
  );

  return (
    <SiteFrame>
      <PageHero
        eyebrow="Tools"
        title="Teacher tools, games and interactive utilities."
        summary="A focused home for the non-maths tools John is creating: conversation starters, games, jukebox ideas, escape rooms and other classroom utilities."
      />

      <section className="section-shell tools-section" aria-labelledby="tools-page-title">
        <SectionIntro
          id="tools-page-title"
          eyebrow="Hub"
          title="Lesson tools."
          summary="Classroom utilities, tutor resources, assemblies and practical lesson materials."
        />
        <div data-motion>
          <ToolGrid tools={lessonTools} />
        </div>
      </section>

      <section className="section-shell tools-section" aria-labelledby="fun-games-title">
        <SectionIntro
          id="fun-games-title"
          eyebrow="Tools"
          title="Fun and games."
          summary="Jukebox tools, games, escape rooms and discussion activities for group energy, interaction and classroom variety."
        />
        <div data-motion>
          <ToolGrid tools={funAndGames} />
        </div>
      </section>
    </SiteFrame>
  );
}
