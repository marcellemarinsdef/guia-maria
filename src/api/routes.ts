import type { FastifyInstance } from 'fastify';

import { askQuestion } from "../langchain/chain.js";
import { clearHistory } from '../rag/history.js';

export async function routes(app: FastifyInstance) {
  app.post("/chat", async (request, reply) => {
    try {
      const { conversationId, question } = request.body as {
        conversationId?: string;
        question?: string;
      };

      if (!conversationId || !question) {
        return reply.status(400).send({
          error: "conversationId e question são obrigatórios",
        });
      }

      const result = await askQuestion(conversationId, question);

      return reply.send(result);
    } catch (error) {
      console.error(error);

      return reply.status(500).send({
        error: "Erro ao processar pergunta",
      });
    }
  });

  app.post("/delete", async (request, reply) => {
    try {
      const { conversationId } = request.body as {
        conversationId?: string;
      };

      if (!conversationId) {
        return reply.status(400).send({
          error: "conversationId é obrigatório",
        });
      }

      clearHistory(conversationId);

      return reply.send({
        success: true,
      });
    } catch (error) {
      console.error(error);

      return reply.status(500).send({
        error: "Erro ao processar",
      });
    }
  });

}