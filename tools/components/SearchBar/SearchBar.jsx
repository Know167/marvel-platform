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
            '& fieldset': {
              borderColor: '#9d74ff', // Same color as the filter buttons
            },
            '&:hover fieldset': {
              borderColor: '#9d74ff', // Same color as the filter buttons on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: '#9d74ff', // Same color as the filter buttons when focused
            },
          },
        }}
      />
    </Grid>
  );
};

export default SearchBar;
