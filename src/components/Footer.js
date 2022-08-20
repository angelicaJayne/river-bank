import React from "react";
import { Instagram, Twitter } from "react-bootstrap-icons";

function Footer() {
  return (
    <div>
      <div className=" d-flex container flex-column flex-md-row col-10 mt-5 mb-3 justify-content-between m-auto p-3 social-icons">
        <div className="col-8">
          <h3 className="text-start">Contact Us</h3>
          <p className="text-start m-0">
            Send all inquiries to Support@blockchain.com
          </p>
        </div>
        <div className="d-flex flex-row col-2 justify-content-between">
          {" "}
          <Twitter size="70" className="me-2" color="black" />
          <Instagram size="70" className="me-2" color="black" />
        </div>
      </div>
      <section
        style={{ background: "var(--main-color)" }}
        className="text-center p-5"
      >
        <p style={{ color: "#fff" }}>Copyright: Blockchain 2021.</p>
      </section>
    </div>
  );
}

export default Footer;
