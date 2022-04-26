import "./footer.css";
import Logo from "../../assets/images/amazona_logo_32.png";

export default function Footer() {
  return (
    <div className="footer">
      <img
        src={Logo}
        className="d-inline-block align-text-top pointer"
        alt=""
        draggable="false"
      />
      <p>
        © All rights reserved
        <br />
        Made by{" "}
        <a href="#" className="link">
          Akash Tripathi
        </a>
      </p>
    </div>
  );
}
