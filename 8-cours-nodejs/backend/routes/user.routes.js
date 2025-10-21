import express from "express";
import { getAllUsers, getUserByAge } from "../userService.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    console.error("Erreur lors de la récupération des utilisateurs :", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

router.get("/:age", async (req, res) => {
  try {
    const users = await getUserByAge(req.params.age);
    res.json(users);
  } catch (error) {
    console.error("Erreur lors de la récupération des utilisateurs :", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

export default router;
