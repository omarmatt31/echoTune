import { Container, Form, Row, Col, Button } from "react-bootstrap";
import CardCancion from "./cancion/CardCancion";
import { useState } from "react";
import BannerVideo from "../../assets/Banner.mp4"


const Inicio = ({canciones}) => {
    const [terminoBusqueda, setTerminoBusqueda] = useState('')
    const listaRock = canciones.filter((itemCancion) => itemCancion.genero === 'Rock')|| []
    const [cancionesRock, setCancionesRock] = useState(listaRock)
    const listaPop = canciones.filter((itemCancion) => itemCancion.genero === 'Pop')|| []
    const [cancionesPop, setCancionesPop] = useState(listaPop)
    const listaElectronica = canciones.filter((itemCancion) => itemCancion.genero === 'Electronica')|| []
    const [cancionesElectronica, setCancionesElectronica] = useState(listaElectronica)
    const listaFolclore = canciones.filter((itemCancion) => itemCancion.genero === 'Folclore')|| []
    const [cancionesFolclore, setCancionesFolclore] = useState(listaFolclore)
    const listaJazz = canciones.filter((itemCancion) => itemCancion.genero === 'Jazz')|| []
    const [cancionesJazz, setCancionesJazz] = useState(listaJazz)
    const listaTrap = canciones.filter((itemCancion) => itemCancion.genero === 'Trap')|| []
    const [cancionesTrap, setCancionesTrap] = useState(listaTrap)

    const handleBuscarChange=(e)=>{
        setTerminoBusqueda(e.target.value)
    }

    const cancionesBuscadas= canciones.filter((cancion)=>cancion.titulo.toLowerCase().includes(terminoBusqueda.toLocaleLowerCase()))
    
    return (
        <>
        <div className="banner-video">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="contenedor-video"
        >
          <source src={BannerVideo} type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
      </div>
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
                <Row>
                    <h3 className="fw-light fs-3 color-secundario">Rock</h3>
                </Row>
                <hr />
                <Row>
                    {
                    cancionesRock.length > 0 ? (
                    cancionesRock.map((cancion)=><CardCancion key={cancion.id} cancion={cancion}></CardCancion>)
                    ) : (
                        <p>No se encontraron canciones para mostrar</p>
                    )
                    }
                </Row>
                <Row>
                    <h3 className="fw-light fs-3 color-secundario">Pop</h3>
                </Row>
                <hr />
                <Row>
                    {
                    cancionesPop.length > 0 ? (
                    cancionesPop.map((cancion)=><CardCancion key={cancion.id} cancion={cancion}></CardCancion>)
                    ) : (
                        <p>No se encontraron canciones para mostrar</p>
                    )
                    }
                </Row>
                <Row>
                    <h3 className="fw-light fs-3 color-secundario">Electronica</h3>
                </Row>
                <hr />
                <Row>
                    {
                    cancionesElectronica.length > 0 ? (
                    cancionesElectronica.map((cancion)=><CardCancion key={cancion.id} cancion={cancion}></CardCancion>)
                    ) : (
                        <p>No se encontraron canciones para mostrar</p>
                    )
                    }
                </Row>
                <Row>
                    <h3 className="fw-light fs-3 color-secundario">Folclore</h3>
                </Row>
                <hr />
                <Row>
                    {
                    cancionesFolclore.length > 0 ? (
                    cancionesFolclore.map((cancion)=><CardCancion key={cancion.id} cancion={cancion}></CardCancion>)
                    ) : (
                        <p>No se encontraron canciones para mostrar</p>
                    )
                    }
                </Row>
                <Row>
                    <h3 className="fw-light fs-3 color-secundario">Jazz</h3>
                </Row>
                <hr />
                <Row>
                    {
                    cancionesJazz.length > 0 ? (
                    cancionesJazz.map((cancion)=><CardCancion key={cancion.id} cancion={cancion}></CardCancion>)
                    ) : (
                        <p>No se encontraron canciones para mostrar</p>
                    )
                    }
                </Row>
                <Row>
                    <h3 className="fw-light fs-3 color-secundario">Trap</h3>
                </Row>
                <hr />
                <Row>
                    {
                    cancionesTrap.length > 0 ? (
                    cancionesTrap.map((cancion)=><CardCancion key={cancion.id} cancion={cancion}></CardCancion>)
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