import React from "react";
import Header from "../../components/common/Header/Header";
import ProfileCard from "../../components/modules/ProfileCard/ProfileCard";
import PetsCard from "../../components/modules/PetsCard/PetsCard";
import NotificationsCard from "../../components/modules/NotificationsCard/NotificationsCard";

function Dashboard() {
  return (
    <div className='dashboard'>
      <Header />
      <div className='dashboard__main'>
        <ProfileCard />
        <PetsCard />
        <NotificationsCard />
      </div>
      <div className='dashboard__requests'></div>
    </div>
  );
}

export default Dashboard;
