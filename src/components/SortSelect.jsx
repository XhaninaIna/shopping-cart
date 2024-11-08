import React from 'react';

const SortSelect = ({ sortOrder, onSortOrderChange }) => (
  <label style={{ marginLeft: '20px' }}>
    Sort Order:
    <select value={sortOrder} onChange={onSortOrderChange}>
      <option value="asc">Ascending</option>
      <option value="desc">Descending</option>
    </select>
  </label>
);

export default SortSelect;
