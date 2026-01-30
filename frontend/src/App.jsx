import { useEffect, useState } from "react";
import './App.css';

function App() {
  // Estado para guardar el mensaje que viene del backend
  const [mensaje, setMensaje] = useState("");

  // useEffect se ejecuta al montar el componente
  useEffect(() => {
    // Petición al backend en localhost:3000
    fetch("https://proyecto-2026.vercel.app/")
      .then(res => res.text())           // Convertimos la respuesta en texto
      .then(data => setMensaje(data))    // Guardamos el mensaje en el estado
      .catch(err => setMensaje("Error: " + err.message)); // Manejo de errores
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Mensaje desde el backend:</h1>
      <p>{mensaje}</p>
    </div>
  );
}

export default App;
