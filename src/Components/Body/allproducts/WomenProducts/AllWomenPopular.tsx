import { Card } from "../../Card";
import { products } from "../../../../utilities/Products";
const AllWomenPopular = () => {
  

  return (
    <div>
      <h2 className="heading">Popular in women</h2>
      <div className="row">
        {products[1].map((product, index) => (
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

export default AllWomenPopular;
