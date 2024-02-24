import React from "react";
import { useSelector } from "react-redux";

function ProfileCard() {
  const user = JSON.parse(useSelector((state) => state.user.user));
  console.log(user);
  return (
    <div className='profile-card'>
      <img src={user?.avatar} alt='' />
      <div className='profile-card__info'>
        <p className='profile-card__name'>
          {user?.first_name} {user?.second_name}
        </p>
        <p className='profile-card__location'>{user?.city}</p>
        <p className='profile-card__phone'>{user?.phone}</p>
        <div className='profile-card__links'>
          <img src='' alt='' />
          <img src='' alt='' />
          <img src='' alt='' />
        </div>
        <a className='profile-card__settings'>Изменить данные</a>
      </div>
    </div>
  );
}

export default ProfileCard;
