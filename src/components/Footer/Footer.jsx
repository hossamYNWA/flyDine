import LunchDiningIcon from "@mui/icons-material/LunchDining";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import "./footer.css";
const Footer = () => {
    return (
        <footer>
            <LunchDiningIcon className="icon" />
            <LunchDiningIcon className="icon" />
            <LunchDiningIcon className="icon" />
            <LunchDiningIcon className="icon" />
            <div className="container">
                <div>
                    <h5>customer support</h5>
                    <ul>
                        <li>
                            <a href="#">FAQ</a>
                        </li>
                        <li>
                            <a href="#">call center</a>
                        </li>
                        <li>
                            <a href="#">order tracking</a>
                        </li>
                        <li>
                            <a href="#">returns</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h5>our locations</h5>
                    <ul>
                        <li>
                            <a href="#">Montreal</a>
                        </li>
                        <li>
                            <a href="#">Dubai</a>
                        </li>
                        <li>
                            <a href="#">London</a>
                        </li>
                        <li>
                            <a href="#">Tanta</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h5>useful linkes</h5>
                    <ul>
                        <li>
                            <a href="#">About us</a>
                        </li>
                        <li>
                            <a href="#">Partners</a>
                        </li>
                        <li>
                            <a href="#">careers</a>
                        </li>
                        <li>
                            <a href="#">enquires</a>
                        </li>
                    </ul>
                </div>
                <div className="social">
                    <h5>follow us</h5>
                    <ul>
                        <li>
                            <a className="fb" href="#">
                                <FaFacebookSquare />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="x">
                                <FaSquareXTwitter />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="wb">
                                <IoLogoWhatsapp />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="copyrts">
                <p>
                    COPYRIGHTES<sup>&copy;</sup> 2024 all rightes reserved by
                    hossam mousa
                </p>
            </div>
        </footer>
    );
};

export default Footer;
