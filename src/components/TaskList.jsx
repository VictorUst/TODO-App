import React from 'react';
import './index.css';
import PropTypes from 'prop-types';

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

TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.element).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TaskList;
