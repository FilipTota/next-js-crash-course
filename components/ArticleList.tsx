import React from "react";
import articleStyles from "./Article.module.css";
import ArticleItem from "./ArticleItem";

interface Article {
  id: number;
  title: string;
  body: string;
}

const ArticleList = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=6"
  );
  const articles: Article[] = await res.json();

  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
