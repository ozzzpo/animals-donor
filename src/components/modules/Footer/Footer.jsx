import './footer.css'
import { useLocation } from 'react-router-dom';
function Footer() {
    const location = useLocation()
    return ( 
        <div className="footer">
            <div className="first_col">
                <p>Donor Search</p>
            </div>
            <div className="second_col">
                <div className="sec_sec_col">
                    <a href="/">Главная</a>
                    {location.pathname == '/' && <a href="#don">Нужны доноры</a>}
                    {location.pathname == '/' && <a href="#baz">База знаний</a>}
                </div>
                <div className="sec_sec_col">
                    <a href="/donor">Донорам</a>
                    <a href="/recipient">Реципиентам</a>
                    <a href="/help">Уход и подготовка</a>
                </div>
            </div>
            <div className="third_col">
                <p>+78(044)738-23-54</p>
                <p>hi@sitename.ru</p>
            </div>
        </div>
    );
}

export default Footer;