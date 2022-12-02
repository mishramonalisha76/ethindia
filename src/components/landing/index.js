import Navbar from "../navbar";
import { Link } from "react-router-dom";
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
            <h1 >Say HI to MultiVo</h1>
            <p>
              One-stop destination to Borrow, Lend, Stake and Swap your tokens on multiple chains in just a simple click.
            </p>
            <div>
            <Link to="/createproposal">
                <button>Create Proposal</button>
              </Link>
              <Link to="/showproposal">
            <button>Vote On Proposal</button>
            </Link>
          </div>
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
