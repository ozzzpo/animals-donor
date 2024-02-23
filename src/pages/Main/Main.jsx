import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Header from "../../components/common/Header/Header";
import Banner from "../../components/module/Banner/Banner";
import Important from "../../components/module/Important/Important";
import Donors from "../../components/module/Donors/Donors";
import './main.css'


function Main() {
  return (
    <div className="main">
      <Header/>
      <Banner/>
      <Important/>
      <Donors/>
    </div>
  );
}

export default Main;
