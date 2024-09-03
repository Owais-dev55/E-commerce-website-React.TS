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
        <a className="btn btn-primary shop-btn" href="/Women">
          Shop Now
        </a>
      </div>
    </>
  );
};

export default FrontPage;
