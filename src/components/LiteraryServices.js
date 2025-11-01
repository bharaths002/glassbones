import React from 'react';
import servicesData from '../data/services'; // Import the data
import ServiceCard from './ServiceCard'; // Import the new component
import './LiteraryServices.css';

function LiteraryServices() {
  return (
    <section className="literary-services">
      <h2>Literary Services</h2>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            items={service.items}
          />
        ))}
      </div>
    </section>
  );
}

export default LiteraryServices;