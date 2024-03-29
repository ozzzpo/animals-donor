import Header from "../../components/common/Header/Header";
import Footer from "../../components/modules/Footer/Footer";
import './DonorInfo.scss'
function DonorInfo() {
    return (  
       <>
        <Header></Header>
        <div className="razdel">
            <h1>ДОНОРАМ</h1>
            <div className="links">
                <a href="#d1">Кто может стать донором?</a>
                <a href="#d2">Противопоказания к донорству</a>
                <a href="#d3">Процедура донации</a>
            </div>
            <div className="info">
                <div id='d1' className="info_block1">
                    <img src="./dog.png" alt="" />
                    <div className="info_txt">
                        <h2>Кто может стать донором?</h2>
                        <div className="info_txt_block">
                            <h3>Собака:</h3>
                            <p> 
                                • возраст 1-7 лет <br />
                                • вес от 20кг <br />
                                • вакцинирована (при этом необходимо предоставить  документы,
                                свидетельствующие о проведенной вакцинации) <br />
                                • прошедшая своевременную дегельминтизацию (при этом
                                необходимо предоставить документы, свидетельствующие о
                                проведенной дегельминтизации) <br />    
                                • клинически здорова (без внешних проявлений болезни)
                            </p>
                        </div>
                        <div className="info_txt_block">
                            <h3>Кошка:</h3>
                            <p> 
                                • возраст 1-7 лет <br />
                                • вес от 3кг <br />
                                • вакцинирована (при этом необходимо предоставить документы,
                                свидетельствующие о проведенной вакцинации) <br />
                                • прошедшая своевременную дегельминтизацию (при этом
                                необходимо предоставить документы, свидетельствующие о
                                проведенной дегельминтизации) <br />
                                • находящиеся на содержании в домашних условиях
                                клинически здорова (без внешних проявлений болезни) <br />
                            </p>
                        </div>
                    </div>
                </div>
                <div id='d2' className="info_block2">
                    <div className="info_txt">
                        <h2>Противопоказания к донорству</h2>
                        <div className="info_txt_block">
                            <h3>Абсолютные:</h3>
                            <p>
                                • животные с онкологическими заболеваниями <br />
                                • животные с аутоиммунными заболеваниями <br />
                                • животные с хроническими заболеваниями систем органов <br />
                                • носители инфекционных заболеваний
                            </p>
                        </div>
                        <div className="info_txt_block">
                            <h3>Временные:</h3>
                            <p>
                                • период эструса (течки), беременность и лактация <br />
                                • недавно (менее месяца назад) перенесенные заболевания и
                                • оперативные вмешательства <br />
                                • сдача крови возможна не ранее, чем через 2 недели после 
                                • последней вакцинации <br />
                                • сдача крови возможна каждые 2-3 месяца
                            </p>
                        </div>
                    </div>
                    <img src="./dog image.png" alt="" />
                </div>
                <div id='d3' className="info_block3">
                    <div className="info_imgs">
                        <img src="./birka.png" alt="" />
                        <img src="./mops.png" alt="" />
                        <img src="./dog_psih.png" alt="" />
                    </div>
                    <div className="info_txt">
                        <h2>Процедура донации</h2>
                        <div className="info_txt_block">
                            <p>• После регистрации питомца в программе донорства данные
заносятся в специальную программу учёта. Это позволяет
определять сроки следующей донации.</p>
                        </div>
                        <div className="info_txt_block">
                            <p>• Чтобы получить донорскую кровь, необходимо установить в вену
катетер и подсоединить его к пакету с консервантом.</p>
                        </div>
                        <div className="info_txt_block">
                            <p>• У собак обычно кровь забирается из яремной вены шеи или вен
конечностей, у кошек – преимущественно из яремной вены шеи. о
время донации пакет с поступающей в него донорской кровью
находится на специальных весах-мешалке, которые обеспечивают
постоянное и равномерное перемешивание крови и консерванта,
чтобы избежать образования сгустков.</p>
                        </div>
                        <div className="info_txt_block">
                            <p>• Также во время донации отдельно наполняется пробирка для
клинического анализа крови, ведь для последующего переливания
крови больному животному очень важно точное определение
гематокрита в донорской крови. <br /> 
Как только объем пакета достигнет необходимого значения, врач отсоединяет пакет с донорской кровью и извлекает катетер из вены донора.</p>
                        </div>
                        <div className="info_txt_block">
                            <p>• В зависимости от веса донора может забираться разный объем
крови, но обычно это 50-60 мл для кошек и 400-600 мл для собак.</p>
                        </div>
                        <div className="info_txt_block">
                            <p>• Вся процедура проводится с соблюдением правил асептики и
антисептики. Врачи работают в перчатках, используют только
одноразовые принадлежности для взятия крови, и тщательно
обрабатывают место инъекции иглы катетера дезинфицирующим
раствором.</p>
                        </div>
                        <div className="info_txt_block">
                            <p>• У кошек процедура занимает около 15-20 минут, у собак – в
зависимости от того, из какого сосуда берется кровь, но обычно не
более 30-40 минут.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
       </>
    );
}

export default DonorInfo;