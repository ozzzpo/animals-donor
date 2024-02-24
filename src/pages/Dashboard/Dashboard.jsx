import React from "react";
import Header from "../../components/common/Header/Header";
import ProfileCard from "../../components/modules/ProfileCard/ProfileCard";
import PetsCard from "../../components/modules/PetsCard/PetsCard";
import NotificationsCard from "../../components/modules/NotificationsCard/NotificationsCard";
import RequestCard from "../../components/common/RequestCard/RequestCard";
import './Dashboard.scss'

function Dashboard() {
  return (
    <div className='dashboard'>
      <Header />
      <div className='dashboard__main'>
        <ProfileCard />
        <PetsCard />
        <NotificationsCard />
      </div>
      <div className='dashboard__requests'>
        <h2>Мои запросы на донорство</h2>
        <RequestCard />
      </div>
    </div>
  );
}

export default Dashboard;
