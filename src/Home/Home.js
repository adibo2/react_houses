import "./home.scss"
import { AiOutlineHeart } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BiMale } from "react-icons/bi"
import { TbChartArea } from "react-icons/tb";
import { GiPriceTag } from "react-icons/gi"
const Home = (props) => {
    return (
        <div className="homes">
            {
                props.maisons.map((maison) => (
                    <>
                        <div className="home" key={maison.id}>
                            <img src={maison.img} className="home__img"></img>
                            <AiOutlineHeart className="home__like"></AiOutlineHeart>
                            <h5 className="home__name">beautiful houses</h5>
                            <div className="home__location">
                                <GoLocation className="home__location-icon"></GoLocation>
                                <p>USA</p>
                            </div>
                            <div className="home__rooms">
                                <BiMale className="home__rooms-icon"></BiMale>
                                <p>5 rooms</p>
                            </div>
                            <div className="home__area">
                                <TbChartArea className="home__area-icon"></TbChartArea>
                                <p>350m<sup>2</sup></p>
                            </div>
                            <div className="home__price">
                                <GiPriceTag className="home__price-icon"></GiPriceTag>
                                <p>240</p>
                            </div>
                            <button className="btn home__button">Contact realtor</button>
                        </div>

                    </>
                ))
            }



        </div>
    )
}
export default Home;