
import { Card } from "../../Card";
import New01 from '../../../../images/womenArraival01.webp'
import New02 from '../../../../images/womenArraival02.webp'
import New03 from '../../../../images/womenArraival03.webp'
const AllWomenPopular = () => {
  const products = [
    {
      title: "Tanming Sweater Sets",
      description:
        "Tanming Sweater Sets Women 2 Piece Lounge Sets Short Sleeve Knit Pullover Tops Wide Leg Pants",
      price: 36.29,
      url: New01,
      link: "https://www.amazon.com/Tanming-Sweater-Lounge-Pullover-Apricot-L/dp/B0C2BKYH64/ref=sr_1_5?crid=21LRPESNW8YOG&dib=eyJ2IjoiMSJ9.hqaspiLnwPFg0rlJTB04mEp0xj4-KJB69EWTP3n-VbWOyEoapJsNRuD_xnT7FHEapvcssT_I7jU_IWvy9Af7LeAXETMYgg-o6Zc30R-0qvXA9HoAZXQ6t59TCulgcL3RRY-CnAj8JZSoIavf30Bki0XYsj9f-55T1XMjXmD6P7iI4VyyIAx6FMuvFjnaiYneGMluTL3NTaoKomCrIX9222xbia1eW1i8jQSGILEtHemeLk-fJmhJtp0ctrjT9qiaTbgvxYY0egD2h0qOmx8TffLmcPyVNjPUsx2e7ReQIVQ.STM1h41ANAo5_dCBpgRtvSvFmGRhAXUZUsqmX17pGvs&dib_tag=se&keywords=women+clothing&qid=1724134230&sprefix=women+clothi%2Caps%2C354&sr=8-5",
    },
    {
      title: "Dokotoo Women's",
      description:
        "Dokotoo Women's 2024 Fashion Tops 3/4 Sleeve T-Shirts Cute Crewneck Basic Business Tees Blouses",
      price: 19.99,
      url: New02,
      link: "https://www.amazon.com/Dokotoo-Fashion-Business-Outfits-Clothing/dp/B0CP3N4JB7/ref=sr_1_6?crid=21LRPESNW8YOG&dib=eyJ2IjoiMSJ9.hqaspiLnwPFg0rlJTB04mEp0xj4-KJB69EWTP3n-VbWOyEoapJsNRuD_xnT7FHEapvcssT_I7jU_IWvy9Af7LeAXETMYgg-o6Zc30R-0qvXA9HoAZXQ6t59TCulgcL3RRY-CnAj8JZSoIavf30Bki0XYsj9f-55T1XMjXmD6P7iI4VyyIAx6FMuvFjnaiYneGMluTL3NTaoKomCrIX9222xbia1eW1i8jQSGILEtHemeLk-fJmhJtp0ctrjT9qiaTbgvxYY0egD2h0qOmx8TffLmcPyVNjPUsx2e7ReQIVQ.STM1h41ANAo5_dCBpgRtvSvFmGRhAXUZUsqmX17pGvs&dib_tag=se&keywords=women+clothing&qid=1724134230&sprefix=women+clothi%2Caps%2C354&sr=8-6",
    },
    {
      title: "TBMPOY Womens",
      description:
        "TBMPOY Womens UPF 50+ Sun Protection Hoodie Shirt Long Sleeve Fishing Hiking Outdoor UV Shirt Lightweight",
      price: 22.99,
      url: New03,
      link: "https://www.amazon.com/TBMPOY-Protection-Fishing-Outdoor-Lightweight/dp/B08L4Y8WN2/ref=sxin_16_pa_sp_search_thematic_sspa?content-id=amzn1.sym.6a1f9675-71b7-4554-9a4a-978e655949c4%3Aamzn1.sym.6a1f9675-71b7-4554-9a4a-978e655949c4&crid=21LRPESNW8YOG&cv_ct_cx=women+clothing&dib=eyJ2IjoiMSJ9.Dcv4vuEjJC9Pt1wBCxDe6xHIMMD7z_PyG6JSQTovO-vdCrkpay3GFIGPnsK0SEBo8dDEwYGwOWJjLrPM68Ft3q3Pew1T4laTHxuvQskEqvk.ppHwujEjviW-SremzKaOMfCt1bO8CIIl_5mfpv0IdjU&dib_tag=se&keywords=women+clothing&pd_rd_i=B08L4Y8WN2&pd_rd_r=4fa7ef46-a912-4ce0-9416-875bf02137d6&pd_rd_w=WZVGB&pd_rd_wg=qMJmG&pf_rd_p=6a1f9675-71b7-4554-9a4a-978e655949c4&pf_rd_r=FBAKS83Y7NS5DSVZ7ZMZ&qid=1724134230&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=women+clothi%2Caps%2C354&sr=1-6-967500bd-1dd6-4155-9914-e199466920fa-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&psc=1",
    },
  ];

  return (
    <div>
      <h2 className="heading">New Arrivals</h2>
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
