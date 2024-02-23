import Header from "../../components/common/Header/Header";
import Banner from "../../components/modules/Banner/Banner";
import Important from "../../components/modules/Important/Important";
import Donors from "../../components/modules/Donors/Donors";
import Footer from "../../components/module/Footer/Footer";
import "./main.css";
import { useState } from "react";

function Main() {
  return (
    <div className='main'>
      <Header />
      <Banner />
      <Important />
      <Donors />
      <Footer />
    </div>
  );
}

export default Main;
