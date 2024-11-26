import React, { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../constants/constants";

const AverageGoals = () => {
  const [year, setYear] = useState("");
  const [averages, setAverages] = useState([]);

  const fetchAverages = async () => {
    const response = await axios.get(
      `${BACKEND_URL}/averageGoals?year=${year}`
    );
    setAverages(response.data);
  };

  return (
    <div>
      <h3>Average Goals</h3>
      <input
        type="number"
        placeholder="Enter Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <button onClick={fetchAverages}>Fetch Average Goals</button>
      <ul>
        {averages.map((avg, index) => (
          <li key={index}>
            {avg._id} - Average Goals: {avg.avgGoals.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AverageGoals;
