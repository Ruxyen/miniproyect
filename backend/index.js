const express = require("express");
const cors = require("cors");
const logger = require("./middleware/logger");
const usersRouter = require("./routes/users");
const authRouter = require("./routes/auth");

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

// Rutas
app.get("/", (req, res) => res.send("¡Backend funcionando!"));
app.use("/users", usersRouter);
app.use("/auth", authRouter);

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend escuchando en puerto ${PORT}`);
});
