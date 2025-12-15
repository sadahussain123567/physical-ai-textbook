import React from 'react';

const HardwareSpec = ({ children }) => {
  return (
    <div className="hardware-spec">
      <code>{children}</code>
    </div>
  );
};

export default HardwareSpec;