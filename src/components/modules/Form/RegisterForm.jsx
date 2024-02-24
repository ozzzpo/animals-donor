import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../store/user/actions";
import "./Form.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./validationSchema";

function RegisterForm({ closeModal, changeView }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const onSubmit = (data) => {
    dispatch(
      registerUser({
        email: data.email,
        password: data.password,
      })
    ).then((data) => {
      if (data?.error) setError("Такая почта уже зарегистрирована!");
    });
  };
  return (
    <div className='login'>
      <div className='log_head'>
        <img src='./slider.png' alt='' onClick={() => closeModal()} />
        <h1>Зарегистрируйтесь в Donor Search</h1>
      </div>
      <form className='log_form' onSubmit={handleSubmit(onSubmit)}>
        <div className='log_inp'>
          <label>Адрес электронной почты</label>
          <input {...register("email")} />
          <p className='error-log'>{errors.email?.message}</p>
        </div>
        <div className='log_inp'>
          <label>Пароль</label>
          <div className='log_inp--err'>
            <input type='password' {...register("password")} />
            <p className='error-log'>{errors.password?.message}</p>
          </div>
        </div>
        <div className='log_inp'>
          <label>Повторите пароль</label>
          <div className='log_inp--err'>
            <input type='password' {...register("password-repeat")} />
            <p className='error-log'>{errors["password-repeat"]?.message}</p>
          </div>
        </div>
        <div className='log_btn'>
          <p className='error-log'>{error}</p>
          <button type='submit'>Зарегистрироваться</button>
        </div>
        <div className='log_down_reg'>
          <p onClick={() => changeView("log in")} style={{ cursor: "pointer" }}>
            Уже есть аккаунт?
          </p>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
