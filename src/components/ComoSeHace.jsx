import { Container, Row, Col, Card } from 'react-bootstrap';
import cotizacionImg from '../assets/cotizacion.png';
import transferenciaImg from '../assets/transferencia.png';
import despachoImg from '../assets/despacho.png';

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element?.scrollIntoView) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const steps = [
  {
    img: cotizacionImg,
    title: 'Cotiza',
    description: 'Ingresa tus datos en nuestro formulario y cotiza tus empastes. Responderemos en minutos.'
  },
  {
    img: transferenciaImg,
    title: 'Transfiere',
    description: 'Acepta la cotización, pagando el total del servicio vía transferencia electronica.'
  },
  {
    img: despachoImg,
    title: 'Recibe',
    description: 'Recibe tus empastes en el lugar que quieras, casa, oficina, CFT, instituto o universidad.'
  }
];

const ComoSeHace = () => {
  return (
    <div id="proceso" className="py-5">
      <div className="clear"></div>
      <h2>¡Así de simple!</h2>
      <p className="desc">
        Solicita tus empastes de tesis o empastes contables y recibelos en la comodidad 
        de tu hogar, universidad u oficina en 3 simples pasos.
      </p>
      
      <Container>
        <Row className="g-4 justify-content-center">
          {steps.map((step, index) => (
            <Col key={index} xs={12} md={6} lg={4}>
              <Card className="step-card h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  <div className="step-icon mb-3">
                    <img src={step.img} alt={step.title} width="80" />
                  </div>
                  <Card.Title className="step-title">{step.title}</Card.Title>
                  <Card.Text className="step-text">
                    {step.description}
                  </Card.Text>
                </Card.Body>
                <div className="step-number">{index + 1}</div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      
      <p className="buttona text-center mt-5">
        <a className="go" href="#galeria" onClick={(e) => { e.preventDefault(); scrollToSection('galeria'); }}>
          Ver galería
        </a>
      </p>
      <div className="clear"></div>
    </div>
  );
};

export default ComoSeHace;
