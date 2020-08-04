import React from 'react';
import './index.css';

import Task from './Task';

const TaskList = ({ todos, toggleComplete, onDelete }) => {
  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <li className={todo.complete ? 'completed' : null}>
          <Task
            key={todo.id}
            toggleComplete={() => toggleComplete(todo.id)}
            onDelete={() => onDelete(todo.id)}
            text={todo.text}
          />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
