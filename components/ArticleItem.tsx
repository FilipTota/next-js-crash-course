import React from "react";
import Link from "next/link";
import articleStyles from "./Article.module.css";

interface Article {
  id: number;
  title: string;
  body: string;
}

interface ArticleItemProps {
  article: Article;
}

const ArticleItem = ({ article }: ArticleItemProps) => {
  return (
    <Link
      href="/article/[id]"
      as={`/article/${article.id}`}
      className={articleStyles.card}
    >
      <h3>{article.title} &rarr;</h3>
      <p>{article.body}</p>
    </Link>
  );
};

export default ArticleItem;
