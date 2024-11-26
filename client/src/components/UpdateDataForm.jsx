import React, { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../constants/constants";

const UpdateDataForm = () => {
  const [team, setTeam] = useState("");
  const [updates, setUpdates] = useState({
    gamesPlayed: 0,
    win: 0,
    draw: 0,
    loss: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    points: 0,
    year: 2024,
  });

  const handleUpdateChange = (e) => {
    setUpdates({ ...updates, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${BACKEND_URL}/update1`, {
      team,
      updates,
    });
    alert("Data updated successfully");
  };

  return (
    <>
      <h2>Update a record</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Team</label>
          <input
            name="team"
            value={team}
            onChange={(e) => setTeam(e.target.value)}
          />
        </div>
        {Object.keys(updates).map((key) => (
          <div key={key}>
            <label>{key}</label>
            <input
              name={key}
              value={updates[key]}
              onChange={handleUpdateChange}
            />
          </div>
        ))}
        <button type="submit">Update Data</button>
      </form>
    </>
  );
};

export default UpdateDataForm;
