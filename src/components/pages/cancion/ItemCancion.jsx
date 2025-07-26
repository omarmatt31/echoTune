import { Button } from "react-bootstrap";

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
        <Button variant="outline-warning" className="me-lg-2 ">
          <i className="bi bi-pencil-square"></i>
        </Button>
        <Button variant="outline-danger ">
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
    );
};

export default ItemCancion;