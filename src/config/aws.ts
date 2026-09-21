import "dotenv/config";

export const awsConfig = {
  region: process.env.AWS_REGION ?? "us-east-1",

  chatModel:
    process.env.BEDROCK_CHAT_MODEL_ID ??
    "amazon.nova-lite-v1:0",

  embeddingModel:
    process.env.BEDROCK_EMBEDDING_MODEL_ID ??
    "amazon.titan-embed-text-v2:0",

  maxTokens: 100
};
