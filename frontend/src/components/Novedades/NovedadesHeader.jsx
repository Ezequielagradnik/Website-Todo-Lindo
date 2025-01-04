import React from 'react';
import { Megaphone } from 'lucide-react';
import '../../novedades.css';

const NovedadesHeader = () => {
    return (
      <div className="novedades-header">
        <div className="header-content">
          <div className="icon-wrapper">
            <Megaphone size={32} />
          </div>
          <h1 className="header-title">NOVEDADES</h1>
        </div>
        <div className="header-background" />
        <img 
          src="/catalog_images/Novedades.png" 
          alt="Novedades Banner" 
          className="header-image"
        />
      </div>
    );
  };

export default NovedadesHeader;