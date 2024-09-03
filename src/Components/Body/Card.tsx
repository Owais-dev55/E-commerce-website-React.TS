import "./Card.css";
type PopularProps = {
  title: string;
  description: string;
  price: number;
  url: string;
  link: string;
};

export const Card = ({
  title,
  description,
  price,
  url,
  link,
}: PopularProps) => {
  return (
    <>
      <div className="popular-in-women">
        <div className="card">
          <img src={url} className="card-img-top" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}.</p>
            <div className="card-header">Featured</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">${price}</li>
            </ul>
            <a target="_blank" href={link} className="btn btn-primary">
              Shop on &nbsp; <i className="fa-brands fa-amazon"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
