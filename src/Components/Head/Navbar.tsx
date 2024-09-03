import { Link } from "react-router-dom";
import Form from "./Form"; 

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar bg-dark navbar-expand-lg sticky-top"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            VogueAura
          </Link>
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active " to="/">
                Home
              </Link>
              <Link className="nav-link" to="/about-us">
                About Us
              </Link>
              <Link className="nav-link" to="/contact-us">
                Contact Us
              </Link>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/men">
                      Men
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        New
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/women">
                      Women
                    </Link>
                  </li>
                </ul>
              </li>
              <Link className="nav-link disabled " to="">
                Coupons
              </Link>
              <Link className="nav-link" to="/SignIn">
                LogIn
              </Link>
            </div>
          </div>
        </div>
        <Form />
      </nav>
    </>
  );
};

export default Navbar;
