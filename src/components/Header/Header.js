import React, { useContext } from "react";
import ReactDOM from "react-dom";
// import Avatar from "../../assets/profile.jpg";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faEnvelope,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";
import { userContext } from "../../Context/UserContextProvider";

const Header = () => {
  const navigate = useNavigate();
  const { user } = useContext(userContext);
  return (
    <div className="main-header">
      {/* header profile */}
      <div className="header-profile">
        <div className="header-profile-picture">
          <img className="avatar" src={user.avatar} alt="..." />
        </div>
        <div className="header-profile-text">
          <div className="header-profile-name">
            {" "}
            {user.name} {user.fname}{" "}
          </div>
          <div className="header-profile-status"> {user.status} </div>
        </div>
      </div>

      {/* header quick acces button */}
      <div className="header-button-container">
        <button
          className="btn header-button"
          type="button"
          onClick={() => navigate("/sendmoney")}
        >
          Quick Access
        </button>
      </div>

      {/* header searchbar section */}
      <div className="header-searchbar">
        <FontAwesomeIcon className="header-searchbar-icon" icon={faBell} />
        <FontAwesomeIcon className="header-searchbar-icon" icon={faEnvelope} />
        <div className="searchbar-wrapper">
          <FontAwesomeIcon className="tricky-searchbar" icon={faSearch} />
          <input className="headerinput" type="text" placeholder="Search..." />
        </div>
      </div>
    </div>
  );
};

export default Header;
