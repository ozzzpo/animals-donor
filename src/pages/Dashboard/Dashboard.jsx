import React from "react";
import Header from "../../components/common/Header/Header";
import ProfileCard from "../../components/modules/ProfileCard/ProfileCard";
import PetsCard from "../../components/modules/PetsCard/PetsCard";
import NotificationsCard from "../../components/modules/NotificationsCard/NotificationsCard";
import RequestCard from "../../components/common/RequestCard/RequestCard";
import Footer from "../../components/modules/Footer/Footer";
import './Dashboard.scss'

function Dashboard() {
  return (
    <div className='dashboard'>
      <Header />
      <div className='dashboard__main'>
        <ProfileCard />
        <NotificationsCard />
        <PetsCard />
      </div>
      <div className='dashboard__requests'>
        <h2>Мои запросы на донорство</h2>
        <div className="req_cards">
          <RequestCard />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Dashboard;
