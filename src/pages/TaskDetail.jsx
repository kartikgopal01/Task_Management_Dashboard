import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const TaskDetail = () => {
  const { id } = useParams();
  const task = useSelector((state) =>
    state.tasks.find((task) => task.id === parseInt(id))
  );

  if (!task) {
    return <div>Task not found!</div>;
  }

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-2">{task.title}</h2>
      <p className="text-gray-600">Due Date: {task.dueDate || "No deadline"}</p>
      <p className="text-gray-600 mt-4">
        {task.completed ? "Status: Completed" : "Status: Pending"}
      </p>
    </div>
  );
};

export default TaskDetail;
