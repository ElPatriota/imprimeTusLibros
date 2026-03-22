import { useState } from 'react';
import Lightbox from './Lightbox';
import img1 from '../assets/img/libros/libro3/frente.png';
import img2 from '../assets/img/libros/frente.png';
import img3 from '../assets/img/libros/libro4/frente2.png';
import img4 from '../assets/img/libros/libro5/frente.png';
import img5 from '../assets/img/libros/azul/frente.png';
import img6 from '../assets/img/libros/libro6/frente.png';
import img7 from '../assets/img/libros/libro8/frente.jpeg';
import img8 from '../assets/img/libros/libro9/frente.jpeg';

const images = [
  { src: img1, alt: 'Empaste' },
  { src: img2, alt: 'Empaste' },
  { src: img3, alt: 'Empaste' },
  { src: img4, alt: 'Empaste' },
  { src: img5, alt: 'Empaste' },
  { src: img6, alt: 'Empaste' },
  { src: img7, alt: 'Empaste', hideOnMobile: true },
  { src: img8, alt: 'Empaste', hideOnMobile: true },
];

const Galeria = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div id="galeria">
      <div className="clear"></div>
      <div className="container">
        <div className="gallery-grid">
          {images.map((img, index) => (
            <div 
              key={index} 
              className={`gallery-item ${img.hideOnMobile ? 'hide-mobile' : ''}`}
              onClick={() => openLightbox(img)}
            >
              <img src={img.src} alt={img.alt} />
              <div className="gallery-overlay">
                <i className="fa fa-search-plus"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="clear"></div>

      {selectedImage && (
        <Lightbox
          image={selectedImage}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
};

export default Galeria;
