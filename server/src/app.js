const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const leadRoutes = require("./routes/leads.routes");
const errorHandler = require("./middlewares/error.middlewares");

const app = express();

app.use(cors());

app.use(express.json());

app.use(morgan("dev"));

app.use("/leads", leadRoutes);

app.use(errorHandler);

module.exports = app;