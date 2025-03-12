import './home.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeadphonesSimple} from "@fortawesome/free-solid-svg-icons";
import Header from "../style components/Footer/Footer.jsx"

export default function Home() {
    return (
        <>
            <div className="homeMain">
                <div className="homeTitle">
                    <h1>BestSound <FontAwesomeIcon icon={faHeadphonesSimple}/></h1>
                </div>
                <div className="homeImg">
                    <a href="/catalog">
                        <img
                            src="https://bogatyr.club/uploads/posts/2023-03/thumbs/1678090073_bogatyr-club-p-naushniki-na-stole-foni-pinterest-61.jpg"/>
                        <img src="https://ir.ozone.ru/s3/multimedia-c/c1000/6613520232.jpg"/>
                        <img src="https://i.pinimg.com/736x/83/68/96/8368963569a68d5487d934afffef4861.jpg"/>
                    </a>
                </div>
            </div>
            <Header/>
        </>
    )
}
