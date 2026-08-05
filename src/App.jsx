import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import SignatureTraining from './components/SignatureTraining/SignatureTraining';
import Facilities from './components/Facilities/Facilities';
import Membership from './components/Membership/Membership';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
import Cursor from './components/Cursor/Cursor';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Stats from './components/Stats/Stats';

const Home = () => (
  <>
    <Hero />
    <Stats />
    <About />
    <SignatureTraining />
    <Facilities />
    <Membership />
  </>
);

function App() {
  const [loading, setLoading] = useState(true);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      {loading && <Loader setLoading={setLoading} />}
      <Cursor />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
