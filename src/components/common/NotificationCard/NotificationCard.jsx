import './NotificationCard.scss'
function NotificationCard() {
    return (  
        <div className="not_card">
            <img className='not_img' src="./dog image.png" alt="" />
            <div className="not_info">
                <h4>Для: Собака</h4>
                <p>Напоминаем о донации</p>
                <div className='not_address'>
                    <div className='not_down'>
                        <img src="./gps.svg" alt="" />
                        <p>ул. Четаева, д. 8</p>
                    </div>
                    <div className='not_down'>
                        <img src="./time.svg" alt="" />
                        <p>12.03.2024</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotificationCard;