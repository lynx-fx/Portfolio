import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsOpen(false); // Close the menu on resize to desktop
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "About", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <div
      id="nav"
      style={{
        position: "sticky",
        top: 0,
      }}
    >
      <SpotlightCard className={`nav no-caret ${isMobile ? "mobile" : ""}`}>
        <h1>Lynxx</h1>

        {isMobile && (
          <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        )}

        <ul className={`nav-links ${isOpen ? "show" : ""}`}>
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </SpotlightCard>
    </div>
  );
};

export default Nav;