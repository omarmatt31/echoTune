import { Button } from "react-bootstrap";
import { Link } from "react-router";

const ItemCancion = ({cancion, fila}) => {
    return (
    <tr>
      <td className="text-center align-middle">{fila}</td>
      <td className="align-middle">{cancion.titulo}</td>
      <td className="text-center align-middle">{cancion.artista}</td>
      <td className="text-center align-middle">{cancion.genero}</td>
      <td className="text-center">
        <img
          src={cancion.imagen}
          className="img-tabla "
          alt={cancion.titulo}
        ></img>
      </td>
      <td className="text-center align-middle">
        <Link className="me-lg-2 btn btn-outline-warning" to={'/administrador/editar/'+cancion.id}>
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="outline-danger ">
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
    );
};

export default ItemCancion;