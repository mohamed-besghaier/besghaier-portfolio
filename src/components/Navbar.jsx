function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="brand">
          <span className="brand-copy">
            <strong>Mohamed Besghaier</strong>
            <span>Computer Science Student</span>
          </span>
        </a>
        <div className="nav-actions">
          <div className="links">
            {["Home", "About", "Projects"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
            ))}
          </div>
          <a href="#contact" className="nav-cta">Contact</a>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
