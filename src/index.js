const cors = require("cors");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const api = require("./api");

const notFound = require("./middlewares/notFound");
const errorHandler = require("./middlewares/errorHandler");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 8081;

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (_, res) => {
  res.json({ message: "Hello World 🐈‍⬛" });
});

app.use("/api/v1", api);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening at: http://localhost:${port}`);
});
