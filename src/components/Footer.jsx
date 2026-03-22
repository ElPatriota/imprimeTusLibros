import { Container, Row, Col, Carousel } from 'react-bootstrap';
import logo from '../assets/logo.svg';
import logoIg from '../assets/img/logo_ig.png';
import uChile from '../assets/u-chile.png';
import duoc from '../assets/duoc.png';
import santoTomas from '../assets/santo-tomas.png';
import unab from '../assets/unab.png';
import inacap from '../assets/inacap.png';
import uCatolica from '../assets/u-catolica.png';

const universidades = [
  { img: uChile, alt: 'Universidad de Chile' },
  { img: duoc, alt: 'Duoc' },
  { img: santoTomas, alt: 'Santo Tomás' },
  { img: unab, alt: 'UNAB' },
  { img: inacap, alt: 'INACAP' },
  { img: uCatolica, alt: 'Universidad Católica' },
];

const Clientes = () => {
  return (
    <div id="clientes" className="py-5 bg-light">
      <Container>
        <h3 className="text-center text-uppercase fw-bold mb-4">
          Confían en nosotros estudiantes de las universidades más grandes del país
        </h3>
        <Carousel 
          indicators={true}
          controls={false}
          interval={3000}
          pause="hover"
          className="clientes-carousel"
        >
          {universidades.map((uni, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex justify-content-center align-items-center py-3">
                <img 
                  src={uni.img} 
                  alt={uni.alt} 
                  className="cliente-logo mx-4"
                />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
};

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element?.scrollIntoView) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Cotiza = () => {
  return (
    <div id="cta">
      <Container className="py-5">
        <Row className="g-4 align-items-center">
          <Col lg={5} className="mb-4 mb-lg-0">
            <div className="cta-info">
              <h2 className="text-white mb-4">¡Envianos tus comentarios e Imprime tus libros!</h2>
              <p className="text-white-50 mb-4">
                ¿Tienes alguna consulta o necesitas cotizar tu empaste? 
                Completa el formulario y nos pondremos en contacto contigo 
                a la brevedad posible.
              </p>
              <div className="cta-contact-info">
                <p className="text-white mb-2">
                  <i className="fa fa-whatsapp me-2"></i>
                  +56 9 7615 9069
                </p>
                <p className="text-white mb-2">
                  <i className="fa fa-envelope me-2"></i>
                  contacto@empastesexpress.cl
                </p>
                <p className="text-white">
                  <i className="fa fa-clock-o me-2"></i>
                  Atención: Lunes a Viernes 9:00 - 18:00 hrs
                </p>
              </div>
            </div>
          </Col>
          
          <Col lg={7}>
            <form className="cta-form p-4 p-md-5 rounded-4" action="EnvioMail/config.php" method="post" encType="multipart/form-data">
              <Row className="g-3">
                <Col md={6}>
                  <input className="form-control" type="text" name="fullname" placeholder="Nombre completo" required />
                </Col>
                <Col md={6}>
                  <input className="form-control" type="email" name="email" placeholder="Correo electrónico" required />
                </Col>
                <Col md={6}>
                  <input className="form-control" type="tel" name="fonoContacto" placeholder="Teléfono de contacto" />
                </Col>
                <Col md={6}>
                  <input className="form-control" type="text" name="subject" placeholder="Asunto" />
                </Col>
                <Col xs={12}>
                  <textarea className="form-control" name="message" rows="4" placeholder="Escribe tu mensaje o requerimientos..." required></textarea>
                </Col>
                <Col xs={12}>
                  <button type="submit" className="submit w-100">
                    <i className="fa fa-paper-plane me-2"></i>
                    Enviar mensaje
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const Footer = () => {
  return (
    <>
      <div id="footer">
        <Container>
          <Row className="g-4">
            <Col lg={3} className="mb-4 mb-lg-0">
              <img src={logo} alt="Empastes Online" width="100" className="mb-3" />
              <p className="copyright">© EmpastesExpress 2016.</p>
            </Col>
            
            <Col lg={3} className="mb-4 mb-lg-0">
              <h3>Somos</h3>
              <p className="footer-about">
                Somos una empresa online que imprime, produce y despacha tus empastes. 
                Nos enfocamos en quiénes trabajan o estudian, y que no tienen tiempo; 
                garantizando una cómoda, facil y rápida experiencia de compra.
              </p>
            </Col>
            
            <Col lg={2} className="mb-4 mb-lg-0">
              <h3>Menú</h3>
              <ul className="footer-menu">
                <li><a href="#proceso" onClick={(e) => { e.preventDefault(); scrollToSection('proceso'); }}>Descubre cómo</a></li>
                <li><a href="#galeria" onClick={(e) => { e.preventDefault(); scrollToSection('galeria'); }}>Galería</a></li>
                <li><a href="#servicios" onClick={(e) => { e.preventDefault(); scrollToSection('servicios'); }}>Otros Servicios</a></li>
                <li><a href="#cta" onClick={(e) => { e.preventDefault(); scrollToSection('cta'); }}>Cotiza Ahora</a></li>
              </ul>
            </Col>
            
            <Col lg={1} className="mb-4 mb-lg-0 text-center">
              <h3>Social</h3>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={logoIg} alt="Instagram" width="40" />
              </a>
            </Col>
            
            <Col lg={3}>
              <h3>Contáctanos</h3>
              <ul className="footer-contact">
                <li>
                  <a href="https://wa.me/+56976159069/?text=Hola!, quisiera saber más..." target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-whatsapp"></i> +56 9 7615 9069
                  </a>
                </li>
                <li>
                  <a href="#cta" onClick={(e) => { e.preventDefault(); scrollToSection('cta'); }}>
                    <i className="fa fa-envelope-o"></i> contacto@empastesexpress.cl
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export { Clientes, Cotiza, Footer };
