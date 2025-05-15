function SkillsSection() {
  const skillCategories = [
    {
      name: "Web Development",
      skills: [
        "HTML5/CSS3",
        "JavaScript",
        "React",
        "Node.js",
        "RESTful APIs",
        "GraphQL",
        "Responsive Design",
        "UI/UX Design",
      ],
    },
    {
      name: "Cybersecurity",
      skills: [
        "Penetration Testing",
        "Network Security",
        "Web Security",
        "Cryptography",
        "Security Auditing",
        "Incident Response",
        "Vulnerability Assessment",
        "Security Compliance",
      ],
    },
    {
      name: "Tools & Technologies",
      skills: ["Git/GitHub", "Docker", "AWS", "Linux", "VS Code", "Wireshark", "Burp Suite", "Nmap"],
    },
  ]

  return (
    <section id="skills" className="skills-section">
      <h2>
        My <span className="highlight">Skills</span>
      </h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div className="skill-category" key={index}>
            <h3>{category.name}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <div className="skill-tag" key={skillIndex}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
