import type { FastifyInstance } from 'fastify';

import { askQuestion } from "../langchain/chain.js";

export async function routes(app: FastifyInstance) {
  app.post("/chat", async (request, reply) => {
    try {
      const { question } = request.body as {
        question?: string;
      };

      if (!question) {
        return reply.status(400).send({
          error: "question é obrigatória",
        });
      }

      const result = await askQuestion(question);

      return reply.send(result);
    } catch (error) {
      console.error(error);

      return reply.status(500).send({
        error: "Erro ao processar pergunta",
      });
    }
  });
}