import './PetCard.scss'
function PetCard() {
    return (  
        <div className="pet_card">
            <img src="./dog image.png" alt="" />
            <div className="pet_info">
                <div className="pet_txt">
                    <p>Собака</p>
                    <p>Порода: </p>
                    <p>Группа крови: O(I) Rh-</p>
                    <p>Кличка: Собака</p>
                    <p>Возраст: 5 лет</p>
                    <p>Вес: 5 кг</p>
                </div>
                <div className="pet_btn">
                    <button>Информация о прививках</button>
                    <a href="#">Изменить данные</a>
                </div>
            </div>
        </div>
    );
}

export default PetCard;