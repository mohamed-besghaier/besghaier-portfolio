import profile from '/src/assets/profile.jpeg'

function Home() {
  return (
    <section id="home" className="page section">
      <div className="hero-content">
        <img className="profile" src={profile} alt="profile" />
        <div>
          <h1>Hi, I’m Mohamed.</h1>
          <p>Minimal personal site for a cybersecurity learner and web-app builder.</p>
          <p>Fast, clean, readable, and focused on what matters most.</p>
          <a href="#contact" className="cta">Get in touch</a>
        </div>
      </div>
    </section>
  );
}

export default Home;