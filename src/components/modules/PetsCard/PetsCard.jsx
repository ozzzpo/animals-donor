import React from "react";
import './PetsCard.scss'
import PetCard from "../../common/PetCard/PetCard";
function PetsCard() {
  return <div className="pets_card">
    <div className="pets_cards">
      <PetCard></PetCard>
    </div>
    <div className="add_pets">
      <img src="./add_pets.svg" alt="" />
    </div>
  </div>;
}

export default PetsCard;
