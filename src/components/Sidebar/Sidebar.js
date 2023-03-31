import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGripLines,
  faRightLeft,
  faRss,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
const Sidebar = () => {
  return (
    <div className="main-sidebar">
      <ul className="ul-list">
        <li className="list-class">
          <FontAwesomeIcon icon={faGripLines} className="sidebar-icon"/>
          <Link className="sidebar-link" to="/">
            DASHBOARD
          </Link>
        </li>
        <li className="list-class">
          <FontAwesomeIcon icon={faRightLeft} className="sidebar-icon" />
          <Link className="sidebar-link" to="/sendmoney">
            SEND MONEY
          </Link>
        </li>
        <li className="list-class">
          <FontAwesomeIcon icon={faRss} className="sidebar-icon" />
          <Link className="sidebar-link" to="/news">
            NEWS
          </Link>
        </li>
        <li className="list-class">
          <FontAwesomeIcon icon={faUser} className="sidebar-icon" />
          <Link className="sidebar-link" to="/account">
            ACCOUNT MANAGER
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
