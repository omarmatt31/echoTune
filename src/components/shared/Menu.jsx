
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoNav from '../../assets/echoTune_Logo-negativo.png'

function Menu() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/"><img src={LogoNav} alt="Logo EchoTune" className='logo-nav img-fluid'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/" className={location.pathname === '/' ? 'active' : ''}>Inicio</Nav.Link>
            <Nav.Link href="/nosotros" className={location.pathname === '/nosotros' ? 'active' : ''}>Nosotros</Nav.Link>
            <Nav.Link href="/login" className={location.pathname === '/login' ? 'active' : ''}>Iniciar Sesion</Nav.Link>
            <Nav.Link href="/*" className={location.pathname === '/*' ? 'active' : ''}>Registrarse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;