import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="container">
      <div className="Main_Container">
        <div className="Main_elements">
          <div className="MyName">Baptiste Keunebroek</div>

          <div className="Links">
            <NavLink
              id="home"
              style={{ textDecoration: "none", color: "black" }}
              to="/"
            >
              HOME
            </NavLink>
          </div>

          <div className="Links2">
            <NavLink
              id="link"
              style={{ textDecoration: "none", color: "black" }}
              to="/link"
            >
              LINK
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
