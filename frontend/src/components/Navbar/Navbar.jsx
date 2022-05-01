import Logo from "../../assets/images/amazona_logo_32.png";
import Tag from "../Tag/Tag";
import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";
import "./navbar.css";

const Navbar = () => {
  var tagStyle = {
    text: "v3.4.0",
    color: "green",
  };

  var btnStyle = {
    text: "Search",
    color: "green",
    cursor: "pointer",
    fa_logo: "fa fa-search",
  };

  var avatar = {
    img: "",
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-3 mb-5 bg-body rounded fixed-top">
      <div className="nav_style"></div>
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src={Logo}
            className="d-inline-block align-text-top"
            alt=""
            draggable="false"
          />
          <Tag tagStyle={tagStyle} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex ms-auto w-50">
            <input
              className="form-control me-2 search_box"
              type="search"
              spellCheck="false"
              placeholder="Search"
              aria-label="Search"
            />
            <Button btnStyle={btnStyle} type="submit" />
          </form>
          <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Cart
              </a>
            </li>
            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li> */}
          </ul>
          <div className="dropdown">
            <div id="dProfile" data-bs-toggle="dropdown" aria-expanded="false">
              <Avatar avatar={avatar} />
            </div>
            {/* dropdown-menu-end */}
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dProfile"
            >
              <li>
                <a className="dropdown-item" href="#">
                  Login
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Sign Up
                </a>
              </li>
              <li>
                <hr className="dropdown-divider custom_hr" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
