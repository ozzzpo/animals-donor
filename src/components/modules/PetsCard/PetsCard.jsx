import React from "react";
import "./PetsCard.scss";
import PetCard from "../../common/PetCard/PetCard";
import { Link } from "react-router-dom";
function PetsCard() {
  return (
    <div className='pets_card'>
      <div className='pets_cards'>
        <PetCard></PetCard>
      </div>
      <div className='add_pets'>
        <Link to='/add_pet'>
          <img src='./add_pets.svg' alt='' />
        </Link>
      </div>
    </div>
  );
}

export default PetsCard;
