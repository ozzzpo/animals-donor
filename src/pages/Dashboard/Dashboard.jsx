import React, { useEffect } from "react";
import Header from "../../components/common/Header/Header";
import ProfileCard from "../../components/modules/ProfileCard/ProfileCard";
import PetsCard from "../../components/modules/PetsCard/PetsCard";
import NotificationsCard from "../../components/modules/NotificationsCard/NotificationsCard";
import RequestCard from "../../components/common/RequestCard/RequestCard";
import Footer from "../../components/modules/Footer/Footer";
import "./Dashboard.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchPets } from "../../store/pets/actions";

function Dashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPets());
  }, []);
  const status = useSelector((state) => state.user.status);
  return (
    <div className='dashboard'>
      {status === "ready" ? (
        <>
          <Header />
          <div className='dashboard__main'>
            <ProfileCard />
            <PetsCard />
            <NotificationsCard />
          </div>
          <div className='dashboard__requests'>
            <h2>Мои запросы на донорство</h2>
            <div className='req_cards'>
              <RequestCard />
            </div>
          </div>
          <Footer />
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default Dashboard;
