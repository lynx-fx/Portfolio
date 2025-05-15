function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Web Developer & Cybersecurity Specialist</h1>
        <p>Building secure, efficient, and beautiful web applications</p>
        <div className="hero-buttons">
          <button className="btn primary">View Projects</button>
          <button className="btn secondary">Contact Me</button>
        </div>
      </div>
      <div className="hero-image">
        <div className="code-block">
          <pre>
            <code>
              {`function secureApp() {
  validateInput();
  sanitizeData();
  implementAuth();
  return safeEnvironment;
}`}
            </code>
          </pre>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
