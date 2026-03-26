const PROJECT_DATA = [
  {
    title: "URL Risk Analyzer",
    desc: "Scans URLs for security indicators and identifies suspicious patterns.",
    tech: ["Python", "OSINT", "API"]
  },
  {
    title: "Agent-Based Model",
    desc: "Interactive environment for exploring emergent behavior in systems.",
    tech: ["React", "Canvas"]
  }
];

function Projects() {
  return (
    <section id="projects" className="section">
      <h2 style={{fontSize: '2rem', marginBottom: '2rem'}}>Selected Projects</h2>
      <div className="project-grid">
        {PROJECT_DATA.map((project, index) => (
          <div key={index} className="project-card">
            <h3 style={{color: 'var(--accent)'}}>{project.title}</h3>
            <p>{project.desc}</p>
            <div style={{display: 'flex', gap: '8px', marginTop: '1rem'}}>
              {project.tech.map(t => <span key={t} style={{fontSize: '0.75rem', opacity: 0.6}}>#{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;