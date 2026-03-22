import { Container, Row, Col, Card } from 'react-bootstrap';
import iconTapaDura from '../assets/img/icon/libroTapaDura.png';
import iconTapaBlanda from '../assets/img/icon/libroTapaBlanda.png';
import iconByN from '../assets/img/icon/libroByN.png';
import iconAnillados from '../assets/img/icon/anillados.png';
import iconImpresion from '../assets/img/icon/impresionLibro.png';

const servicios = [
  {
    icon: iconTapaDura,
    title: 'Empastes tapa dura',
    features: [
      'Portada a color personalizada',
      'Acabado matte o Brillante',
      'Tamaños carta, b5, a5 y personalizados',
      'Hojas cosidas, pegadas y reforzadas'
    ]
  },
  {
    icon: iconTapaBlanda,
    title: 'Empastes tapa blanda',
    features: [
      'Letras doradas, plateadas, azules, rojas y blancas',
      'Amplia gama de Colores textiles',
      'Tamaños carta, b5, a5 y personalizados',
      'Hojas cosidas, pegadas y reforzadas'
    ]
  },
  {
    icon: iconByN,
    title: 'Impresión láser B/N',
    features: [
      'Impresión de libros',
      'Papel bond 75 gr',
      'Tamaños carta, b5, a5 y personalizados'
    ]
  },
  {
    icon: iconImpresion,
    title: 'Impresión láser color',
    features: [
      'Impresión de libros',
      'Papel bond 75 gr',
      'Tamaños carta, b5, a5 y personalizados'
    ]
  },
  {
    icon: iconAnillados,
    title: 'Anillados',
    features: [
      'Tapa mica transparente o colores',
      'Tamaños carta, b5, a5 y personalizados'
    ]
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/128/17865/17865332.png',
    title: 'Despacho',
    description: 'Despacho a domicilio en toda la región metropolitana (Entrega garantizada).',
    noFeatures: true
  }
];

const Servicios = () => {
  return (
    <div id="servicios" className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <Container>
        <h2 className="mb-5 text-center">Servicios</h2>
        <Row className="g-4 justify-content-center">
          {servicios.map((servicio, index) => (
            <Col key={index} xs={10} sm={6} lg={4}>
              <Card className="service-card-simple h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4 d-flex flex-column">
                  <div className="service-icon-simple mx-auto mb-3">
                    <img src={servicio.icon} alt="" width="60" />
                  </div>
                  <Card.Title className="service-title-simple">
                    {servicio.title}
                  </Card.Title>
                  {servicio.noFeatures ? (
                    <Card.Text className="service-desc-simple flex-grow-1">
                      {servicio.description}
                    </Card.Text>
                  ) : (
                    <ul className="service-list-simple text-start flex-grow-1">
                      {servicio.features.map((feature, i) => (
                        <li key={i}>
                          <i className="fa fa-check me-2 text-success"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Servicios;
