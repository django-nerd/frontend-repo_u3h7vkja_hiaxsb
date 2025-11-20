import Hero from './components/Hero';
import About from './components/About';
import MenuPreview from './components/MenuPreview';
import Gallery from './components/Gallery';
import VisitUs from './components/VisitUs';
import InstagramFeed from './components/InstagramFeed';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream text-coffee-900">
      <nav className="sticky top-0 z-40 bg-cream/80 backdrop-blur border-b border-blue-900/10">
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <span className="font-serif text-xl">Cuppa Café Paris</span>
          <div className="hidden md:flex gap-6 text-coffee-800">
            <a href="#menu" className="hover:text-coffee-900">Menu</a>
            <a href="#visit" className="hover:text-coffee-900">Visit</a>
            <a href="#" className="hover:text-coffee-900">Reserve</a>
          </div>
        </div>
      </nav>

      <Hero />
      <About />
      <MenuPreview />
      <Gallery />
      <VisitUs />
      <InstagramFeed />
      <Footer />
    </div>
  );
}

export default App;
