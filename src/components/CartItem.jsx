
const CartItem = () => {
    return (
      <div className="cart-items">
          <div className="cart-item">
              <div className="item-image">
                  <img src="https://image14.photobiz.com/9488/8_20190710140611_10464503_large.jpg" alt="img"></img>
              </div>
              <div className="item-details">
                  <p className="item-model">Professional Red Black Snicker</p>
                  <p className="item-brand">nike</p>
                  <span className="item-price">$100</span>
                  <div className="buttons">
                      <div className="quantity">
                          <button className="btn-increase">+</button>
                          <span className="quantity-value">1</span>
                          <button className="btn-decrease">-</button>
                      </div>
                      <button className="placeOrder-btn">place order</button>
                  </div>
              </div>
          </div>
      </div>
    )
  }
  
  export default CartItem
  