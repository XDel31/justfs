//require("dotenv").config();
//const postgres = require("postgres");
import "dotenv/config";
import postgres from "postgres";

// Configuration de la connexion à PostgreSQL
const sql = postgres(process.env.DATABASE_URL);

export default sql;
