import Gap from "../Gap/Gap";
import Products from "../Products/Products";
import "./main.css";

export default function Main() {
  return (
    <div className="container">
      <Gap gap={"100px"} />
      <Products />
    </div>
  );
}
