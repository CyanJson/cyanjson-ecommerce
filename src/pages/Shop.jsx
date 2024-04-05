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
                {products.map((item) => (
                    <CardProduct
                        key={item.id}
                        image={item.image}
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
