const express = require("express");
import cors from "cors";
const cors = require("cors");

const app = express();

app.use(cors({
  origin: "https://proyecto-2026.vercel.app"
}));

// Middleware
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("¡Backend funcionando!");
});


app.get("/users", (req, res) => {
  res.json([
    { id: 1, nombre: "Rubén" },
    { id: 2, nombre: "Ana" }
  ]);
});

// Puerto dinámico (local + nube)
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend escuchando en puerto ${PORT}`);
});
