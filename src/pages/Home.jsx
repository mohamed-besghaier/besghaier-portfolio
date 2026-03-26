function Home() {
  return (
    <section id="home" className="section">
      <div className="hero-content">
        <div className="hero-copy">
          <h1 className="hero-title">
            Computer science student.
          </h1>
          <p className="hero-text">
            I&apos;m Mohamed Besghaier, interested in Python, web security, and systems.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="cta">View Projects</a>
            <a href="#contact" className="cta cta-secondary">Let&apos;s Talk</a>
          </div>
        </div>
        <aside className="hero-panel" aria-label="Quick facts">
          <div className="hero-panel-card hero-facts">
            <div className="hero-fact">
              <span className="hero-fact-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.25a6.75 6.75 0 0 0-6.75 6.75c0 4.62 5.14 10.206 6.218 11.333a.75.75 0 0 0 1.064 0C13.61 19.206 18.75 13.62 18.75 9A6.75 6.75 0 0 0 12 2.25Zm0 9a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Z" />
                </svg>
              </span>
              <div className="hero-fact-copy">
                <small>Location</small>
                <strong>Paris, France</strong>
              </div>
            </div>
            <div className="hero-fact">
              <span className="hero-fact-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3.75 1.5 9l10.5 5.25L20.625 9v7.125h1.875V9L12 3.75Zm-7.5 8.156V15.75c0 1.504 3.36 3 7.5 3s7.5-1.496 7.5-3v-3.844L12 15.75 4.5 11.906Z" />
                </svg>
              </span>
              <div className="hero-fact-copy">
                <small>Education</small>
                <strong>Sorbonne University</strong>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
export default Home;
