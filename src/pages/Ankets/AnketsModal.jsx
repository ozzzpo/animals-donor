import React, { useEffect } from "react";
import ReactModal from "react-modal";
import "./AnketsModal.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchPets } from "../../store/pets/actions";
import { fetchSearchCards } from "../../store/searchCards/actions";

function AnketsModal({ isOpen, closeModal, setChoosedPet, me }) {
  const customStyles = {
    content: {
      padding: 0,
      margin: 0,
      width: "1000px",
      height: "500px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPets());
    dispatch(fetchSearchCards());
  }, [dispatch]);
  const pets = useSelector((state) => state.pets.pets);
  const cards = useSelector((state) => state.searchCards.searchCards);
  console.log(pets);
  console.log(cards);
  return (
    <ReactModal
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div className='ankets-modal'>
        <div className='ankets-modal__pets'>
          {pets.map((pet) => (
            <div
              key={pet.id}
              className='ankets-modal__pet'
              onClick={() => {
                setChoosedPet(pet);
                closeModal();
              }}
            >
              
              <div className='pet_card'>
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
              <div className='pet_info'>
        <div className='pet_txt'>
          <p>{pet.pet_type.name}</p>
          <p>Порода: {pet.breed}</p>
          <p>Группа крови: {pet.blood_type}</p>
          <p>Кличка: {pet.name}</p>
          <p>Дата рождения: {pet.birthday}</p>
          <p>Вес: {pet.weight}</p>
        </div>
      </div>
            </div>
            </div>
          ))}

          {cards.map((card) => (
            <div
              key={card.id}
              className='ankets-modal__pet'
              onClick={() => {
                setChoosedPet(card);
                closeModal();
              }}
            >
              <p>{card.id}</p>
              <p>{card.description}</p>
              <p>{card.recipient.name}</p>
            </div>
          ))}
        </div>
      </div>
    </ReactModal>
  );
}

export default AnketsModal;
