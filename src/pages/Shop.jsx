import { useEffect, useState } from "react";
import CardProduct from "../components/CardProduct";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const productsInCart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const getProducts = async () => {
        const response = await fetch('src/data/products.json');
        const json = await response.json();
        setProducts(json);
    }

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    }

    useEffect(() => {
        getProducts();
        console.log(productsInCart);
    }, [productsInCart]);

    return (
        <div className="shop">
            <div className="products">
                {products.map((product) => (
                    <CardProduct
                        key={product.id}
                        image={product.image}
                        brand={product.brand}
                        model={product.model}
                        price={product.price}
                        addToCart={() => handleAddToCart(product)}
                    />
                ))}
            </div> 
        </div>
    )
}

export default Shop
