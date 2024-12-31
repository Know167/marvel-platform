// pages/HomePage.js
import React, { useState } from 'react';

import { Grid, Typography } from '@mui/material';
import Image from 'next/image';

import Star from '@/assets/svg/Star_3.svg';
import ImageURLs from '@/assets/urls';

import styles from './styles';

import { ToolsListingContainer } from '@/tools';
import Filters from '@/tools/components/Filter/Filters';
import SearchBar from '@/tools/components/SearchBar/SearchBar';
import SortDropdown from '@/tools/components/SortDorpdown/SortDropdown';

const TABS = [
  'All',
  'New',
  'Planning',
  'Assessments',
  'Assignments',
  'Writing',
  'Study',
];

const HomePage = ({ data: unsortedData, loading }) => {
  const [currentTab, setCurrentTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('Most Popular');

  const data = [...(unsortedData || [])].sort((a, b) => a.id - b.id);

  // Filter and search logic
  const filteredData = data.filter((tool) => {
    const matchesSearch = tool.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesTab = currentTab === 'All' || tool.category === currentTab;
    return matchesSearch && matchesTab;
  });

  const sortedData = filteredData.sort((a, b) => {
    if (sortOption === 'A-Z') return a.name.localeCompare(b.name);
    if (sortOption === 'Z-A') return b.name.localeCompare(a.name);
    if (sortOption === 'Most Popular') return b.popularity - a.popularity;
    if (sortOption === 'Recently Added')
      return new Date(b.date) - new Date(a.date);
    return 0;
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
    <Grid container alignItems="center" spacing={2}>
      <Grid item>
        <SearchBar onSearch={setSearchQuery} />
      </Grid>
      <Grid item xs />
      <Grid item>
        <Filters
          tabs={TABS}
          activeTab={currentTab}
          setActiveTab={setCurrentTab}
        />
      </Grid>
      <Grid item xs />
      <Grid item justifyContent="flex-end">
        <SortDropdown sortOption={sortOption} setSortOption={setSortOption} />
      </Grid>
    </Grid>
  );

  return (
    <Grid {...styles.mainGridProps}>
      {renderWelcomeBanner()}
      {renderFilters()}
      <ToolsListingContainer
        data={sortedData}
        loading={loading}
        category="Marvel Tools"
      />
    </Grid>
  );
};

export default HomePage;
