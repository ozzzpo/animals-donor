import './donorCard.css'
function DonorCard() {
    return (  
        <div className='don_card'>
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
        </div>
    );
}

export default DonorCard;