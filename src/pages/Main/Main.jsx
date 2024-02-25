import Header from "../../components/common/Header/Header";
import Banner from "../../components/modules/Banner/Banner";
import Important from "../../components/modules/Important/Important";
import Donors from "../../components/modules/Donors/Donors";
import Footer from "../../components/modules/Footer/Footer";
import BaseKnow from "../../components/modules/BaseKnow/BaseKnow";
import "./main.css";
import dog from "../../assets/images/dog image.svg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { tgApi } from "../../api/services/tg.service";
import Modal from "../../components/modules/Modal/Modal";
const customStyles = {
  content: {
    padding: 0,
    margin: 0,
    width: "1000px",
    height: "500px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
function Main() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    view: "",
  });
  function openModal() {
    setModalState((state) => ({
      ...state,
      view: "log in",
      isOpen: true,
    }));
  }
  const closeModal = () => {
    setModalState((state) => ({
      ...state,
      isOpen: false,
      view: "",
    }));
  };
  const changeView = (view) => {
    setModalState((state) => ({
      ...state,
      view,
    }));
  };
  return (
    <div className='main'>
      <Header setModalState={setModalState} />
      <Banner openModal={openModal} />
      <Important />
      <Donors />
      <BaseKnow />
      <Footer />
      <Modal
        modalState={modalState}
        closeModal={closeModal}
        changeView={changeView}
        customStyles={customStyles}
      />
    </div>
  );
}

export default Main;
