import { useState } from "react";
import client from "../../ipfs";
import { makeStorageClient } from "../../ipfs";

import "./index.css";

function CreateProposal() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [time, setTime] = useState(0);
  const [daoName, setDaoName] = useState("");

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
    const client = makeStorageClient();
    const cid = await client.put(desc);
    console.log("stored files with cid:", cid);
    return cid;
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
        <input
          type="file"
          name="desc"
          onChange={(e) => handleDescChange(e.target.files)}
        />
        <label>Token</label>
        <select name="token" id="token">
          <option value="matic">Matic</option>
          <option value="sushi">Sushi</option>
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