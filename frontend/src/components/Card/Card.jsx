import "./card.css";

export default function Card({ product }) {
  return (
    <div className="card_container col-md-3 col-lg-2 m-1">
      <img
        src={product.image}
        className="card_img d-inline-block align-text-top pointer"
        alt=""
        draggable="false"
      />
      <div className="card_text">{product.name}</div>
    </div>
  );
}
