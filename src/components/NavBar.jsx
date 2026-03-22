import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/logo.svg';
import logoWsp from '../assets/img/logoWsp.png';

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Navbar bg="light" expand="lg" className="sticky-top py-0 d-none d-lg-block" style={{ background: '#303640' }}>
        <Container>
          <Navbar.Brand href="#" onClick={() => scrollToSection('hero')}>
            <img src={logo} alt="logo" width="70" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" style={{ background: '#fff' }}>
            <Nav className="ms-auto">
              <Nav.Link onClick={() => scrollToSection('proceso')}>¿Cómo se hace?</Nav.Link>
              <Nav.Link onClick={() => scrollToSection('galeria')}>Galería</Nav.Link>
              <Nav.Link onClick={() => scrollToSection('servicios')}>Otros Servicios</Nav.Link>
              <Nav.Link onClick={() => scrollToSection('cta')} className="nav-cta">Cotiza Ahora</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div id="header" className="d-none d-lg-block">
        <div className="container">
          <nav>
            <div className="main-logo">
              <a href="#" onClick={() => scrollToSection('hero')}>
                <img src={logo} alt="logo" width="140" />
              </a>
            </div>
            <ul>
              <li><a className="go" href="#proceso" onClick={(e) => { e.preventDefault(); scrollToSection('proceso'); }}>¿Cómo se hace?</a></li>
              <li><a className="go" href="#galeria" onClick={(e) => { e.preventDefault(); scrollToSection('galeria'); }}>Galería</a></li>
              <li><a className="go" href="#servicios" onClick={(e) => { e.preventDefault(); scrollToSection('servicios'); }}>Otros Servicios</a></li>
              <li className="button-header"><a className="go" href="#cta" onClick={(e) => { e.preventDefault(); scrollToSection('cta'); }}>Cotiza Ahora</a></li>
            </ul>
          </nav>
        </div>
      </div>

      <a href="https://wa.me/+56976159069/?text=Hola!, quisiera saber más..." className="btn_wsp" target="_blank" rel="noopener noreferrer">
        <img src={logoWsp} alt="WhatsApp" height="50" width="50" />
      </a>
    </>
  );
};

export default NavBar;
