import Navbar from "../navbar";
import SecondSection from "./second-section";
import Hero from "../../assets/hero.png";
import "./landing.css";
import 'animate.css';

function Landing() {
  return (
    <div class="landing">
      <Navbar />
      <div className="landing-content">
        <div className="landing-hero">
          <div className="landing-hero-text  animate__animated animate__fadeInLeft">
            <h1 >SAY HI TO DEFI</h1>
            <p>
              Your crypto wallet to safely navigate decentralized finance
              (DeFi). Earn yield with vetted protocols. Swap tokens on verified
              exchanges.
            </p>
          </div>
          <div className="landing-hero-img-div">
            <img className="landing-hero-img animate__animated animate__fadeInRight" src={Hero} alt="multchain"/>
          </div>
        </div>
      </div>
      <SecondSection/>
    </div>
  );
}

export default Landing;
