import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import helmet from "helmet";
import routes from "./routes";
import config from "./config/config";

const app = express();

//Settings
app.set("port", Number(config.API_PORT) || Number(4000));

//Middlewares
app.use(morgan("dev"));
// app.use(helmet());
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/api", routes);

//Static Files
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/views", express.static(path.join(__dirname, "views")));
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

export default app;
