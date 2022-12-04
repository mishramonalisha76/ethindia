import "./landing.css";
import wallet from "../../assets/wallet.png";
import coins from "../../assets/coins.png";
import multichain from "../../assets/multichain.png";

function SecondSection() {
  return (
    <>
      <div className="second-section-container first-level">
        <div className="content-container">
          <div>Vote from any chain you want</div>
          <img src={coins} className=" tokens" />
        </div>
        <div className="content-container">
          <div>Aggregate your voting power</div>
          <img src={multichain} className=" multichain" />
        </div>
      </div>
      <div className="second-section-container">
        <div className="content-container">
          <div>
            Just <strong>one </strong>click and the rest is handled by us!
          </div>
          <img src={wallet} />
        </div>
      </div>
    </>
  );
}

export default SecondSection;
