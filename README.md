# Task Manager with Analytics

A **Task Manager** application built using React.js with a focus on managing tasks effectively and analyzing their statuses. The application features task tracking, task analytics with visual representation using a pie chart, and a modern, responsive UI styled with Tailwind CSS.

## 🚀 Features

- **Add, View, and Manage Tasks**: Easily create, edit, and delete tasks.
- **Task Analytics**: Displays a dynamic pie chart representing completed and pending tasks.
- **Responsive Sidebar**: Includes navigation to different views like "Task Analytics", "Completed Tasks", and "Pending Tasks".
- **Search Bar**: Quickly filter tasks based on keywords.
- **Modern Design**: Styled using Tailwind CSS with animations for a smooth user experience.
- **Error Handling**: Handles invalid or missing data gracefully.

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Chart.js, Tailwind CSS
- **Backend (Optional)**: Node.js for setting up a local development server
- **State Management**: React's Context API or Redux (if included)

---

## 📂 Project Structure

/src ├── /components │ ├── Sidebar.jsx │ ├── TaskCard.jsx │ ├── TaskAnalytics.jsx │ ├── AddTaskModal.jsx │ └── SearchBar.jsx ├── /features │ ├── tasksSlice.js ├── /pages │ ├── Dashboard.jsx │ ├── CompletedTasks.jsx │ └── PendingTasks.jsx ├── /styles │ └── index.css ├── App.jsx ├── index.js └── store.js

---

---

## 🔧 Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/task-manager-analytics.git
   cd task-manager-analytics
- 2.**npm install**
- 3.**npm start**
