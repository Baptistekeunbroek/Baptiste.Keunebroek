import { NavLink } from "react-router-dom";
import "../style/NavBar.css";

const NavBar = () => {
  return (
    <div className="containerNavBar">
      <div className="Main_Container">
        <div className="Links">
          <NavLink className="Links" to="/">
            Baptiste Keunebroek
          </NavLink>
        </div>
        <div className="Main_elements">
          <div className="Links2">
            <NavLink className="Links2" to="/aboutme">
              ABOUT ME
            </NavLink>
          </div>

          <div className="Links2">
            <NavLink className="Links2" to="/projects">
              MY PROJECTS
            </NavLink>
          </div>

          <div className="Links2">
            <a href="mailto:baptiste.keunebroek@gmail.com">
              <button type="button" className="buttonWelcome">
                CONTACT
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
