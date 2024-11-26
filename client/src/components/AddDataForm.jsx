import React, { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../constants/constants";

const AddDataForm = () => {
  const [formData, setFormData] = useState({
    team: "",
    gamesPlayed: 0,
    win: 0,
    draw: 0,
    loss: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    points: 0,
    year: 2024,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${BACKEND_URL}/add`, formData);
    alert("Data added successfully");
  };

  return (
    <>
      <h2>Add Data Form</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
          <div key={key}>
            <label>{key}</label>
            <input name={key} value={formData[key]} onChange={handleChange} />
          </div>
        ))}
        <button type="submit">Add Data</button>
      </form>
    </>
  );
};

export default AddDataForm;
