// getBlogs.js
import { getConnection } from "./db";

export async function getBlogs() {
  const connection = await getConnection();

  const [rows] = await connection.execute(
    "SELECT id, title, category, excerpt, date FROM blogs ORDER BY id DESC"
  );

  await connection.end();
  return rows;
}