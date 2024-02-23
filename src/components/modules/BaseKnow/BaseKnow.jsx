import './baseKnow.css'
function BaseKnow() {
    return (  
        <div className='base_kn'>
            <h1>База знаний</h1>
            <div className='base_kn_blocks'>
                <img src="./dog image.png" alt="" />
                <div className='base_four_blocks'>
                    <div className='base_two_blocks'>
                        <div className='block'>
                            <div className='bl_line'></div>
                            <h2>Как стать донором?</h2>
                            <p>В этом разделе вы найдете всю нужную информацию
о том, как стать донором и что для этого требуется.</p>
                            <a href="#">Более 40 отзывов других пользователей</a>
                            <div className='bl_line'></div>
                        </div>
                        <div className='block'>
                            <div className='bl_line'></div>
                            <h2>Где сдавать кровь?</h2>
                            <p>В этом разделе вы найдете всю нужную информацию
о том, где сдавать кровь и что для этого требуется.</p>
                            <a href="#">Более 40 отзывов других пользователей</a>
                            <div className='bl_line'></div>
                        </div>
                    </div>
                    <div className='base_two_blocks'>
                        <div className='block'>
                            <div className='bl_line'></div>
                            <h2>Как подготовиться?</h2>
                            <p>В этом разделе вы найдете всю нужную информацию
о подготовке к сдаче крови и узнаете, что для
этого требуется.</p>
                            <a href="#">Более 40 отзывов других пользователей</a>
                            <div className='bl_line'></div>
                        </div>
                        <div className='block'>
                            <div className='bl_line'></div>
                            <h2>Бонусы для доноров</h2>
                            <p>В этом разделе вы найдете всю нужную информацию
о бонусах для доноров и узнаете, что требуется для
их получения</p>
                            <a href="#">Более 40 отзывов других пользователей</a>
                            <div className='bl_line'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BaseKnow;