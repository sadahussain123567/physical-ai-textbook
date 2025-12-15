import React, { useState } from 'react';

const CollapsibleCode = ({ title = "Show Code", children }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`collapsible-code ${expanded ? 'expanded' : ''}`}>
      <div className="collapsible-code-header" onClick={toggleExpanded}>
        <span>{title}</span>
        <span>{expanded ? '▲' : '▼'}</span>
      </div>
      <div className="collapsible-code-content">
        {children}
      </div>
    </div>
  );
};

export default CollapsibleCode;