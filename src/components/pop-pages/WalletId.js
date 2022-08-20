import React from "react";
import "./WalletId.css";

function WalletId({ imagesrc, title }) {
  return (
    <div className="container">
      <section className="container d-flex align-items-center justify-content-center mb-3 border-bottom">
        <main className="header col-10 d-flex flex-row align-items-center">
          {" "}
          <img className=" me-3" src={imagesrc} alt={title} />
          <p> Enter your {title} details </p>
        </main>
      </section>
    </div>
  );
}

export default WalletId;
