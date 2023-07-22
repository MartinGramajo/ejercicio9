import { useEffect, useState } from "react";
import "./App.css";
import FormularioPacientes from "./components/FormularioPacientes";

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
        <h1 className="text-center py-5">Administrador de Citas</h1>
      </section>
      <section>
        <FormularioPacientes nuevaCita={nuevaCita} />
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
