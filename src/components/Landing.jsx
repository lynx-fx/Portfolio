"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiLinkedin,
  SiInstagram,
} from "react-icons/si"
import "../styles/landing.css"

export default function LandingPage() {
  const [isNavVisible, setIsNavVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [visibleSections, setVisibleSections] = useState({
    about: false,
    work: false,
    contact: false,
  })
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [dragOffset, setDragOffset] = useState(0)

  const techRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)
  const carouselRef = useRef(null)

  const projects = [
    {
      id: 1,
      title: "CardKeeper",
      tags: ["Express", "React", "Node", "MongoDB"],
      url: "https://cardkeeper-lynx.netlify.app/",
      mockupType: "light",
    },
    {
      id: 2,
      title: "TimeNest",
      tags: ["Express", "React", "Node", "MongoDB"],
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
  ]

  const technologies = [
    {
      name: "JavaScript",
      description: "A programming language",
      icon: SiJavascript,
      color: "yellow",
    },
    {
      name: "Express",
      description: "JS Backend Framework",
      icon: SiExpress,
      color: "gray",
    },
    {
      name: "React",
      description: "JavaScript Library",
      icon: SiReact,
      color: "cyan",
    },
    {
      name: "Tailwind",
      description: "CSS framework",
      icon: SiTailwindcss,
      color: "cyan-light",
    },
    {
      name: "Git",
      description: "Version control",
      icon: SiGit,
      color: "orange",
    },
    {
      name: "Node.JS",
      description: "Runtime Environment",
      icon: SiNodedotjs,
      color: "green",
    },
    {
      name: "MongoDB",
      description: "NoSQL database",
      icon: SiMongodb,
      color: "green-light",
    },
    {
      name: "MySQL",
      description: "SQL database",
      icon: SiMysql,
      color: "blue",
    },
  ]

  // Initialize animations on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  // Scroll-based navigation visibility
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsNavVisible(false)
        } else {
          setIsNavVisible(true)
        }
        setLastScrollY(window.scrollY)
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar)
      return () => {
        window.removeEventListener("scroll", controlNavbar)
      }
    }
  }, [lastScrollY])

  // Simple scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight

      // Check each section only once
      if (!visibleSections.about && techRef.current) {
        const rect = techRef.current.getBoundingClientRect()
        if (rect.top < windowHeight * 0.8) {
          setVisibleSections((prev) => ({ ...prev, about: true }))
        }
      }

      if (!visibleSections.work && projectsRef.current) {
        const rect = projectsRef.current.getBoundingClientRect()
        if (rect.top < windowHeight * 0.8) {
          setVisibleSections((prev) => ({ ...prev, work: true }))
        }
      }

      if (!visibleSections.contact && contactRef.current) {
        const rect = contactRef.current.getBoundingClientRect()
        if (rect.top < windowHeight * 0.8) {
          setVisibleSections((prev) => ({ ...prev, contact: true }))
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial state

    return () => window.removeEventListener("scroll", handleScroll)
  }, [visibleSections])

  // Carousel navigation functions
  const nextProject = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const prevProject = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const goToProject = (index) => {
    if (isTransitioning || index === currentProjectIndex) return
    setIsTransitioning(true)
    setCurrentProjectIndex(index)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  // Drag handlers
  const handleDragStart = (e) => {
    if (isTransitioning) return
    setIsDragging(true)
    const clientX = e.type === "mousedown" ? e.clientX : e.touches[0].clientX
    const clientY = e.type === "mousedown" ? e.clientY : e.touches[0].clientY
    setDragStart({ x: clientX, y: clientY })
    setDragOffset(0)
  }

  const handleDragMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const clientX = e.type === "mousemove" ? e.clientX : e.touches[0].clientX
    const deltaX = clientX - dragStart.x
    setDragOffset(deltaX)
  }

  const handleDragEnd = () => {
    if (!isDragging) return
    setIsDragging(false)

    const threshold = 100 // Minimum drag distance to trigger navigation
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        prevProject()
      } else {
        nextProject()
      }
    }
    setDragOffset(0)
  }

  // Add event listeners for drag
  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const handleMouseMove = (e) => handleDragMove(e)
    const handleMouseUp = () => handleDragEnd()
    const handleTouchMove = (e) => handleDragMove(e)
    const handleTouchEnd = () => handleDragEnd()

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
      document.addEventListener("touchmove", handleTouchMove, { passive: false })
      document.addEventListener("touchend", handleTouchEnd)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("touchmove", handleTouchMove)
      document.removeEventListener("touchend", handleTouchEnd)
    }
  }, [isDragging, dragStart, dragOffset])

  const visibleProjects = [projects[currentProjectIndex], projects[(currentProjectIndex + 1) % projects.length]]

  return (
    <div className="portfolio-container">
      {/* Fixed Navigation */}
      <nav className={`navigation ${isNavVisible ? "nav-visible" : "nav-hidden"}`}>
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

      {/* Hero Section */}
      <div className="hero-section">
        <div className={`hero-location ${isLoaded ? "visible" : ""}`} style={{ animationDelay: "0.2s" }}>
          Based in Nepal
        </div>

        <h1 className={`hero-title ${isLoaded ? "visible" : ""}`} style={{ animationDelay: "0.4s" }}>
          Bridging <span className="hero-accent">Visual Elegance</span> with{" "}
          <span className="hero-accent">Code Logic,</span> seamlessly.
        </h1>

        <p className={`hero-subtitle ${isLoaded ? "visible" : ""}`} style={{ animationDelay: "0.6s" }}>
          Hi, I'm Sudarshan, I create intuitive and highly functional web applications.
        </p>

        <div className={`hero-buttons ${isLoaded ? "visible" : ""}`} style={{ animationDelay: "0.8s" }}>
          <a href="#work">
            <button className="btn btn-outline btn-with-icon">
              <span>See My Work</span>
              <ArrowRight className="btn-icon-right" />
            </button>
          </a>
          <a href="https://github.com/lynx-fx" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-outline btn-with-icon">
              <SiGithub className="btn-icon-left" />
              <span>GitHub</span>
            </button>
          </a>
        </div>

        {/* Technologies Section */}
        <div ref={techRef} className="technologies-section" id="about">
          <h2 className={`section-title ${visibleSections.about ? "visible" : ""}`}>Current technologies</h2>
          <p
            className={`section-description ${visibleSections.about ? "visible" : ""}`}
            style={{ animationDelay: "0.2s" }}
          >
            I leverage modern technologies to create innovative and efficient solutions — here are some I work with
            most.
          </p>

          <div className="tech-grid">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon
              return (
                <div
                  key={index}
                  className={`tech-card tech-card-${tech.color} ${visibleSections.about ? "visible" : ""}`}
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="tech-card-content">
                    <div className={`tech-icon tech-icon-${tech.color}`}>
                      <IconComponent className="tech-icon-svg" />
                    </div>
                    <div className="tech-info">
                      <h3 className="tech-name">{tech.name}</h3>
                      <p className="tech-description">{tech.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Portfolio Section */}
          <div ref={projectsRef} className={`portfolio-section ${visibleSections.work ? "visible" : ""}`} id="work">
            <div className="portfolio-header">
          <h2 className={`section-title ${visibleSections.about ? "visible" : ""}`}>My Projects</h2>
              <div className="portfolio-controls">
                <button onClick={prevProject} disabled={isTransitioning} className="control-btn">
                  <ChevronLeft className="control-icon" />
                </button>
                <button onClick={nextProject} disabled={isTransitioning} className="control-btn">
                  <ChevronRight className="control-icon" />
                </button>
              </div>
            </div>

            {/* Drag-enabled carousel */}
            <div
              ref={carouselRef}
              className={`portfolio-carousel ${isDragging ? "dragging" : ""}`}
              onMouseDown={handleDragStart}
              onTouchStart={handleDragStart}
              style={{
                transform: `translateX(${dragOffset}px)`,
                cursor: isDragging ? "grabbing" : "grab",
              }}
            >
              <div className="portfolio-grid">
                {visibleProjects.map((project, index) => (
                  <div
                    key={`${project.id}-${currentProjectIndex}-${index}`}
                    className={`project-card ${isTransitioning ? "project-transitioning" : ""}`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="project-mockup">
                      <div
                        className={`project-laptop ${project.mockupType === "light" ? "laptop-light" : "laptop-dark"}`}
                      >
                        <div
                          className={`project-screen ${
                            project.mockupType === "light" ? "screen-light" : "screen-dark"
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

                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <button className="btn btn-primary">
                        <span>View Project</span>
                      </button>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Dot pagination */}
            <div className="carousel-pagination">
              {projects.map((_, index) => (
                <button
                  key={index}
                  className={`pagination-dot ${index === currentProjectIndex ? "active" : ""}`}
                  onClick={() => goToProject(index)}
                  disabled={isTransitioning}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            {/* Drag instruction */}
            <div className="drag-instruction">
              <span>← Drag or click dots to navigate →</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div ref={contactRef} className="contact-section">

        <div
          className={`contact-content ${visibleSections.contact ? "visible" : ""}`}
          style={{ animationDelay: "0.2s" }}
        >
          <h2 className="contact-title">
            Like what you see? Reach out <span className="contact-accent">via email</span> to collaborate!
          </h2>
          <a href="mailto:anupbhujel07@gmail.com">
            <button className="btn btn-outline contact-btn">
              <span>Mail Now</span>
            </button>
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer" id="footer">
        <div className="footer-content">
          <div className="footer-grid">
            <div className="footer-brand">
              <h3 className="footer-brand-title">Anup Bhujel</h3>
              <p className="footer-brand-text">© 2025 | All rights reserved.</p>
            </div>

            <div className="footer-section">
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

            <div className="footer-section">
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
                  <a href="https://timenest-lynx.netlify.app/" target="_blank" className="footer-link" rel="noreferrer">
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

            <div className="footer-section">
              <h4 className="footer-section-title">Socials</h4>
              <ul className="footer-links">
                <li>
                  <a
                    href="https://www.linkedin.com/in/anup-bhujel-2b1381303/"
                    target="_blank"
                    className="footer-link footer-link-with-icon"
                    rel="noreferrer"
                  >
                    <SiLinkedin className="footer-icon" />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/lynx-fx"
                    target="_blank"
                    className="footer-link footer-link-with-icon"
                    rel="noreferrer"
                  >
                    <SiGithub className="footer-icon" />
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    className="footer-link footer-link-with-icon"
                    rel="noreferrer"
                  >
                    <SiInstagram className="footer-icon" />
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
