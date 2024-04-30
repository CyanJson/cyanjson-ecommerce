import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { removeFromCart } from "../redux/cartSlice"
import CartItem from "../components/CartItem"

const Cart = () => {
    const productsInCart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    useEffect(() => {
        console.log(productsInCart);
    }, [productsInCart]);

    return (
        <div className="cart-items">
            {productsInCart.length === 0 ?
                <div className="no-items">No items</div>
                :
                productsInCart.map((item) => (
                    <CartItem
                        key={item.id}
                        imageUrl={item.imageUrl}
                        brand={item.brand}
                        model={item.model}
                        price={item.price}
                        onRemove={() => handleRemove(item.id)}
                    />
                ))
            }
        </div>
    )
}

export default Cart