
import React from "react";
import "./CartPage.css";
import { useCart } from "../../context/cartContext";

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart } = useCart();
  
  

  return (
    <div className="cart-container">
      <h1 className="cart-title">Shopping Card</h1>

      {cartItems.length === 0 ? (
        <p className="empty-message">Card is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-row">
              <img src={item.image} alt={item.title} className="cart-image" />
              <div className="cart-details">
                <h2 className="cart-title">{item.title}</h2>
                <p className="cart-price">price: ${item.price}</p>
                <p className="cart-quantity">quantity: {item.quantity}</p>
              </div>
              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                حذف
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
