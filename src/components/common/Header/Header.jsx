import ReactModal from "react-modal";
import "./header.css";
function Header({ isOpen, setIsOpen }) {
  const openModal = () => {
    setIsOpen(true);
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
          <button>Войти</button>
          <p>/</p>
          <button>Регистрация</button>
        </div>
      </div>
      <div className='headLine'></div>

      <ReactModal isOpen={isOpen}></ReactModal>
    </>
  );
}

export default Header;
