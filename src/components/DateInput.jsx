import React from 'react';

const DateInput = ({ date, onDateChange }) => (
  <label>
    Created After:
    <input type="date" value={date} onChange={onDateChange} />
  </label>
);

export default DateInput;
