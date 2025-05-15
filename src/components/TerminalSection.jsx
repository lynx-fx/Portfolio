"use client"

import { useState, useEffect } from "react"

function TerminalSection() {
  const [displayText, setDisplayText] = useState("")
  const [cursorVisible, setCursorVisible] = useState(true)
  const [commandIndex, setCommandIndex] = useState(0)

  const commands = [
    { command: "2whoami ", delay: 100 },
    {
      output: " Lynxx - Web Developer & Cybersecurity Specialist\nLocation: /home/user\nStatus: Available for hire\n",
      delay: 30,
    },
    { command: "lls skills\n", delay: 100 },
    {
      output: "wweb-development/\ncybersecurity/\ntools/\n",
      delay: 30,
    },
    { command: "ccd web-development && ls\n", delay: 100 },
    {
      output: "hhtml5\ncss3\njavascript\nreact\nnode.js\nrest-api\ngraphql\nresponsive-design\n",
      delay: 30,
    },
    { command: "ccd ../cybersecurity && ls\n", delay: 100 },
    {
      output:
        "ppenetration-testing\nnetwork-security\nweb-security\ncryptography\nsecurity-auditing\nincident-response\n",
      delay: 30,
    },
    { command: "ccd ../tools && ls\n", delay: 100 },
    {
      output: "git\ndocker\naws\nlinux\nvscode\nwireshark\nburp-suite\nnmap\n",
      delay: 30,
    },
  ]

  // Blink cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  // Type out commands and output
  useEffect(() => {
    if (commandIndex >= commands.length) return

    const currentItem = commands[commandIndex]
    const text = currentItem.command || currentItem.output || ""
    let charIndex = 0

    if (currentItem.command) {
      setDisplayText((prev) => prev + "\n$ ")
    }

    const typeInterval = setInterval(() => {
      if (charIndex < text.length) {
        setDisplayText((prev) => prev + text.charAt(charIndex))
        charIndex++
      } else {
        clearInterval(typeInterval)
        setTimeout(() => {
          setCommandIndex((prev) => prev + 1)
        }, 500)
      }
    }, currentItem.delay)

    return () => clearInterval(typeInterval)
  }, [commandIndex])

  return (
    <section className="terminal-section">
      <h1>Web Developer & Cybersecurity Specialist</h1>
      <p className="subtitle">Building secure, efficient, and beautiful web applications</p>
      <div className="terminal">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="terminal-button close"></span>
            <span className="terminal-button minimize"></span>
            <span className="terminal-button maximize"></span>
          </div>
          <div className="terminal-title">user@portfolio: ~</div>
        </div>
        <div className="terminal-body">
          <pre>
            {displayText}
            <span className={`cursor ${cursorVisible ? "visible" : "hidden"}`}>█</span>
          </pre>
        </div>
      </div>
      <div className="hero-buttons">
        <button className="btn primary">View Projects</button>
        <button className="btn secondary">Contact Me</button>
      </div>
    </section>
  )
}

export default TerminalSection
