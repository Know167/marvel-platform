// pages/HomePage.js
import React, { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import Image from 'next/image';

import SearchBar from '@/components/SearchBar';
import Filters from '@/components/Filters';
import { ToolsListingContainer } from '@/tools';

import Star from '@/assets/svg/Star_3.svg';
import ImageURLs from '@/assets/urls';
import styles from './styles';

const TABS = ['All', 'Questions', 'Planning', 'Feedback'];

const HomePage = ({ data: unsortedData, loading }) => {
  const data = [...(unsortedData || [])].sort((a, b) => a.id - b.id);

  const [currentTab, setCurrentTab] = useState(TABS[0]);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter and search logic
  const filteredData = data.filter((tool) => {
    const matchesSearch = tool.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesTab = currentTab === 'All' || tool.category === currentTab;
    return matchesSearch && matchesTab;
  });

  // Welcome Banner
  const renderWelcomeBanner = () => (
    <Grid {...styles.bannerGridProps}>
      <Image
        src={ImageURLs.WelcomeBannerImg}
        alt="welcome_banner_img"
        {...styles.image1Props}
      />
      <Grid>
        <Typography {...styles.titleProps}>
          Hello! Welcome to Marvel AI Tools. 👋
        </Typography>
        <Typography {...styles.subtitleProps}>
          Made for educators. Hello! I&apos;m Marvel AI, your AI teaching
          assistant. We are here to support you on your journey as a teacher,
          mentor, and more!
        </Typography>
      </Grid>
    </Grid>
  );

  // Filters and Search
  const renderFilters = () => (
    <Grid {...styles.filtersProps}>
      <SearchBar onSearch={setSearchQuery} />
      <Filters
        tabs={TABS}
        activeTab={currentTab}
        setActiveTab={setCurrentTab}
      />
    </Grid>
  );

  return (
    <Grid {...styles.mainGridProps}>
      {renderWelcomeBanner()}
      {renderFilters()}
      <ToolsListingContainer
        data={filteredData}
        loading={loading}
        category="Marvel Tools"
      />
    </Grid>
  );
};

export default HomePage;
