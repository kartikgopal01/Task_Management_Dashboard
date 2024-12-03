import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  UserIcon, 
  BellIcon, 
  PaletteIcon, 
  SaveIcon 
} from 'lucide-react';

const SettingsPage = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: false
  });

  const [theme, setTheme] = useState('light');
  const [profile, setProfile] = useState({
    name: '',
    email: ''
  });

  const handleSave = () => {
    console.log('Saving settings', { notifications, theme, profile });
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8 space-y-6"
      >
        <h1 className="text-3xl font-bold mb-6">Settings</h1>

        <div className="space-y-4">
          <div>
            <h2 className="flex items-center text-xl font-semibold mb-4">
              <UserIcon className="mr-3" /> Profile
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                value={profile.name}
                onChange={(e) => setProfile({...profile, name: e.target.value})}
                className="px-4 py-2 border rounded-lg"
              />
              <input
                type="email"
                placeholder="Email"
                value={profile.email}
                onChange={(e) => setProfile({...profile, email: e.target.value})}
                className="px-4 py-2 border rounded-lg"
              />
            </div>
          </div>

          <div>
            <h2 className="flex items-center text-xl font-semibold mb-4">
              <BellIcon className="mr-3" /> Notifications
            </h2>
            <div className="space-y-2">
              {Object.keys(notifications).map(type => (
                <label key={type} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={notifications[type]}
                    onChange={() => setNotifications({
                      ...notifications, 
                      [type]: !notifications[type]
                    })}
                    className="form-checkbox"
                  />
                  <span>{type.charAt(0).toUpperCase() + type.slice(1)} Notifications</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h2 className="flex items-center text-xl font-semibold mb-4">
              <PaletteIcon className="mr-3" /> Theme
            </h2>
            <div className="flex space-x-4">
              {['light', 'dark', 'system'].map(themeOption => (
                <button
                  key={themeOption}
                  onClick={() => setTheme(themeOption)}
                  className={`
                    px-4 py-2 rounded-lg capitalize
                    ${theme === themeOption 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-200 text-gray-800'}
                  `}
                >
                  {themeOption}
                </button>
              ))}
            </div>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSave}
          className="w-full bg-blue-500 text-white py-3 rounded-lg flex items-center justify-center"
        >
          <SaveIcon className="mr-3" /> Save Settings
        </motion.button>
      </motion.div>
    </div>
  );
};

export default SettingsPage;