import { Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMinus } from "@fortawesome/free-solid-svg-icons";

export default function CardCita({ cita, borrarCita }) {
  return (
    <Card className="container my-5 cita-carta">
      <Card.Header className="d-flex py-4">
        <div className="circulo"></div>
        <div className="ms-4">
          <h6>Mascota: {cita.mascota}</h6>
          <h6 className="text-black-50">Dueño: {cita.propietario}</h6>
        </div>
      </Card.Header>
      <Card.Body className="py-5 bg-celeste">
        <h6>Fecha: {cita.fecha}</h6>
        <h6>Hora: {cita.hora}</h6>
        <h6>Síntomas:{cita.sintomas}</h6>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-end py-4">
        <Button variant="danger" size="sm" onClick={() => borrarCita(cita.id)}>
          <FontAwesomeIcon icon={faUserMinus} /> Borrar
        </Button>
      </Card.Footer>
    </Card>
  );
}
