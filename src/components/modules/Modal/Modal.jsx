import React from "react";
import ReactModal from "react-modal";
import dog from "../../../assets/images/dog image.png";

function Modal({ modalState, closeModal, customStyles }) {
  const { view, isOpen } = modalState;
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div>
        <img src={dog} alt='dog image' />
        <div className='modal__form'>
          {view === "log in" && <></>}
          {view === "register-1" && <></>}
          {view === "register-2" && <></>}
        </div>
      </div>
    </ReactModal>
  );
}

export default Modal;
