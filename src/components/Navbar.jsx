function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="links">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}
export default Navbar;