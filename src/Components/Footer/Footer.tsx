import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer position-relative ">
        <div className="container-footer">
          <div className="row">
            <div className="col-md-4">
              <div className="logo">
                <h2>VogueAura</h2>
                <p>
                  "At VogueAura, we blend classic elegance with modern trends to
                  bring you fashion that stands out. Explore our exclusive
                  collections designed to enhance your style and make every
                  moment unforgettable."
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="social">
                <h3>Get in Touch</h3>
                <Link to="#" target="_blank">
                  <i className="fa-brands fa-instagram" aria-hidden="true"></i>
                </Link>
                <Link to="#" target="_blank">
                  <i className="fa-brands fa-facebook"></i>
                </Link>
                <Link to="#">
                  <i className=" fs-3 fa-brands fa-square-twitter"></i>
                </Link>
                <Link to="#">
                  <i className="fa-brands fa-square-youtube fs-3"></i>
                </Link>
                <h3 className="fs-2">Services</h3>
                <h5 className="fs-5">Design</h5>
                <h5 className="fs-5">Development</h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact">
                <p className="fs-5">info@vogueaura.com</p>
                <form action="https://api.web3forms.com/submit" method="POST">
                  <input
                    type="hidden"
                    name="access_key"
                    value="ea7f2525-2282-4d57-a96c-bbf3ac643500"
                  />
                  <input placeholder="you" type="text" name="name" required />
                  <input
                    placeholder="you@gamil.coom"
                    type="email"
                    name="email"
                    required
                  />
                  <button type="submit">Send</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
