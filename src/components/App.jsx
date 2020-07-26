import React from 'react';

import NewTaskForm from './NewTaskForm';
import TaskList from './TaskList';
import Footer from './Footer';

const App = () => {
  const todoData = [
    { label: 'Completed task', className: 'completed', id: 1 },
    { label: 'Editing task', className: 'editing', id: 2 },
    { label: 'Active task', id: 3 },
  ];

  return (
    <>
      <NewTaskForm />
      <TaskList todos={todoData} />
      <Footer />
    </>
  );
};

export default App;
