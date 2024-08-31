import React from 'react';
import HeroSection from './components/HeroSection';
import ProgressComponent from './components/ProgressComponent';
import TableComponent from './components/TableComponent';
import { Box } from '@mui/material';
import SponsorComponent from './components/SponsorComponent';

export default function Home() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <ProgressComponent />
      <HeroSection />
      <SponsorComponent />
      <TableComponent />
    </Box>
  );
}
