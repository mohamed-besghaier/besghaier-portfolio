const PROJECT_DATA = [
  {
    title: "Vulnerable Web Application",
    desc: "Vulnerable web application built for web penetration testing practice, covering common web flaws in a simple Express and SQLite setup.",
    tech: ["Node.js", "Express.js", "SQLite", "Web Security", "Penetration Testing"],
    repoUrl: "https://github.com/mohamed-besghaier/vuln-app"
  },
  {
    title: "URL Risk Analyzer",
    desc: "Python CLI tool for URL security risk assessment, combining domain, TLS, and page-level checks with a scoring engine.",
    tech: ["Python", "Web Security", "Web Scraping", "CLI"],
    repoUrl: "https://github.com/mohamed-besghaier/url-risk-analyzer"
  },
  {
    title: "Artificial Life",
    desc: "University project covering agent-based models, cellular automata, and simulations in Python.",
    tech: ["Python", "OOP", "Cellular Automata", "Data Visualization"],
    repoUrl: "https://github.com/mohamed-besghaier/LU2IN013-artificial-life"
  }
];

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-heading">
        <h2>Projects</h2>
      </div>
      <div className="project-grid">
        {PROJECT_DATA.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-header">
              <h3>{project.title}</h3>
            </div>
            <p>{project.desc}</p>
            <div className="tag-list" aria-label={`${project.title} technologies`}>
              {project.tech.map((tech) => (
                <span key={tech} className="tag">{tech}</span>
              ))}
            </div>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Repository
            </a>
          </article>
        ))}
      </div>
      <div className="projects-footer">
        <p>
          More work is available through my GitHub profile.
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
