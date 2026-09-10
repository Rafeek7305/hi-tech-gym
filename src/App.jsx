import { useEffect, useState, lazy, Suspense } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import SEO from './components/SEO/SEO';

const AboutPage = lazy(() => import('./pages/About/AboutPage'));
const ProgramsPage = lazy(() => import('./pages/Programs/ProgramsPage'));
const ContactPage = lazy(() => import('./pages/Contact/ContactPage'));

const ScrollToTopOnRoute = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  "@id": "https://hitechgym.in/#gym",
  "name": "Hi-Tech Gym",
  "url": "https://hitechgym.in/",
  "telephone": "+919751808071",
  "email": "contact@hitechgym.com",
  "priceRange": "₹600 - ₹12000",
  "currenciesAccepted": "INR",
  "paymentAccepted": "Cash, UPI, Card",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Nethaji Rd, Engineers Colony, Raja Nagar, Melapalayam",
    "addressLocality": "Tirunelveli",
    "addressRegion": "Tamil Nadu",
    "postalCode": "627005",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 8.706,
    "longitude": 77.728
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "06:00",
      "closes": "10:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "17:00",
      "closes": "21:00"
    }
  ]
};

const Home = () => (
  <>
    <SEO
      title="Hi-Tech Gym | Premium Fitness & Strength Training in Melapalayam, Tirunelveli"
      description="Experience elite fitness at Hi-Tech Gym in Melapalayam, Tirunelveli. Modern strength equipment, functional training zones, personal coaching, and air-conditioned facilities. Join today!"
      canonical="https://hitechgym.in/"
      ogTitle="Hi-Tech Gym | Premium Fitness & Strength Training in Melapalayam, Tirunelveli"
      ogDescription="Join the premier fitness destination in Melapalayam, Tirunelveli. Elite strength equipment, certified coaching, and luxury atmosphere."
      schema={homeSchema}
    />
    <Hero />
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
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: true,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.on('scroll', ScrollTrigger.update);

    function raf(time) {
      lenis.raf(time * 1000);
    }

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <ScrollToTopOnRoute />
      {loading && <Loader setLoading={setLoading} />}
      <Cursor />
      <Navbar />
      <ScrollToTop />
      <main id="main-content">
        <Suspense fallback={<div style={{ minHeight: '100vh', backgroundColor: 'var(--color-bg-primary)' }} />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
