import "./landing.css";
import wallet from "../../assets/wallet.png"
import coins from "../../assets/coins.png"
import multichain from "../../assets/multichain.png"

function SecondSection() {
  return (
    <>
      <div className="second-section-container first-level">
        <div>
          <span>Borrow, lend, swap, stake tokens</span>
          <img src={coins} className="img tokens"/>

        </div>
        <div>
          <span>Supports transactions on Multichain</span>
          <img src={multichain} className="img multichain"/>
        </div>
      </div>
      <div className="second-section-container">
        <div >
          <span>Just <strong>one </strong>click and the rest is handled by us!</span>
          <img src={wallet} className="img"/>
        </div>
      </div>
    </>
  );
}

export default SecondSection;
