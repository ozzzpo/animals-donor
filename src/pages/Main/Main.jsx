import Header from "../../components/common/Header/Header";
import Banner from "../../components/modules/Banner/Banner";
import Important from "../../components/modules/Important/Important";
import Donors from "../../components/modules/Donors/Donors";
import Footer from "../../components/modules/Footer/Footer";
import BaseKnow from "../../components/modules/BaseKnow/BaseKnow";
import "./main.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Main() {
  return (
    <div className='main'>
      <Header />
      <Banner />
      <Important />
      <Donors />
      <BaseKnow></BaseKnow>
      <Footer />
    </div>
  );
}

export default Main;
