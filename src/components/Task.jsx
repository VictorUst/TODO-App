import React from 'react';
import './index.css';
import PropTypes from 'prop-types';

const Task = ({ text, toggleComplete, onEdit, onDelete }) => {
  return (
    <div className='view'>
      <input className='toggle' type='checkbox' onClick={toggleComplete} />
      <label>
        <span className='description'>{text}</span>
      </label>
      <button className='icon icon-edit' onClick={onEdit}></button>
      <button className='icon icon-destroy' onClick={onDelete}></button>
    </div>
  );
};

Task.propTypes = {
  text: PropTypes.string.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Task;
