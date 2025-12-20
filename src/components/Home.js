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
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/bg.jpg'})` }}
    >
      <div className="home-content">
        <h1>We are stories, withering hither and thither!</h1>
        <p className="tagline">
          At <strong>Glassbones Creative Nexus</strong>, we turn ideas into ink and ink into impact your story, our canvas.
        </p>

        <p className="intro-text">
          We are your hub for literary and digital storytelling helping stories travel across the world through translation, editing, publishing, and creative branding.
        </p>



        <div className="home-buttons">
          <button
            className="button"
            onClick={() => scrollToSection('our-services')}
          >
            <span>EXPLORE</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 43">
              <polygon points="39.58,4.46 44.11,0 66,21.5 44.11,43 39.58,38.54 56.94,21.5" />
              <polygon points="19.79,4.46 24.32,0 46.21,21.5 24.32,43 19.79,38.54 37.15,21.5" />
              <polygon points="0,4.46 4.53,0 26.42,21.5 4.53,43 0,38.54 17.36,21.5" />
            </svg>
          </button>
        </div>

      </div>

      <div className="scroll-text">
        <span>
          We are here to help you with Publishing • Branding • Storytelling • Subtitling • Editing • Translating • Content Strategy
        </span>
      </div>

      {/* CHANGED: Added wrapper for card and promise side by side */}
      <div className="services-promise-wrapper">
        <div className="card-container">
          <div className="card">
            <div className="card-item">
              <span className="card-title">PUBLISHING</span>
              <div className="card-content">
                <p>Publishing turns your words into wings that reach every reader.
                  We don’t just publish your book we position your voice to be discovered.
                  And with every step guided by expertise, your work enters the world with confidence and purpose.</p>
              </div>
            </div>

            <div className="card-item">
              <span className="card-title">BRANDING</span>
              <div className="card-content">
                <p>We shape your creative identity and help your voice stand out online.
                  Your identity deserves a story that never stops evolving.
                  We craft visuals and narratives that reflect who you are and what you stand for.
                  With a brand built on clarity and authenticity, your presence becomes unforgettable.</p>
              </div>
            </div>

            <div className="card-item">
              <span className="card-title">TRANSLATION</span>
              <div className="card-content">
                <p>Authentic and culturally alive bridging languages with precision.
                  The original is gold, and translation carries its glow into new worlds.
                  We preserve your intent, emotion, and voice while making your message resonate effortlessly across borders.</p>
              </div>
            </div>

            <div className="card-item">
              <span className="card-title">WRITING</span>
              <div className="card-content">
                <p>Every story begins with a spark; we help it ignite beautifully.
                  We refine your words until they sing in harmony with your intent.
                  With thoughtful guidance and crafted clarity, we shape your ideas into writing that feels vivid, meaningful, and truly yours.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="our-promise-card">
          <div className="our-promise">
            <p>
              We don't just edit stories; we empower voices, nurture narratives, and connect creators with the world.
              Your story matters to us, and we're here to help you share it with clarity, confidence, and impact.
              Your creativity deserves a team that truly listens. We don't just polish words; we strengthen your storytelling, empower your voice, and nurture your narrative from the first draft to the final masterpiece.
        Every manuscript receives careful attention, honest guidance, and professional refinement, backed by a partnership you can trust.
            </p>
          </div>
        </div>
      </div>

      <div className="contact-banner">
        <p>Have a story to tell? Let's bring it to the world together.</p>
        <button className="btn-primary" onClick={() => scrollToSection('contact-us')}>
          Connect Now
        </button>
      </div>
    </section>
  );
}

export default Home;