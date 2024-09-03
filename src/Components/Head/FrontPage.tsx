import { Link } from "react-router-dom";
import "./FrontPage.css";

const FrontPage = () => {
  return (
    <>
      <div className="container-xl">
        <h1 className="title">
          Unlock Your
          <span> Dream Deals </span>
          Today!
        </h1>
        <p className="Pagetext">Unlock Your Dream Deals Today!</p>
        <Link className="btn btn-primary shop-btn" to="/women">
          Shop Now
        </Link>
      </div>
    </>
  );
};

export default FrontPage;
