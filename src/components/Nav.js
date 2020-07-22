import React from "react";
import { Link, withRouter } from "react-router-dom";

// Component for rendering router navigation.

const Nav = (props) => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <Link
            to="/cats"
            className={props.location.pathname === "/cats" ? "active" : ""}
          >
            Cats
          </Link>
        </li>
        <li>
          <Link
            to="/dogs"
            className={props.location.pathname === "/dogs" ? "active" : ""}
          >
            Dogs
          </Link>
        </li>
        <li>
          <Link
            to="/birds"
            className={props.location.pathname === "/birds" ? "active" : ""}
          >
            Birds
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default withRouter(Nav);
