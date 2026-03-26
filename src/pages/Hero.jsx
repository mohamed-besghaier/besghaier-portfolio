import profile from '/src/assets/profile.jpeg'

function Hero() {
  return (
    <div className="page">
      <title> Home </title>
      <img id='profile' src={profile} alt="profile logo" />
      <div id='hero-sec'>
        <h1> Aspiring Web Penetration Tester </h1>
        <h3> 
          I identify and exploit vulnerabilities in web applications. <br/>
          Computer science student focused on cybersecurity and hands-on practice. 
        </h3>
      </div>
    </div>
  );
}

export default Hero;