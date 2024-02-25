import "./donors.css";
import DonorCard from "../../common/DonorCard/DonorCard";
import { useDispatch, useSelector } from "react-redux";
import { getFirstActiveSearchCards } from "../../../store/searchCards/actions";
import { useEffect } from "react";
function Donors() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFirstActiveSearchCards());
  }, [dispatch]);
  const donors = useSelector((state) => state.searchCards.lastSearchCards);
  return (
    <div className='donors' id='don'>
      <h1>Срочно нужны доноры!</h1>
      <div className='don_cards'>
        {donors?.map((donor) => {
          return <DonorCard donor={donor} key={donor.id} />;
        })}
      </div>
    </div>
  );
}

export default Donors;
