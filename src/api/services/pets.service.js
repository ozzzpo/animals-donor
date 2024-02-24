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
  };
};
export default petsApi;
