import React, { useState } from "react";
import "./OurServices.css";

// Services Data
const servicesData = [
  {
    title: "Book Translation (Fiction & Non-Fiction)",
    brief: "Professional literary translation preserving your voice and message for global audiences.",
    deliverables: [
      "Fiction, Non-fiction, Poetry",
      "Regional & International Languages",
      "Participation in global book fairs (CIBF, SIBF, NDWIBF, Frankfurt)",
      "Maintain tone, style, and context"
    ],
    image: process.env.PUBLIC_URL + "/write.png" // Updated to write.png
  },
  {
    title: "Editing & Proofreading",
    brief: "Enhance your manuscript's clarity, grammar, and overall readability with expert editing.",
    deliverables: [
      "Line editing & structural editing",
      "Grammar, punctuation, spelling corrections",
      "Consistency and formatting",
      "Publishing-ready content"
    ],
    image: process.env.PUBLIC_URL + "/write.png" // Updated to write.png
  },
  {
    title: "Manuscript Preparation & Publishing Consulting",
    brief: "Guidance from manuscript review to ISBN, design, and distribution strategies.",
    deliverables: [
      "Manuscript review",
      "Formatting guidance",
      "Design and ISBN guidance",
      "Distribution planning"
    ],
    image: process.env.PUBLIC_URL + "/write.png" // Updated to write.png
  },
  {
    title: "Subtitle Writing & Editing",
    brief: "Accurate, emotionally attuned subtitles for films, series, and documentaries.",
    deliverables: [
      "Subtitle writing from scratch",
      "Editing existing subtitles",
      "Indian (Tamil, Telugu, Malayalam, Kannada, Hindi) & International (German, French, Japanese)",
      "Storytelling rhythm & clarity"
    ],
    image: process.env.PUBLIC_URL + "/write.png" // Updated to write.png
  },
  {
    title: "Script Translation (Films, Series, Documentaries)",
    brief: "Culturally aware script translations to help you reach global markets.",
    deliverables: [
      "Film, series, documentary scripts",
      "Context-accurate localization",
      "Preserve creative tone & intent",
      "Multilingual script support"
    ],
    image: process.env.PUBLIC_URL + "/write.png" // Updated to write.png
  },
  {
    title: "Social Media Management & Branding",
    brief: "Craft strategies to boost brand identity, visibility, and engagement.",
    deliverables: [
      "Content planning & calendar creation",
      "Caption writing & design support",
      "Audience engagement & analysis",
      "Event & campaign management"
    ],
    image: process.env.PUBLIC_URL + "/write.png" // Updated to write.png
  },
  {
    title: "Content Strategy for Authors & Artists",
    brief: "Build your creative brand with targeted content strategies and branding.",
    deliverables: [
      "Brand positioning",
      "Consistent creative voice",
      "Growth-oriented planning",
      "Content curation & posting"
    ],
    image: process.env.PUBLIC_URL + "/write.png" // Updated to write.png
  },
  {
    title: "Strategic SEO & Performance Marketing",
    brief: "Maximize your digital reach with SEO, campaigns, and performance marketing.",
    deliverables: [
      "Strategic keyword research",
      "Content optimization",
      "Social media campaigns",
      "Paid Ads (PMax, Google, Meta)"
    ],
    image: process.env.PUBLIC_URL + "/write.png" // Updated to write.png
  }
];

const Services = () => {
  const [flipped, setFlipped] = useState(Array(servicesData.length).fill(false));

  const handleFlip = (index) => {
    const updated = [...flipped];
    updated[index] = true;
    setFlipped(updated);
  };
  
  const handleMouseLeave = (index) => {
    const updated = [...flipped];
    updated[index] = false;
    setFlipped(updated);
  };
  
  // Add touch event handler for mobile
  const handleTouch = (index) => {
    const updated = [...flipped];
    updated[index] = !updated[index]; // Toggle the flipped state on touch
    setFlipped(updated);
  };

  const handleTouchBack = (index) => {
    const updated = [...flipped];
    updated[index] = false; // Flip to front when back side is touched
    setFlipped(updated);
  };

  return (
    <section className="services-section" id="our-services">
      <h2 className="services-title">
        Our <span className="highlight">Services</span>
      </h2>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div
            className={`service-card ${flipped[index] ? "flipped" : ""}`}
            key={index}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            {/* Front Side */}
            <div className="card-front">
              <h3>{service.title}</h3>
              <p>{service.brief}</p>
              <button onClick={() => handleFlip(index)}>View Deliverables</button>
            </div>

            {/* Back Side with background image */}
            <div className="card-back" onTouchStart={() => handleTouchBack(index)}>
              {/* Background Icon */}
              <img src={service.image} alt="Deliverables Icon" className="back-icon" />

              {/* Overlay Content */}
              <div className="overlay-content">
                <h3>Our Deliverables</h3>
                <ul>
                  {service.deliverables.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;




