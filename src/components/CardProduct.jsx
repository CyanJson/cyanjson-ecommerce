import { useState } from "react"

const CardProduct = ({imageUrl, brand, model, price, addToCart}) => {
    const [added, setAdded] = useState(false);

    const handleClick = () => {
        addToCart();
        setAdded(true);
    }

    return (
        <div className="card-product">
            <div className="card-image">
                <img src={imageUrl} alt="img"></img>
            </div>
            <div className="product-details">
                <p className="product-model">{model}</p>
                <p className="product-brand">{brand}</p>
                <span className="product-price">${price}</span>
            </div>
            <button 
                className={added ? "addedToCart-btn" : "addToCart-btn"}
                disabled={added} 
                onClick={handleClick}
            >
                {added ? 'added' : 'add to cart'}
            </button>
        </div>
    )
}
  
export default CardProduct