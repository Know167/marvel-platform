// tools/components/SortDropdown/SortDropdown.jsx
import React from 'react';

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const SortDropdown = ({ sortOption, setSortOption }) => {
  const handleChange = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <FormControl>
      <InputLabel id="sort-label">Sort By</InputLabel>
      <Select
        labelId="sort-label"
        value={sortOption}
        onChange={handleChange}
        label="Sort By"
        sx={{ borderRadius: '16px' }}
      >
        <MenuItem value="Most Popular">Most Popular</MenuItem>
        <MenuItem value="Recently Added">Recently Added</MenuItem>
        <MenuItem value="Recommended">Recommended</MenuItem>
        <MenuItem value="A-Z">A-Z</MenuItem>
        <MenuItem value="Z-A">Z-A</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortDropdown;
