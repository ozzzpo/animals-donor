import "./donors.css";
import DonorCard from "../../common/DonorCard/DonorCard";
function Donors() {
  return (
    <div className='donors' id='don'>
      <h1>Срочно нужны доноры!</h1>
      <div className='don_cards'>
        <DonorCard />
        <DonorCard />
        <DonorCard />
      </div>
    </div>
  );
}

export default Donors;
