// components/Filters.js
import React from 'react';

import { Button, Grid } from '@mui/material';

const Filters = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <Grid container spacing={2}>
      {tabs.map((tab) => (
        <Grid item key={tab}>
          <Button
            variant={activeTab === tab ? 'contained' : 'outlined'}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default Filters;
