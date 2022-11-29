import "./index.css";
import "animate.css";
import { ConnectWallet } from "../connectWallet/index.js";
import BaseComponent from "./baseComponent";
import { useState } from "react";
import Footer from "../footer/index";

function Defi() {
  const [activePage, setActivePage] = useState(1);
  const [borrowAmount, setBorrowAmount] = useState(0);
  const [borrowNetwork, setBorrowNetwork] = useState("");

  const [lendAmount, setLendAmount] = useState(0);
  const [lendNetwork, setLendNetwork] = useState("");

  const [swapAmount, setSwapAmount] = useState(0);
  const [swapNetwork, setSwapNetwork] = useState("");

  const [stakeAmount, setStakeAmount] = useState(0);
  const [stakeNetwork, setStakeNetwork] = useState("");

  const heading = {
    firstPageHeading: "Borrow",
    secondPageHeading: "Lend",
    thirdPageHeading: "Swap",
    fourthPageHeading: "Stake",
  };

  function handleSubmit() {
    console.log(borrowAmount, borrowNetwork);
    console.log(lendAmount, lendNetwork);
    console.log(swapAmount, swapNetwork);
    console.log(stakeAmount, stakeNetwork);
  }

  return (
    <div>
      <div className="connect-wallet-container">
        <ConnectWallet />
      </div>
      <div>
        {activePage === 1 ? (
          <BaseComponent
            pageState={activePage}
            setPageState={setActivePage}
            handleTokenAmount={setBorrowAmount}
            handleTokenNetwork={setBorrowNetwork}
            tokenAmountValue={borrowAmount}
            tokenNetworkValue={borrowNetwork}
            heading={heading.firstPageHeading}
          />
        ) : activePage === 2 ? (
          <BaseComponent
            pageState={activePage}
            setPageState={setActivePage}
            handleTokenAmount={setLendAmount}
            handleTokenNetwork={setLendNetwork}
            tokenAmountValue={lendAmount}
            tokenNetworkValue={lendNetwork}
            heading={heading.secondPageHeading}
          />
        ) : activePage === 3 ? (
          <BaseComponent
            pageState={activePage}
            setPageState={setActivePage}
            handleTokenAmount={setSwapAmount}
            handleTokenNetwork={setSwapNetwork}
            tokenAmountValue={swapAmount}
            tokenNetworkValue={swapNetwork}
            heading={heading.thirdPageHeading}
          />
        ) : (
          <BaseComponent
            pageState={activePage}
            setPageState={setActivePage}
            handleTokenAmount={setStakeAmount}
            handleTokenNetwork={setStakeNetwork}
            tokenAmountValue={stakeAmount}
            tokenNetworkValue={stakeNetwork}
            handleSubmit={handleSubmit}
            heading={heading.fourthPageHeading}
          />
        )}
      </div>
      <div style={{ position: "fixed", left: "0", bottom: "0", right: "0" }}>
        <Footer />
      </div>
    </div>
  );
}

export default Defi;
