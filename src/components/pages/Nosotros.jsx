import { Card, Col, Container, Row } from "react-bootstrap";


const Nosotros = () => {
    return (
        <Container>
            <h1 className='text-center'>Acerca de Nosotros</h1>
            <h3 className="text-center">"Creamos la banda sonora de tu vida" o "Sinfonías en cada click"</h3>
            <Row>
                <Col md={4} lg={4}>
                <Card className="h-100">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?_gl=1*l4v59o*_ga*MTc3MDA1MjEyMS4xNzQxNzIzMDE3*_ga_8JE65Q40S6*czE3NTMzOTcyMzYkbzckZzEkdDE3NTMzOTcyNjkkajI3JGwwJGgw" alt="stefan stefancik" className="img-fluid h-100 w-100"/>
                    <Card.Body>
                        <Card.Text>Stefan Stefancik</Card.Text>
                        <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repellendus consequatur veniam!</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={4} lg={4}>
                <Card className="h-100">
                    <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?_gl=1*1xym2sn*_ga*MTc3MDA1MjEyMS4xNzQxNzIzMDE3*_ga_8JE65Q40S6*czE3NTMzOTcyMzYkbzckZzEkdDE3NTMzOTcyODgkajgkbDAkaDA." alt="justin shaifer" className="img-fluid h-100 w-100"/>
                    <Card.Body>
                        <Card.Text>Justin Shaifer</Card.Text>
                        <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repellendus consequatur veniam!</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={4} lg={4}>
                <Card className="h-100">
                    <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?_gl=1*kts5kc*_ga*MTc3MDA1MjEyMS4xNzQxNzIzMDE3*_ga_8JE65Q40S6*czE3NTMzOTcyMzYkbzckZzEkdDE3NTMzOTczMDckajU2JGwwJGgw" alt="simon robben" className="img-fluid h-100"/>
                    <Card.Body>
                        <Card.Text>Stefan Stefancik</Card.Text>
                        <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repellendus consequatur veniam!</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Nosotros;