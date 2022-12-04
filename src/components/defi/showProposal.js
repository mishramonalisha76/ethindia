import { useEffect, useState } from "react";
import { useContractRead ,usePrepareContractWrite, useContractWrite, chainId} from 'wagmi';
import MainAbi from "../../abi/MainAbi.json";
import VoteAbi from "../../abi/voteAbi.json";
import { useContract } from 'wagmi'
import "./index.css";
import { mainContractAddress, voteContractAddress } from "../../constants";

function ShowProposal() {
  const [proposals, setProposals] = useState([]);
  const [proposalId, setProposalId] = useState([]);
  const contract = useContractRead({
    address: '0x1a40f86CDBAe366684ba93E41281BccAFf69A918',
    abi: MainAbi,
    functionName: "daoProposals",
    args: [0],
    onError(error) {
      console.log('Error', error)
    },
  })
  const { config, error } = usePrepareContractWrite({
    address: voteContractAddress[chainId],
    abi: VoteAbi,
    functionName: 'vote',
    args:[0,proposalId]
  })

  // console.log(config, error)
  const { data, isLoading, isSuccess, write } = useContractWrite(config)


  const vote = async(id,option) => {
setProposalId(id);
await write();
  }
  useEffect(() => {
    setProposals([
      {
        daoName: "SushiSwap",
        proposalTitle: "Make the app open to users",
        proposalDescription:
          "Make the app open to users Make the app open to users Make the app open to users Make the app open to users Make the app open to users",
        time: 6,
        options:['1','2']
      },
      {
        daoName: "SushiSwap",
        proposalTitle: "Make the app open to users",
        proposalDescription:
          "Make the app open to users Make the app open to users Make the app open to users Make the app open to users Make the app open to users",
        time: 6,
        options:['1','2']
      },
      {
        daoName: "SushiSwap",
        proposalTitle: "Make the app open to users",
        proposalDescription:
          "Make the app open to users Make the app open to users Make the app open to users Make the app open to users Make the app open to users",
        time: 6,
        options:['1','2']
      },
    ]);
  }, [proposals.length]);


  const retrieve = async (cid) => {
    // console.log("retrieve");
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
    // console.log(metadata);
    // request succeeded! do something with the response object here...
  };

  const unVote = () => {};
  return (
    <div className="show-proposal-div">
      <h1>Vote On Proposals</h1>
      {proposals.map((proposal,index) => (
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
            <button onClick={() => vote(index,0)}>Vote</button>
            <button style={{opacity:'0.5'}} onClick={() => unVote()}>Unvote</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShowProposal;
