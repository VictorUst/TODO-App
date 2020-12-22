import React, { useState } from 'react';
import shortid from 'shortid';
import './index.css';
import PropTypes from 'prop-types';

const NewTaskForm = (props) => {
  const [text, setText] = useState('');

  const handleChange = (ev) => {
    setText(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const { onSubmit } = props;
    if (text.length < 1) return;
    onSubmit({
      id: shortid.generate(),
      text,
      isCompleted: false,
      isEditing: false,
      createdTime: new Date(),
    });

    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="text"
        className="new-todo"
        placeholder="What needs to be done?"
        onChange={handleChange}
        value={text}
      />
    </form>
  );
};

NewTaskForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default NewTaskForm;
