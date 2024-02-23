import './substract.css'
function Substract({title, description, number}) {
    return (  
        <div className="substract">
            <img className='sub_img' src="./Subtract.png" alt="" />
            <div className='txt'>
                <h1>{title}</h1>
                <p>{description}</p>
                <h2>{number}</h2>
            </div>
        </div>
    );
}

export default Substract;