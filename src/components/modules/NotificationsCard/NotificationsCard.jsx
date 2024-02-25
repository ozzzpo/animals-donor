import React from "react";
import "./NotificationsCard.scss";
import NotificationCard from "../../common/NotificationCard/NotificationCard";
function NotificationsCard() {
  return (
    <div className='notif_card'>
      <h2>Отклики</h2>
      <div className='notifs'>
        <NotificationCard />
      </div>
      <p>Больше нет откликов</p>
    </div>
  );
}

export default NotificationsCard;
