import React, { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PlusIcon, 
  CheckCircleIcon, 
  ClockIcon, 
  ActivityIcon 
} from 'lucide-react';

import AddTaskModal from "../components/AddTaskModal";
import TaskCard from "../components/TaskCard";

const Dashboard = ({ sendDataToParent }) => {
  const [showModal, setShowModal] = useState(false);
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const taskStats = useMemo(() => {
    return {
      total: tasks.length,
      completed: tasks.filter(task => task.completed).length,
      inProgress: tasks.filter(task => !task.completed).length
    };
  }, [tasks]);

  useEffect(() => {
    sendDataToParent(tasks);
  }, [tasks, sendDataToParent]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen p-6"
    >
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-6 bg-white shadow-2xl rounded-xl p-5 border-2 border-blue-100">
          <h1 className="text-4xl font-bold text-gray-800">Dashboard</h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowModal(true)}
            className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-all"
          >
            <PlusIcon className="mr-2" />
            Add Task
          </motion.button>
        </header>

        <div className="grid grid-cols-4 gap-6 mb-8">
          {[
            { 
              label: 'Total Tasks', 
              value: taskStats.total, 
              icon: <ClockIcon />, 
              color: 'bg-blue-50 text-blue-600' 
            },
            { 
              label: 'Completed', 
              value: taskStats.completed, 
              icon: <CheckCircleIcon />, 
              color: 'bg-green-50 text-green-600' 
            },
            { 
              label: 'In Progress', 
              value: taskStats.inProgress, 
              icon: <ActivityIcon />, 
              color: 'bg-yellow-50 text-yellow-600' 
            }
          ].map(({ label, value, icon, color }) => (
            <motion.div 
              key={label}
              whileHover={{ scale: 1.05 }}
              className={`${color} rounded-2xl p-5 flex items-center space-x-4 shadow-md hover:shadow-xl transition-all`}
            >
              <div className="rounded-full bg-white p-3 shadow-md">
                {icon}
              </div>
              <div>
                <p className="text-sm opacity-70">{label}</p>
                <p className="text-3xl font-bold">{value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tasks.map((task) => (
              <motion.div
                key={task.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <TaskCard task={task} />
              </motion.div>
            ))}
          </div>
        </AnimatePresence>

        {showModal && (
          <AddTaskModal 
            closeModal={() => setShowModal(false)} 
          />
        )}
      </div>
    </motion.div>
  );
};

export default Dashboard;