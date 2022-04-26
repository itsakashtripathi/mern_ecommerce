import "./products.css";
import data from "../../models/products_data";
import Card from "../Card/Card";

export default function Products() {
  return (
    <div className="d-flex flex-row justify-content-center flex-wrap">
      {data.products.map((product) => (
        <Card key={product._id} product={product} />
      ))}
    </div>
  );
}
