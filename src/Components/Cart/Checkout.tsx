import "./Checkout.css";
import mastercard from '../../images/mastercard-icon-2048x1286-s6y46dfh.png'
import visa from '../../images/purepng.com-visa-logologobrand-logoiconslogos-251519938794uqvcz.png'
import payonner from '../../images/Payoneer-New-Logo.png'
import Paypal from '../../images/PayPal-Logo.png'
import unionpay from '../../images/unionpay-international-vector-logo.png'

const Checkout = () => {
  const onsubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Order placed successfully");
  };
  return (
    <>
      <div className="checkout">
        <form onSubmit={onsubmit}>
          <div className="row2">
            <div className="col2">
              <h2 className="title2">Billing Address</h2>
              <div className="inputbox">
                <label htmlFor="fullName">full name:</label>
                <input
                  type="text"
                  id="fullName"
                  name="name"
                  placeholder="Mr You"
                  required
                />
              </div>
              <div className="inputbox">
                <label htmlFor="email">email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@you.com"
                  required
                />
              </div>
              <div className="inputbox">
                <label htmlFor="address">address :</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Apartment-Street-suit"
                  id="address"
                  required
                />
              </div>
              <div className="inputbox">
                <label htmlFor="city">city :</label>
                <input
                  type="text"
                  name="city"
                  placeholder="Hyderabad"
                  required
                  id="city"
                />
              </div>
              <div className="flex">
                <div className="inputbox">
                  <label htmlFor="state">state :</label>
                  <input
                    type="text"
                    name="state"
                    id="state"
                    placeholder="Pakistan"
                    required
                  />
                </div>
                <div className="inputbox">
                  <label htmlFor="zip-code">zip code :</label>
                  <input
                    type="number"
                    name="zip code"
                    id="zip-code"
                    placeholder="71000"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="col2">
              <h2 className="title2">Payment</h2>
              <div className="inputbox">
                cards accepted :
                <div className="cards">
                  <img
                    src={mastercard}
                    alt=""
                  />
                  <img
                    src={visa}
                    alt=""
                  />
                  <img
                    src={Paypal}
                    alt=""
                  />
                  <img
                    src={payonner}
                    alt=""
                  />
                  <img
                    src={unionpay}
                    alt=""
                  />
                </div>
              </div>
              <div className="inputbox">
                <label htmlFor="name-on-card">name on card:</label>
                <input
                  type="text"
                  name="name-on-card"
                  id="name-on-card"
                  placeholder="Mr You"
                  required
                />
              </div>
              <div className="inputbox">
                <label htmlFor="ccn">credit card number :</label>
                <input
                  type="number"
                  name="ccn"
                  placeholder="0000-1111-2222-3333"
                  id="ccn"
                  required
                />
              </div>
              <div className="inputbox">
                <label htmlFor="em">expiry month :</label>
                <input type="date" name="expiry-month" id="em" required />
              </div>
              <div className="flex">
                <div className="inputbox">
                  <label htmlFor="cvc">CVC :</label>
                  <input
                    type="number"
                    name="CVC"
                    id="cvc"
                    placeholder="123"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <input
            className="button2"
            type="submit"
            value="proceed to checkout"
          />
        </form>
      </div>
    </>
  );
};

export default Checkout;
