import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './BookingCalendar.css';

export default function BookingCalendar({ selectedService, onClose }) {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 4, 1)); // May 2026 as an example
  const [selectedDate, setSelectedDate] = useState(null);

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: firstDayOfMonth }, (_, i) => i);

  const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  return (
    <div className="booking-modal-overlay">
      <div className="glass-panel booking-modal">
        <button className="close-btn" onClick={onClose}>&times;</button>
        
        <h2 className="mb-2 text-gradient">Programa tu servicio</h2>
        <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>Revisa nuestra disponibilidad y reserva la fecha y hora que más te convengan</p>
        
        <div className="booking-grid">
          {/* Calendar Section */}
          <div className="calendar-section">
            <h3 className="mb-4">Selecciona fecha y hora</h3>
            
            <div className="calendar-header">
              <button className="icon-btn"><ChevronLeft size={20} /></button>
              <span>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</span>
              <button className="icon-btn"><ChevronRight size={20} /></button>
            </div>
            
            <div className="calendar-days-header">
              <span>dom</span><span>lun</span><span>mar</span><span>mié</span><span>jue</span><span>vie</span><span>sáb</span>
            </div>
            
            <div className="calendar-grid">
              {blanks.map(blank => (
                <div key={`blank-${blank}`} className="calendar-cell empty"></div>
              ))}
              {days.map(day => (
                <button 
                  key={day} 
                  className={`calendar-cell ${selectedDate === day ? 'selected' : ''}`}
                  onClick={() => setSelectedDate(day)}
                >
                  {day}
                </button>
              ))}
            </div>
            
            <div className="availability-info mt-8">
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                Disponibilidad para: {selectedDate ? `${selectedDate} de ${monthNames[currentDate.getMonth()]}` : 'Seleccione una fecha'}
              </p>
              {selectedDate ? (
                <div className="time-slots">
                  <button className="time-slot">09:00</button>
                  <button className="time-slot">10:30</button>
                  <button className="time-slot">15:00</button>
                </div>
              ) : (
                <button className="btn btn-primary" disabled style={{ opacity: 0.5 }}>
                  Próxima sesión disponible
                </button>
              )}
            </div>
          </div>
          
          {/* Details Section */}
          <div className="details-section">
            <h3 className="mb-4">Detalles del servicio</h3>
            <div className="service-summary">
              <p style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--accent-cyan)' }}>
                {selectedService?.title || 'Servicio no seleccionado'}
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '2rem' }}>
                Duración: {selectedService?.duration || '30 min'}<br/>
                Precio: ${selectedService?.price?.toLocaleString('es-AR') || '0'}
              </p>
              
              <button className="btn btn-secondary w-full" disabled={!selectedDate}>
                Siguiente
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
