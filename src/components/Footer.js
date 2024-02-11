import React from "react";
import "../style/Footer.css";

import {
  MDBFooter,
  ///MDBContainer,
  /// MDBRow,
  ///MDBCol,
  ///MDBIcon,
} from "mdb-react-ui-kit";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import { MDBIcon } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter className="MDBFooter">
      <div className="Footer">
        <section className="footer_section">
          <div className="">
            <span>Get connected with me on social networks:</span>
          </div>

          <div className="container_icon">
            <a
              href="https://www.facebook.com/baptiste.keunebroek"
              className="social_icons"
            >
              <MDBIcon fab icon="facebook-f" />
            </a>
            <a href="https://twitter.com/BKeunebroek" className="social_icons">
              <MDBIcon fab icon="twitter" />
            </a>
            <a
              href="https://www.instagram.com/bkeunebr/"
              className="social_icons"
            >
              <MDBIcon fab icon="instagram" />
            </a>
            <a
              href="https://www.linkedin.com/in/baptiste-keunebroek-95a2ab194/"
              className="social_icons"
            >
              <MDBIcon fab icon="linkedin" />
            </a>
            <a
              href="https://github.com/Baptistekeunbroek"
              className="social_icons"
            >
              <MDBIcon fab icon="github" />
            </a>
          </div>
        </section>
      </div>
    </MDBFooter>
  );
};

export default Footer;
