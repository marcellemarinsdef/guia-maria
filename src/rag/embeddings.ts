import { BedrockEmbeddings } from "@langchain/aws";
import { awsConfig } from "../config/aws.js";

export const embeddings = new BedrockEmbeddings({
  model: awsConfig.embeddingModel,
  region: awsConfig.region,
});