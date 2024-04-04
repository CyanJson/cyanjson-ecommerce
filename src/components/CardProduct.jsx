
const CardProduct = ({image, brand, model, price, addToCart}) => {
    return (
        <div className="card-product">
            <div className="card-image">
                <img src={image} alt="img"></img>
            </div>
            <div className="product-details">
                <p className="product-model">{model}</p>
                <p className="product-brand">{brand}</p>
                <span className="product-price">${price}</span>
            </div>
            <button className="addToCart-btn" onClick={addToCart}>add to cart</button>
        </div>
    )
}
  
export default CardProduct