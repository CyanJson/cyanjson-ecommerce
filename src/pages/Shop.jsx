import { useEffect, useState } from "react";
import CardProduct from "../components/CardProduct";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const productsInCart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const getProducts = async () => {
        // fetch request from MySQl Database 
        const response = await fetch('http://localhost:3000/cyanjson-ecommerce/products');
        const json = await response.json();
        setProducts(json);
    }

    const handleAddToCart = (product) => dispatch(addToCart(product));

    useEffect(() => {
        getProducts();
    }, [productsInCart]);

    return (
        <div className="shop">
            <div className="products">
                {products.map((item) => (
                    <CardProduct
                        key={item.id}
                        imageUrl={item.imageUrl}
                        brand={item.brand}
                        model={item.model}
                        price={item.price}
                        addToCart={() => handleAddToCart(item)}
                    />
                ))}
            </div> 
        </div>
    )
}

export default Shop
