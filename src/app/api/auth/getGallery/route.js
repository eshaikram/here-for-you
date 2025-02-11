import { promises as fs } from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "public/data/gallery.json");


export async function GET(req) {
  try {
    await fs.access(filePath); // Check if file exists
  } catch {
    await fs.writeFile(filePath, JSON.stringify({ folders: [] }, null, 2)); // Create if missing
  }

  const data = await fs.readFile(filePath, "utf-8");
  return new Response(data, { status: 200, headers: { "Content-Type": "application/json" } });
}

export async function POST(req) {
  try {
    const { folders } = await req.json();
    await fs.writeFile(filePath, JSON.stringify({ folders }, null, 2));
    return new Response(JSON.stringify({ message: "Folders saved successfully!" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error saving folders" }), { status: 500 });
  }
}
