import "./story.scss"
import cod from "./../img/fallout.jpg"
import pitt from "./../img/fallout2.webp"
import house1 from "./../img/house10.jpg";
import house2 from "./../img/houses11.jpg";
import house3 from "./../img/house12.webp";


// import story from "./../img/story-1.jpeg"

const Story = () => {
    return (
        <>
            <div className="story__pictures">
                <img src={house3} alt="fallout" className="story__img--1 img"></img>
                <img src={house1} className="story__img--2 img"></img>


            </div>
            <div className="story__content">
                <h3 className="heading-3"> Happy ending</h3>
                <h2 className="heading-2 heading-2--dark">&ldquo;best advice of&rdquo;</h2>
                <p className="story__text">loskdlk dopfoidiofi dofidu cvlkdl dkfkdofio dimdpo ioifodif duifoudi</p>
                <a href="#" className="story--btn">find your home</a>

            </div>
        </>
    )
}
export default Story;