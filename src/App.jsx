import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import ComoSeHace from './components/ComoSeHace';
import Galeria from './components/Galeria';
import Servicios from './components/Servicios';
import { Cotiza, Footer } from './components/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <ComoSeHace />
      <Galeria />
      <Servicios />
      <Cotiza />
      <Footer />
    </>
  );
}

export default App;
