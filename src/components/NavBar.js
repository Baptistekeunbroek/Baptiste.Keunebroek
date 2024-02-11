import { NavLink } from "react-router-dom";
import "../style/NavBar.css";

const NavBar = () => {
  return (
    <div className="containerNavBar">
      <div className="Main_Container">
        <div className="Links">
          <NavLink
            id="link"
            style={{ textDecoration: "none", color: "white", fontSize: 25 }}
            to="/"
          >
            Baptiste Keunebroek
          </NavLink>
        </div>
        <div className="Main_elements">
          <div className="Links2">
            <NavLink
              id="link"
              style={{ textDecoration: "none", color: "white", fontSize: 20 }}
              to="/projects"
            >
              About Me
            </NavLink>
          </div>

          <div className="Links2">
            <NavLink
              id="link"
              style={{ textDecoration: "none", color: "white", fontSize: 20 }}
              to="/link"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
