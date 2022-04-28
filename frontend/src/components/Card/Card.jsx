import Button from "../Button/Button";
import Rating from "../Rating/Rating";
import "./card.css";

export default function Card({ product }) {
  var btnStyle = {
    text: "Buy",
    color: "green",
    cursor: "pointer",
    fa_logo: "fa fa-shopping-cart",
  };

  return (
    <div className="card_container col-md-3 col-lg-2 m-1">
      <img
        src={product.image}
        className="card_img d-inline-block align-text-top pointer"
        alt=""
        draggable="false"
      />
      <div className="card_footer">
        <div className="card_text">{product.name}</div>
        <Rating rating={product.rating} />
        <span className="card_text">${product.price}</span>
        <span className="card_text float-end">
          <Button btnStyle={btnStyle} />
        </span>
      </div>
    </div>
  );
}
