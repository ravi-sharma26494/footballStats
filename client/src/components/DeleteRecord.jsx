import React, { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../constants/constants";

const DeleteRecord = () => {
  const [team, setTeam] = useState("");

  const handleDelete = async () => {
    const response = await axios.post(`${BACKEND_URL}/delete`, { team });
    console.log(response);
    alert("Record deleted successfully");
  };

  return (
    <div>
      <h3>Delete Record</h3>
      <input
        type="text"
        placeholder="Enter Team Name"
        value={team}
        onChange={(e) => setTeam(e.target.value)}
      />
      <button onClick={handleDelete}>Delete Record</button>
    </div>
  );
};

export default DeleteRecord;
