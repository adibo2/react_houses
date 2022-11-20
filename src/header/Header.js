import "./header.scss"
import logo from "./../img/logo.jpg"
import PS from "./../img/logo1.png"
import xbox from "./../img/xbox.png"
import l1 from "./../img/logo-bbc.png"
import l2 from "./../img/logo-bi.png";
import l3 from "./../img/logo-forbes.png";
import l4 from "./../img/logo-techcrunch.png"
const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="Nexter logo" class="header__logo"></img>
            <h3 class="heading-3">Your own home:</h3>
            <h1 class="heading-1">The ultimate personal freedom</h1>
            <button class="btn header__btn">View our properties</button>
            <div class="header__seenon-text">Seen on</div>
            <div class="header__seenon-logos">
                <img src={l1} alt="Seen on logo 1" />
                <img src={l2} alt="Seen on logo 2" />
                <img src={l3} alt="Seen on logo 3" />
                <img src={l4} alt="Seen on logo 4" />
            </div>

        </div>
    )
}
export default Header;