const { readJSON, writeJSON } = require("../utils/fileHandler");

// Obtener todos los usuarios
const getUsers = (req, res) => {
  try {
    const users = readJSON("users.json");
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Error leyendo usuarios" });
  }
};

// Agregar un usuario
const addUser = (req, res) => {
  try {
    const users = readJSON("users.json"); // Lee el JSON

    // Validar que envíen nombre, email y password
    const { nombre, email, password } = req.body;
    if (!nombre || !email || !password) {
      return res.status(400).json({ error: "Faltan campos" });
    }

    // Validar que no exista el email
    if (users.some(u => u.email === email)) {
      return res.status(400).json({ error: "Email ya registrado" });
    }

    const newUser = {
      id: users.length ? users[users.length - 1].id + 1 : 1,
      nombre,
      email,
      password // <- Nota: en producción deberías hashear
    };

    users.push(newUser);
    writeJSON("users.json", users); // Escribe JSON actualizado
    res.status(201).json({ id: newUser.id, nombre: newUser.nombre, email: newUser.email }); // Devuelve sin password
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error agregando usuario" });
  }
};

// Login de usuario
const loginUser = (req, res) => {
  try {
    const { email, password } = req.body;
    const users = readJSON("users.json");

    // Buscar usuario con email y password
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }

    // Retornamos solo información básica (sin password)
    const { id, nombre } = user;
    res.json({ id, nombre, email });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error en login" });
  }
};

module.exports = { getUsers, addUser, loginUser };
