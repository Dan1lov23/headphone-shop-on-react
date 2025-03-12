import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBasketShopping} from "@fortawesome/free-solid-svg-icons";

const Product = ({ product, addToCart }) => {
    return (
        <div className="product">
            <img src={product.src} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}><FontAwesomeIcon icon={faBasketShopping} /></button>
        </div>
    );
};
export default Product;
