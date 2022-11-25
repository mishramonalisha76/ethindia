
import "./dashboard.css";
import Buy from "./buy";
import { useState } from "react";
import Sell from "./sell";
import Lend from "./lend";
import Swap from "./Swap";

function Dashboard() {
  const[card,setCard] = useState(0);

  const handleNext = () => {
    console.log("here")
    setCard(card+1);
  }

  return (
    <div class="dashboard">
      {card === 0 && <Buy handleNext = {()=>handleNext()}/>}
      {card === 1 && <Sell handleNext = {()=>handleNext()}/>}
      {card === 2 && <Lend handleNext = {()=>handleNext()}/>}
      {card === 3 && <Swap handleNext = {()=>handleNext()}/>}
    </div>
  );
}

export default Dashboard;
