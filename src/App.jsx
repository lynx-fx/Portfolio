import "./styles.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import TerminalSection from "./components/TerminalSection"
import SkillsSection from "./components/SkillsSection"

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <TerminalSection />
        <section className="about-preview">
          <h2>About Me</h2>
          <p>
            I'm a passionate web developer and cybersecurity enthusiast with a focus on building secure, efficient web
            applications. My expertise spans front-end development, back-end systems, and security implementation.
          </p>
          <button className="btn">Learn More</button>
        </section>
        <SkillsSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
