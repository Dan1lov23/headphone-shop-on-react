import {faHeadphonesSimple} from "@fortawesome/free-solid-svg-icons";
import {faTelegram} from "@fortawesome/free-brands-svg-icons";
import {faSquareXTwitter} from "@fortawesome/free-brands-svg-icons";
import {faAmazon} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './footer.css';

export default function Footer() {
    return (
        <>
            <div className="mainFooter">
                <div className="footerTitle">
                    <h1>BestSound <FontAwesomeIcon icon={faHeadphonesSimple}/></h1>
                </div>
                <div className="footerContactsTitle">
                    <h1>Наши контакты</h1>
                </div>
                <div className="footerContacts">
                    <ul>
                        <li>
                            <a href="">
                                <FontAwesomeIcon icon={faTelegram}/>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <FontAwesomeIcon icon={faSquareXTwitter}/>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <FontAwesomeIcon icon={faAmazon}/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footerEnd">
                    <h2>Все права защищены</h2>
                    <p>@ 2025</p>
                </div>
            </div>
        </>
    )
}
