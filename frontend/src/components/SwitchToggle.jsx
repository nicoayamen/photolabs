import React from 'react';

const SwitchToggle = ({ light, switchLight }) => {
  const handleClick = () => {
    switchLight(); // Call switchLight function when the icon is clicked
  };

  return (
    <div className="switch-toggle" onClick={switchLight}>
      {light === 'on' ? '🌞' : '🌚'}
    </div>
  );
};

export default SwitchToggle;
