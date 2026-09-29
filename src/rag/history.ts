export type HistoryItem = {
  user: string;
  assistant: string;
};

const histories = new Map<string, HistoryItem[]>();

const historyMaxLength = 6;

export function getHistory(conversationId: string): HistoryItem[] {
  if (!histories.has(conversationId)) {
    histories.set(conversationId, []);
  }

  return histories.get(conversationId)!;
}

export function addHistory( conversationId: string, question: string, response: string ): void {
  const history = getHistory(conversationId);

  history.push({
    user: question,
    assistant: response,
  });

  if (history.length > historyMaxLength) {
    history.shift();
  }
}

export function clearHistory(conversationId: string): void {
  histories.delete(conversationId);
}

export function formatHistory(history: HistoryItem[]): string {
  if (!history || history.length === 0) {
    return "Nenhum histórico anterior.";
  }

  return history
    .map((item) => `Usuário: ${item.user}\nAssistente: ${item.assistant}`)
    .join("\n\n");
}
