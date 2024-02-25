import "./donorCard.css";
import dog from "../../../assets/images/dog_skelet.png";
import cat from "../../../assets/images/cat_skelet.png";
import getTime from "../../../utils/getTime";
import { useNavigate } from "react-router-dom";
function DonorCard({ donor }) {
  const navigate = useNavigate();
  return (
    <div
      className='don_card'
      onClick={() => navigate("/request", { state: donor })}
    >
      <img
        src={donor.recipient.pet_type.id === 0 ? cat : dog}
        alt=''
        className='av'
      />
      <div className='card_middle'>
        <div className='blood_type'>
          <p>{donor?.recipient.blood_type}</p>
        </div>
        <p>До {getTime(donor.active_until)}</p>
      </div>
      <div className='address'>
        <img src='./gps.png' alt='' />
        <p>{donor.destination_point}</p>
      </div>
    </div>
  );
}

export default DonorCard;
