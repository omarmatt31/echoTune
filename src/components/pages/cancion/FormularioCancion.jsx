import { Form, Button, Container, Row, Col } from "react-bootstrap";
import EchoTuneIcono from '../../../assets/echoTune_Icono.png';

const FormularioCancion = () => {

  return (
    <section className="Section-Login bg-index">
      <Container>
        <h1 className="display-4 mt-5 text-center">Añadir Canción</h1>
        <hr />
        <Row  className="pt-4 pb-5">
          <Col sm={12} md={6} lg={6}>
            <Form className="bg-dark-subtle p-4 rounded">
          <Form.Group className="mb-3">
            <Form.Label>Titulo de la Canción: (*)</Form.Label>
            <Form.Control type="text" placeholder="Ej: Blinding Lights" required minLength={3} maxLength={50} pattern="[a-zA-Z0-9\s.,!?'-]+"/>
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label>Artista/Grupo: (*)</Form.Label>
            <Form.Control type="text" placeholder="Ej: The Weekend" required minLength={3} maxLength={50} pattern="[a-zA-Z\s.-]+"/>
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label>Genero: (*)</Form.Label>
            <Form.Select required>
              <option value="" disabled>Seleccione el Genero de la Cancion</option>
              <option value="electronica">Electronica</option>
              <option value="folclore">Folclore</option>
              <option value="jazz">Jazz</option>
              <option value="pop">Pop</option>
              <option value="rock">Rock</option>
              <option value="trap">Trap</option>
            </Form.Select>
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label>Imagen URL: (*)</Form.Label>
            <Form.Control type="url" placeholder="Ej: https://www.pexels.com/es-es/the-weekend-blinding-lights-1230679/" required maxLength={255}/>
          </Form.Group>

          <Button type="submit" variant="primary" className="my-1">
            Añadir
          </Button>
        </Form>
          </Col>
          <Col md={6} lg={6} className="d-none d-md-flex align-items-md-center justify-content-md-center">
            <img src={EchoTuneIcono} alt="icono Echotune a color" className="img-fluid rounded-circle bg-dark-subtle"/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FormularioCancion;
