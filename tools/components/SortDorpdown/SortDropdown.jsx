import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const SortDropdown = ({ sortOption, setSortOption }) => {
  const handleChange = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <FormControl
      variant="outlined"
      sx={{
        minWidth: 120,
        borderRadius: '16px',
        '& .MuiOutlinedInput-root': {
          borderRadius: '16px',
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
    >
      <InputLabel id="sort-label">Sort By</InputLabel>
      <Select
        labelId="sort-label"
        value={sortOption}
        onChange={handleChange}
        label="Sort By"
        sx={{
          borderRadius: '16px',
        }}
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
