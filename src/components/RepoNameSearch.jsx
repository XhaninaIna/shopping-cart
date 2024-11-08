import React from 'react';

const RepoNameSearch = ({ searchName, onSearchName }) => {
  return (
    <div>
      <label>
        Repository Name:
        <input
          type="text"
          value={searchName}
          onChange={onSearchName}
          placeholder="Search by repository name"
        />
      </label>
    </div>
  );
};

export default RepoNameSearch;
