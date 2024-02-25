import Header from "../../components/common/Header/Header";
import Footer from "../../components/modules/Footer/Footer";
import "./Ankets.scss";
import { Link, useLocation } from "react-router-dom";
import AnketCard from "../../components/common/AnketCard/AnketCard";
import { useState } from "react";
import AnketsModal from "./AnketsModal";
function Ankets() {
  const location = useLocation();
  const meLocation = location.state;
  const [me, setMe] = useState(meLocation);
  const [isOpen, setIsOpen] = useState(false);
  const [choosedPet, setChoosedPet] = useState({});
  console.log(choosedPet);
  return (
    <>
      <Header />
      <div className='razdel_ankets'>
        <div className='center_razdel'>
          <Link className='link_arrow' to='/'>
            <img className='arrow' src='./arrow-left.svg' alt='' />
          </Link>
          <h1>ПОДБОР АНКЕТ</h1>
          <div className='ank_btns'>
            <div className='btn_up'>
              {choosedPet?.name && <div className='choosed-pet'>
              {
        choosedPet?.pet_type?.name == 'Кошка' ? 
        <img src='./cat_skelet.png' alt='' /> : 
        choosedPet?.pet_type?.name == 'Собака' ?
        <img src='./dog_skelet.png' alt='' /> :
        choosedPet?.pet_type?.name == 'Грызун' ? 
        <img src='./grizun_skelet.png' alt='' /> :
        choosedPet?.pet_type?.name == 'Птица' ? 
        <img src='./bird_skelet.png' alt='' /> :
        <img src='./ekzo_skelet.png' alt='' /> 
      }         
      <div className="choosed_info">
                <p>Кличка: {choosedPet?.name}</p>
                <p>Порода: {choosedPet?.breed}</p>
                <p>{choosedPet?.pet_type.name}</p>
                </div>
              </div>}
              <button onClick={() => setIsOpen(true)}>
                Добавить животного
              </button>
              
            </div>
            <div className='btn_down'>
              <button
                style={
                  me === "recipient"
                    ? {
                        backgroundColor: "#678CD3",
                        color: "#F1F7FF",
                        cursor: "pointer",
                      }
                    : {}
                }
                onClick={() => setMe("recipient")}
              >
                Искать донора
              </button>
              <button
                style={
                  me === "donor"
                    ? {
                        backgroundColor: "#678CD3",
                        color: "#F1F7FF",
                        cursor: "pointer",
                      }
                    : {}
                }
                onClick={() => setMe("donor")}
              >
                Искать реципиента
              </button>
            </div>
          </div>
          <div className='anketsBlock'>
            <h2>
              {me
                ? me === "donor"
                  ? "Реципиенты"
                  : "Доноры"
                : "Реципиенты/Доноры"}
            </h2>
            <div className='anketsCards'>
              <AnketCard></AnketCard>
              <AnketCard></AnketCard>
              <AnketCard></AnketCard>
              <AnketCard></AnketCard>
              <AnketCard></AnketCard>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
      <AnketsModal
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        setChoosedPet={setChoosedPet}
      />
    </>
  );
}

export default Ankets;
