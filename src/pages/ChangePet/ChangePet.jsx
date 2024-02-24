import React from "react";
import Header from "../../components/common/Header/Header";
import Footer from "../../components/modules/Footer/Footer";
import { Link } from "react-router-dom";
import '../AddPet/AddPet'
function ChangePet() {
    return <div>
    <Header/>
    <div className="add_pet">
      <div className="pet_photo">
        <img src="./image.png" alt="" />
        <button className="pet_photo_btn">Добавить фото</button>
        <Link className="pet_photo_btn" to='/dashboard'>Назад</Link>
      </div>
        <form className="pet_inp" action="">
          <input type="text" placeholder="Тип:" />
          <input type="text" placeholder="Порода:" />
          <input type="text" placeholder="Группа крови:" />
          <input type="text" placeholder="Кличка:" />
          <div className="pet_two">
            <input type="text" placeholder="Возраст:" />
            <input type="text" placeholder="Вес:" />
          </div>
          <button type="submit">Сохранить</button>
        </form>
    </div>
    <Footer/>
  </div>;
}

export default ChangePet;