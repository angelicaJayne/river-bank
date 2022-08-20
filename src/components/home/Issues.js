import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Issues({ sn, title, desc }) {
  return (
    <div>
      <main className="heroIssues d-flex flex-column justify-content-between align-items-center">
        <section>
          <h3>
            <span>{sn}.</span> {title}
          </h3>

          <p>{desc}</p>
        </section>
        <article className="d-flex ">
          <button className="Btn">
            {" "}
            <Link to="/walletpage">Click Here</Link>{" "}
          </button>
        </article>
      </main>
    </div>
  );
}

export default Issues;
