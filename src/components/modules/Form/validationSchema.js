import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .matches(
      /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/,
      "Некорректный формат!"
    )
    .required(),
  password: yup.string().min(8, "Пароль слишком короткий!").required(),
  "password-repeat": yup
    .string()
    .oneOf([yup.ref("password"), null], "Пароли должны совпадать!")
    .required(),
});

export const loginSchema = yup.object().shape({
  login: yup
    .string()
    .matches(
      /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/,
      "Некорректный формат!"
    )
    .required(),
  password: yup.string().min(8, "Пароль слишком короткий!").required(),
});
