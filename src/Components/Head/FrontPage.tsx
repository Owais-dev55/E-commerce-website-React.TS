import "./FrontPage.css";

const FrontPage = () => {
  return (
    <>
      <div className="container-xl">
        <div className="row ">
          <div className="col-md-7 align-self-center text">
            <h1 className="title">
              Unlock Your
              <span> Dream Deals </span>
              Today!
            </h1>
            <p className="Pagetext ">Unlock Your Dream Deals Today!</p>
            <a className="btn btn-primary shop-btn" href="/Women">
              Shop Now
            </a>
          </div>
          <div className="col-md-5 ">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/034/028/820/small_2x/fashion-model-girl-in-beige-wear-png.png"
              alt="Image"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrontPage;
