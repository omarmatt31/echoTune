import { Container, Form, Row, Col, Button } from "react-bootstrap";
import CardCancion from "./cancion/CardCancion";

const Inicio = ({canciones}) => {
    return (
        <>
        <section className="mainSection bg-index">
            <Container className="mt-5">
                <Form>
                        <Row className="d-flex justify-content-between">
                            <Col xs="auto">
                                <h3 className="fw-light fs-3 color-secundario">Top Hits</h3>
                            </Col>
                            <Col xs="auto d-flex">
                                <i className="bi bi-search fs-3 me-2 text-secondary"></i>
                                <Form.Control
                                    type="text"
                                    placeholder="Buscar canciones"
                                    className=" mr-sm-2"
                                />
                            </Col>
                        </Row>
                    </Form>
                <hr />
                <Row>
                    {
                    canciones.map((cancion)=><CardCancion key={cancion.id} cancion={cancion}></CardCancion>)
                    }
                </Row>
            </Container>
        </section>
        </>
    );
};

export default Inicio;