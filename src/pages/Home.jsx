import profile from '../assets/profile.png';

function Home() {
  return (
    <section id="home" className="section">
      <div className="hero-content">
        <div className="hero-copy">
          <p className="eyebrow">Web Development x Cybersecurity</p>
          <h1 className="hero-title">
            Building <span className="accent-text">secure</span>, readable, and reliable web experiences.
          </h1>
          <p className="hero-text">
            I&apos;m Mohamed Besghaier, a computer science student focused on frontend engineering,
            backend fundamentals, and practical security thinking. I like shipping interfaces that
            feel clean for users and hold up well under scrutiny.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="cta">View Projects</a>
            <a href="#contact" className="cta cta-secondary">Let&apos;s Talk</a>
          </div>
          <ul className="hero-metrics" aria-label="Key strengths">
            <li>Security-minded development</li>
            <li>Hands-on labs and CTF practice</li>
            <li>Clear UI structure and fast iteration</li>
          </ul>
        </div>
        <div className="profile-container">
          <img
            className="profile"
            src={profile}
            alt="Mohamed"
          />
        </div>
      </div>
    </section>
  );
}
export default Home;
