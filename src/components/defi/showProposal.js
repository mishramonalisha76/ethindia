import { useEffect, useState } from "react";
import { makeStorageClient } from "../../ipfs";
import { CarReader, CarWriter } from "@ipld/car";
import "./index.css";

function ShowProposal() {
  const [proposals, setProposals] = useState([]);

  useEffect(() => {
    setProposals([
      {
        daoName: "SushiSwap",
        proposalTitle: "Make the app open to users",
        proposalDescription:
          "Make the app open to users Make the app open to users Make the app open to users Make the app open to users Make the app open to users",
        time: 6,
      },
      {
        daoName: "SushiSwap",
        proposalTitle: "Make the app open to users",
        proposalDescription:
          "Make the app open to users Make the app open to users Make the app open to users Make the app open to users Make the app open to users",
        time: 6,
      },
      {
        daoName: "SushiSwap",
        proposalTitle: "Make the app open to users",
        proposalDescription:
          "Make the app open to users Make the app open to users Make the app open to users Make the app open to users Make the app open to users",
        time: 6,
      },
    ]);
  }, [proposals.length]);
  const retrieve = async (cid) => {
    console.log("retrieve");
    // const client = makeStorageClient();
    const res = await fetch(
      `https://${cid}.ipfs.dweb.link/${encodeURIComponent("metadata.json")}`
    );
    if (!res.ok) {
      throw new Error(
        `error fetching image metadata: [${res.status}] ${res.statusText}`
      );
    }
    const metadata = await res.json();
    console.log(metadata);
    // request succeeded! do something with the response object here...
  };

  const vote = () => {};
  const unVote = () => {};
  return (
    <div className="show-proposal-div">
      <h1>Vote On Proposals</h1>
      {proposals.map((proposal) => (
        <div className="show-proposal">
          <p>
            <span>Dao Name:</span> {proposal.daoName}
          </p>
          <p>
            <span>Title: </span>
            {proposal.proposalTitle}
          </p>
          <p>
            <span>Description:</span>{" "}
            {retrieve('bafybeihsdhqa22kuwlvjt7nfjac4igezbrz2ov7sy5u5xu2frpgthrcxhe').path}
            {}
          </p>
          <p>
            <span>Time: </span>
            {proposal.time} hrs
          </p>
          <div className="vote-unvote">
            <button onClick={() => vote()}>Vote</button>
            <button onClick={() => unVote()}>Unvote</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShowProposal;
