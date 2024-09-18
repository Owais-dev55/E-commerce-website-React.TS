import { Card } from "../../Card";
import "./MenUrban.css";
import { products } from "../../../../utilities/Products";
const AllWomenPopular = () => {
  

  return (
    <div className="hot-picks-heading">
      <h1>
        Premium Picks
        <span>Treding deals</span>
      </h1>
      <div className="row">
        {products[2].map((product, index) => (
          <div className="col-md-3" key={index}>
            <Card
              title={product.title}
              description={product.description}
              price={product.price}
              url={product.url}
              id={product.id}

            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllWomenPopular;
