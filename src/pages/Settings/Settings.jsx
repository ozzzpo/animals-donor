import React from "react";
import Header from "../../components/common/Header/Header";
import { useSelector } from "react-redux";
import Footer from "../../components/modules/Footer/Footer";
import "./Settings.scss";
import defaultImage from "../../assets/images/1392554736_2135986208.jpg";
import Toggle from "react-toggle";
import "react-toggle/style.css";

function Settings() {
  const stringifiedUser = useSelector((state) => state.user.user);
  console.log(stringifiedUser);
  const user = JSON?.parse(JSON.stringify(stringifiedUser));
  return (
    <div className='settings'>
      <Header />
      <div className='settings__content'>
        <div className='settings__photo'>
          <img src={user?.avatar ? user.avatar : defaultImage} alt='' />
          <button className='settings__upload'>Добавить фото</button>
        </div>
        <div className='settings__form'>
          <form action=''>
            <input type='text' placeholder='Фамилия' />
            <input type='text' placeholder='Имя' />
            <input type='text' placeholder='Отчество' />
            <input type='text' placeholder='Город' />
            <div className='settings__input-with_checkbox'>
              <input type='text' placeholder='Телефон' />
              <Toggle />
            </div>
            <div className='settings__input-with_checkbox'>
              <input type='text' placeholder='Почта' />
              <Toggle />
            </div>
            <div className='settings__input-with_checkbox'>
              <input type='text' placeholder='ID в ВК' />
              <Toggle />
            </div>
            <div className='settings__input-with_checkbox'>
              <input type='text' placeholder='Ник в Telegram' />
              <Toggle />
            </div>
            <button type='submit'>Сохранить</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Settings;
