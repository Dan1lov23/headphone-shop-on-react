import './header.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/free-solid-svg-icons';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return (
        <>
            <div className="headerMain">
                <img src="https://img.freepik.com/free-vector/ear-headphones-falt-style_78370-1763.jpg"/>
                <div className="headerMainLogoTitle">
                    <h2>BestSound</h2>
                </div>
                <ul>
                    <li>
                        <Link to="/">главная</Link>
                    </li>
                    <li>
                        <Link to="/catalog">каталог</Link>
                    </li>
                    <li>
                        <Link to="/cart"><FontAwesomeIcon icon={faBasketShopping} /></Link>
                    </li>
                </ul>
            </div>
        </>
    )
}
