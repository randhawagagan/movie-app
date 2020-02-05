import React, { useState } from "react";
import Select from 'react-select';

const Search = (props) => {
  const options = [
    { value: 'all', label: 'All' },
    { value: 'movie', label: 'Movies' },
    { value: 'series', label: 'Series' },
    { value: 'episode', label: 'Episodes' }
  ];
  const [searchValue, setSearchValue] = useState("");
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("")
  }

  const handleDropdownChange = (selected) => {
    setSelectedOption(selected)
  }

  const callSearchFunction = (e) => {
    e.preventDefault();
    selectedOption.value !== 'all' ? props.search(searchValue, selectedOption.value) : searchValue !== '' ? props.search(searchValue) : props.search('man');
    resetInputField();
  }

  return (
    <div className="search">
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />

      <Select
        value={selectedOption}
        onChange={handleDropdownChange}
        options={options}
        className="select"
        defaultValue={options[0]}
      />
      <input onClick={callSearchFunction} type="submit" value="SEARCH" />
    </div>
  );
}

export default Search;