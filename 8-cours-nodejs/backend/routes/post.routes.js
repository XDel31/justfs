import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Voici les données" });
});

router.post("/", (req, res) => {
  res.json({ message: req.body.message });
});

router.put("/:id", (req, res) => {
  res.json({ messageId: req.params.id });
});

router.delete("/:id", (req, res) => {
  res.json({ message: "post supprimé id : " + req.params.id });
});

router.patch("/like-post/:id", (req, res) => {
  res.json({ message: "Post liké : " + req.params.id });
});

router.patch("/dislike-post/:id", (req, res) => {
  res.json({ message: "Post disliké : " + req.params.id });
});

export default router;
