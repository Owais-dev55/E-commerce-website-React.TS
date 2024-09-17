import { NavLink, Link } from "react-router-dom";
import Form from "./Form";
import "./Navbar.css";
import { useContext } from "react";
import { cart } from "../../utilities/Context";
const Navbar = () => {
  const { count } = useContext(cart);
  return (
    <>
      <nav
        className="navbar bg-dark navbar-expand-lg sticky-top"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            VogueAura
          </NavLink>
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/"
              >
                Home
              </NavLink>
              <li className="nav-item dropdown">
                <div
                  className="nav-link dropdown-toggle "

                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </div>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "dropdown-item active" : "dropdown-item"
                      }
                      to="/men"
                    >
                      Men
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        New
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "dropdown-item active" : "dropdown-item"
                      }
                      to="/women"
                    >
                      Women
                    </NavLink>
                  </li>
                </ul>
              </li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/about-us"
              >
                About Us
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/contact-us"
              >
                Contact Us
              </NavLink>
              <Link className="nav-link disabled" to="/">
                Coupons
              </Link>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/SignIn"
              >
                LogIn
              </NavLink>
            </div>
          </div>
        </div>
          <Form />
          <NavLink to="/Cart">
            <i className="fa-solid fa-cart-shopping">
              <span className="position-absolute translate-middle badge badge1 rounded-pill bg-danger">
                {count}
              </span>
            </i>
          </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
