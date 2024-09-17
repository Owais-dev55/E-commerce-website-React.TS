import { Card } from "../../Card";
import { products } from "../../../../utilities/Products";

const MenUrbanAll = () => {

  return (
    <div>
      <div className="heading-urban">
        <h1>Men Urban</h1>
      </div>
      <div className="row rowurban">
        {products[3].map((product, index) => (
          <div className="col-md-3" key={index}>
            <Card
              title={product.title}
              description={product.description}
              price={product.price}
              url={product.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenUrbanAll;
