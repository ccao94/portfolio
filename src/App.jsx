import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import SocialRail from './components/SocialRail'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Path from './components/Path'
import Beyond from './components/Beyond'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollTop from './components/ScrollTop'

// The preloader only plays once per visit
function alreadyLoaded() {
  try {
    return sessionStorage.getItem('loaded') === '1'
  } catch {
    return false
  }
}

export default function App() {
  const [ready, setReady] = useState(alreadyLoaded)

  function handleLoaded() {
    try {
      sessionStorage.setItem('loaded', '1')
    } catch {
      // ignore
    }
    setReady(true)
  }

  return (
    <>
      <AnimatePresence>{!ready && <Preloader key="preloader" onDone={handleLoaded} />}</AnimatePresence>
      <Navbar />
      <SocialRail />
      <main>
        <Hero ready={ready} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Path />
        <Beyond />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </>
  )
}
