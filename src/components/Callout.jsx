import React from 'react';
import clsx from 'clsx';
import './Callout.css';

const Callout = ({ type = 'default', children }) => {
  const calloutType = type.toLowerCase();
  const className = clsx('callout', `callout-${calloutType}`);

  return (
    <div className={className}>
      <div className="callout-content">{children}</div>
    </div>
  );
};

export default Callout;