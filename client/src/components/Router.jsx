import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddDataForm from "./AddDataForm";
import UpdateDataForm from "./UpdateDataForm";
import StatsDisplay from "./StatsDisplay";
import DeleteRecord from "./DeleteRecord";
import Top10Records from "./Top10Records";
import AverageGoals from "./AverageGoals";
import Navbar from "./Navbar";

const AppRouter = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<AddDataForm />} />
      <Route path="/update" element={<UpdateDataForm />} />
      <Route path="/stats" element={<StatsDisplay />} />
      <Route path="/delete" element={<DeleteRecord />} />
      <Route path="/top10" element={<Top10Records />} />
      <Route path="/average-goals" element={<AverageGoals />} />
    </Routes>
  </Router>
);

export default AppRouter;
