import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TaskInput = (props) => {
  const { text } = props;

  const [editText, setEditText] = useState(text);

  const handleInputChange = (ev) => {
    setEditText(ev.target.value);
  };

  const onKeyDown = (ev) => {
    const { id, onEditText } = props;
    if (ev.keyCode === 13) {
      onEditText(id, editText);
    }
  };

  const { onBlur } = props;

  return (
    <input
      id="inputEdit"
      type="text"
      className="edit"
      onKeyDown={(ev) => onKeyDown(ev)}
      onBlur={onBlur}
      onChange={handleInputChange}
      value={editText}
    />
  );
};

TaskInput.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onEditText: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

export default TaskInput;
