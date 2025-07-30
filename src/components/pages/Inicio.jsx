import { Container, Form, Row, Col, Button } from "react-bootstrap";
import CardCancion from "./cancion/CardCancion";
import { useState } from "react";

const Inicio = ({canciones}) => {
    const [terminoBusqueda, setTerminoBusqueda] = useState('')

    const handleBuscarChange=(e)=>{
        setTerminoBusqueda(e.target.value)
    }

    const cancionesBuscadas= canciones.filter((cancion)=>cancion.titulo.toLowerCase().includes(terminoBusqueda.toLocaleLowerCase()))
    
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
                                    onChange={handleBuscarChange}
                                    value={terminoBusqueda}
                                />
                            </Col>
                        </Row>
                    </Form>
                <hr />
                <Row>
                    {
                    cancionesBuscadas.length > 0 ? (
                    cancionesBuscadas.map((cancion)=><CardCancion key={cancion.id} cancion={cancion}></CardCancion>)
                    ) : (
                        <p>No se encontraron canciones para mostrar</p>
                    )
                    }
                </Row>
            </Container>
        </section>
        </>
    );
};

export default Inicio;