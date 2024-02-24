import React from "react";
import Header from "../../components/common/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/modules/Footer/Footer";
import "./Settings.scss";
import defaultImage from "../../assets/images/1392554736_2135986208.jpg";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import { useForm } from "react-hook-form";
import { changeMe } from "../../store/user/actions";

function Settings() {
  const stringifiedUser = useSelector((state) => state.user.user);
  const user = JSON?.parse(JSON.stringify(stringifiedUser));
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const newMe = {
      second_name: data?.secondName ? data.secondName : user?.secondName,
      first_name: data?.firstName ? data.firstName : user?.firstName,
      city: data?.city ? data.city : user?.city,
      phone: data?.phone ? data.phone : user?.phone,
      email: data?.email ? data.email : user?.email,
    };
    dispatch(changeMe(newMe));
    console.log(newMe);
  };
  return (
    <div className='settings'>
      <Header />
      <div className='settings__content'>
        <div className='settings__photo'>
          <img src={user?.avatar ? user.avatar : defaultImage} alt='' />
          <button className='settings__upload'>Добавить фото</button>
        </div>
        <div className='settings__form'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type='text'
              placeholder='Фамилия'
              {...register("secondName")}
            />
            <input type='text' placeholder='Имя' {...register("firstName")} />
            <input
              type='text'
              placeholder='Отчество'
              {...register("thirdName")}
            />
            <input type='text' placeholder='Город' {...register("city")} />
            <div className='settings__input-with_checkbox'>
              <input type='text' placeholder='Телефон' {...register("phone")} />
              <Toggle />
            </div>
            <div className='settings__input-with_checkbox'>
              <input type='text' placeholder='Почта' {...register("email")} />
              <Toggle />
            </div>
            <div className='settings__input-with_checkbox'>
              <input type='text' placeholder='ID в ВК' {...register("VKID")} />
              <Toggle />
            </div>
            <div className='settings__input-with_checkbox'>
              <input
                type='text'
                placeholder='Ник в Telegram'
                {...register("TG")}
              />
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
