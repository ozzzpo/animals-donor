import './requestCard.css'
function RequestCard() {
    return (  
        <div className='requestCard'>   
            <img src="./dog.png" alt="" />
            <div className='req_info'>
                <div className='bl_type'>
                    <p>Любая группа крови</p>
                    <div className='req_date'>
                        <p>До 2 марта</p>
                    </div>
                </div>
                <div className='req_base_info'>
                    <p>Собака</p>
                    <p>Порода: Пудель</p>
                    <p>Кличка: Собака</p>
                    <p>Возраст: 5 лет</p>
                    <p>Вес: 5 кг</p>
                </div>
                <div className="req_more_info">
                    <button>Узнать подробнее</button>
                    <button>Удалить</button>
                </div>
            </div>
        </div>
    );
}

export default RequestCard;