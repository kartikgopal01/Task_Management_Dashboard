import React from 'react';
import { useSelector } from 'react-redux';
import TaskCard from '../components/TaskCard';

const CompletedTasks = () => {
  // Filter tasks with the "Completed" status
  const completedTasks = useSelector((state) =>
    state.tasks.tasks.filter((task) => task.status === 'Completed')
  );

  return (
    <div style={{ padding: '20px', color: '#fff' }}>
      <h1>Completed Tasks</h1>
      {completedTasks.length > 0 ? (
        completedTasks.map((task) => <TaskCard key={task.id} task={task} />)
      ) : (
        <p>No completed tasks found!</p>
      )}
    </div>
  );
};

export default CompletedTasks;
