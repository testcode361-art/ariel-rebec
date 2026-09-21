import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BookSection from './components/BookSection'
import AboutAuthor from './components/AboutAuthor'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      <Hero />
      <BookSection />
      <AboutAuthor />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App