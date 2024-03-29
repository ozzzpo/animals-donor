import { useState } from "react";
import Modal from "../../modules/Modal/Modal";
import "./header.css";
import logo from "../../../assets/icons/донор 1.png";
import { useDispatch, useSelector } from "react-redux";
import defaultAvatar from "../../../assets/images/default.jpg";
import exit from "../../../assets/icons/exit.png";
import { Link } from "react-router-dom";
import { logout } from "../../../store/user/userSlice";
import { useLocation } from "react-router-dom";

function Header({ setModalState }) {
  const location = useLocation();

  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuth);
  const user = useSelector((state) => state.user.user);

  return (
    <>
      <div className='header'>
        <div className='logo'>
          <Link to='/'>
            <img src={logo} alt='' />
          </Link>
        </div>
        <div className='unit'>
          {
            location.pathname != "/" && (
              <>
               <a className='link' href='/'>
            Главная страница
          </a>
          <p>|</p>
              </>
            )
          }
          {location.pathname == "/" && (
            <>
              <a className='link' href='#don'>
                Нужны доноры
              </a>
              <p>|</p>
            </>
          )}
         
          <div className='dropdown'>
            <p className='dropbtn link'>Важная информация</p>
            <div className='dropdown-content'>
              <Link className='link' to='/donor'>
                Для Донора
              </Link>
              <Link className='link' to='/recipient'>
                Для Реципиента
              </Link>
              <Link className='link' to='/help'>
                Уход за питомцем и подготовка
              </Link>
            </div>
          </div>
        </div>
        {isAuth ? (
          <div className='header__avatar'>
            <Link to='/dashboard'>
              <img src={user?.avatar ? user.avatar : defaultAvatar} alt='' />
            </Link>
            <div className='exit' onClick={() => dispatch(logout())}>
              <p>Выход</p>
              <img src={exit} alt='' />
            </div>
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
    </>
  );
}

export default Header;
