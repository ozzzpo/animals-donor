import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../store/user/actions";

function RegisterForm({ changeView }) {
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
    //changeView("log in");
  };
  return (
    <form onSubmit={handleSubmit(OnSubmit)}>
      <label>ПОЩТА</label>
      <input type='text' {...register("email")} />
      <label>Парол</label>
      <input type='text' {...register("password")} />
      <label>Парол повторит</label>
      <input type='text' {...register("password-repeat")} />
      <button type='submit'>Submit</button>
    </form>
  );
}

export default RegisterForm;
