import React from "react";
import "./PetsCard.scss";
import PetCard from "../../common/PetCard/PetCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function PetsCard() {
  const pets = useSelector((state) => state.pets.pets);
  return (
    <div className='pets_card'>
      <h2>Мои питомцы</h2>
      <div className='pets_card__content'>
        <div className="pet_blur1"></div>
        <div className='pets_cards'>
          {pets?.map((pet) => (
            <PetCard pet={pet} key={pet.id} />
          ))}
        </div>
        <div className="pet_blur2"></div>
        <div className='add_pets'>
          <Link to='/add_pet'>
            <img src='./add_pets.svg' alt='' />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PetsCard;
