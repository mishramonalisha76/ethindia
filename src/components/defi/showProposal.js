import { useEffect, useState } from "react";
import { makeStorageClient } from "../../ipfs";
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
    const client = makeStorageClient();
    const res = await client.get(cid);
    console.log(`Got a response! [${res.status}] ${res.statusText}`);
    console.log(res);
    if (!res.ok) {
      throw new Error(`failed to get ${cid}`);
    }

    // request succeeded! do something with the response object here...
  };

  const vote = () => {};
retrieve('bafybeieeudmooemnbya3kewnqkxucgsaf2urikyajs4hiqs7osdwba73mi');
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
            <span>Description:</span> {proposal.proposalDescription}
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
