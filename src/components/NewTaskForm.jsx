import React from 'react';
import shortid from 'shortid';
import './index.css';
import PropTypes from 'prop-types';

export default class NewTaskForm extends React.Component {
  static propTypes = {
    text: PropTypes.string,
  };

  state = {
    text: '',
  };

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      isCompleted: false,
      isEditing: false,
    });

    this.setState({
      text: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name='text'
          className='new-todo'
          placeholder='What needs to be done?'
          autofocus
          onChange={this.handleChange}
          value={this.state.text}
        />
      </form>
    );
  }
}
