import React from 'react';
import './index.css';
import PropTypes from 'prop-types';

const Footer = ({ toDo, filter, onFilterChange, removeAllTaskComplete }) => {
  const filterButtons = [
    { name: 'all', text: 'All' },
    { name: 'active', text: 'Active' },
    { name: 'complete', text: 'Completed' },
  ];
  const buttons = filterButtons.map(({ name, text }) => {
    const isActive = name === filter;
    const classNames = isActive ? 'selected' : null;

    return (
      <li>
        <button key={name} className={classNames} onClick={() => onFilterChange(name)}>
          {text}
        </button>
      </li>
    );
  });

  return (
    <footer className='footer'>
      <span className='todo-count'>{toDo} items left</span>
      <ul className='filters'>{buttons}</ul>
      <button className='clear-completed' onClick={() => removeAllTaskComplete()}>
        Clear completed
      </button>
    </footer>
  );
};

Footer.propTypes = {
  toDo: PropTypes.number.isRequired,
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  removeAllTaskComplete: PropTypes.func.isRequired,
};

export default Footer;
