import React from 'react';
import { Pie } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  ArcElement, 
  Tooltip, 
  Legend 
} from 'chart.js';
import { motion } from 'framer-motion';

ChartJS.register(ArcElement, Tooltip, Legend);

const TaskAnalytics = ({ tasks }) => {
  // Safely handle tasks input
  const safeTasks = Array.isArray(tasks) ? tasks : [];

  // Detailed task analytics
  const completed = safeTasks.filter((task) => task.completed).length;
  const pending = safeTasks.filter((task) => !task.completed).length;
  const total = safeTasks.length;
  
  // Percentage calculations
  const completedPercentage = total > 0 
    ? ((completed / total) * 100).toFixed(1) 
    : 0;
  const pendingPercentage = total > 0 
    ? ((pending / total) * 100).toFixed(1) 
    : 0;

  // Chart configuration
  const data = {
    labels: ["Completed", "Pending"],
    datasets: [
      {
        label: "Tasks",
        data: [completed, pending],
        backgroundColor: ["#4CAF50", "#FF9800"],
        borderColor: ["#388E3C", "#F57C00"],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.parsed;
            const percentage = ((value / total) * 100).toFixed(1);
            return `${context.label}: ${value} (${percentage}%)`;
          },
        },
      },
    },
    animation: {
      animateRotate: true,
      animateScale: true,
    },
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-2xl border border-gray-100"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">Task Analytics</h2>
        <div className="text-sm text-gray-500">
          Total Tasks: {total}
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-green-50 p-3 rounded">
          <div className="text-green-600 font-semibold">
            Completed Tasks
          </div>
          <div className="text-2xl font-bold text-green-700">
            {completed} ({completedPercentage}%)
          </div>
        </div>
        <div className="bg-orange-50 p-3 rounded">
          <div className="text-orange-600 font-semibold">
            Pending Tasks
          </div>
          <div className="text-2xl font-bold text-orange-700">
            {pending} ({pendingPercentage}%)
          </div>
        </div>
      </div>

      <div className="h-64">
        <Pie data={data} options={options} />
      </div>
    </motion.div>
  );
};

export default TaskAnalytics;