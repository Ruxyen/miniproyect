const express = require("express");
const app = express();
const PORT = 3000;

const cors = require("cors");

app.use(cors({
  origin: "http://localhost:5173"
}));

app.get("/", (req, res) => {
  res.send("¡Backend funcionando!");
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

