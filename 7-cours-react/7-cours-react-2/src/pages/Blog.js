import axios from "axios";
import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Article from "../components/Article";

const Blog = () => {
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);
  const [articles, setArticles] = useState([]);
  const [author, setAuthor] = useState("");

  function loadArticle() {
    axios
      .get("http://localhost:3004/articles")
      .then((res) => setArticles(res.data));
  }

  useEffect(() => {
    loadArticle();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (content.length > 0) {
      if (content.length < 140) {
        setError(true);
      } else {
        axios
          .post("http://localhost:3004/articles", {
            author: author,
            content: content,
            date: Date.now(),
          })
          .then(() => {
            loadArticle();
            setError(false);
            setAuthor("");
            setContent("");
          });
      }
    }
  }

  return (
    <div className="blog-container">
      <Logo />
      <Navigation />
      <h1>Blog</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Nom"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
        />
        <textarea
          //style={{ border: error ? "1px solid red" : "1px solid #61dafb" }}
          // Preferable si on ne veux pas avoir à spécifier la couleur dans le code et garder ça niveau CSS
          className={error ? "error_ta" : ""}
          placeholder="Message"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        ></textarea>
        {error && <p>Le message doit contenir plus de 140 caractères</p>}
        <input type="submit" value="Envoyer" />
      </form>
      <ul>
        {articles
          .sort((a, b) => b.date - a.date)
          .map((article) => (
            <Article key={article.id} article={article} />
          ))}
      </ul>
    </div>
  );
};

export default Blog;
