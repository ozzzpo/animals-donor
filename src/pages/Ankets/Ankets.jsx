import Header from "../../components/common/Header/Header";
import Footer from "../../components/modules/Footer/Footer";
import "./Ankets.scss";
import { Link, useLocation } from "react-router-dom";
import AnketCard from "../../components/common/AnketCard/AnketCard";
import { useEffect, useState } from "react";
import AnketsModal from "./AnketsModal";
import { useDispatch, useSelector } from "react-redux";
import { matchDonors, matchRecipients } from "../../store/pets/actions";
function Ankets() {
  const location = useLocation();
  const meLocation = location.state;
  const [me, setMe] = useState(meLocation);
  const [isOpen, setIsOpen] = useState(false);
  const [choosedPet, setChoosedPet] = useState({});
  const dispatch = useDispatch();
  console.log(me);
  useEffect(() => {
    if (me === "donor") {
      dispatch(matchRecipients(choosedPet.id));
    } else if (me === "recipient") {
      dispatch(matchDonors(choosedPet.id));
    }
  }, [dispatch, me]);
  const matchingPets = useSelector((state) => state.pets.matchingPets);
  console.log(matchingPets);
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
              {choosedPet?.name ? (
                <div className='choosed-pet'>
                  <p>{choosedPet.name}</p>
                  <p>{choosedPet.breed}</p>
                  <p>{choosedPet.pet_type.name}</p>
                </div>
              ) : (
                ""
              )}
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
            <div className='anketsCards'></div>
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
