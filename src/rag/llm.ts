import { ChatBedrockConverse } from "@langchain/aws";
import { awsConfig } from "../config/aws.js";

export const llm = new ChatBedrockConverse({
  model: awsConfig.chatModel,
  region: awsConfig.region,
  temperature: 0,
  maxTokens: awsConfig.maxTokens,
});
