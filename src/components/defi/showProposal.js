import { useEffect, useState } from "react";
import "./index.css";

function ShowProposal() {
  const [proposals, setProposals] = useState([]);

  useEffect(() => {
    setProposals([
      {
        daoName: "SushiSwwap",
        proposalTitle: "Make the app open to users",
        proposalDescription:
          "Make the app open to users Make the app open to users Make the app open to users Make the app open to users Make the app open to users",
        time: 6,
      },
      {
        daoName: "SushiSwwap",
        proposalTitle: "Make the app open to users",
        proposalDescription:
          "Make the app open to users Make the app open to users Make the app open to users Make the app open to users Make the app open to users",
        time: 6,
      },
      {
        daoName: "SushiSwwap",
        proposalTitle: "Make the app open to users",
        proposalDescription:
          "Make the app open to users Make the app open to users Make the app open to users Make the app open to users Make the app open to users",
        time: 6,
      },
    ]);
  }, [proposals.length]);
  return (
    <div className="show-proposal-div">
        <h1>Vote On Proposals</h1>
      {proposals.map((proposal) => (
        <div className="show-proposal">
          <p><span>Dao Name:</span> {proposal.daoName}</p>
          <p><span>Title: </span>{proposal.proposalTitle}</p>
          <p><span>Description:</span> {proposal.proposalDescription}</p>
          <p><span>Time: </span>{proposal.time}{' '} hrs</p>
          <div className="vote-unvote">
          <button>Vote</button>
          <button>Unvote</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShowProposal;
