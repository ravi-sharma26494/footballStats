import React, { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../constants/constants";

const Top10Records = () => {
  const [minWins, setMinWins] = useState("");
  const [records, setRecords] = useState([]);

  const fetchRecords = async () => {
    const response = await axios.get(`${BACKEND_URL}/top10?minWins=${minWins}`);
    setRecords(response.data);
  };

  return (
    <div>
      <h3>Top 10 Records</h3>
      <input
        type="number"
        placeholder="Enter Minimum Wins"
        value={minWins}
        onChange={(e) => setMinWins(e.target.value)}
      />
      <button onClick={fetchRecords}>Fetch Records</button>
      <ul>
        {records.map((record, index) => (
          <li key={index}>
            {record.team} - Wins: {record.win}, Points: {record.points}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Top10Records;
