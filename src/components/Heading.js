import React from "react";
import logo from "../assets/blockchainlogo.png";
import "../App.css";
function Heading() {
  return (
    <div className="mt-5">
      <section className="container d-flex flex-row align-items-center mb-5">
        <a className=" d-flex flex-row align-items-center" href="/">
          <img className=" mx-auto col-12 col-md-5" src={logo} alt="" />
        </a>{" "}
      </section>
    </div>
  );
}

export default Heading;
