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
              <p>{pet.name}</p>
              <p>{pet.breed}</p>
              <p>{pet.pet_type.name}</p>
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
