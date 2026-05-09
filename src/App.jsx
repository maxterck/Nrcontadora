import React, { useState } from 'react';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import Consultations from './components/Consultations';
import BookingCalendar from './components/BookingCalendar';

function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleBook = (service) => {
    setSelectedService(service);
    setBookingModalOpen(true);
  };

  const services = [
    {
      title: "Asesoramiento por chat WhatsApp",
      type: "whatsapp",
      duration: "30 min",
      price: 25000
    },
    {
      title: "Asesoramiento por llamada",
      type: "phone",
      duration: "30 min",
      price: 35000
    },
    {
      title: "Asesoramiento por videollamada",
      type: "video",
      duration: "30 min",
      price: 55000
    }
  ];

  return (
    <>
      <div className="bg-glow"></div>
      
      {/* Services Section */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <Hero />
          
          <div className="grid-3 mt-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                type={service.type}
                duration={service.duration}
                price={service.price}
                onBook={() => handleBook(service)}
              />
            ))}
          </div>
        </div>
      </section>

      <Consultations />

      {/* Footer / Contact simple */}
      <footer className="section text-center" style={{ paddingBottom: '2rem', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container">
          <p style={{ color: 'var(--text-secondary)' }}>maximorales2425@gmail.com</p>
          <p style={{ color: 'var(--text-secondary)', margin: '0.5rem 0' }}>+54 9 3804 53-6805</p>
          <p style={{ color: 'var(--text-secondary)' }}>La Rioja, Argentina</p>
        </div>
      </footer>

      {bookingModalOpen && (
        <BookingCalendar 
          selectedService={selectedService} 
          onClose={() => setBookingModalOpen(false)} 
        />
      )}
    </>
  );
}

export default App;
