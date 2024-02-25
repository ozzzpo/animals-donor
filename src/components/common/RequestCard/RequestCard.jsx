import { useSelector } from "react-redux";
import "./requestCard.css";
function RequestCard() {
  const searchCards = useSelector((state) => state.searchCards.searchCards);
  return (
    <div className='requestCard'>
      {searchCards.map((searchCard) => (
        <div className="card_req">
          <img src='./dog.png' alt='' />
          <div className='req_info'>
            <div className='bl_type'>
              <p>{searchCard.recipient.blood_type}</p>
              <div className='req_date'>
                <p>До 2 марта</p>
              </div>
            </div>
            <div className='req_base_info'>
              <p>Собака</p>
              <p>Порода: Пудель</p>
              <p>Кличка: Собака</p>
              <p>Возраст: 5 лет</p>
              <p>Вес: 5 кг</p>
            </div>
            <div className='req_more_info'>
              <button>Узнать подробнее</button>
              <button>Удалить</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RequestCard;
