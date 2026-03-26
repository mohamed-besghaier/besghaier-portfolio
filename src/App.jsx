import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main className="app-content">
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="site-footer">
        <p>&copy; 2026 Mohamed Besghaier | besghaier.com</p>
      </footer>
    </div>
  );
}

export default App;
