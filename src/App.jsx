import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Gallery from './components/Gallery'
import Attractions from './components/Attractions'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingCTA from './components/FloatingCTA'

function App() {
  return (
    <div className="font-body text-gray-800 overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Attractions />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingCTA />
    </div>
  )
}

export default App
