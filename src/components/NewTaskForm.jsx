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
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false,
    });

    this.setState({
      text: '',
    });
  };

  render() {
    return (
      <header className='header'>
        <h1>todos</h1>
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
      </header>
    );
  }
}
