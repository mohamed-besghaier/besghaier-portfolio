function About() {
  return (
    <section id="about" className="page section">
      <div className="section-heading">
        <h2>About</h2>
      </div>
      <div className="about-grid">
        <p className="about-lead">
          I study computer science at Sorbonne University, with a background in operating systems,
          computer networks, algorithms, databases, and systems programming.
        </p>
        <div className="about-cards">
          <article className="info-card">
            <h3>Interests</h3>
            <p>
              I&apos;m particularly interested in Python, web security, and systems.
            </p>
          </article>
          <article className="info-card">
            <h3>Tools</h3>
            <p>
              I work mainly with Python, Linux, Bash, SQL, Git, and object-oriented programming.
            </p>
          </article>
          <article className="info-card">
            <h3>Looking For</h3>
            <p>
              I&apos;m currently looking for a cybersecurity internship.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default About;
