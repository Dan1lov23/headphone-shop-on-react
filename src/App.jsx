import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { StrictMode, useState } from 'react';
import Portal from '../pages/portal page/Portal';
import Home from '../pages/home page/Home';
import ProductList from "../pages/Product List page/ProductList.jsx";
import CartPage from "../pages/cart page/CartPage";
import Header from "../pages/style components/Header/header.jsx";

function App() {
    const [cart, setCart] = useState([]);
    const [totalSum, setTotalSum] = useState(0);
    const [counter, setCounter] = useState(0); // Изначально 0, так как в корзине нет продуктов

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(item => item.id === product.id);

            if (existingItem) {
                // Если продукт уже есть в корзине, увеличиваем его количество
                return prevCart.map(item =>
                    item.id === product.id
                        ? {
                            ...item,
                            quantity: item.quantity + 1,
                            sum: item.sum + product.price,
                        }
                        : item
                );
            } else {
                // Если продукта нет в корзине, добавляем его
                return [...prevCart, { ...product, quantity: 1, sum: product.price }];
            }
        });

        // Обновляем общую сумму и счетчик
        setTotalSum(prevTotal => prevTotal + product.price);
        setCounter(prevCounter => prevCounter + 1); // Увеличиваем счетчик на 1
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.id === productId);

            if (existingProduct) {
                if (existingProduct.quantity > 1) {
                    // Если количество товара больше 1, уменьшаем его количество
                    return prevCart.map(item =>
                        item.id === productId
                            ? {
                                ...item,
                                quantity: item.quantity - 1,
                                sum: item.sum - (item.sum / item.quantity), // Уменьшаем сумму на стоимость одного элемента
                            }
                            : item
                    );
                } else {
                    // Если количество товара 1, удаляем его из корзины
                    return prevCart.filter(item => item.id !== productId);
                }
            }

            return prevCart; // Если товар не найден, возвращаем прежнюю корзину
        });

        // Обновляем общую сумму и счетчик после удаления
        setTotalSum(prevTotal => {
            const itemToRemove = cart.find(item => item.id === productId);
            if (itemToRemove) {
                const newTotal = prevTotal - itemToRemove.price; // Уменьшаем общую сумму на цену удаляемого элемента
                return newTotal;
            }
            return prevTotal; // Если товар не найден, возвращаем прежнюю сумму
        });

        // Уменьшаем счетчик на 1, если продукт был удален
        setCounter(prevCounter => {
            const itemToRemove = cart.find(item => item.id === productId);
            if (itemToRemove) {
                return prevCounter - 1; // Уменьшаем счетчик на 1
            }
            return prevCounter; // Если товар не найден, возвращаем прежний счетчик
        });
    };

    return (
        <>
            <BrowserRouter>
                <StrictMode>
                    <Header />
                </StrictMode>
                <Routes>
                    <Route path="portal" element={<Portal />} />
                    <Route path="/" element={<Home />} />
                    <Route exact path="/catalog" element={<ProductList addToCart={addToCart} />} />
                    <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} addToCart={addToCart} counter={counter} />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
