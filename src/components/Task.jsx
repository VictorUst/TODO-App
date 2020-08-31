import React from 'react';
import './index.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import TaskInput from './TaskInput';
import TimeCreator from './TimeCreator';

const Task = ({ id, text, isCompleted, isEditing, onComplete, onEdit, onDelete, onEditText, onBlur, createdTime }) => {
  return (
    <li className={classNames({ completed: isCompleted }, { editing: isEditing })}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={!!isCompleted} onClick={onComplete} />
        <label>
          <span className="description">{text}</span>
          <TimeCreator createdTime={createdTime} />
        </label>
        <button type="button" className="icon icon-edit" onClick={onEdit} label="edit" />
        <button type="button" className="icon icon-destroy" onClick={onDelete} label="delete" />
      </div>
      {isEditing ? <TaskInput text={text} id={id} onBlur={() => onBlur(id)} onEditText={onEditText} /> : null}
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  isEditing: PropTypes.bool.isRequired,
  onComplete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEditText: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  createdTime: PropTypes.instanceOf(Date).isRequired,
};

export default Task;
