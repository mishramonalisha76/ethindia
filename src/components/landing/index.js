import Navbar from "../navbar";
import SecondSection from "./second-section";
import Hero from "../../assets/hero.png";
import "./landing.css";
import 'animate.css';
import Footer from "../footer";
function Landing() {
  return (
    <div className="landing">
      <Navbar />
      <div className="landing-content">
        <div className="landing-hero">
          <div className="landing-hero-text  animate__animated animate__fadeInLeft">
            <h1 >Say HI to MultiFi</h1>
            <p>
              One-stop destination to Borrow, Lend, Stake and Swap your tokens on multiple chains in just a simple click.
            </p>
          </div>
          <div className="landing-hero-img-div">
            <img className="landing-hero-img animate__animated animate__fadeInRight" src={Hero} alt="multchain"/>
          </div>
        </div>
      </div>
      <SecondSection/>
      <Footer/>
    </div>
  );
}

export default Landing;
