const { readJSON, writeJSON } = require("../utils/fileHandler");

const getUsers = (req, res) => {
  try {
    const users = readJSON("users.json");
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Error leyendo usuarios" });
  }
};

const addUser = (req, res) => {
  try {
    const users = readJSON("users.json");   // Lee el JSON
    const newUser = {
      id: users.length ? users[users.length - 1].id + 1 : 1, // Genera ID
      ...req.body  // Debe tener nombre y email
    };
    users.push(newUser);
    writeJSON("users.json", users);  // Escribe JSON actualizado
    res.status(201).json(newUser);   // Devuelve el usuario agregado
  } catch (err) {
    console.error(err); // ¡IMPORTANTE para debug!
    res.status(500).json({ error: "Error agregando usuario" });
  }
};

module.exports = { getUsers, addUser };
