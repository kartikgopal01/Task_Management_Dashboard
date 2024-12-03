import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { 
  HomeIcon, 
  ChartBarIcon, 
  ClipboardListIcon, 
  SettingsIcon
} from "lucide-react";

const Sidebar = () => {
  const navItems = [
    { 
      to: "/", 
      icon: HomeIcon, 
      label: "Dashboard" 
    },
    { 
      to: "/TaskAnalytics", 
      icon: ChartBarIcon, 
      label: "Task Analytics" 
    },
    { 
      to: "/tasks", 
      icon: ClipboardListIcon, 
      label: "All Tasks" 
    }
  ];

  return (
    <motion.div 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="w-64 bg-gradient-to-br from-blue-900 to-blue-800 text-white flex flex-col shadow-2xl h-screen"
    >
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center p-6 border-b border-blue-700"
      >
        <h2 className="text-3xl font-extrabold tracking-tight">Task Hub</h2>
      </motion.div>
      
      <nav className="flex-1 py-4">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => `
              flex items-center px-6 py-3 
              transition-all duration-300 
              ${isActive 
                ? 'bg-blue-700 text-white' 
                : 'hover:bg-blue-800 text-blue-200'
              }
            `}
          >
            {({ isActive }) => (
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3"
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </motion.div>
            )}
          </NavLink>
        ))}
      </nav>

      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="p-4 border-t border-blue-700"
      >
        {/* <NavLink
          to="/settings"
          className="flex items-center px-4 py-2 hover:bg-blue-800 rounded-md transition-all"
        >
          <SettingsIcon className="w-5 h-5 mr-3" />
          Settings
        </NavLink> */}
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;