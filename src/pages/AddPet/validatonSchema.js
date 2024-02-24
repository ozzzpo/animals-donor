import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const addPetSchema = yup.object().shape({
  breed: yup.string().required("Необходимое поле!"),
  bloodType: yup.string().required("Необходимое поле!"),
  name: yup.string().required("Необходимое поле!"),
  birthDate: yup
    .string()
    .typeError("Введите дату!")
    .required("Необходимое поле!"),
  weight: yup
    .number()
    .typeError("Введите число!")
    .positive()
    .required("Необходимое поле!"),
});
