import api from "../api";

export const getCards = async (listId) => api(`/cards?list_id=${listId}`);
export const createCard = async (card) => api("/cards", "POST", card);
export const updateCard = async (card) =>
  api(`/cards/${card.id}`, "PATCH", {
    content: card.content,
    position: card.position,
    color: card.color,
    list_id: card.list_id,
  });
export const deleteCard = async (cardId) => api(`/cards/${cardId}`, "DELETE");
