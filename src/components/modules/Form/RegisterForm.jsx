import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../store/user/actions";
import './Form.scss'

function RegisterForm({closeModal, changeView }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const OnSubmit = (data) => {
    dispatch(
      registerUser({
        email: data.email,
        password: data.password,
      })
    );
    changeView("log in");
  };
  return (
    <div className='login'>
      <div className='log_head'>
        <img src='./slider.png' alt='' onClick={() => closeModal()} />
        <h1>Зарегистрируйтесь в Donor Search</h1>
      </div>
    <form className='log_form' onSubmit={handleSubmit(OnSubmit)}>
      <div className='log_inp'>
        <label>Адрес электронной почты</label>
        <input type='text' {...register("email")} />
      </div>
      <div className='log_inp'>
        <label>Пароль</label>
        <input type='password' {...register("password")} />
      </div>
      <div className='log_inp'>
        <label>Повторите пароль</label>
        <input type='password' {...register("password-repeat")} />
      </div>
      <div className='log_btn'>
        <button type='submit'>Зарегистрироваться</button>
      </div>
      <div className='log_down_reg'>
          <p>Уже есть аккаунт?</p>
          <a href='#' onClick={() => changeView("log in")}>
            Войти
          </a>
        </div>
    </form>
    </div>
  );
}

export default RegisterForm;
