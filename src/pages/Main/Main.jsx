import Header from "../../components/common/Header/Header";
import Banner from "../../components/modules/Banner/Banner";
import Important from "../../components/modules/Important/Important";
import Donors from "../../components/modules/Donors/Donors";
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
    </div>
  );
}

export default Main;
