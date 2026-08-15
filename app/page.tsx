export default function Home() {
  const sections = [
    {
      title: "Writing",
      body: "Short essays, field notes, and ideas that are worth keeping in public.",
    },
    {
      title: "Projects",
      body: "A focused record of experiments, tools, collaborations, and finished work.",
    },
    {
      title: "Contact",
      body: "A simple way for people to reach out with a question, proposal, or hello.",
    },
  ];

  return (
    <main className="site-shell">
      <nav className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="John Spurling home">
          JS
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#notes">Notes</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Personal website in progress</p>
          <h1>John Spurling</h1>
          <p className="lede">
            A personal home for writing, projects, and quietly useful digital
            work.
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="button primary" href="#work">
              Explore the shape
            </a>
            <a className="button secondary" href="#contact">
              Get in touch
            </a>
          </div>
        </div>

        <figure
          className="signature-panel"
          aria-label="John Spurling visual identity card for writing, projects, and notes"
        />
      </section>

      <section className="section-band" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <p className="eyebrow">First version</p>
          <h2 id="work-title">A sturdy place to keep building.</h2>
        </div>
        <div className="feature-grid">
          {sections.map((section) => (
            <article className="feature-card" key={section.title}>
              <h3>{section.title}</h3>
              <p>{section.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="notes-section" id="notes" aria-labelledby="notes-title">
        <div>
          <p className="eyebrow">Direction</p>
          <h2 id="notes-title">Useful, unfussy, and ready to evolve.</h2>
        </div>
        <p>
          This starting point gives the site a clear voice and structure without
          pretending the full story is finished. The next step is to replace
          these draft areas with your real work, writing, links, and contact
          details.
        </p>
      </section>

      <footer className="footer" id="contact">
        <p>John Spurling</p>
        <a href="mailto:hello@johnspurling.com">hello@johnspurling.com</a>
      </footer>
    </main>
  );
}
