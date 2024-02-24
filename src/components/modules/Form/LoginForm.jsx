import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../store/user/actions";

function LoginForm({ closeModal }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const status = useSelector((state) => state.user.status);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const OnSubmit = (data) => {
    dispatch(
      loginUser({
        login: data.login,
        password: data.password,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit(OnSubmit)}>
      <label>Login</label>
      <input
        type='text'
        {...register("login", { required: true })}
        autoComplete='off'
      />
      {errors.login && <span>This field is required</span>}
      <label>Password</label>
      <input type='password' {...register("password", { required: true })} />
      {errors.password && <span>This field is required</span>}
      <button type='submit'>Войти</button>
    </form>
  );
}

export default LoginForm;
