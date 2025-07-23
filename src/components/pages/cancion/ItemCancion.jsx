import { Button } from "react-bootstrap";

const ItemCancion = () => {
    return (
    <tr>
      <td className="text-center align-middle">1</td>
      <td className="align-middle">Bohemian Rhapsody</td>
      <td className="text-center align-middle">Queen</td>
      <td className="text-center align-middle">Rock</td>
      <td className="text-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Queen_A_Night_At_The_Opera_%281975_Elektra_publicity_photo_02%29.jpg/500px-Queen_A_Night_At_The_Opera_%281975_Elektra_publicity_photo_02%29.jpg"
          className="img-tabla "
          alt="Poratada del disco"
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