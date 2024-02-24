import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../store/user/actions";
import "./Form.scss";
function LoginForm({ changeView }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const OnSubmit = (data) => {
    dispatch(
      loginUser({
        login: data.login,
        password: data.password,
      })
    );
  };

  return (
    <div className='login'>
      <div className='log_head'>
        <img src='./slider.png' alt='' />
        <h1>Войдите в Donor Search</h1>
      </div>
      <form className='log_form' onSubmit={handleSubmit(OnSubmit)}>
        <div className='log_inp'>
          <label>Имя пользователя или адрес электронной почты</label>
          <input type='text' {...register("login")} />
        </div>
        <div className='log_inp'>
          <label>Пароль</label>
          <input type='password' {...register("password")} />
        </div>
        <div className='log_btn'>
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
