import React from "react";

function ChangePetInfo({ pet }) {
  return (
    <div className='change-pet__info'>
      <h2>{pet?.name}</h2>
      <div className='change-pet__block'>
        <p>Дата рождения: </p>
        <label>{pet?.birthday}</label>
      </div>
      <div className="change-pet__blocks">
        <div className='change-pet__block'>
          <p>Порода: </p>
          <label>{pet?.breed}</label>
        </div>
        <div className='change-pet__block'>
          <p>Группа крови: </p>
          <label>{pet?.blood_type}</label>
        </div>
        <div className='change-pet__block'>
          <p>Вес: </p>
          <label>{pet?.weight}</label>
        </div>
        <div className='change-pet__block'>
          <p>Не доступен:</p>
          <label>{pet?.unavailable_lists}</label>
        </div>
        <div className='change-pet__block'>
          <p>Вакцины:</p>
          <label>{pet?.vaccinations}</label>
        </div>
      </div>
      
    </div>
  );
}

export default ChangePetInfo;
