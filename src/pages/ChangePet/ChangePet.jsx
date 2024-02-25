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
import ChangePetInfo from "./ChangePetInfo";
import ReactModal from "react-modal";
import SearchCardModal from "../../components/modules/SearchCardModal/SearchCardModal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
function ChangePet() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isEditMode, setIsEditMode] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

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
      <div className='change-pet'>
        <h1>Данные о питомце</h1>
        <div className='edit-mode'>
          <h3>Режим редактирования</h3>
          <Toggle onChange={() => setIsEditMode((prev) => !prev)} />
        </div>
        <div className='change-pet__content'>
          <div className='change-pet__photo'>
          {
            pet.pet_type.name == 'Кошка' ? 
            <img src='./cat_skelet.png' alt='' /> : 
            pet.pet_type.name == 'Собака' ?
            <img src='./dog_skelet.png' alt='' /> :
            pet.pet_type.name == 'Грызун' ? 
            <img src='./grizun_skelet.png' alt='' /> :
            pet.pet_type.name == 'Птица' ? 
            <img src='./bird_skelet.png' alt='' /> :
            <img src='./ekzo_skelet.png' alt='' /> 
        }
            {isEditMode ? (
              <button className='change-pet__btn'>Добавить фото</button>
            ) : (
              ""
            )}
            <button className="create_zapros" onClick={() => setIsOpen(true)}>Создать запрос</button>
            <Link style={{ width: "100%" }} to='/dashboard'>
              <button className='change-pet__btn'>Назад</button>
            </Link>
          </div>

          {isEditMode ? (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='change-pet__form'
            >
                <p className="change-pet__form__p">Оставьте поле пустым, если не хотите изменять его значение!</p>
              <div className='change-pet__input--err'>
                <input type='text' placeholder='Тип' {...register("type")} />
                <p>{errors.type?.message}</p>
              </div>
              <div className='change-pet__input--err'>
                <input
                  type='text'
                  placeholder='Порода'
                  {...register("breed")}
                />
                <p>{errors.breed?.message}</p>
              </div>
              <div className='change-pet__input--err'>
                <input
                  type='text'
                  placeholder='Группа крови'
                  {...register("bloodType")}
                />
                <p>{errors.bloodType?.message}</p>
              </div>
              <div className='change-pet__input--err'>
                <input type='text' placeholder='Кличка' {...register("name")} />
                <p>{errors.name?.message}</p>
              </div>
              <div className='pet_two'>
                <div className='change-pet__input--err'>
                  <input
                    type='text'
                    placeholder='Дата рождения(год-месяц-день)'
                    {...register("birthDate")}
                  />
                  <p>{errors.birthDate?.message}</p>
                </div>
                <div className='change-pet__input--err'>
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
            <ChangePetInfo pet={pet} />
          )}
        </div>
        <SearchCardModal isOpen={modalIsOpen} setIsOpen={setIsOpen} pet={pet} />
      </div>
      <Footer />
    </div>
  );
}

export default ChangePet;
