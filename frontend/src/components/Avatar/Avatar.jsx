import "./avatar.css";
import guestUserImg from "../../assets/images/guest_user.png";

const Avatar = ({ avatar }) => {
  return (
    <div className="avatar_container">
      <img
        className="avatar_img"
        src={avatar.img ? avatar.img : guestUserImg}
        alt=""
        draggable="false"
      />
    </div>
  );
};

export default Avatar;
