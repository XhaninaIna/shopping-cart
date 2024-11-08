import React from 'react';

const StarsInput = ({ stars, onStarsChange }) => (
  <label style={{ marginLeft: '20px' }}>
    Stars Greater Than:
    <input 
      type="number" 
      value={stars} 
      onChange={onStarsChange} 
      min="1" 
    />
  </label>
);

export default StarsInput;
