import { Card, Col, Container, Row } from "react-bootstrap";
import santigonz from "../../assets/f9eb2834-675e-4536-a80e-ba544d4f34a6.jpg"

const Nosotros = () => {
    return (
        <Container>
            <h1 className='text-center'>Acerca de Nosotros</h1>
            <h3 className="text-center my-4">"Con pasión y código, nuestro equipo de desarrolladores construyó una página de música donde cada acorde y melodía cobra vida."</h3>
            <Row>
                <Col md={4} lg={4} className="my-3">
                <Card className="h-100 rounded-2 w-100">
                    <img src="https://media.istockphoto.com/id/1046036662/es/foto/sonriente-joven-hombre.jpg?s=2048x2048&w=is&k=20&c=RtqSlQU-ii1WpiLdlfm5CVpnLqaOh6ibXG3mg2umWgA=" alt="Omar Mattos" className="img-fluid h-100 w-100 rounded-3"/>
                    <Card.Body>
                        <Card.Title className="text-center"><h3>Omar Mattos</h3></Card.Title>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={4} lg={4} className="my-3">
                <Card className="h-100 rounded-2 w-100">
                    <img src="https://media.istockphoto.com/id/1173934097/es/foto/primer-plano-de-la-cabeza-de-joven-latino-con-expresi%C3%B3n-facial-natural-y-neutra-con-barba-y.jpg?s=2048x2048&w=is&k=20&c=aXc9MZElnk_bfINLqjd3pj-GpMEX4k5uuqAgmoy3hSA=" alt="Santiago Lacki" className="img-fluid h-100 rounded-3"/>
                    <Card.Body>
                        <Card.Title className="text-center"><h3>Santiago Lacki</h3></Card.Title>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={4} lg={4} className="my-3">
                <Card className="h-100 rounded-2 w-100">
                    <img src={santigonz} alt="simon robben" className="img-fluid h-100 rounded-3"/>
                    <Card.Body>
                        <Card.Title className="text-center"><h3>Santiago Gonzalez</h3></Card.Title>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Nosotros;