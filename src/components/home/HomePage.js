import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import Issues from "./Issues";
import { IssuesData } from "./IssuesData";

import Faq from "../faq/Faq";

function HomePage() {
  return (
    <div>
      <main className="Topp ">
        <section className="hero d-flex flex-column justify-content-between align-items-center">
          <h2> Multi-Wallet Secure Node Tool</h2>
          <article className="d-flex">
            <button className="Btns">
              {" "}
              <Link to="#issues">Explore node features</Link>{" "}
            </button>
          </article>
        </section>
      </main>
      <section id="issues">
        {IssuesData.map((items) => (
          <Issues
            key={items.id}
            sn={items.sn}
            title={items.title}
            desc={items.desc}
          />
        ))}
      </section>
      <Faq />
    </div>
  );
}

export default HomePage;
