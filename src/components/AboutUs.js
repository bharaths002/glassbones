import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <section id="about-us" className="about-us">
      <div className="about-us-header">
        <div className="about-us-title">
          <h2><span className="highlight">About</span> Us</h2>
        </div>
        <div className="about-divider"></div>
        <div className="about-us-description">
          <p>
            Glassbones Creative Nexus is a young hub for literary and digital storytelling. We believe in stories capable of catapulting impacts in daily life. From a specialised book translation, publishing your next big work, subtitles/inge creation, editing, shaping your online identity to social media content management, our nexus invites minds in shaping the future of storytelling. We help your stories travel across the world by our team of literary agents and publicists. Whether it's translating a booknovel, publishing your next big work, refining subtitles, or shaping your online identity, we provide end-to-end creative solutions tailored to elevate your voices.
          </p>
        </div>
      </div>

      <div className="books-container">
        {/* Vision Book Card with write1.jpg */}
        <div className="book-container">
          <div className="book">
            <p>To build a vibrant literary community where every story is celebrated 
              and every writer is empowered. We envision a world where creative voices 
              thrive and art is accessible to all.</p>
            <div className="cover" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/write1.jpg'})`}}>
              <p>Our Vision</p>
            </div>
          </div>
        </div>

        {/* Values Book Card with publish1.jpg */}
        <div className="book-container">
          <div className="book">
            <p>We champion creativity, respect, and open dialogue, believing that literature 
              thrives on diverse perspectives and shared passions. Our community is built 
              on mutual support and a commitment to excellence.</p>
            <div className="cover" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/publish1.jpg'})`}}>
              <p>Our Values</p>
            </div>
          </div>
        </div>

        {/* Mission Book Card with translate1.jpg */}
        <div className="book-container">
          <div className="book">
            <p>To foster a love for reading and writing by providing a platform for authors 
              to share their work and for readers to discover new voices. We are committed 
              to connecting storytellers and audiences globally.</p>
            <div className="cover" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/translate1.jpg'})`}}>
              <p>Our Mission</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



export default AboutUs;