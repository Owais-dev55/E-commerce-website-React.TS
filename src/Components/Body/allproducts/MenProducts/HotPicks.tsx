import { Card } from "../../Card";
import "./MenUrban.css";
import HotPick01 from "../../../../images/hotpicks01.webp";
import HotPick02 from "../../../../images/hotpicks02.webp";
import HotPick03 from "../../../../images/hotpicks03.webp";
import HotPick04 from "../../../../images/hotpicks04.webp";
const AllWomenPopular = () => {
  const products = [
    {
      title: "COOFANDY Men's Linen Shirts",
      description:
        "COOFANDY Men's Linen Shirts Short Sleeve Casual Shirts Button Down Shirt for Men Beach Summer Wedding Shirt",
      price: 29.99,
      url: HotPick01,
      link: "https://www.amazon.com/COOFANDY-Casual-Shirts-Button-Summer/dp/B0BV241H3F/ref=sr_1_3?crid=1IHPEE7SZHRVW&dib=eyJ2IjoiMSJ9.8BHx5Cv9HOcce2E8UeMiU_g4leuYi31IQT4P-9XijFkE3wcYZ8IFLn_vPSb8NSjwMVQqokyAdNeokg8SxiqeCi2conPvGSz6xAH1YFcb9PksjWisB1-C9cG94SyQUVXRvT7EqD5eXvQteMxaNFix-osmCfqBzyiSVV3GvDJdYVNRgE9L8ZNfLRcKP2oWY_lKTsKbfwjn3upJQ-m_PNueQdO_dCjFoCSrYoIxuCXI5Bzl1ijTbz4XBlI_MnGcgPxYpxDPKuwzZfHJ4A2JhwigtLuoRNIuj5lcCeRmCmhhwM4.a1jANyKebwzFdt5__EmePysinAyZ5X7rT30XYh87O20&dib_tag=se&keywords=men+clothing&qid=1724093259&sprefix=men+clothing%2Caps%2C369&sr=8-3",
    },
    {
      title: "Under Armour Men's",
      description: "Under Armour Men's New Freedom Flag T-Shirt",
      price: 22.98,
      url: HotPick02,
      link: "https://www.amazon.com/Under-Armour-Freedom-T-Shirt-X-Large/dp/B08NWMDV6V/ref=sr_1_12?crid=1IHPEE7SZHRVW&dib=eyJ2IjoiMSJ9.8BHx5Cv9HOcce2E8UeMiU_g4leuYi31IQT4P-9XijFkE3wcYZ8IFLn_vPSb8NSjwMVQqokyAdNeokg8SxiqeCi2conPvGSz6xAH1YFcb9PksjWisB1-C9cG94SyQUVXRvT7EqD5eXvQteMxaNFix-osmCfqBzyiSVV3GvDJdYVNRgE9L8ZNfLRcKP2oWY_lKTsKbfwjn3upJQ-m_PNueQdO_dCjFoCSrYoIxuCXI5Bzl1ijTbz4XBlI_MnGcgPxYpxDPKuwzZfHJ4A2JhwigtLuoRNIuj5lcCeRmCmhhwM4.a1jANyKebwzFdt5__EmePysinAyZ5X7rT30XYh87O20&dib_tag=se&keywords=men+clothing&qid=1724093259&sprefix=men+clothing%2Caps%2C369&sr=8-12",
    },
    {
      title: "J.VER Men's Cotton Linen Short Sleeve Shirts ",
      description:
        "J.VER Men's Cotton Linen Short Sleeve Shirts Casual Lightweight Button Down Shirts Vacation Beach Summer Tops with Pocket",
      price: 22.99,
      url: HotPick03,
      link: "https://www.amazon.com/J-VER-Sleeve-Casual-T-Shirt-X-Large/dp/B0C3D5ZWC1/ref=sr_1_39?crid=1IHPEE7SZHRVW&dib=eyJ2IjoiMSJ9.8BHx5Cv9HOcce2E8UeMiU_g4leuYi31IQT4P-9XijFkE3wcYZ8IFLn_vPSb8NSjwMVQqokyAdNeokg8SxiqeCi2conPvGSz6xAH1YFcb9PksjWisB1-C9cG94SyQUVXRvT7EqD5eXvQteMxaNFix-osmCfqBzyiSVV3GvDJdYVNRgE9L8ZNfLRcKP2oWY_lKTsKbfwjn3upJQ-m_PNueQdO_dCjFoCSrYoIxuCXI5Bzl1ijTbz4XBlI_MnGcgPxYpxDPKuwzZfHJ4A2JhwigtLuoRNIuj5lcCeRmCmhhwM4.a1jANyKebwzFdt5__EmePysinAyZ5X7rT30XYh87O20&dib_tag=se&keywords=men+clothing&qid=1724093259&sprefix=men+clothing%2Caps%2C369&sr=8-39",
    },
    {
      title: "COOFANDY Men's Cotton Linen Henley Shirt",
      description:
        "COOFANDY Men's Cotton Linen Henley Shirt Long Sleeve Hippie Casual Beach T Shirts",
      price: 29.99,
      url: HotPick04,
      link: "https://www.amazon.com/COOFANDY-Cotton-Henley-Sleeve-Hippie/dp/B08FHQVRH8/ref=sr_1_56?crid=1IHPEE7SZHRVW&dib=eyJ2IjoiMSJ9.8BHx5Cv9HOcce2E8UeMiU_g4leuYi31IQT4P-9XijFkE3wcYZ8IFLn_vPSb8NSjwMVQqokyAdNeokg8SxiqeCi2conPvGSz6xAH1YFcb9PksjWisB1-C9cG94SyQUVXRvT7EqD5eXvQteMxaNFix-osmCfqBzyiSVV3GvDJdYVNRgE9L8ZNfLRcKP2oWY_lKTsKbfwjn3upJQ-m_PNueQdO_dCjFoCSrYoIxuCXI5Bzl1ijTbz4XBlI_MnGcgPxYpxDPKuwzZfHJ4A2JhwigtLuoRNIuj5lcCeRmCmhhwM4.a1jANyKebwzFdt5__EmePysinAyZ5X7rT30XYh87O20&dib_tag=se&keywords=men+clothing&qid=1724093259&sprefix=men+clothing%2Caps%2C369&sr=8-56",
    },
  ];

  return (
    <div className="hot-picks-heading">
      <h1>
        Premium Picks
        <span>Treding deals</span>
      </h1>
      <div className="row">
        {products.map((product, index) => (
          <div className="col-md-3" key={index}>
            <Card
              title={product.title}
              description={product.description}
              price={product.price}
              url={product.url}
              link={product.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllWomenPopular;
