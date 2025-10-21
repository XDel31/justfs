import sql from "./config/db.js";

// Récupérer tous les utilisateurs
async function getAllUsers() {
  return await sql`SELECT * FROM "user"`;
}

async function getUserByAge(age) {
  return await sql`SELECT * FROM "user" WHERE age = ${age}`;
}

export { getAllUsers, getUserByAge };
