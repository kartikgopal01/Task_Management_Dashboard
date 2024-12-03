import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import TaskDetail from "./pages/TaskDetail";
import Sidebar from "./components/Sidebar";
import TaskAnalytics from "./components/TaskAnalytics";
import AllTasksPage from "./components/AllTasksPage";
import SettingsPage from "./components/SettingsPage";
 
 

const App = () => {
  const [tasks, settasks] = useState("");

  // Callback function to update state from Child1
  const handleDataFromChild = (task) => {
    settasks(task);
  };
  return (

    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <main className="flex-1 overflow-auto p-4">
          <Routes>
            <Route path="/" element={<Dashboard sendDataToParent={handleDataFromChild}/>} />
            <Route path="/tasks/:id" element={<TaskDetail />} />
            <Route path="/TaskAnalytics" element={<TaskAnalytics tasks={tasks}/>} />
            <Route path="/tasks" element={<AllTasksPage tasks={tasks}/>} />
            <Route path="/settings" element={<SettingsPage/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
