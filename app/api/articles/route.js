import { articles } from "../../../data";

export async function GET(req, res) {
  return new Response(JSON.stringify(articles), { status: 200 });
}
