import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { 
  FilterIcon, 
  SortAscIcon, 
  SearchIcon, 
  PlusIcon 
} from 'lucide-react';
import { deleteTask, updateTask } from '../features/tasksSlice';

const AllTasksPage = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || task.status === filter;
    return matchesSearch && matchesFilter;
  });

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleUpdateStatus = (task) => {
    const statusCycle = ['pending', 'in-progress', 'completed'];
    const currentIndex = statusCycle.indexOf(task.status);
    const nextStatus = statusCycle[(currentIndex + 1) % statusCycle.length];
    
    dispatch(updateTask({ 
      id: task.id, 
      status: nextStatus 
    }));
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">All Tasks</h1>
        <div className="flex space-x-4">
          <div className="relative">
            <input 
              type="text"
              placeholder="Search tasks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <SearchIcon className="absolute left-3 top-3 text-gray-400" />
          </div>
          <select 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 border rounded-lg"
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>

      <motion.div 
        layout 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredTasks.map(task => (
          <motion.div
            key={task.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition-all"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg">{task.title}</h3>
              <span 
                className={`px-3 py-1 rounded-full text-xs ${
                  task.status === 'completed' ? 'bg-green-100 text-green-800' :
                  task.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}
              >
                {task.status}
              </span>
            </div>
            <p className="text-gray-600 mb-4">{task.description}</p>
            <div className="flex justify-between items-center">
              <button 
                onClick={() => handleUpdateStatus(task)}
                className="text-blue-500 hover:text-blue-700"
              >
                Update Status
              </button>
              <button 
                onClick={() => handleDeleteTask(task.id)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AllTasksPage;