import { useEffect, useState } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router";
const DetalleCancion = ({buscarCancion}) => {
    const {id} = useParams()
    const [cancion, setCancion] = useState({})

    useEffect(()=>{
        const cancionBuscada = buscarCancion(id)
        setCancion(cancionBuscada)
    },[])

    return (
        <section className="bg-index">
            <Container className="mt-3 py-5 bg-card rounded-4 w-50">
                <Row className="mb-5">
                    <Col className="text-center">
                        <Card.Img
                        variant="top"
                        src={cancion.imagen}
                        alt={cancion.titulo}
                        className="w-50 rounded-3 imagen-detalle contenedorImagen"
                        />
                    </Col>
                </Row>
                <Row>
                    <Card.Body>
                        <Card.Title className="fw-bold fs-1 text-center mx-1">{cancion.titulo}</Card.Title>
                        <Card.Text className="fw-semibold fs-3 text-center color-secundario mx-1">{cancion.artista}</Card.Text>
                        <Card.Text className="fw-light fs-4 text-center color-secundario  mx-1"><span className="fw-semibold">Album: </span> {cancion.album}</Card.Text>
                        <div className="d-flex justify-content-evenly mt-5  mx-1">
                            <div className="fw-light fs-5"><span className="fw-semibold"> Genero: </span> {cancion.genero}</div>
                            <div className="fw-light fs-5"><span className="fw-semibold">Duración:</span> {cancion.duracion}</div>
                        </div>
                    </Card.Body>
                </Row>
                <hr className="my-4"/>
                <Row>
                    <div className="d-flex justify-content-evenly">
                        <Button variant="" className="rounded-5 pe-0 pb-0"><i class="bi bi-rewind-circle fs-1 color-boton-cargar"></i></Button>
                        <Button variant="" className="rounded-5 pe-0 pb-0"><i class="bi bi-play-circle fs-1 color-boton-cargar"></i></Button>
                        <Button variant="" className="rounded-5 pe-0 pb-0"><i class="bi bi-fast-forward-circle fs-1 color-boton-cargar"></i></Button>
                    </div>
                </Row>
            </Container>

        </section>
    );
};

export default DetalleCancion;