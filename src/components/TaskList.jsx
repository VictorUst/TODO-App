import React from 'react';
import './index.css';
import PropTypes from 'prop-types';

import Task from './Task';

const TaskList = ({ todos, onComplete, onEdit, onDelete, onEditText, onBlur }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <Task
          key={todo.id}
          {...todo}
          onComplete={() => onComplete(todo.id)}
          onEdit={() => onEdit(todo.id)}
          onDelete={() => onDelete(todo.id)}
          onEditText={onEditText}
          onBlur={onBlur}
        />
      ))}
    </ul>
  );
};

TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onComplete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEditText: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

export default TaskList;
