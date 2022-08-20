import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import WalletPage from "./components/wallets/WalletPage";
// import { WalletsData } from "./components/wallets/WalletsData";

import Submitted from "./components/Error";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import Home from "./components/home/HomePage";

function App() {
  return (
    <div className=" ">
      <Heading />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/walletpage" exact component={WalletPage} />

          <Route wallet exact component={Submitted} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
