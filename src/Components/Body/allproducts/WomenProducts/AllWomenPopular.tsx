import { Card } from "../../Card";
const AllWomenPopular = () => {
  const products = [
    {
      title: "Trendy Queen Womens Oversized Sweatshirts",
      description:
        "Trendy Queen Womens Oversized Sweatshirts Fall Fashion Hoodies Half Zip Pullover Long Sleeve Shirts Clothes Outfits",
      price: 27.99,
      url: "src/images/popular01.jpg",
      link: "https://www.amazon.com/Trendy-Queen-Oversized-Pullover-Sweatshirts/dp/B0B5H33HTJ/ref=sr_1_7?crid=21LRPESNW8YOG&dib=eyJ2IjoiMSJ9.hqaspiLnwPFg0rlJTB04mEp0xj4-KJB69EWTP3n-VbWOyEoapJsNRuD_xnT7FHEapvcssT_I7jU_IWvy9Af7LeAXETMYgg-o6Zc30R-0qvXA9HoAZXQ6t59TCulgcL3RRY-CnAj8JZSoIavf30Bki0XYsj9f-55T1XMjXmD6P7iI4VyyIAx6FMuvFjnaiYneGMluTL3NTaoKomCrIX9222xbia1eW1i8jQSGILEtHemeLk-fJmhJtp0ctrjT9qiaTbgvxYY0egD2h0qOmx8TffLmcPyVNjPUsx2e7ReQIVQ.STM1h41ANAo5_dCBpgRtvSvFmGRhAXUZUsqmX17pGvs&dib_tag=se&keywords=women+clothing&qid=1724134230&sprefix=women+clothi%2Caps%2C354&sr=8-7",
    },
    {
      title: "AUTOMET Womens Long Sleeve Shirts",
      description:
        "AUTOMET Womens Long Sleeve Shirts Fall Tops Pleated Shirts Casual Loose Dressy Basic Trendy Clothes 2024",
      price: 17.99,
      url: "src/images/popular02.jpg",
      link: "https://www.amazon.com/AUTOMET-Pleated-Fashion-Business-Outfits/dp/B0D5QVDZW8/ref=sr_1_53?crid=21LRPESNW8YOG&dib=eyJ2IjoiMSJ9.hqaspiLnwPFg0rlJTB04mEp0xj4-KJB69EWTP3n-VbWOyEoapJsNRuD_xnT7FHEapvcssT_I7jU_IWvy9Af7LeAXETMYgg-o6Zc30R-0qvXA9HoAZXQ6t59TCulgcL3RRY-CnAj8JZSoIavf30Bki0XYsj9f-55T1XMjXmD6P7iI4VyyIAx6FMuvFjnaiYneGMluTL3NTaoKomCrIX9222xbia1eW1i8jQSGILEtHemeLk-fJmhJtp0ctrjT9qiaTbgvxYY0egD2h0qOmx8TffLmcPyVNjPUsx2e7ReQIVQ.STM1h41ANAo5_dCBpgRtvSvFmGRhAXUZUsqmX17pGvs&dib_tag=se&keywords=women+clothing&qid=1724134230&sprefix=women+clothi%2Caps%2C354&sr=8-53",
    },
    {
      title: "Dokotoo Womens Summer Casual ",
      description:
        "Dokotoo Womens Summer Casual Short Sleeve Shirts Loose Fit Oversized Tshirts Tunic Tops with Pockets",
      price: 12.99,
      url: "src/images/popular05.jpg",
      link: "https://www.amazon.com/Dokotoo-Crewneck-T-Shirts-Oversized-Tshirts/dp/B0CV4VSD4S/ref=sr_1_15?crid=CDHWZ88RV2RW&dib=eyJ2IjoiMSJ9.UIrA_NjcPy41PIHM70qvdq8bqSB9-ZOJmHOYPaX33Xz7xNCDIB9PKeMxOzBBf1vXuHCpZfu_WrWOd4jFa8b9LbFA-vgwdmFxg3vNXIdFaMFDWvzVnpJ5vhxl1hPywOUU41ca0gO2PQVldtc-TVZHe_0JJHWWPp06e79ARn_Kk8TnGzk3siJ9hV8jZqrxMd0Lcr-0auAYLmD0FDxJ7Q9Xs2KF4v0CO0lKIoI8Joh2uUbxOLI7MQ5vD2xBW56I2Z3HszvV_uvBpSKMgfZsHyNz2MZ5AkrkugENESeOmYyw_b4.rEnNR0nHCQ-Z22Bb6DOzXHvuVewnt5v5Ix-nIil5j9w&dib_tag=se&keywords=womens+tops&qid=1724146302&sprefix=women%2Caps%2C492&sr=8-15",
    },
    {
      title: "Women's Floral Print Puff",
      description:
        "Women's Floral Print Puff Sleeve Kimono Cardigan Loose Cover Up Casual Blouse Tops",
      price: 11.99,
      url: "src/images/popular04.jpg",
      link: "https://www.amazon.com/Womens-Floral-Sleeve-Kimono-Cardigan/dp/B07SN9RS13/ref=sr_1_52?crid=21LRPESNW8YOG&dib=eyJ2IjoiMSJ9.hqaspiLnwPFg0rlJTB04mEp0xj4-KJB69EWTP3n-VbWOyEoapJsNRuD_xnT7FHEapvcssT_I7jU_IWvy9Af7LeAXETMYgg-o6Zc30R-0qvXA9HoAZXQ6t59TCulgcL3RRY-CnAj8JZSoIavf30Bki0XYsj9f-55T1XMjXmD6P7iI4VyyIAx6FMuvFjnaiYneGMluTL3NTaoKomCrIX9222xbia1eW1i8jQSGILEtHemeLk-fJmhJtp0ctrjT9qiaTbgvxYY0egD2h0qOmx8TffLmcPyVNjPUsx2e7ReQIVQ.STM1h41ANAo5_dCBpgRtvSvFmGRhAXUZUsqmX17pGvs&dib_tag=se&keywords=women+clothing&qid=1724134230&sprefix=women+clothi%2Caps%2C354&sr=8-52",
    },
  ];

  return (
    <div>
      <h2 className="heading">Popular in women</h2>
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
