import { Link } from "react-router-dom";
import "./MenPage.css";

const MenPage = () => {
  return (
    <>
      <hr />
      <h1 className="heading-men">Men</h1>
      <div className="conatiner">
        <div></div>
        <div className="row">
          <div className="col-md-4 align-self-center">
            <h1 className="Find">
              Uncover the latest <b>VOGUEAURA</b> Insights
            </h1>
            <Link to="/men" className="btn btn-lg btn-outline-success button">
              Find For Him
            </Link>
          </div>
          <div className="col-md-8">
            <div className="collage-grid">
              <div className="grid-item">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV4CUEGEwqETlum6lWjQbMgYf23VxzIlXhjQ&s"
                  alt="Image 1"
                />
              </div>
              <div className="grid-item">
                <img
                  src="https://www.realmenrealstyle.com/wp-content/uploads/2023/09/IMG_1038.jpg"
                  alt="Image 2"
                />
              </div>
              <div className="grid-item">
                <img
                  src="https://media.gq.com/photos/65aea7982f522e04cf8951c6/4:3/w_1024%2Cc_limit/PFWM_AW24_Day5_GQ_CrisFragkou_14.jpg"
                  alt="Image 3"
                />
              </div>
              <div className="grid-item">
                <img
                  src="https://mensclubcollection.com/cdn/shop/files/3_5eacfea3-61df-4f39-be6f-b3e52132b11b.jpg?v=1716453196"
                  alt="Image 4"
                />
              </div>
              <div className="grid-item">
                <img
                  src="https://img.mensxp.com/media/content/2023/May/Main-Image---iStock_6468788f18ba9.jpeg"
                  alt="Image 5"
                />
              </div>
              <div className="grid-item">
                <img
                  src="https://d1fufvy4xao6k9.cloudfront.net/images/blog/posts/2023/09/hockerty_spanish_man_spanish_style_linen_shirt_tailored_shorts__7d3f1677_aafe_4670_b641_e50b33b89334.jpg"
                  alt="Image 6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenPage;
