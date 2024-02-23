import './header.css'
function Header() {
    return ( 
        <>
        <div className="header">
            <div className="logo">
                logo
            </div>
            <div className="unit">
                <a href="#">Нужны доноры</a>
                <p>|</p>
                <a href="#">Топ доноров</a>
                <p>|</p>
                <div class="dropdown">
                    <p class="dropbtn">Важная информация</p>
                    <div class="dropdown-content">
                        <a href="#">Ссылка 1</a>
                        <a href="#">Ссылка 2</a>
                        <a href="#">Ссылка 3</a>
                    </div>
                </div>
            </div>
            <div className="logIn">
                <a href="#">Войти</a>
                <p>/</p>
                <a href="#">Регистрация</a>
            </div>
        </div>
        <div className='headLine'></div>
        </>
    );
}

export default Header;