import "./feature.scss"
import { IoIosGift } from "react-icons/io";
const Features = (props) => {

    return (
        <section className="features">
            {
                props.donnees.map((done) => (
                    <div className="feature" key={done.id}>
                        <IoIosGift className="feature__icon"></IoIosGift>
                        <h4 className="heading-4 heading-4--dark" >{done.ville}</h4>
                        <p className="feature__text">{done.text}</p>

                    </div>
                ))
            }


        </section>
    )
}
export default Features;


/**
 <div className="feature">
                <IoIosGift size="4.5rem" className="feature__icon"></IoIosGift>
                <h4 className="heading-4 heading-4--dark">World best fo</h4>
                <p className="feature__text">loerem elelrler electicite pour les enf</p>
            </div>
            <div className="feature">
                <IoIosGift size="4.5rem" className="feature__icon"></IoIosGift>
                <h4 className="heading-4 heading-4--dark">World best fo</h4>
                <p className="feature__text">loerem elelrler electicite pour les enf</p>
            </div>
            <div className="feature">
                <IoIosGift size="4.5rem" className="feature__icon"></IoIosGift>
                <h4 className="heading-4 heading-4--dark">World best fo</h4>
                <p className="feature__text">loerem elelrler electicite pour les enf</p>
            </div>
            <div className="feature">
                <IoIosGift size="4.5rem" className="feature__icon"></IoIosGift>
                <h4 className="heading-4 heading-4--dark">World best fo</h4>
                <p className="feature__text">loerem elelrler electicite pour les enf</p>
            </div>
            <div className="feature">
                <IoIosGift size="4.5rem" className="feature__icon"></IoIosGift>
                <h4 className="heading-4 heading-4--dark">World best fo</h4>
                <p className="feature__text">loerem elelrler electicite pour les enf</p>
            </div>
 */