import crypto from "node:crypto";

export function hashChunk(content: string, model: string) {
  return crypto
    .createHash("sha256")
    .update(`${model}:${content}`)
    .digest("hex");
}
