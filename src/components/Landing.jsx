"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight, Download, ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/Landing.css";

export default function Landing() {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());

  const heroRef = useRef(null);
  const techRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "CardKeeper",
      tags: ["Express", "React", "Node", "MongoDb"],
      url: "https://cardkeeper-lynx.netlify.app/",
      mockupType: "light",
    },
    {
      id: 2,
      title: "TimeNest",
      tags: ["Express", "React", "Node", "MongoDb"],
      url: "https://timenest-lynx.netlify.app/",
      mockupType: "dark",
    },
    {
      id: 3,
      title: "Wifi DeAuther",
      tags: ["Shell"],
      url: "https://github.com/lynx-fx/Bash-for-deauth-attack-on-wifi",
      mockupType: "light",
    },
  ];

  const technologies = [
    {
      name: "JavaScript",
      description: "A programming language",
      icon: "TS",
      color: "blue",
    },
    {
      name: "React",
      description: "JavaScript Library",
      icon: "⚛",
      color: "cyan",
    },
    {
      name: "Tailwind",
      description: "CSS framework",
      icon: "◆",
      color: "cyan-light",
    },
    { name: "Git", description: "Version control", icon: "●", color: "orange" },
    {
      name: "Node.JS",
      description: "Runtime Environment",
      icon: "JS",
      color: "green",
    },
    {
      name: "MongoDB",
      description: "NoSQL database",
      icon: "●",
      color: "green-light",
    },
    { name: "MySQL", description: "SQL database", icon: "◆", color: "blue" },
  ];

  // Initialize animations on mount
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Scroll-based navigation visibility
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsNavVisible(false);
        } else {
          setIsNavVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = [
      heroRef.current,
      techRef.current,
      projectsRef.current,
      contactRef.current,
    ];
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex(
      (prev) => (prev - 1 + projects.length) % projects.length
    );
  };

  const visibleProjects = [
    projects[currentProjectIndex],
    projects[(currentProjectIndex + 1) % projects.length],
  ];

  return (
    <div className="portfolio-container">
      {/* Fixed Navigation with Animation */}
      <nav
        className={`navigation ${isNavVisible ? "nav-visible" : "nav-hidden"}`}
      >
        <div className="nav-wrapper">
          <div className="nav-menu">
            <a href="#" className="nav-link nav-link-active">
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
        </div>
      </nav>

      {/* Hero Section with Staggered Animations */}
      <div ref={heroRef} id="hero" className="hero-section">
        <div
          className={`hero-location ${
            isLoaded ? "animate-fade-in-up" : "animate-hidden"
          }`}
        >
          Based in Nepal
        </div>

        <h1
          className={`hero-title ${
            isLoaded ? "animate-fade-in-up" : "animate-hidden"
          }`}
        >
          Bridging <span className="hero-accent">Visual Elegance</span> with{" "}
          <span className="hero-accent">Code Logic,</span> seamlessly.
        </h1>

        <p
          className={`hero-subtitle ${
            isLoaded ? "animate-fade-in-up" : "animate-hidden"
          }`}
        >
          Hi, I'm Anup, I create intuitive and highly functional web
          applications.
        </p>

        <div
          className={`hero-buttons ${
            isLoaded ? "animate-fade-in-up" : "animate-hidden"
          }`}
        >
          <a href="#work">
            <button className="btn btn-outline btn-with-icon">
              <span>See My Work</span>
              <ArrowRight className="btn-icon-right" />
            </button>
          </a>
          <a
            href="https://github.com/lynx-fx"
            target="_blank"
          >
            <button className="btn btn-outline btn-with-icon">
              <img
                src="https://www.svgrepo.com/show/312259/github.svg"
                alt="github"
                className="btn-icon-left"
              />
              <span>GitHub</span>
            </button>
          </a>
        </div>

        {/* Technologies Section with Scroll Animation */}
        <div ref={techRef} id="about" className="technologies-section">
          <h2
            className={`section-title ${
              visibleSections.has("about")
                ? "animate-slide-in-left"
                : "animate-hidden"
            }`}
          >
            Current technologies
          </h2>
          <p
            className={`section-description ${
              visibleSections.has("about")
                ? "animate-slide-in-left"
                : "animate-hidden"
            }`}
          >
            I'm proficient in a range of modern technologies that empower me to
            build highly functional solutions. These are some of my main
            technologies.
          </p>

          <div className="tech-grid">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className={`tech-card tech-card-${tech.color} ${
                  visibleSections.has("about")
                    ? "animate-slide-in-up"
                    : "animate-hidden"
                }`}
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <div className="tech-card-content">
                  <div className={`tech-icon tech-icon-${tech.color}`}>
                    {tech.icon}
                  </div>
                  <div className="tech-info">
                    <h3 className="tech-name">{tech.name}</h3>
                    <p className="tech-description">{tech.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Portfolio Section with Enhanced Animations */}
          <div
            ref={projectsRef}
            id="work"
            className={`portfolio-section ${
              visibleSections.has("work")
                ? "animate-fade-in-up"
                : "animate-hidden"
            }`}
          >
            <div className="portfolio-header">
              <h2 className="section-title">My portfolio</h2>
              <div className="portfolio-controls">
                <button onClick={prevProject} className="control-btn">
                  <ChevronLeft className="control-icon" />
                </button>
                <button onClick={nextProject} className="control-btn">
                  <ChevronRight className="control-icon" />
                </button>
              </div>
            </div>

            <div className="portfolio-grid">
              {visibleProjects.map((project, index) => (
                <div
                  key={`${project.id}-${index}`}
                  className="project-card animate-fade-in-scale"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="project-mockup">
                    <div
                      className={`project-laptop ${
                        project.mockupType === "light"
                          ? "laptop-light"
                          : "laptop-dark"
                      }`}
                    >
                      <div
                        className={`project-screen ${
                          project.mockupType === "light"
                            ? "screen-light"
                            : "screen-dark"
                        }`}
                      >
                        {project.mockupType === "light" ? (
                          <div className="mockup-content-light">
                            <div className="mockup-header-light"></div>
                            <div className="mockup-grid-light">
                              <div className="mockup-item-light"></div>
                              <div className="mockup-item-light"></div>
                              <div className="mockup-item-light"></div>
                            </div>
                          </div>
                        ) : (
                          <div className="mockup-content-dark">
                            <div className="mockup-header-dark"></div>
                            <div className="mockup-chart"></div>
                            <div className="mockup-bars">
                              <div className="mockup-bar bar-1"></div>
                              <div className="mockup-bar bar-2"></div>
                              <div className="mockup-bar bar-3"></div>
                              <div className="mockup-bar bar-4"></div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <h3 className="project-title">{project.title}</h3>

                  <div className="project-tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn btn-primary">
                      <span>View Project</span>
                    </button>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section with Animation */}
      <div ref={contactRef} id="contact" className="contact-section">
        <div
          className={`progress-indicator ${
            visibleSections.has("contact")
              ? "animate-scale-in"
              : "animate-hidden"
          }`}
        >
          <div className="progress-dot progress-dot-active"></div>
          <div className="progress-dot"></div>
          <div className="progress-dot"></div>
        </div>

        <div
          className={`contact-content ${
            visibleSections.has("contact")
              ? "animate-fade-in-up"
              : "animate-hidden"
          }`}
        >
          <h2 className="contact-title">
            Like what you see? Reach out{" "}
            <span className="contact-accent">via email</span> to collaborate!
          </h2>
          <a href="mailto:anupbhujel07@gmail.com">
            <button className="btn btn-outline contact-btn">
              <span>Mail Now</span>
            </button>
          </a>
        </div>
      </div>

      {/* Footer with Fade Animation */}
      <footer className="footer animate-fade-in" id="footer">
        <div className="footer-content">
          <div className="footer-grid">
            <div className="footer-brand animate-slide-in-left">
              <h3 className="footer-brand-title">Anup Bhujel</h3>
              <p className="footer-brand-text">© 2025 | All rights reserved.</p>
            </div>

            <div className="footer-section animate-slide-in-up">
              <h4 className="footer-section-title">Navigate</h4>
              <ul className="footer-links">
                <li>
                  <a href="#" className="footer-link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#work" className="footer-link">
                    Work
                  </a>
                </li>
                <li>
                  <a href="#about" className="footer-link">
                    About
                  </a>
                </li>
                <li>
                  <a href="#footer" className="footer-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-section animate-slide-in-up">
              <h4 className="footer-section-title">Projects</h4>
              <ul className="footer-links">
                <li>
                  <a
                    href="https://cardkeeper-lynx.netlify.app/"
                    target="_blank"
                    className="footer-link"
                    rel="noreferrer"
                  >
                    Cardkeeper
                  </a>
                </li>
                <li>
                  <a
                    href="https://timenest-lynx.netlify.app/"
                    target="_blank"
                    className="footer-link"
                    rel="noreferrer"
                  >
                    TimeNest
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/lynx-fx/Bash-for-deauth-attack-on-wifi"
                    target="_blank"
                    className="footer-link"
                    rel="noreferrer"
                  >
                    Wifi DeAuther
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-section animate-slide-in-right">
              <h4 className="footer-section-title">Socials</h4>
              <ul className="footer-links">
                <li>
                  <a
                    href="https://www.linkedin.com/in/anup-bhujel-2b1381303/"
                    target="_blank"
                    className="footer-link"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/lynx-fx"
                    target="_blank"
                    className="footer-link"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    className="footer-link"
                    rel="noreferrer"
                  >
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
