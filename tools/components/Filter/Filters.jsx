// tools/components/SearchBar/Filters.jsx
import React from 'react';

import { Box, Grid } from '@mui/material';

const Filters = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <Grid container spacing={2} sx={{ padding: '16px 0' }}>
      {tabs.map((tab) => (
        <Grid item key={tab}>
          <Box
            component="button"
            sx={{
              backgroundColor:
                activeTab === tab ? 'primary.main' : 'transparent',
              color: activeTab === tab ? '#fff' : 'text.primary',
              padding: '8px 16px',
              borderRadius: '16px',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              '&:hover': {
                backgroundColor:
                  activeTab === tab ? 'primary.dark' : 'action.hover',
              },
            }}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Filters;
