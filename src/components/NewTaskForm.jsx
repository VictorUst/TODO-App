import React from 'react';
import shortid from 'shortid';
import './index.css';
import PropTypes from 'prop-types';

export default class NewTaskForm extends React.Component {
  state = {
    text: '',
  };

  handleChange = (ev) => {
    this.setState({
      text: ev.target.value,
    });
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { text } = this.state;
    const { onSubmit } = this.props;
    if (text.length < 1) return;
    onSubmit({
      id: shortid.generate(),
      text,
      isCompleted: false,
      isEditing: false,
      createdTime: new Date(),
    });

    this.setState({
      text: '',
    });
  };

  render() {
    const { text } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="text"
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={this.handleChange}
          value={text}
        />
      </form>
    );
  }
}

NewTaskForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
