import { useEffect, useState } from "react";

export default function Users() {
  const [usuarios, setUsuarios] = useState([]);
  const [error, setError] = useState(null);

  console.log("API:", import.meta.env.VITE_API_URL);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error al conectar con el backend");
        }
        return res.json();
      })
      .then((data) => setUsuarios(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      <h1>Usuarios</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {usuarios.length === 0 && !error && <p>Cargando usuarios...</p>}

      <ul>
        {usuarios.map((u) => (
          <li key={u.id}>{u.nombre}</li>
        ))}
      </ul>
    </div>
  );
}
