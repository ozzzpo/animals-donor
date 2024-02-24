import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../store/user/actions";
import "./Form.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./validationSchema";
function LoginForm({ closeModal, changeView }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const OnSubmit = (data) => {
    dispatch(
      loginUser({
        login: data.login,
        password: data.password,
      })
    ).then((data) => {
      console.log(data);
      if (data?.error) {
        setError("Неверный логин или пароль!");
      }
    });
  };

  return (
    <div className='login'>
      <div className='log_head'>
        <img src='./slider.png' alt='' onClick={() => closeModal()} />
        <h1>Войдите в Donor Search</h1>
      </div>
      <form className='log_form' onSubmit={handleSubmit(OnSubmit)}>
        <div className='log_inp'>
          <label>Имя пользователя или адрес электронной почты</label>
          <div className='log_inp--err'>
            <input {...register("login")} />
            <p className='error-log'>{errors.login?.message}</p>
          </div>
        </div>
        <div className='log_inp'>
          <label>Пароль</label>
          <div className='log_inp--err'>
            <input type='password' {...register("password")} />
            <p className='error-log'>{errors.password?.message}</p>
          </div>
        </div>
        <div className='log_btn'>
          <p className='error-log'>{error}</p>
          <button type='submit'>Войти</button>
        </div>
      </form>
      <div className='log_down'>
        <div className='log_down_head'>
          <div className='log_line'></div>
          <p>Или через соц. сети</p>
          <div className='log_line'></div>
        </div>
        <div className='log_down_soc'>
          <button>
            <img src='./google.png' alt='' />
          </button>
          <button>
            <img src='./yandex.png' alt='' />
          </button>
          <button>
            <img src='./vk.png' alt='' />
          </button>
        </div>
        <div className='log_down_reg'>
          <p>Нет учетной записи?</p>
          <a href='#' onClick={() => changeView("register-2")}>
            Зарегистрироваться
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
