import React, { useEffect, useState } from "react";
import Header from "../../components/common/Header/Header";
import Footer from "../../components/modules/Footer/Footer";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../AddPet/AddPet.scss";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { addPetSchema } from "../AddPet/validatonSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { updatePet } from "../../store/pets/actions";
import Toggle from "react-toggle";
import "./ChangePet.scss";
function ChangePet() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isEditMode, setIsEditMode] = useState(false);
  const location = useLocation();
  const pet = location.state;
  console.log(pet);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    dispatch(
      updatePet({
        petId: pet.id,
        pet: {
          name: data.name ? data.name : pet.name,
          breed: data.breed ? data.breed : pet.breed,
          blood_type: data.bloodType ? data.bloodType : pet.blood_type,
          birthday: data.birthDate ? data.birthDate : pet.birthday,
          weight: data.weight ? data.weight : pet.weight,
          pet_type_id: pet.pet_type.id,
        },
      })
    ).then((data) => {
      if (data?.error) {
        console.log(data);
      } else {
        navigate("/dashboard");
      }
    });
  };
  return (
    <div>
      <Header />
      <div className='add_pet'>
        <h2>Данные о питомце</h2>
        <div className='edit-mode'>
          <h3>Режим редактирования</h3>
          <Toggle onChange={() => setIsEditMode((prev) => !prev)} />
        </div>
        <div className='add_pet__content'>
          <div className='pet_photo'>
            <img src='./image.png' alt='' />
            <button className='pet_photo_btn'>Добавить фото</button>
            <Link className='pet_photo_btn' to='/dashboard'>
              Назад
            </Link>
          </div>

          {isEditMode ? (
            <form onSubmit={handleSubmit(onSubmit)} className='pet_inp'>
              <div className='pet_inp--err'>
                <input type='text' placeholder='Тип' {...register("type")} />
                <p>{errors.type?.message}</p>
              </div>
              <div className='pet_inp--err'>
                <input
                  type='text'
                  placeholder='Порода'
                  {...register("breed")}
                />
                <p>{errors.breed?.message}</p>
              </div>
              <div className='pet_inp--err'>
                <input
                  type='text'
                  placeholder='Группа крови'
                  {...register("bloodType")}
                />
                <p>{errors.bloodType?.message}</p>
              </div>
              <div className='pet_inp--err'>
                <input type='text' placeholder='Кличка' {...register("name")} />
                <p>{errors.name?.message}</p>
              </div>
              <div className='pet_two'>
                <div className='pet_inp--err'>
                  <input
                    type='text'
                    placeholder='Дата рождения(год-месяц-день)'
                    {...register("birthDate")}
                  />
                  <p>{errors.birthDate?.message}</p>
                </div>
                <div className='pet_inp--err'>
                  <input
                    type='text'
                    placeholder='Вес(кг)'
                    {...register("weight")}
                  />
                  <p>{errors.weight?.message}</p>
                </div>
              </div>
              <button type='submit'>Сохранить</button>
            </form>
          ) : (
            <div className='change__info'>
              <label>{pet?.pet_type?.name}</label>
              <p>Порода: </p>
              <label>{pet?.breed}</label>
              <p>Группа крови: </p>
              <label>{pet?.blood_type}</label>
              <p>Дата рождения: </p>
              <label>{pet?.birthday}</label>
              <p>Вес: {pet?.weight}</p>
              <p>Не доступен:</p>
              <label>{pet?.unavailable_lists}</label>
              <p>Вакцины:</p>
              <label>{pet?.vaccinations}</label>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ChangePet;
