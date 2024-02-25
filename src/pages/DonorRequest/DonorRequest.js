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
import "./DonorRequest.scss";
import getTime from "../../utils/getTime";
function DonorRequest() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isEditMode, setIsEditMode] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const request = location.state;
  const user = useSelector((state) => state.user.user);
  const isUserRequest = user.id === request.author.id;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    dispatch().then((data) => {
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
      <div className='donor-request'>
        <h1>Данные о заявке</h1>
        <div className='edit-mode'>
          {isUserRequest ? (
            <>
              <h3>Режим редактирования</h3>
              <Toggle onChange={() => setIsEditMode((prev) => !prev)} />
            </>
          ) : (
            ""
          )}
        </div>
        <div className='donor-request__content'>
          <div className='donor-request__photo'>
            {request.recipient.pet_type.name == "Кошка" ? (
              <img src='./cat_skelet.png' alt='' />
            ) : request.recipient.pet_type.name == "Собака" ? (
              <img src='./dog_skelet.png' alt='' />
            ) : request.recipient.pet_type.name == "Грызун" ? (
              <img src='./grizun_skelet.png' alt='' />
            ) : request.recipient.pet_type.name == "Птица" ? (
              <img src='./bird_skelet.png' alt='' />
            ) : (
              <img src='./ekzo_skelet.png' alt='' />
            )}
            {isEditMode ? (
              <button className='donor-request__btn'>Добавить фото</button>
            ) : (
              ""
            )}
            <button className='donor-request__btn'>Откликнуться</button>
            <Link style={{ width: "100%" }} to='/dashboard'>
              <button className='donor-request__btn'>Назад</button>
            </Link>
          </div>

          {isEditMode ? (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='donor-request__form'
            >
              <p className='donor-request__form__p'>
                Оставьте поле пустым, если не хотите изменять его значение!
              </p>
              <div className='donor-request__input--err'>
                <input
                  type='text'
                  placeholder='Описание'
                  {...register("description")}
                />
                <p>{errors.description?.message}</p>
              </div>
              <div className='donor-request__input--err'>
                <input
                  type='text'
                  placeholder='Ожидание по адресу'
                  {...register("destinationPoint")}
                />
                <p>{errors.destinationPoint?.message}</p>
              </div>
              <div className='donor-request__input--err'>
                <input
                  type='text'
                  placeholder='Объём крови'
                  {...register("bloodAmount")}
                />
                <p>{errors.bloodAmount?.message}</p>
              </div>
              <div className='donor-request__input--err'>
                <input
                  type='text'
                  placeholder='Актуально до'
                  {...register("activeUntil")}
                />
                <p>{errors.activeUntil?.message}</p>
              </div>
              <button type='submit'>Сохранить</button>
            </form>
          ) : (
            <div className='donor-request__info'>
              <h2>{request.recipient.name}</h2>
              <div className='donor-request__block'>
                <p>Описание:</p>
                <label>{request.description}</label>
              </div>
              <div className='donor-request__blocks'>
                <div className='donor-request__block'>
                  <p>Ожидание по адресу:</p>
                  <label>{request.destination_point}</label>
                </div>
                <div className='donor-request__block'>
                  <p>Группа крови:</p>
                  <label>{request.recipient.blood_type}</label>
                </div>
                <div className='donor-request__block'>
                  <p>Объем крови: </p>
                  <label>{request.blood_amount}мл</label>
                </div>
                <div className='donor-request__block'>
                  <p>Актуально до</p>
                  <label>{getTime(request.active_until)}</label>
                </div>
                <div className='donor-request__block'>
                  <p>Хозяин:</p>
                  <label>{`${request.author.first_name}`}</label>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DonorRequest;
