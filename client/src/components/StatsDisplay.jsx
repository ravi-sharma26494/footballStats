import React, { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../constants/constants";

const StatsDisplay = () => {
  const [year, setYear] = useState("");
  const [stats, setStats] = useState([]);

  const fetchStats = async () => {
    const response = await axios.get(`${BACKEND_URL}/stats?year=${year}`);
    setStats(response.data);
  };

  return (
    <div>
      <h3>Stats Display</h3>
      <input
        type="number"
        placeholder="Enter Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <button onClick={fetchStats}>Fetch Stats</button>
      {
        stats.length === 0 && year !== "" ? (
          <p>No stats to show.</p>
        ) : (
          <ul>
            {stats.map((stat, index) => (
              <li key={index}>
                Games Played: {stat.gamesPlayed}, Wins: {stat.win}, Draws:{" "}
                {stat.draw}
              </li>
            ))}
          </ul>
        )

        // Render stats if available or no year provided

        // Example:
        // Games Played: 20, Wins: 10, Draws: 5

        // Rendered:
        // Games Played: 20, Wins: 10, Draws: 5

        // If no stats are available and no year is provided, render a message
        // Example:
        // No stats found for the specified year.

        // Rendered:
        // No stats found for the specified year.
      }
    </div>
  );
};

export default StatsDisplay;
