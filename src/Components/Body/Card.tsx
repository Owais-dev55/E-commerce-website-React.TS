import { useContext } from "react";
import "./Card.css";
import { cart } from "../../utilities/Context";
import { Products } from "../../utilities/Types";
import {v4 as uuidv4} from 'uuid'

export const Card = ({ id, title, description, price, url }: Products) => {
  const { setCount, count, cartItems, setCartItems } = useContext(cart);

  const addItemToCart = (item: Products) => {
    const newItem = { ...item, id: uuidv4(), quantity: 1 };
    setCartItems([...cartItems, newItem]);
    setCount(count + 1);
  };
  
  return (
    <div className="popular-in-women">
      <div className="card">
        <div className="img-box">
          <img src={url} className="card-img-top" alt="Card image cap" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}.</p>
          <div className="card-header">Featured</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">${price}</li>
          </ul>
          <button
            onClick={() => {
              addItemToCart({ id, title, description, price, url,quantity:1 });
            }}
            className="btn btn-primary"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
