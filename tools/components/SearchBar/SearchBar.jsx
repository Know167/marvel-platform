// tools/components/SearchBar/SearchBar.js
import React from 'react';

import { Search } from '@mui/icons-material';
import { Grid, InputAdornment, TextField } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const handleSearch = (event) => {
    onSearch(event.target.value);
  };

  return (
    <Grid item xs={12} sx={{ marginBottom: '16px' }}>
      <TextField
        placeholder="Search for a tool"
        variant="outlined"
        Width="20%"
        onChange={handleSearch}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: '24px',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          },
        }}
      />
    </Grid>
  );
};

export default SearchBar;
