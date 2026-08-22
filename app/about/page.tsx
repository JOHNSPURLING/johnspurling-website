import { aboutFocus } from "@/app/data/site-content";
import { PageHero, SiteFrame } from "@/components/home/PageChrome";

export default function AboutPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="About"
        title="About John"
        summary="Teacher. School leader. Behaviour specialist. Technology problem-solver. Over 20 years of teaching and leadership experience brought together through practical resources, media and tools."
      />

      <section className="section-shell about-section" aria-labelledby="about-title">
        <div>
          <p className="eyebrow">Profile</p>
          <h2 id="about-title">
            Practical education experience across classrooms, departments and senior leadership.
          </h2>
        </div>
        <div className="about-copy" data-motion>
          <p>
            John Spurling is a teacher and school leader with over 20 years of
            experience across PE, maths and other subjects including ASDAN and
            COPE. His leadership experience includes Head of Department, Head
            of Year, Assistant Head, Deputy Head and Acting Headteacher roles.
          </p>
          <p>
            His work is rooted in behaviour, systems, workload reduction and
            practical problem-solving: creating resources, tools and ideas that
            help teachers work more effectively and support better outcomes for
            students.
          </p>
          <ul>
            {aboutFocus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-shell split-section reverse" aria-labelledby="tempest-title">
        <div className="feature-panel accent" data-motion>
          <h3>Growth through challenge</h3>
          <p>
            Tempest Warming began as an old username, but the meaning still
            fits the work: growth through challenge. Much of this site is about
            finding practical ways through the difficult parts of teaching,
            including behaviour, workload, systems and change.
          </p>
        </div>
        <div>
          <p className="eyebrow">Working idea</p>
          <h2 id="tempest-title">Better thinking leads to better decisions.</h2>
          <p className="section-summary">
            That idea runs through the Leadership Lens resources, behaviour
            thinking, AI and technology workflows, and the tools being built for
            teachers.
          </p>
        </div>
      </section>
    </SiteFrame>
  );
}
