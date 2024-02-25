import React from "react";
import ReactModal from "react-modal";
import "./SearchCardModal.scss";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addSearchCard } from "../../../store/searchCards/actions";
import { yupResolver } from "@hookform/resolvers/yup";
import { addSchema } from "./SearchCardSchema";

function SearchCardModal({ isOpen, setIsOpen, pet }) {
  const dispatch = useDispatch();
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(addSchema) });
  const onSubmit = (data) => {
    dispatch(
      addSearchCard({
        description: data.description,
        destination_point: data.destination,
        blood_amount: data.bloodAmount,
        active_until: data.activeUntil,
        is_active: true,
        recipient_id: pet.id,
      })
    ).then((data) => {
      if (data?.error) {
      } else {
        closeModal();
      }
    });
  };
  return (
    <ReactModal isOpen={isOpen} onRequestClose={closeModal} ariaHideApp={false}>
      <div className='create-search'>
        <h2>Запрос на донорство</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Опишите причину нужды</label>
          <input type='text' {...register("description")} />
          <p className='error-log'>{errors.description?.message}</p>
          <label>Где вы ожидаете донора?</label>
          <input type='text' {...register("destination")} />
          <p className='error-log'>{errors.destination?.message}</p>
          <label>Сколько крови вам нужно?</label>
          <input type='text' {...register("bloodAmount")} />
          <p className='error-log'>{errors.bloodAmount?.message}</p>
          <label>Укажите, до какого времени вам требуется кровь</label>
          <input type='text' {...register("activeUntil")} />
          <p className='error-log'>{errors.activeUntil?.message}</p>
          <button type='submit'>Создать</button>
          <button onClick={() => closeModal()}>Назад</button>
        </form>
      </div>
    </ReactModal>
  );
}

export default SearchCardModal;
