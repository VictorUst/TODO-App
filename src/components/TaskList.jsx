import React from 'react';
import './index.css';

import Task from './Task';

const TaskList = ({ todos }) => {
  const elements = todos.map((item) => {
    const { id, className, ...itemProps } = item;
    return (
      <li className={className} key={id}>
        <Task {...itemProps} />
        {className === 'editing' ? (
          <input type='text' className='edit' value='Editing task' />
        ) : null}
      </li>
    );
  });

  return <ul className='todo-list'>{elements}</ul>;
};

export default TaskList;
