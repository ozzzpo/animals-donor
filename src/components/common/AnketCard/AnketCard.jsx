import './AnketCard.scss'
function AnketCard() {
    return (  
        <div className='don_card'>
            <div className="card_procent">
                <p>90%</p>
            </div>
            <img src="./cat image.png" alt="" />
            <div className='card_middle'>
                <div className='blood_type'>
                    <p>O(I) RH-</p>
                </div>
                <p>До 1 марта</p>
            </div>
            <div className='address'>
                <img src="./gps.png" alt="" />
                <p>г.Казань, ул. Четаева, д.8</p>
            </div>
            <button>Написать</button>
        </div>
    );
}

export default AnketCard;