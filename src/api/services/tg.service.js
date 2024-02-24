import apiClient from "../instance";
export const tgApi = () => {
  return {
    createLinkRequest: () => {
      return apiClient.post("telegram/create_link_request");
    },
  };
};
