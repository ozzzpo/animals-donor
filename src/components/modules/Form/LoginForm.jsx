import React from "react";
import './Form.scss'
function LoginForm() {
  return (
    <div className="login">
      <div className="log_head">
        <img src="./slider.png" alt="" />
        <h1>Войдите в Donor Search</h1>
      </div>
      <form className="log_form" action=''>
        <div className="log_inp">
          <label>Имя пользователя или адрес электронной почты</label>
          <input type='text' />
        </div>
        <div className="log_inp">
          <label>Пароль</label>
          <input type='password' />
        </div>
        <div className="log_btn">
          <button type='submit'>Войти</button>
        </div>
      </form>
      <div className="log_down">
        <div className="log_down_head">
          <div className="log_line"></div>
          <p>Или через соц. сети</p>
          <div className="log_line"></div>
        </div>
        <div className="log_down_soc">
          <button><img src="./google.png" alt="" /></button>
          <button><img src="./yandex.png" alt="" /></button>
          <button><img src="./vk.png" alt="" /></button>
        </div>
        <div className="log_down_reg">
          <p>Нет учетной записи?</p>
          <a href="#">Зарегистрироваться</a>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
