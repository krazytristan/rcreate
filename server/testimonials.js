import { getConnection } from "./db";

export async function getTestimonials() {
  const connection = await getConnection();

  const [rows] = await connection.execute(
    "SELECT id, rating, quote, author FROM testimonials ORDER BY id DESC"
  );

  await connection.end();
  return rows;
}