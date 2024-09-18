import "./Cart.css";
import { useContext } from "react";
import { cart } from "../../utilities/Context";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const { cartItems, setCartItems, setCount } = useContext(cart);

  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity!,
      0
    );
  };

  const handleRemoveItem = (itemId: number) => {
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== itemId
    );
    setCartItems(updatedCartItems);
    updateCartCount(updatedCartItems);
  };

  const handleUpdateQuantity = (itemId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveItem(itemId);
      return;
    }
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.id === itemId ? { ...cartItem, quantity: newQuantity } : cartItem
    );
    setCartItems(updatedCartItems);
    updateCartCount(updatedCartItems);
  };

  const updateCartCount = (items: typeof cartItems) => {
    const newCount = items.reduce((total, item) => total + item.quantity!, 0);
    setCount(newCount);
  };

  const totalAmount = calculateTotalAmount();

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {cartItems.map((item, index) => (
        <div key={index} className="cartitems-format cartitems-format-main">
          <img src={item.url} alt={item.title} />
          <p>{item.title}</p>
          <p>${item.price}</p>
          <div className="quantity-controls">
            <button
              onClick={() => handleUpdateQuantity(item.id, item.quantity! - 1)}
            >
              -
            </button>
            <p className="quan">{item.quantity}</p>
            <button
              onClick={() => handleUpdateQuantity(item.id, item.quantity! + 1)}
            >
              +
            </button>
          </div>
          <p>Total: ${(item.price * item.quantity!).toFixed(2)}</p>
          <i
            className="fa-solid fa-trash"
            onClick={() => handleRemoveItem(item.id)}
          ></i>
        </div>
      ))}
      <hr />
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal:</p>
              <p>${totalAmount.toFixed(2)}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total:</h3>
              <h3>${totalAmount.toFixed(2)}</h3>
            </div>
          </div>
          <NavLink to="/Checkout">
            <button className="btn btn-success">Checkout</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Cart;
