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
      <Navbar 
        expand="lg" 
        className="sticky-top py-0 custom-navbar" 
        expanded={expanded} 
        onToggle={setExpanded}
      >
        <Container>
          <Navbar.Brand href="#" onClick={() => scrollToSection('hero')}>
            <img src={logo} alt="logo" width="70" className="navbar-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link onClick={() => { scrollToSection('proceso'); setExpanded(false); }}>¿Cómo se hace?</Nav.Link>
              <Nav.Link onClick={() => { scrollToSection('galeria'); setExpanded(false); }}>Galería</Nav.Link>
              <Nav.Link onClick={() => { scrollToSection('servicios'); setExpanded(false); }}>Otros Servicios</Nav.Link>
              <Nav.Link onClick={() => { scrollToSection('cta'); setExpanded(false); }} className="nav-cta">Cotiza Ahora</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <a href="https://wa.me/+56976159069/?text=Hola!, quisiera saber más..." className="btn_wsp" target="_blank" rel="noopener noreferrer">
        <img src={logoWsp} alt="WhatsApp" height="50" width="50" />
      </a>
    </>
  );
};

export default NavBar;
