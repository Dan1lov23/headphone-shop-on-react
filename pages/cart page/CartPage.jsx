import './cart page.css';

const CartPage = ({ cart, removeFromCart, addToCart, counter }) => {
    const totalSum = cart.reduce((acc, product) => acc + product.sum, 0);

    return (
        <div className="cartPageMain">
            <div className="cartPageMainTitle">
                <h1>Корзина</h1>
                <div id="cartSum">Общая сумма: {totalSum} руб.</div>
                {counter > 0? (
                    <div id="allProduct">Всего товаров - {counter}</div>
                ) : null}
            </div>
            {cart.length === 0 ? (
                <p className="cartPageMainTitleCheck">Корзина пуста.</p>
            ) : (
                cart.map(product => (
                    <div className="cartPageProductMain" key={product.id}>
                        <div className="cartPageProduct">
                            <div className="itemTitle">
                                <h2>{product.name}</h2>
                            </div>
                            <p>Цена: {product.podSum} руб.</p>
                            <p>Количество: {product.quantity}</p>
                            <img src={product.src} alt="" />
                            <p></p>
                            <button onClick={() => addToCart(product, product.id)}>+</button>
                            <button onClick={() => removeFromCart(product.id)}>-</button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default CartPage;
