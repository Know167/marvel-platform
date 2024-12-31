// components/SearchBar.js
import React from 'react';

import { Search } from '@mui/icons-material';
import { Grid, TextField } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const handleSearch = (event) => {
    onSearch(event.target.value);
  };

  return (
    <Grid item>
      <TextField
        placeholder="Search tools..."
        variant="outlined"
        onChange={handleSearch}
        InputProps={{
          startAdornment: <Search />,
        }}
        fullWidth
      />
    </Grid>
  );
};

export default SearchBar;
