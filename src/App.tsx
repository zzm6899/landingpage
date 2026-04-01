import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Reflections from './components/Reflections'
import CoverLetter from './components/CoverLetter'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Reflections />
        <CoverLetter />
        <Contact />
      </main>
    </>
  )
}
