import Header from "../../components/common/Header/Header";
import Footer from "../../components/modules/Footer/Footer";
import './Ankets.scss'
import { Link } from "react-router-dom";
import AnketCard from "../../components/common/AnketCard/AnketCard";
function Ankets() {
    return (  
        <>
            <Header></Header>
            <div className="razdel_ankets">
                <div className="center_razdel">
                    <Link className="link_arrow" to='/'><img className='arrow' src="./arrow-left.svg" alt="" /></Link>
                    <h1>ПОДБОР АНКЕТ</h1>
                    <div className="ank_btns">
                        <div className="btn_up">
                            <button>Добавить животного</button>
                        </div>
                        <div className="btn_down">
                            <button>Искать донора</button>
                            <button>Искать реципиента</button>
                        </div>
                    </div>
                    <div className="anketsBlock">
                        <h2>Доноры/Реципиенты</h2>
                        <div className="anketsCards">
                            <AnketCard></AnketCard>
                            <AnketCard></AnketCard>
                            <AnketCard></AnketCard>
                            <AnketCard></AnketCard>
                            <AnketCard></AnketCard>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}

export default Ankets;