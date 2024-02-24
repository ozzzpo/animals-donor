import React from "react";
import ReactModal from "react-modal";
import dog from "../../../assets/images/dog image.png";
import LoginForm from "../Form/LoginForm";
import RegisterForm from "../Form/RegisterForm";
import "./Modal.scss";

function Modal({
  modalState,
  closeModal,
  customStyles,
  register,
  handleSubmit,
  errors,
}) {
  const { view, isOpen } = modalState;
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div className='modal'>
        <img src={dog} alt='dog image' />
        <div className='modal__form'>
          {view === "log in" && <LoginForm closeModal={closeModal} />}
          {view === "register-1" && <></>}
          {view === "register-2" && (
            <RegisterForm
              register={register}
              handleSubmit={handleSubmit}
              errors={errors}
            />
          )}
        </div>
      </div>
    </ReactModal>
  );
}

export default Modal;