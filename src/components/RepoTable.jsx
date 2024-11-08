import React from 'react';

const RepoTable = ({ data }) => {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' , color:"black"}}>
      <thead>
        <tr>
          <th style={{ border: '1px solid black', padding: '8px' }}>Language</th>
          <th style={{ border: '1px solid black', padding: '8px', color:"black" }}>Name</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Watchers</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Last Updated</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Created At</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Description</th>
        </tr>
      </thead>
      <tbody>
        {data.map((repo) => (
          <tr key={repo.id}>
            <td style={{ border: '1px solid black', padding: '8px' }}>{repo.language}</td>
            <td style={{ border: '1px solid black', padding: '8px' , color:"black"}}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" style={{color:"black"}}>{repo.name}</a>
            </td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{repo.watchers}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{new Date(repo.updated_at).toLocaleDateString()}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{new Date(repo.created_at).toLocaleDateString()}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{repo.description || 'No description available.'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RepoTable;
