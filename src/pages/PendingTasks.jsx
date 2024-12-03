import React from 'react';
import { useSelector } from 'react-redux';
import TaskCard from '../components/TaskCard';

const PendingTasks = () => {
  // Filter tasks with the "Pending" status
  const pendingTasks = useSelector((state) =>
    state.tasks.tasks.filter((task) => task.status === 'Pending')
  );

  return (
    <div style={{ padding: '20px', color: '#fff' }}>
      <h1>Pending Tasks</h1>
      {pendingTasks.length > 0 ? (
        pendingTasks.map((task) => <TaskCard key={task.id} task={task} />)
      ) : (
        <p>No pending tasks found!</p>
      )}
    </div>
  );
};

export default PendingTasks;
