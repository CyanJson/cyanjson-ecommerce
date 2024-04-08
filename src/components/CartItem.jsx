import { useState } from "react";

const CartItem = ({image, brand, model, price, onRemove}) => {
    const [quantity, setQuantity] = useState(1);

    const increase = () => setQuantity(quantity + 1);
    const decrease = () => setQuantity(quantity > 1 ? quantity - 1 : quantity);

    const totalPayment = () => alert(`Total payment: $${price * quantity}`);

    return (
        <div className="cart-item-component">
            <div className="cart-item">
                <div className="item-image">
                    <img src={image} alt="img"></img>
                </div>
                <div className="item-details">
                    <p className="item-model">{model}</p>
                    <p className="item-brand">{brand}</p>
                    <span className="item-price">${price * quantity}</span>
                    <div className="buttons">
                        <div className="quantity">
                            <button className="btn-increase" onClick={increase}>+</button>
                            <span className="quantity-value">{quantity}</span>
                            <button className="btn-decrease" onClick={decrease}>-</button>
                        </div>
                        <button className="placeOrder-btn" onClick={totalPayment}>place order</button>
                    </div>
                </div>
            </div>
            <div className="remove-item">
                <button className="remove-btn" onClick={onRemove}>x</button>
            </div>
        </div>
    )
}
  
export default CartItem
  