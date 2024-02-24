import './baseKnow.css'
import { Link } from 'react-router-dom';
function BaseKnow() {
    return (  
        <div id='baz' className='base_kn'>
            <h1>База знаний</h1>
            <div className='base_kn_blocks'>
                <img src="./dog image.png" alt="" />
                <div className='base_four_blocks'>
                    <div className='base_two_blocks'>
                        <a href="/donor" className='block'>
                            <div className='bl_line'></div>
                            <h2>Кто может стать донором?</h2>
                            <p>В этом разделе вы найдете всю нужную информацию
о том, кто может стать донором и требования к донору.</p>
                            <div className='bl_line'></div>
                        </a>
                        <a href='/donor' className='block'>
                            <div className='bl_line'></div>
                            <h2>Как происходит процедура донации?</h2>
                            <p>В этом разделе вы найдете всю нужную информацию
о том, как происходит процедура сдачи крови и что для этого требуется.</p>
                            <div className='bl_line'></div>
                        </a>
                    </div>
                    <div className='base_two_blocks'>
                        <a href='/recipient' className='block'>
                            <div className='bl_line'></div>
                            <h2>Чем опасно привлечение доноров со стороны?</h2>
                            <p>В этом разделе вы найдете всю информацию о том, почему опасно привлекать сторонних доноров
                                и что лучше предпринимать.
                            </p>
                            <div className='bl_line'></div>
                        </a>
                        <a href='/help' className='block'>
                            <div className='bl_line'></div>
                            <h2>Возможные осложнения</h2>
                            <p>В этом разделе вы найдете всю информацию о возможных осложнениях после гемотрансфузии.</p>
                            <div className='bl_line'></div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BaseKnow;