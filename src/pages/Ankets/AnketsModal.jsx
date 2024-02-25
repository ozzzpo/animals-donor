import React, { useEffect } from "react";
import ReactModal from "react-modal";
import "./AnketsModal.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchPets } from "../../store/pets/actions";

function AnketsModal({ isOpen, closeModal, setChoosedPet }) {
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
  }, [dispatch]);
  const pets = useSelector((state) => state.pets.pets);
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div className='ankets-modal'>
        <div className='ankets-modal__pets'>
          {pets.map((pet) => (
            <div
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
        </div>
      </div>
    </ReactModal>
  );
}

export default AnketsModal;
