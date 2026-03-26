const PROJECT_DATA = [
  {
    title: "URL Risk Analyzer",
    desc: "A tool for checking suspicious links against multiple indicators before a user clicks through.",
    impact:
      "Built to combine security signals into a quick triage workflow instead of relying on a single yes/no check.",
    highlights: [
      "Parses URLs and checks for suspicious patterns",
      "Uses external intelligence sources to enrich the result",
      "Presents findings in a format that is fast to scan"
    ],
    tech: ["Python", "OSINT", "APIs", "Security Research"]
  },
  {
    title: "Agent-Based Model",
    desc: "An interactive simulation for exploring how simple local rules create complex system behavior.",
    impact:
      "Designed as a learning tool with visual feedback, adjustable parameters, and an emphasis on experimentation.",
    highlights: [
      "Renders dynamic states in a responsive interface",
      "Exposes controls for changing behavior in real time",
      "Turns abstract system concepts into something explorable"
    ],
    tech: ["React", "Canvas", "Simulation", "Interaction Design"]
  }
];

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-heading">
        <p className="eyebrow">Projects</p>
        <h2>Selected work that reflects how I think.</h2>
        <p>
          These projects are less about quantity and more about how I approach interface clarity,
          system behavior, and practical security concerns.
        </p>
      </div>
      <div className="project-grid">
        {PROJECT_DATA.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-header">
              <h3>{project.title}</h3>
              <span className="project-badge">Case Study</span>
            </div>
            <p>{project.desc}</p>
            <p className="project-impact">{project.impact}</p>
            <ul className="project-highlights">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="tag-list" aria-label={`${project.title} technologies`}>
              {project.tech.map((tech) => (
                <span key={tech} className="tag">{tech}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
      <div className="projects-footer">
        <p>
          More project details and code samples are available through my GitHub profile.
        </p>
        <a
          href="https://github.com/mohamed-besghaier"
          target="_blank"
          rel="noopener noreferrer"
          className="cta cta-secondary"
        >
          Visit GitHub
        </a>
      </div>
    </section>
  );
}
export default Projects;
