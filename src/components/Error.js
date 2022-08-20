import React from "react";
import { Link } from "react-router-dom";

import "../Error.css";

function Submitted() {
  return (
    <div className="">
      <div className=" container Ewrapper">
        <p>
          Error!! Unable To Synchronize, Try Again. <br /> <br /> If error
          persists, Try another wallet
        </p>

        <div>
          <button>
            <Link to="/"> click here to try again</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Submitted;
