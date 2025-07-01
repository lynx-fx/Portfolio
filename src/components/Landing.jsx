import "../styles/landing.css";
import { ArrowRight, Download } from "lucide-react";

export default function Landing() {
  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className="nav-container">
        <div className="nav-menu">
          <a href="#" className="nav-link active">
            Home
          </a>
          <a href="#work" className="nav-link">
            Work
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#footer" className="nav-link">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        {/* Based in Serbia */}
        <div className="hero-location">Based in Nepal</div>

        {/* Main Heading */}
        <h1 className="hero-title">
          Bridging <span className="hero-title-accent">Visual Elegance</span>{" "}
          with <span className="hero-title-accent">Code Logic,</span>{" "}
          seamlessly.
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          Hi, I'm Anup, I create intuitive and highly functional web
          applications.
        </p>

        {/* Action Buttons */}
        <div className="hero-buttons">
          <a href="#work">
            <button className="btn btn-outline btn-lg">
              See My Work
              <ArrowRight className="btn-icon" />
            </button>
          </a>
          <button className="btn btn-outline btn-lg">
            <Download className="btn-icon-left" />
            Download CV
          </button>
        </div>

        {/* Technologies Section */}
        <div className="technologies-section" id="about">
          <h2 className="section-title">Current technologies</h2>
          <p className="section-description">
            I'm proficient in a range of modern technologies that empower me to
            build highly functional solutions. These are some of my main
            technologies.
          </p>

          <div className="tech-grid">
            {/* Row 1 */}
            <div className="tech-card">
              <div className="tech-icon tech-icon-typescript">TS</div>
              <h3 className="tech-name">JavaScript</h3>
              <p className="tech-description">A programming language</p>
            </div>

            <div className="tech-card">
              <div className="tech-icon tech-icon-react">
                <div
                  className="icon-shape icon-circle"
                  style={{ border: "2px solid white", position: "relative" }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: "4px",
                      border: "1px solid white",
                      borderRadius: "50%",
                    }}
                  ></div>
                </div>
              </div>
              <h3 className="tech-name">React</h3>
              <p className="tech-description">JavaScript Library</p>
            </div>

            {/* Row 2 */}
            <div className="tech-card">
              <div className="tech-icon tech-icon-tailwind">
                <div className="icon-shape icon-square icon-diamond"></div>
              </div>
              <h3 className="tech-name">Tailwind</h3>
              <p className="tech-description">CSS framework</p>
            </div>

            <div className="tech-card">
              <div className="tech-icon tech-icon-git">
                <div className="icon-shape icon-circle"></div>
              </div>
              <h3 className="tech-name">Git</h3>
              <p className="tech-description">Version control</p>
            </div>

            <div className="tech-card">
              <div className="tech-icon tech-icon-nodejs">JS</div>
              <h3 className="tech-name">Node.JS</h3>
              <p className="tech-description">Runtime Environment</p>
            </div>

            {/* Row 3 */}
            <div className="tech-card">
              <div className="tech-icon tech-icon-mongodb">
                <div
                  className="icon-shape icon-circle"
                  style={{ position: "relative" }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: "8px",
                      backgroundColor: "#10b981",
                      borderRadius: "50%",
                    }}
                  ></div>
                </div>
              </div>
              <h3 className="tech-name">MongoDB</h3>
              <p className="tech-description">NoSQL database</p>
            </div>

            <div className="tech-card">
              <div className="tech-icon tech-icon-prisma">
                <div className="icon-shape icon-diamond"></div>
              </div>
              <h3 className="tech-name">MySql</h3>
              <p className="tech-description">SQL database</p>
            </div>
          </div>

          {/* Portfolio Section */}
          <div className="portfolio-header" id="work">
            <h2 className="section-title">My portfolio</h2>
            <button className="btn btn-outline">
              All Projects
              <ArrowRight className="btn-icon" />
            </button>
          </div>

          <div className="portfolio-grid">
            {/* Shoptidy Project */}
            <div className="project-card">
              <div className="project-mockup">
                <div className="project-laptop project-laptop-shoptidy">
                  <div className="project-screen project-screen-shoptidy">
                    <div className="mockup-header"></div>
                    <div className="mockup-grid">
                      <div className="mockup-item"></div>
                      <div className="mockup-item"></div>
                      <div className="mockup-item"></div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="project-title">CardKeeper</h3>
              <div className="project-tags">
                <span className="project-tag">TypeScript</span>
                <span className="project-tag">React</span>
                <span className="project-tag">Redux</span>
                <span className="project-tag">Supabase</span>
              </div>
              <button className="btn btn-primary">View Project</button>
            </div>

            {/* ExpenseTracker Project */}
            <div className="project-card">
              <div className="project-mockup">
                <div className="project-laptop project-laptop-expense">
                  <div className="project-screen project-screen-expense">
                    <div
                      style={{
                        width: "100%",
                        height: "1.5rem",
                        backgroundColor: "#374151",
                        borderRadius: "0.25rem",
                        marginBottom: "1rem",
                      }}
                    ></div>
                    <div className="mockup-chart"></div>
                    <div className="mockup-bars">
                      <div
                        className="mockup-bar"
                        style={{ backgroundColor: "#60a5fa" }}
                      ></div>
                      <div
                        className="mockup-bar"
                        style={{ backgroundColor: "#3b82f6" }}
                      ></div>
                      <div
                        className="mockup-bar"
                        style={{ backgroundColor: "#93c5fd" }}
                      ></div>
                      <div
                        className="mockup-bar"
                        style={{ backgroundColor: "#2563eb" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="project-title">TimeNest</h3>
              <div className="project-tags">
                <span className="project-tag">TypeScript</span>
                <span className="project-tag">React</span>
                <span className="project-tag">Node.JS</span>
                <span className="project-tag">MongoDB</span>
              </div>
              <button className="btn btn-primary">View Project</button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        {/* Progress Indicator */}
        <div className="progress-indicator">
          <div className="progress-dot active"></div>
          <div className="progress-dot"></div>
          <div className="progress-dot"></div>
        </div>

        {/* Call to Action */}
        <div className="contact-cta">
          <h2 className="contact-title">
            Like what you see? Reach out{" "}
            <span className="contact-title-accent">via email</span> to
            collaborate!
          </h2>
          <a href="mailto:anupbhujel07@gmail.com">
            <button className="btn btn-outline btn-lg">Mail Now</button>
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer" id="footer">
        <div className="footer-content">
          <div className="footer-grid">
            {/* Left Column - Name and Copyright */}
            <div className="footer-brand">
              <h3>Anup Bhujel</h3>
              <p>© 2025 | All rights reserved.</p>
            </div>

            {/* Navigate Column */}
            <div className="footer-section">
              <h4>Navigate</h4>
              <ul className="footer-links">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#work">Work</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#footer">Contact</a>
                </li>
              </ul>
            </div>

            {/* Projects Column */}
            <div className="footer-section">
              <h4>Projects</h4>
              <ul className="footer-links">
                <li>
                  <a
                    href="https://cardkeeper-lynx.netlify.app/"
                    target="_blank"
                  >
                    Cardkeeper
                  </a>
                </li>
                <li>
                  <a href="https://timenest-lynx.netlify.app/" target="_blank">
                    TimeNest
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/lynx-fx/Bash-for-deauth-attack-on-wifi"
                    target="_blank"
                  >
                    Wifi DeAuther
                  </a>
                </li>
              </ul>
            </div>

            {/* Socials Column */}
            <div className="footer-section">
              <h4>Socials</h4>
              <ul className="footer-links">
                <li>
                  <a
                    href="https://www.linkedin.com/in/anup-bhujel-2b1381303/"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://github.com/lynx-fx" target="_blank">
                    Github
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
