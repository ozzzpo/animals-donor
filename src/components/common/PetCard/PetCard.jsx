import { useEffect } from "react";
import "./PetCard.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPetById } from "../../../store/pets/actions";
function PetCard({ pet }) {
  const navigate = useNavigate();
  return (
    <div className='pet_card'>
      <img src='./dog image.png' alt='' />
      <div className='pet_info'>
        <div className='pet_txt'>
          <p>{pet.pet_type.name}</p>
          <p>Порода: {pet.breed}</p>
          <p>Группа крови: {pet.blood_type}</p>
          <p>Кличка: {pet.name}</p>
          <p>Дата рождения: {pet.birthday}</p>
          <p>Вес: {pet.weight}</p>
        </div>
        <div className='pet_btn'>
          <button
            onClick={() => {
              navigate("/petInfo", { state: pet });
            }}
          >
            Подробнее
          </button>
        </div>
      </div>
    </div>
  );
}

export default PetCard;
