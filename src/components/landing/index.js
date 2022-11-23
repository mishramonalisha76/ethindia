import Navbar from "../navbar";
import "./landing.css";

function Landing() {
  return (
    <div class="landing">
      <Navbar />
      <div className="landing-content">
        <div className="landing-hero">
          <div className="landing-hero-text">
            <h1>SAY HI TO DEFI</h1>
            <p>
              Your crypto wallet to safely navigate decentralized finance
              (DeFi). Earn yield with vetted protocols. Swap tokens on verified
              exchanges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
