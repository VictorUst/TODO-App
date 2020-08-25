import React from 'react';
import PropTypes from 'prop-types';

export default class TaskInput extends React.Component {
  constructor(props) {
    super();
    this.state = {
      text: props.text,
    };
  }

  handleInputChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  onKeyDown = (e) => {
    const { id, onEditText } = this.props;
    const { text } = this.state;
    if (e.keyCode === 13) {
      onEditText(id, text);
    }
  };

  render() {
    const { onBlur } = this.props;
    const { text } = this.state;

    return (
      <input
        type='text'
        className='edit'
        onKeyDown={(e) => this.onKeyDown(e)}
        onBlur={onBlur}
        onChange={this.handleInputChange}
        value={text}
        autoFocus
      />
    );
  }
}

TaskInput.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onEditText: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};
