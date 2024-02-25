import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import defaultImage from "../../../assets/images/1392554736_2135986208.jpg";
import "./ProfileCard.scss";
function ProfileCard() {
  let user = useSelector((state) => state.user.user);

  if (typeof user === "string") {
    user = JSON.parse(user);
  }
  return (
    <div className='profile-card'>
      <div className='profile-card__avatar'>
        <img
          src={user?.avatar ? user.avatar : defaultImage}
          alt='avatar_image'
        />
      </div>
      <div className='profile-card__info'>
        <p className='profile-card__name'>
          {user?.first_name
            ? `${user?.second_name} ${user.first_name} `
            : "Ваше имя"}
        </p>
        <p className='profile-card__location'>
          <img src='./gps.svg' alt='' />
          {user?.city ? user.city : "Ваш город"}
        </p>
        <p className='profile-card__phone'>
          {user?.phone ? user.phone : "Ваш телефон"}
        </p>
        <div className='profile-card__links'>
          <img src='./google.svg' alt='' />
          <img src='./vk.svg' alt='' />
          <img src='./tg.svg' alt='' />
        </div>
        <Link to={"/settings"} className='profile-card__settings'>
          Изменить данные
        </Link>
      </div>
    </div>
  );
}

export default ProfileCard;
