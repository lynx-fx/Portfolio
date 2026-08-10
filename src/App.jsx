import React, { useEffect } from 'react'
import Landing from './components/Landing'
import AIAssistant from './components/Ai'
import Lenis from 'lenis'

export default function App() {
  useEffect(() => {
    // Initialize Lenis with slow, luxurious scroll settings
    const lenis = new Lenis({
      duration: 1.6, // Slow and smooth scrolling speed
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth exponential deceleration
      smoothWheel: true,
      wheelMultiplier: 0.9, // Make wheel movement slightly more subtle
    })

    // Animation frame loop required by Lenis
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // Handle hash links with Lenis scrollTo
    const handleAnchorClick = (e) => {
      const link = e.target.closest('a')
      if (!link) return

      const href = link.getAttribute('href')
      if (href && href.startsWith('#')) {
        e.preventDefault()
        const targetId = href === '#' ? 'body' : href
        const targetElement = document.querySelector(targetId)
        
        if (targetElement) {
          lenis.scrollTo(targetElement, {
            offset: 0,
            duration: 1.8, // Slightly slower transition for clicked links
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          })
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)

    // Clean up Lenis instance and event listener
    return () => {
      lenis.destroy()
      document.removeEventListener('click', handleAnchorClick)
    }
  }, [])

  return (
    <>
      {/* <AIAssistant/> */}
      <Landing />
    </>
  )
}
