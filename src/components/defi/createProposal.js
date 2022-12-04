import { useState } from "react";
import { makeStorageClient,jsonFile } from "../../ipfs";
import { useContractWrite, usePrepareContractWrite,chainId } from 'wagmi'
import MainAbi from "../../abi/MainAbi.json";


import "./index.css";
import { mainContractAddress } from "../../constants";

function CreateProposal() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [time, setTime] = useState(0);
  const [daoName, setDaoName] = useState("");
  const [hash, setHash] = useState("");
  const [options, setOptions] = useState(1);
  const { config, error } = usePrepareContractWrite({
    address: mainContractAddress,
    abi: MainAbi,
    functionName: 'createDaoProposal',
    args:[daoName,title,hash,options,time]
  })

  console.log(config, error)
  const { data, isLoading, isSuccess, write } = useContractWrite(config)
  console.log(data, isLoading, isSuccess)   

  const handleTitleChange = (val) => {
    setTitle(val);
  };
  const handleDescChange = (val) => {
    console.log(val)
    setDesc(val);
  };
  const handleOptionsChange = (val) => {
    console.log(val)
    setOptions(val);
  };
  const handleDaoChange = (val) => {
    setDaoName(val);
  };
  const handletimeChange = (val) => {
    setTime(val);
  };
  const handleSubmit = async () => {
    console.log(desc)
    console.log(options)
    const metadataFile = jsonFile('metadata.json', {
        path: desc,
      })
    const client = makeStorageClient();
    const cid = await client.put([metadataFile],{
        name:title,
    });
    console.log("stored files with cid:", cid);
    
   setHash(cid);
   console.log(write);
   await write();
  };
 console.log(isSuccess)
  const handleCall = async () => {
    
  
   
  };
  return (
    <>
      <h1 className="create-h1">Create your proposal</h1>
      <div className="create-proposal">
        <label>Dao Name</label>
        <input
          type="text"
          name="daoname"
          value={daoName}
          onChange={(e) => handleDaoChange(e.target.value)}
        />
        <label>Proposal Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => handleTitleChange(e.target.value)}
        />
        <label>Proposal Description</label>
        <textarea
          type="text"
          name="desc"
          cols='40'
          rows='5'
          value={desc}
          onChange={(e) => handleDescChange(e.target.value)}
        />
        <label>Options</label>
        <select name="options" id="options" onChange= {(e)=>handleOptionsChange(e.target.value)}>
          <option value='1'>1</option>
          <option value='2'>2</option>
        </select>
        <label>Time duration(in hrs)</label>
        <input
          type="number"
          name="time"
          value={time}
          onChange={(e) => handletimeChange(e.target.value)}
        />
        <button onClick={() => handleSubmit()}>Create</button>
      </div>
    </>
  );
}

export default CreateProposal;
