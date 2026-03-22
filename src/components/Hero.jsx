import { Card } from 'react-bootstrap';
import libroImg from '../assets/portada.jpeg';

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element?.scrollIntoView) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="row align-items-center min-vh-75">
          <div className="col-lg-6 hero-title">
            <h1>Imprime, anilla y restaura tus libros sin salir de casa</h1>
            <h2>
              ¡Envíanos tu archivo en PDF y recibe tus libros listos, con calidad profesional y despacho en toda la Región Metropolitana.!
            </h2>
            <p className="button">
              <a className="go" href="#proceso" onClick={(e) => { e.preventDefault(); scrollToSection('proceso'); }}>
                Descubre cómo
              </a>
            </p>
          </div>
          <div className="col-lg-6 hero-image">
            <Card className="hero-card border-0 shadow-lg">
              <Card.Img variant="top" src={libroImg} alt="Empastes Online" className="hero-img" />
              <Card.Body className="hero-card-body text-center">
                <Card.Text className="hero-card-text mb-0">
                  <i className="fa fa-truck me-2"></i>
                  Envío a toda la Región Metropolitana
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
