import { useState } from "react";
import { Form, Row, Button, Col, Card } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

export default function FormularioPacientes({ nuevaCita }) {
  const [validated, setValidated] = useState(false);
  const [cita, setCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const handleChange = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  const { mascota, propietario, fecha, hora, sintomas } = cita;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity()) {
      event.stopPropagation();
      setValidated(false);
      cita.id = uuidv4();
      nuevaCita(cita);
      Swal.fire({
        icon: "success",
        title: "cita agendada correctamente",
        showConfirmButton: false,
        timer: 2000,
      });
      setCita({
        mascota: "",
        propietario: "",
        fecha: "",
        hora: "",
        sintomas: "",
      });
    } else {
      setValidated(true);
      Swal.fire({
        icon: "error",
        title: "No se pudo agendar su cita. Por favor verificar los datos",
      });
    }
  };

  return (
    <Card className="container">
      <Card.Header className="bg-white text-center py-3" as="h6">
        Llenar el formulario para crear una cita
      </Card.Header>
      <Form
        className="p-4 bg-celeste "
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        style={{ borderRadius: "10px" }}
      >
        <Row className="mb-3">
          <Form.Group className="d-flex " controlId="validationCustom01">
            <Form.Label className=" my-2 h6">Nombre de Mascota</Form.Label>
            <Form.Control
              name="mascota"
              required
              type="text"
              placeholder="nombre de mascota"
              onChange={handleChange}
              value={mascota}
            />
          </Form.Group>
          <Form.Group className="d-flex py-2" controlId="validationCustom02">
            <Form.Label className=" my-2 me-2 h6">Nombre de dueño</Form.Label>
            <Form.Control
              name="propietario"
              required
              type="text"
              placeholder="nombre de dueño"
              onChange={handleChange}
              value={propietario}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group
            className="d-flex"
            as={Col}
            md="6"
            controlId="validationCustom03"
          >
            <Form.Label className="my-2 me-5 h6">Fecha: </Form.Label>
            <Form.Control
              className="mx-4"
              name="fecha"
              type="Date"
              placeholder="dd/mm/yyyy"
              required
              onChange={handleChange}
              value={fecha}
            />
          </Form.Group>
          <Form.Group
            className="d-flex py-2"
            as={Col}
            md="6"
            controlId="validationCustom04"
          >
            <Form.Label className="h6 my-2 me-5">Hora</Form.Label>
            <Form.Control
              name="hora"
              type="Time"
              placeholder="hh:mm"
              required
              onChange={handleChange}
              value={hora}
            />
          </Form.Group>
          <Form.Group className="d-flex py-4" controlId="validationCustom01">
            <Form.Label className=" h6 my-2 me-5">Síntomas</Form.Label>
            <Form.Control
              name="sintomas"
              required
              type="text"
              placeholder="Describir sintomas"
              onChange={handleChange}
              value={sintomas}
            />
          </Form.Group>
        </Row>
        <Card.Footer className="text-center bg-light pt-4">
          <Button className="text-white" variant="info" type="submit">
            <FontAwesomeIcon icon={faUserPlus} /> Agregar nueva cita
          </Button>
        </Card.Footer>
      </Form>
    </Card>
  );
}
