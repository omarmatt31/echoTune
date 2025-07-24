import { Card, Col, Button } from "react-bootstrap";
const CardCancion = () => {
    return (
    <Col md={6} lg={4} className="mb-5">
            <Card className="bg-card border-0">
                <div className="d-flex flex-row">
                    <div>
                        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Queen_A_Night_At_The_Opera_%281975_Elektra_publicity_photo_02%29.jpg/500px-Queen_A_Night_At_The_Opera_%281975_Elektra_publicity_photo_02%29.jpg" className="card-size"/>
                    </div>
                <Card.Body className="d-flex">
                    <div>
                        <Card.Title className="fw-bold fs-4">Bohemian Rhapsody</Card.Title>
                        <Card.Text className="fw-light fs-6 color-secundario">
                        Queen
                        </Card.Text>
                    </div>
                    <div className="d-flex align-items-end">
                        <Button variant="" className="rounded-5 pe-0 pb-0"><i class="bi bi-play-circle fs-1 color-secundario"></i></Button>
                    </div>
                </Card.Body>
                </div>
            </Card>

    </Col>
    );
};

export default CardCancion;