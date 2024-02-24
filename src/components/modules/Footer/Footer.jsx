import './footer.css'
function Footer() {
    return (  
        <div className="footer">
            <div className="first_col">
                <p>Donor Search</p>
                <div className="society">
                    <a href="#"><img src="./Instagram.png" alt="" /></a>
                    <a href="#"><img src="./facebook.png" alt="" /></a>
                    <a href="#"><img src="./Twitter.png" alt="" /></a>
                </div>
                <div className="privacy">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms & Conditions</a>
                </div>
            </div>
            <div className="second_col">
                <div className="sec_sec_col">
                    <a href="#">Главная</a>
                    <a href="#">Нужны доноры</a>
                    <a href="#">Топ доноров</a>
                </div>
                <div className="sec_sec_col">
                    <a href="#">Донорам</a>
                    <a href="#">Реципиентам</a>
                    <a href="#">Уход и подготовка</a>
                </div>
                <div className="sec_sec_col">
                    <a href="#">База знаний</a>
                    <a href="#">Личный кабинет</a>
                    <a href="#">Контакты</a>
                </div>
            </div>
            <div className="third_col">
                <p>+38(044)738-23-54</p>
                <p>hi@sitename.ru</p>
                <div className="privacy">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms & Conditions</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;