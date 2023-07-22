import { useEffect, useState } from "react";
import "./App.css";
import FormularioPacientes from "./components/FormularioPacientes";
import CardCita from "./components/CardCita";
import Swal from "sweetalert2";

function App() {
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if (!citasIniciales) {
    citasIniciales = [];
  }
  const [citas, setCitas] = useState(citasIniciales);
  useEffect(() => {
    if (citasIniciales) {
      localStorage.setItem("citas", JSON.stringify(citas));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [citas]);

  const nuevaCita = (cita) => {
    setCitas([...citas, cita]);
  };

  const borrarCita = (id) => {
    Swal.fire({
      title: "Estas seguro que quieres borrar la cita?",
      showDenyButton: true,
      confirmButtonText: "Si",
      denyButtonText: `no`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Cita borrada con éxito", "", "success");
        const nuevasCitas = citas.filter((cita) => cita.id !== id);
        if (citas.id !== id) {
          setCitas(nuevasCitas);
        }
      } else if (result.isDenied) {
        Swal.fire("No se borro la cita", "", "info");
      }
    });
  };

  return (
    <div className="bg-app d-flex flex-column min-vh-100">
      <section>
        <h1 className="text-center py-5 display-6">
          Administrador pacientes de veterinaria
        </h1>
      </section>
      <section>
        <FormularioPacientes nuevaCita={nuevaCita} />
      </section>
      <section>
        <div className="py-5 text-center">
          {citas.length === 0 ? (
            <div className="text-center pt-5">
              <h6> No hay citas</h6>
            </div>
          ) : (
            <div className="container d-flex flex-wrap justify-content-around">
              {citas.map((cita) => (
                <CardCita key={cita.id} cita={cita} borrarCita={borrarCita} />
              ))}
            </div>
          )}
        </div>
      </section>
      <footer className="py-5 mt-auto bg-dark">
        <h5 className="text-center text-white">
          {" "}
          © Todos los derechos reservados
        </h5>
      </footer>
    </div>
  );
}

export default App;
