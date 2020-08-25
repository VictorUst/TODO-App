import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

export default class TimeCreator extends React.Component {
  constructor(props) {
    super();
    this.state = {
      createdTime: props.createdTime,
      elapsedTime: formatDistanceToNow(props.createdTime, { includeSeconds: true }),
    };
    this.intervalId = null;
  }

  componentDidMount() {
    this.intervalId = setInterval(() => this.timer(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  timer() {
    const { createdTime } = this.state;
    this.setState(() => ({
      elapsedTime: formatDistanceToNow(createdTime, { includeSeconds: true }),
    }));
  }

  render() {
    const { elapsedTime } = this.state;
    return <span className='created'>created {elapsedTime} ago</span>;
  }
}

TimeCreator.defaultProps = {
  createdTime: new Date(),
};

TimeCreator.propTypes = {
  createdTime: PropTypes.instanceOf(Date),
};
