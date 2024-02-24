import "./PetCard.scss";
import { Link } from "react-router-dom";
function PetCard({ pet }) {
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
          <button>Информация о прививках</button>
          <Link to='/change_pet'>Изменить данные</Link>
        </div>
      </div>
    </div>
  );
}

export default PetCard;
