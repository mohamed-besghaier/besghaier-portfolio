import profile from '../assets/profile.png';

function Home() {
  return (
    <section id="home" className="section">
      <div className="hero-content">
        <div>
          <h1 style={{ fontSize: '3.5rem', lineHeight: '1.1' }}>
            Building <span style={{ color: 'var(--accent)' }}>secure</span> web apps.
          </h1>
          <p style={{ fontSize: '1.2rem', marginTop: '1.5rem', maxWidth: '500px' }}>
            Hi, I’m Mohamed. I bridge the gap between clean web development and
            proactive cybersecurity.
          </p>
          <a href="#projects" className="cta-button">View My Work</a>
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