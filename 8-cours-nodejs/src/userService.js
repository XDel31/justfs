import sql from "./config/db.js";

// Récupérer tous les utilisateurs
async function getAllUsers() {
  return await sql`SELECT * FROM public."User"`;
}

async function getUserByAge(age) {
  return await sql`SELECT * FROM public."User" WHERE age = ${age}`;
}

export { getAllUsers, getUserByAge };
