import Head from "next/head";
import ArticleList from "../components/ArticleList";

export default async function Home() {
  return (
    <div>
      <Head>
        <title>WebDev Newz</title>
      </Head>
      <ArticleList />
    </div>
  );
}
