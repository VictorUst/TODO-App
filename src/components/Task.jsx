import React from 'react';
import './index.css';

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

export default Task;
