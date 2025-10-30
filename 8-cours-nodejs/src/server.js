import "dotenv/config";
import express from "express";
import postRoutes from "./routes/post.routes.js";
import userRoutes from "./routes/user.routes.js";

const app = express();
const port = 5000;

//Middleware qui permet de traiter les données de la rerquest
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/pos", postRoutes);
app.use("/user", userRoutes);

//lancer le serveur
app.listen(port, () => console.log("Le serveur a démarré au port " + port));
