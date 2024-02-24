import { useState } from "react";
import Modal from "../../modules/Modal/Modal";
import "./header.css";
import logo from "../../../assets/icons/донор 1.png";
import { useDispatch, useSelector } from "react-redux";
import defaultAvatar from "../../../assets/images/1392554736_2135986208.jpg";
import exit from "../../../assets/icons/exit.png";
import { Link } from "react-router-dom";
import { logout } from "../../../store/user/userSlice";
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
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuth);
  const user = useSelector((state) => state.user.user);
  const closeModal = () => {
    setModalState((state) => ({
      ...state,
      isOpen: false,
      view: "",
    }));
  };
  const changeView = (view) => {
    setModalState((state) => ({
      ...state,
      view,
    }));
  };
  return (
    <>
      <div className='header'>
        <div className='logo'>
          <img src={logo} alt='' />
        </div>
        <div className='unit'>
          <a className='link' href='#'>
            Нужны доноры
          </a>
          <p>|</p>
          <a className='link' href='#'>
            Топ доноров
          </a>
          <p>|</p>
          <div className='dropdown'>
            <p className='dropbtn link'>Важная информация</p>
            <div className='dropdown-content'>
              <a className='link' href='#'>
                Для Донора
              </a>
              <a className='link' href='#'>
                Для Реципиента
              </a>
              <a className='link' href='#'>
                Уход за питомцем и подготовка
              </a>
            </div>
          </div>
        </div>
        {isAuth ? (
          <div className='header__avatar'>
            <Link to='/settings'>
              <img src={user?.avatar ? user.avatar : defaultAvatar} alt='' />
            </Link>
            <img src={exit} alt='' onClick={() => dispatch(logout())} />
          </div>
        ) : (
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
                  view: "register-2",
                }));
              }}
            >
              Регистрация
            </button>
          </div>
        )}
      </div>
      <div className='headLine'></div>
      <Modal
        modalState={modalState}
        closeModal={closeModal}
        changeView={changeView}
        customStyles={customStyles}
      />
    </>
  );
}

export default Header;
