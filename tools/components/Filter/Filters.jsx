// tools/components/SearchBar/Filters.jsx
import React from 'react';

import { Box, Grid } from '@mui/material';

const Filters = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <Grid container spacing={2} sx={{ padding: '16px 0' }} wrap="nowrap">
      {tabs.map((tab) => (
        <Grid item key={tab} xs>
          <Box
            component="button"
            sx={{
              width: '100%',
              backgroundColor:
                activeTab === tab ? 'primary.main' : 'transparent',
              color: activeTab === tab ? '#fff' : 'text.primary',
              padding: '8px 16px',
              borderRadius: '16px',
              border: '2px solid #9d74ff',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease, border-color 0.3s ease',
              '&:hover': {
                backgroundColor:
                  activeTab === tab ? 'primary.dark' : 'action.hover',
                borderColor: '#9d74ff',
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
