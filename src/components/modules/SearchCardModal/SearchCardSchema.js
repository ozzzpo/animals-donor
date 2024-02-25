import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const addSchema = yup.object().shape({
  description: yup.string().required("необходимо ввести значение"),
  destination: yup.string().required("Необходимо ввести значение"),
  bloodAmount: yup.number().typeError("Введите числовое значение!").required(),
  activeUntil: yup
    .string()
    .matches(
      /\d{4}-(0[1][2][3][4][5][6][7][8]|1[1][2])-(0[1][2][3][4][5][6][7][8]|\d|3[01])$/,
      "Введите дату в формате ГГГГ-ММ-ДД"
    )
    .required(),
});
