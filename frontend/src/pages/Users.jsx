import { useEffect, useState } from "react";

export default function Users({ user }) {
  const [usuarios, setUsuarios] = useState([]);
  const [error, setError] = useState(null);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  const API_URL = import.meta.env.VITE_API_URL;

  // Obtener usuarios
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`${API_URL}/users`);
        if (!res.ok) throw new Error("Error al conectar con el backend");
        const data = await res.json();
        setUsuarios(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchUsers();
  }, []);

  // Agregar usuario
  const handleAddUser = async () => {
    if (!nombre || !email) return;
    try {
      const res = await fetch(`${API_URL}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, email }),
      });
      if (!res.ok) throw new Error("Error al agregar usuario");
      const newUser = await res.json();
      setUsuarios([...usuarios, newUser]);
      setNombre("");
      setEmail("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Usuarios</h1>

      {/* Mostrar quién está logueado */}
      {user && (
        <p>
          Logueado como: <strong>{user.nombre}</strong> ({user.email})
        </p>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {usuarios.length === 0 && !error && <p>Cargando usuarios...</p>}

      <ul>
        {usuarios.map((u) => (
          <li key={u.id}>
            {u.nombre} - {u.email}
          </li>
        ))}
      </ul>

      <h2>Agregar usuario</h2>
      <input
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleAddUser}>Agregar</button>
    </div>
  );
}
