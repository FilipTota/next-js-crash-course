import React from "react";
// import { useParams } from "next/navigation";
import Link from "next/link";

const Article = async ({ params }: { params: { id: string } }) => {
  // get id by useParams
  // const params = useParams();

  // In the App Directory, you should use the fetch API directly in your components or use the server-side functions like fetch inside the page.tsx file, or utilize React Server Components to fetch data on the server-side.
  // without using getServerSideProps and getStaticProps methods used in the Pages Directory
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const article = await res.json();

  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
};

export default Article;
