import React from 'react';
import PropTypes from 'prop-types';

export default class TaskInput extends React.Component {
  constructor(props) {
    super();
    this.state = {
      text: props.text,
    };
  }

  handleInputChange = (ev) => {
    this.setState({
      text: ev.target.value,
    });
  };

  onKeyDown = (ev) => {
    const { id, onEditText } = this.props;
    const { text } = this.state;
    if (ev.keyCode === 13) {
      onEditText(id, text);
    }
  };

  render() {
    const { onBlur } = this.props;
    const { text } = this.state;

    return (
      <input
        type="text"
        className="edit"
        onKeyDown={(ev) => this.onKeyDown(ev)}
        onBlur={onBlur}
        onChange={this.handleInputChange}
        value={text}
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
