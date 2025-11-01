import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import OurServices from './components/OurServices';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GoToTop from './components/GoToTop';
import './App.css'; // Keep this to import other global styles

function App() {
  return (
    <>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about-us">
        <AboutUs />
      </section>
      <section id="our-services">
        <OurServices />
      </section>
      <section id="contact-us">
        <Contact />
      </section>
      <GoToTop />
      <Footer />
    </>
  );
}

export default App;
