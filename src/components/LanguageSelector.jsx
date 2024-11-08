import React from 'react';

const LanguageSelector = ({ language, onLanguageChange }) => {
  const languages = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby'];

  return (
    <div>
      <h2>Select a Programming Language</h2>
      <select value={language} onChange={onLanguageChange}>
        <option value="">Choose a language</option>
        {languages.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
