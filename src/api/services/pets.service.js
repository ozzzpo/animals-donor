import apiClient from "../instance";
const petsApi = () => {
  return {
    getMyPets: () => {
      return apiClient.get("pets/my");
    },
    getPetById: (petId) => {
      return apiClient.get(`pets/${petId}`);
    },
    updatePet: (petId, updatedPet) => {
      return apiClient.patch(`pets/${petId}`, updatedPet);
    },
    addPet: (newPet) => {
      return apiClient.post("pets/", newPet);
    },
    getTypes: () => {
      return apiClient.get("pet_type/");
    },
    matchDonors: (searchCardId) => {
      return apiClient.get(`pets/match/donors/${searchCardId}`);
    },
    matchRecipients: (petId) => {
      return apiClient.post(`pets/match/recipients/${petId}`);
    },
  };
};
export default petsApi;
