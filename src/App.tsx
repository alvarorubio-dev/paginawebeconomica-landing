import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Pricing from './components/Pricing';
import AdditionalServices from './components/AdditionalServices';
import WhatYouGet from './components/WhatYouGet';
import WhoIsThisFor from './components/WhoIsThisFor';
import HowItWorks from './components/HowItWorks';
import Portfolio from './components/Portfolio';
import GoogleReviewsSection from './components/GoogleReviewsSection';
import Urgency from './components/Urgency';
import BlogSection from './components/Blog';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';
import SuccessPage from './pages/SuccessPage';
import NotFoundPage from './pages/NotFoundPage';

function LandingPage() {
  return (
    <>
      <a href="#precio" className="skip-link">
        Saltar a precios
      </a>
      <a href="#contacto" className="skip-link" style={{ left: '200px' }}>
        Saltar al formulario
      </a>

      <Header />
      <main id="contenido-principal" role="main">
        <Hero />
        <Problem />
        <Pricing />
        <AdditionalServices />
        <WhatYouGet />
        <WhoIsThisFor />
        <HowItWorks />
        <Portfolio />
        <GoogleReviewsSection />
        <BlogSection />
        <Urgency />
        <FAQ />
        <ContactForm />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pago-exitoso" element={<SuccessPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 3000,
            style: {
              background: '#10b981',
            },
          },
          error: {
            duration: 4000,
            style: {
              background: '#ef4444',
            },
          },
        }}
      />
    </div>
  );
}

export default App;
