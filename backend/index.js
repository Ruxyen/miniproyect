const express = require("express");
const cors = require("cors");
const logger = require("./middleware/logger");
const usersRouter = require("./routes/users");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(logger);

// Rutas
app.get("/", (req, res) => res.send("¡Backend funcionando!"));
app.use("/users", usersRouter);

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend escuchando en puerto ${PORT}`);
});
