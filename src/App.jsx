import { useEffect, useState } from "react";
import "./App.css";
import FormularioPacientes from "./components/FormularioPacientes";
import CardCita from "./components/CardCita";

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
        <div className="caja py-5 text-center">
          {citas.lenght === 0 ? (
            "no hay citas"
          ) : (
            <div className="container d-flex flex-wrap justify-content-between">
              {citas.map((cita) => (
                <CardCita key={cita.id} cita={cita} />
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
