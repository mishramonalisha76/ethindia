import { useState } from "react";
import { makeStorageClient,jsonFile } from "../../ipfs";
import { useContractWrite, usePrepareContractWrite } from 'wagmi'


import "./index.css";

function CreateProposal() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [time, setTime] = useState(0);
  const [daoName, setDaoName] = useState("");
  const [options, setOptions] = useState(1);

  const handleTitleChange = (val) => {
    setTitle(val);
  };
  const handleDescChange = (val) => {
    console.log(val)
    setDesc(val);
  };
  const handleDaoChange = (val) => {
    setDaoName(val);
  };
  const handletimeChange = (val) => {
    setTime(val);
  };
  const handleSubmit = async () => {
    console.log(desc)
    const metadataFile = jsonFile('metadata.json', {
        path: desc,
      })
    const client = makeStorageClient();
    const cid = await client.put([metadataFile],{
        name:title,
    });
    console.log("stored files with cid:", cid);
    await handleCall();
    return cid;
  };

  const handleCall = async () => {
    const { config } = usePrepareContractWrite({
        address: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
        abi: wagmigotchiABI,
        functionName: 'feed',
      })
      const { data, isLoading, isSuccess, write } = useContractWrite(config)
   console.log(isSuccess);    
   
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
        <select name="options" id="options">
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
