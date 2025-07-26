import { Button, Table} from "react-bootstrap";
import ItemCancion from "./cancion/ItemCancion"
import { cancionesData } from "../../data/cancionesPrueba";


const Administrador = ({setCanciones, canciones}) => {

    const cargarCancionesPrueba=()=>{
        setCanciones(cancionesData)
    }
    return (
        <>
        <hr />
        <section className="bg-index mt-5">
            <h1 className="fw-light text-center">Lista de Canciones</h1>
            <div className="container">
                <div className="d-flex justify-content-end mt-5">
                    <div>
                    <Button variant="outline-none" className="botones-administrador">
                        <i className="bi bi-plus-circle fs-2 color-secundario"></i>
                    </Button>
                    <Button variant="outline-none " className="botones-administrador" onClick={cargarCancionesPrueba}>
                        <i class="bi bi-database-add fs-2 color-boton-cargar"></i>
                    </Button>
                    </div>
                </div>
                <Table className="container mb-5" responsive striped bordered hover>
                <thead>
                    <tr className="text-center">
                        <th className="fw-light fs-5">#</th>
                        <th className="fw-light fs-5">Titulo de la Canción</th>
                        <th className="fw-light fs-5">Artista/Grupo</th>
                        <th className="fw-light fs-5">Genero</th>
                        <th className="fw-light fs-5">Imagen</th>
                        <th className="fw-light fs-5">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    canciones.map((cancion, indice)=><ItemCancion key={cancion.id} cancion={cancion} fila={indice+1}></ItemCancion>)
                    }
                </tbody>
            </Table>
            </div>
        </section>
        </>
    );
};

export default Administrador;