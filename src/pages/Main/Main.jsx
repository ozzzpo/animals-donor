import Header from "../../components/common/Header/Header";
import Banner from "../../components/modules/Banner/Banner";
import Important from "../../components/modules/Important/Important";
import Donors from "../../components/modules/Donors/Donors";
import Footer from "../../components/module/Footer/Footer";
import BaseKnow from "../../components/modules/BaseKnow/BaseKnow";
import "./main.css";
import { useState } from "react";

function Main() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='main'>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Banner />
      <Important />
      <Donors />
      <BaseKnow></BaseKnow>
      <Footer />
    </div>
  );
}

export default Main;
