import crypto from "node:crypto";
import fs from "node:fs/promises";

export async function hashDocument(path: string) {
  const file = await fs.readFile(path);

  return crypto
    .createHash("sha256")
    .update(file)
    .digest("hex");
}