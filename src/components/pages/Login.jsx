import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { Link } from "react-router";
import ImgLogin from '../../assets/echoTune_Logo-negativo.png'

const Login = () => {
  return (
    <section className="Section-Login bg-index">
      <Container className="py-4">
        <div className="d-flex flex-column align-items-center">
          <img src={ImgLogin} alt="logo echotune" className="logo-login"/>
          <h1 className="text-center mt-3">Iniciar Sesion</h1>
        </div>
        <Row className="d-flex flex-column align-items-center">
          <Col xs={12} sm={10} md={6} lg={5} >
            <Form className="bg-dark-subtle p-4 rounded my-4">
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Ej: juanperez@mail.com"/>
                <Form.Text className="text-danger">
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Contraseña"/>
                <Form.Text className="text-danger">
                </Form.Text>
              </Form.Group>
              <div className="div-button d-flex flex-column align-items-center pt-3 pb-2">
                <Button variant="primary" type="submit" className="mb-3">
                  Ingresar
                </Button>
                <Link>¿Olvidaste tu contraseña?</Link>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;