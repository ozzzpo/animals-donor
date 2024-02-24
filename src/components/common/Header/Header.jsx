import { useState } from "react";
import Modal from "../../modules/Modal/Modal";
import "./header.css";
import { useForm } from "react-hook-form";
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
          <a className='link' href='#'>Нужны доноры</a>
          <p>|</p>
          <a className='link' href='#'>Топ доноров</a>
          <p>|</p>
          <div className='dropdown'>
            <p className='dropbtn link'>Важная информация</p>
            <div className='dropdown-content'>
              <a className='link' href='#'>Для Донора</a>
              <a className='link' href='#'>Для Реципиента</a>
              <a className='link' href='#'>Уход за питомцем и подготовка</a>
            </div>
          </div>
        </div>
        <div className='logIn'>
          <button
            className='link'
            onClick={() => {
              setModalState(() => ({
                isOpen: true,
                view: "log in",
              }));
            }}
          >
            Войти
          </button>
          <p>/</p>
          <button
          className='link'
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
