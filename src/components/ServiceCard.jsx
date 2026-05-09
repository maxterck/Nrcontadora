import React from 'react';
import { Phone, MessageCircle, Video } from 'lucide-react';
import './ServiceCard.css';

const iconMap = {
  phone: <Phone size={48} color="var(--accent-yellow)" />,
  whatsapp: <MessageCircle size={48} color="var(--accent-cyan)" />,
  video: <Video size={48} color="var(--accent-pink)" />
};

export default function ServiceCard({ title, type, duration, price, onBook }) {
  return (
    <div className="glass-panel service-card animate-float" style={{ animationDelay: type === 'whatsapp' ? '0s' : type === 'phone' ? '2s' : '4s' }}>
      <div className="card-icon-wrapper" data-type={type}>
        {iconMap[type]}
      </div>
      <h3 className="card-title">{title}</h3>
      {type === 'video' && (
        <div className="badge">
          <Video size={14} /> Disponible online
        </div>
      )}
      <div className="divider"></div>
      <div className="card-details">
        <p className="duration">{duration}</p>
        <p className="price">${price.toLocaleString('es-AR')}</p>
      </div>
      <button className="btn btn-primary w-full" onClick={onBook}>
        RESERVAR
      </button>
    </div>
  );
}
