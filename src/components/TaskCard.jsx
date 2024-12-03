import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../features/tasksSlice";
import { motion } from "framer-motion";

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();

  const handleComplete = () => {
    dispatch(updateTask({ ...task, completed: !task.completed }));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className={`p-4 rounded shadow-lg border ${
        task.completed ? "bg-green-100" : "bg-white"
      }`}
    >
      <h3 className="text-xl font-bold">{task.title}</h3>
      <p className="text-gray-500">Due: {task.dueDate || "No deadline"}</p>
      <div className="flex items-center justify-between mt-4">
        <button
          onClick={handleComplete}
          className={`${
            task.completed ? "bg-gray-500" : "bg-blue-500"
          } text-white px-4 py-2 rounded hover:opacity-90`}
        >
          {task.completed ? "Mark Pending" : "Mark Complete"}
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </motion.div>
  );
};

export default TaskCard;
