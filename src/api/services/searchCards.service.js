import apiClient from "../instance";
const searchCardsApi = () => {
  return {
    getSearchCards: () => {
      return apiClient.get("search_cards/my");
    },
    getSearchCardById: (cardId) => {
      return apiClient.get(`search_cards/${cardId}`);
    },
    addSearchCard: (newCard) => {
      return apiClient.post("search_cards", newCard);
    },
    updateSearchCard: (cardId, updatedCard) => {
      return apiClient.patch(`search_cards/${cardId}`, updatedCard);
    },
    getFirstActiveSearchCards: () => {
      return apiClient.get("search_cards?limit=5");
    },
  };
};
export default searchCardsApi;
