import React, { useState, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

const TimeCreator = (props) => {
  const { createdTime } = props;
  const [elapsedTime, setElapsedTime] = useState(formatDistanceToNow(createdTime, { includeSeconds: true }));

  const timer = () => {
    setElapsedTime(() => formatDistanceToNow(createdTime, { includeSeconds: true }));
  };

  useEffect(() => {
    const intervalId = setInterval(() => timer(), 1000);
    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <span className="created">created {elapsedTime} ago</span>;
};

TimeCreator.defaultProps = {
  createdTime: new Date(),
};

TimeCreator.propTypes = {
  createdTime: PropTypes.instanceOf(Date),
};

export default TimeCreator;
