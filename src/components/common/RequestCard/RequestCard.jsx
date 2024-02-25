import { useSelector } from "react-redux";
import "./requestCard.css";
import getTime from "../../../utils/getTime";
import { useNavigate } from "react-router-dom";
import dog from "../../../assets/images/dog_skelet.png";
import cat from "../../../assets/images/cat_skelet.png";
function RequestCard() {
  const navigate = useNavigate();
  const searchCards = useSelector((state) => state.searchCards.searchCards);
  return (
    <div className='requestCard'>
      {searchCards.map((searchCard) => (
        <div className='card_req'>
          {console.log(searchCard)}
          <img
            src={searchCard.recipient.pet_type.name === "Собака" ? dog : cat}
            alt=''
          />
          <div className='req_info'>
            <div className='bl_type'>
              <p>{searchCard.recipient.blood_type}</p>
              <div className='req_date'>
                <p>До {getTime(searchCard.active_until)}</p>
              </div>
            </div>
            <div className='req_base_info'>
              <p>{searchCard.recipient.pet_type.name}</p>
              <p>Порода: {searchCard.recipient.breed}</p>
              <p>Кличка: {searchCard.recipient.name}</p>
              <p>Дата рождения: {searchCard.recipient.birthday}</p>
              <p>Вес: {searchCard.recipient.weight}</p>
            </div>
            <div className='req_more_info'>
              <button
                onClick={() => navigate("/request", { state: searchCard })}
              >
                Подробнее
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RequestCard;
