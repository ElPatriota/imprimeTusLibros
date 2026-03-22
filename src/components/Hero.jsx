import { Card } from 'react-bootstrap';
import logo from '../assets/logo.svg';
import libroImg from '../assets/img/libros/libro4/frenteAux.png';

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element?.scrollIntoView) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Hero = () => {
  return (
    <>
      <div id="hero">
        <div id="header" className="mobile-header d-lg-none">
          <div className="container">
            <div className="main-logo">
              <a href="#">
                <img src={logo} alt="logo" width="100" />
              </a>
            </div>
          </div>
        </div>
        <div className="clear"></div>
        <div className="container">
          <div className="hero-title">
            <h1>Imprime Tus Libros</h1>
            <h2>
              ¡Ahórrate el tramite, solicita tus libros <br />
              vía WhatsApp o correo (electrónico).<br /><br />
              Envíanos tu archivo en formato PDF.!
            </h2>
            <p className="button">
              <a className="go" href="#proceso" onClick={(e) => { e.preventDefault(); scrollToSection('proceso'); }}>
                Descubre cómo
              </a>
            </p>
          </div>
          <div className="hero-image">
            <Card className="hero-card border-0 shadow-lg">
              <div className="hero-card-inner">
                <Card.Img variant="top" src={libroImg} alt="Empastes Online" className="hero-img" />
              </div>
              <Card.Body className="hero-card-body text-center">
                <Card.Text className="hero-card-text mb-0">
                  <i className="fa fa-truck me-2"></i>
                  Envío a toda la Región Metropolitana
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="clear"></div>
      </div>
    </>
  );
};

export default Hero;
