const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv").config();
const app = express();
const userRoutes = require("./routes/user.routes");
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use(userRoutes);

if (process.env.RENDER) {
  // Estás en Render, cambia la versión de Node.js
  console.log("Using Node version for Render:", process.version);
  // Debes configurar la versión de Node.js aquí
} else {
  // Estás en desarrollo local
  console.log("Using Node version for local development:", process.version);
  // No necesitas configurar la versión de Node.js aquí
}

app.listen(process.env.LISTEN_PORT, () => {
  console.log(`Server running on port: ${process.env.LISTEN_PORT}`);
});
