import { articles } from "../../../../data";

export async function GET(req, res) {
  const { id } = await res.params;
  // Find the article by ID
  const article = articles.find((article) => article.id === id);

  if (article) {
    return new Response(JSON.stringify(article), {
      status: 200,
      headers: {
        "Content-Type": "application/json", // Ensure correct response type
      },
    });
  } else {
    return new Response(JSON.stringify({ error: "Article not found" }), {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
