import React from 'react';
import clsx from 'clsx';

const ROSCommand = ({ children }) => {
  return (
    <div className="ros-command">
      <code>{children}</code>
    </div>
  );
};

export default ROSCommand;