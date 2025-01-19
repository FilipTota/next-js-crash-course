import React from "react";
import articleStyles from "./Article.module.css";
import ArticleItem from "./ArticleItem";
import { server } from "../config";

interface Article {
  id: number;
  title: string;
  body: string;
}

const ArticleList = async () => {
  const res = await fetch(`${server}/api/articles`);
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
