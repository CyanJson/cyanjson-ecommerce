import { useSelector } from "react-redux"
import CartItem from "../components/CartItem"

const Cart = () => {
    const productsInCart = useSelector((state) => state.cart);

    return (
        <div className="cart-items">
            {productsInCart.length === 0 ?
                <div className="no-items">No items</div>
                :
                productsInCart.map((item) => (
                    <CartItem
                        key={item.id}
                        image={item.image}
                        brand={item.brand}
                        model={item.model}
                        price={item.price}
                    />
                ))
            }
        </div>
    )
}

export default Cart