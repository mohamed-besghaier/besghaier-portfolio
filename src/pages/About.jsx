function About() {
  return (
    <section id="about" className="page section">
      <div className="section-heading">
        <p className="eyebrow">About</p>
        <h2>Technical curiosity with a defensive mindset.</h2>
      </div>
      <div className="about-grid">
        <p className="about-lead">
          My work sits between product thinking and cybersecurity. I care about how systems behave,
          how users move through interfaces, and where weak assumptions can turn into bugs or risk.
        </p>
        <div className="about-cards">
          <article className="info-card">
            <h3>How I work</h3>
            <p>
              I prefer simple architecture, readable components, and features that are easy to reason
              about before they become hard to maintain.
            </p>
          </article>
          <article className="info-card">
            <h3>What I study</h3>
            <p>
              I build through CTFs, labs, and small applications that force me to think about web
              security, APIs, validation, and trust boundaries.
            </p>
          </article>
          <article className="info-card">
            <h3>What I want next</h3>
            <p>
              Internships, collaborative projects, and roles where I can keep improving as a developer
              while bringing stronger security habits into the workflow.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default About;
