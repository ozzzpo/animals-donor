import "./banner.css";
import dog from "../../../assets/images/dog image.svg";
function Banner() {
  return (
    <div className='banner'>
      <div className='ban_txt'>
        <div className='ban_txt_up'>
          <p>Сообщество доноров крови</p>
          <h1>Donor Search</h1>
          <p>
            Как и у людей, у животных порой необходимо донорство. Эта процедура
            спасает многих кошек и собак, продлевает их жизнь
          </p>
        </div>
        <div className='ban_btn'>
          <button>Сдать кровь</button>
          <button>Получить помощь</button>
        </div>
      </div>
      <div className='ban_img'>
        <img src={dog} alt='' />
        <img src='./cat image.svg' alt='' />
      </div>
    </div>
  );
}

export default Banner;
