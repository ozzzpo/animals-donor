import { useState } from "react";
import Modal from "../../modules/Modal/Modal";
import "./header.css";
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
function Header() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    view: "",
  });
  const closeModal = () => {
    setModalState((state) => ({
      ...state,
      isOpen: false,
      view: "",
    }));
  };
  return (
    <>
      <div className='header'>
        <div className='logo'>logo</div>
        <div className='unit'>
          <a href='#'>Нужны доноры</a>
          <p>|</p>
          <a href='#'>Топ доноров</a>
          <p>|</p>
          <div className='dropdown'>
            <p className='dropbtn'>Важная информация</p>
            <div className='dropdown-content'>
              <a href='#'>Ссылка 1</a>
              <a href='#'>Ссылка 2</a>
              <a href='#'>Ссылка 3</a>
            </div>
          </div>
        </div>
        <div className='logIn'>
          <button
            onClick={() => {
              setModalState(() => ({
                isOpen: true,
                view: "login",
              }));
            }}
          >
            Войти
          </button>
          <p>/</p>
          <button
            onClick={() => {
              setModalState(() => ({
                isOpen: true,
                view: "register-1",
              }));
            }}
          >
            Регистрация
          </button>
        </div>
      </div>
      <div className='headLine'></div>
      <Modal
        modalState={modalState}
        closeModal={closeModal}
        customStyles={customStyles}
      />
    </>
  );
}

export default Header;
