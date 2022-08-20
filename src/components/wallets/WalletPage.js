import React, { useState } from "react";
import Wallet from "./Wallet";
import { WalletsData } from "./WalletsData";

import "./Wallet.css";
import ConnectWallet from "../pop-pages/ConnectWallet";

function WalletPage({ title, imagesrc }) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopUp = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      <header className="container">
        <section>
          <h2> SELECT WALLET TYPE</h2>
        </section>
        <h3>
          Choose your wallet and proceed to synchronize securely. After
          synchronization, Select Correct Node String.
        </h3>
        <p>Your data stays on your device and its never stored.</p>
      </header>
      <section className="container wrapper">
        {WalletsData.map((wallets) => (
          <section className="">
            <Wallet
              key={wallets.id}
              title={wallets.title}
              imagesrc={wallets.image}
            />
          </section>
        ))}
      </section>

      {isOpen && (
        <ConnectWallet
          title={title}
          imagesrc={imagesrc}
          handleClose={togglePopUp}
        />
      )}
    </main>
  );
}

export default WalletPage;
