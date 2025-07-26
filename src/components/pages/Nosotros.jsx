import { Card, Col, Container, Row } from "react-bootstrap";
import santigonz from "../../assets/f9eb2834-675e-4536-a80e-ba544d4f34a6.jpg"

const Nosotros = () => {
    return (
        <Container>
            <h1 className='text-center'>Acerca de Nosotros</h1>
            <h3 className="text-center my-4">"Con pasión y código, nuestro equipo de desarrolladores construyó una página de música donde cada acorde y melodía cobra vida."</h3>
            <Row>
                <Col md={4} lg={4} className="my-4">
                <Card className="h-100 rounded-2">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?_gl=1*l4v59o*_ga*MTc3MDA1MjEyMS4xNzQxNzIzMDE3*_ga_8JE65Q40S6*czE3NTMzOTcyMzYkbzckZzEkdDE3NTMzOTcyNjkkajI3JGwwJGgw" alt="stefan stefancik" className="img-fluid h-100 w-100 rounded-3"/>
                    <Card.Body>
                        <Card.Title className="text-center"><h4>Omar Mattos</h4></Card.Title>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={4} lg={4} className="my-4">
                <Card className="h-100 rounded-2">
                    <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?_gl=1*1xym2sn*_ga*MTc3MDA1MjEyMS4xNzQxNzIzMDE3*_ga_8JE65Q40S6*czE3NTMzOTcyMzYkbzckZzEkdDE3NTMzOTcyODgkajgkbDAkaDA." alt="justin shaifer" className="img-fluid h-100 rounded-3"/>
                    <Card.Body>
                        <Card.Title className="text-center"><h4>Santiago Lacki</h4></Card.Title>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={4} lg={4} className="my-4">
                <Card className="h-100 rounded-2">
                    <img src={santigonz} alt="simon robben" className="img-fluid h-100 rounded-3"/>
                    <Card.Body>
                        <Card.Title className="text-center"><h4>Santiago Gonzalez</h4></Card.Title>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Nosotros;