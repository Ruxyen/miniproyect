const express = require("express");
const app = express();
const PORT = process.env.PORT;

const cors = require("cors");

app.use(cors({
  origin: "*" // temporalmente permite todas las URLs, luego puedes restringirla
}));

app.get("/", (req, res) => {
  res.send("¡Backend funcionando!");
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

