import React from 'react';
import './Home.css';

function Home() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="home-section"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/homebg.jpg'})` }}
    >
      <div className="home-content">
        <h1>We are stories, withering hither and thither!</h1>
        <p className="tagline">
          At <strong>Glassbones Creative Nexus</strong>, we turn ideas into ink and ink into impact — your story, our canvas.
        </p>

        <p className="intro-text">
          We are your hub for literary and digital storytelling — helping stories travel across the world through translation, editing, publishing, and creative branding.
        </p>

        <div className="home-buttons">
          <button className="btn-primary" onClick={() => scrollToSection('our-services')}>
            Explore
          </button>
          <button className="btn-secondary" onClick={() => scrollToSection('contact-us')}>
            Contact
          </button>
        </div>
      </div>

      <div className="scroll-text">
        <span>
          Translation • Editing • Publishing • Subtitling • Branding • Content Strategy • Storytelling
        </span>
      </div>

      <div className="mini-services">
        <div className="glass-card">
          <div className="align">
           
          </div>
          <h1>WRITING</h1>
          <p> Every story starts with a spark — we help it ignite beautifully. We refine your words until they sing in perfect harmony with your intent.</p>
        </div>
        
        <div className="glass-card">
          <div className="align">
          
          </div>
          <h1>TRANSLATION</h1>
          <p>Authentic and culturally alive — bridging languages with precision. The original is gold — and translation carries its glow to new worlds.</p>
        </div>
        
        <div className="glass-card">
          <div className="align">
   
          </div>
          <h1>BRANDING</h1>
          <p>We shape your creative identity and help your voice stand out online.Your identity deserves a story that never stops evolving.</p>
        </div>
        
        <div className="glass-card">
          <div className="align">

          </div>
          <h1>PUBLISHING</h1>
          <p>Publishing turns your words into wings that reach every reader. From manuscript to marketplace — your story, professionally presented.</p>        </div>
      </div>

      <div className="our-promise">
        <p>
          We don’t just edit stories — we empower voices, nurture narratives, and connect creators with the world.
        </p>
      </div>

      <div className="contact-banner">
        <p>Have a story to tell? Let’s bring it to the world together.</p>
        <button className="btn-primary" onClick={() => scrollToSection('contact-us')}>
          Connect Now
        </button>
      </div>
    </section>
  );
}

export default Home;
