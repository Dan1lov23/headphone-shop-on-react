import Product from '../product page page/Product.jsx';
import './product list.css';

const products = [
    { id: 1, name: 'Beyerdynamic DT 770 PRO 250 ohm', price: 100, src: "https://doctorhead.ru/upload/resize_cache/iblock/4ed/h6dcenytwok67mscimrdo0ql2iwecyuu/688_688_1/1C_10904_Beyerdynamic_DT_770_PRO_000.jpg"},
    { id: 2, name: 'Sony MDR-7506', price: 200, src: "https://doctorhead.ru/upload/dev2fun.imagecompress/webp/resize_cache/iblock/dcc/688_688_1/sony_mdr_7506_1.webp"},
    { id: 3, name: 'Beyerdynamic DT 990 PRO / 250 ohm', price: 300, src: "https://doctorhead.ru/upload/dev2fun.imagecompress/webp/resize_cache/iblock/c81/2hih5hou877ocxefdnni6qpbzns3dsvs/688_688_1/beyerdynamic_dt_990_pro_1.webp"},
    { id: 4, name: 'Sennheiser HD 25', price: 400, src: "https://doctorhead.ru/upload/resize_cache/iblock/798/688_688_1/b2456d2e08f092dd5d2e07c9a413a5d6.jpg"},
    { id: 5, name: 'Audio-Technica ATH-M40x', price: 500, src: "https://doctorhead.ru/upload/resize_cache/iblock/4c9/03btw7rvx2pf06y8k0d2kdhijdkvjqzu/688_688_1/audio_technica_ath_m40x.jpg"},
    { id: 6, name: 'Beyerdynamic DT 990 PRO Black Limited Edition', price: 600, src: "https://doctorhead.ru/upload/resize_cache/iblock/cc8/enepb1jnoo13uvrirpswm1rhl1k09frb/688_688_1/beyerdynamic_dt_990_pro_limited_black_edition_80_ohm_2.jpg"}
];

const ProductList = ({ addToCart }) => {
    return (
        <div className="ProductListMain">
            <div className="ProductListTitle">
                <h1>Каталог товаров</h1>
            </div>
            {products.map((product) => (
                <Product key={product.id} product={product} addToCart={addToCart} />
            ))}
        </div>
    );
};

export default ProductList;
