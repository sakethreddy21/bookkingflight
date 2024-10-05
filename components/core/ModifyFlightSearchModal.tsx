import React, { useState } from 'react';
import { Box, Typography, useTheme, Grid, Button } from '@mui/material';
import AddDetailsDrawer from '@/components/common/Drawer';
import SearchBar from '../common/SearchBar';
import { useSearchParams } from 'next/navigation';
const ModifyFlightSearch = ({
  drawerOpen,
  setDrawerOpen,
  editEnabled,
}: any) => {
  const theme = useTheme();

  const handleDrawerClose = () => {
    console.log('djd')
    setDrawerOpen(false);
  };
  const searchParams = useSearchParams()
  const [fromName, setFrom] = useState(searchParams.get('fromName') || '')

  return (
    <AddDetailsDrawer
      anchor="top"
      open={drawerOpen}
      onClose={handleDrawerClose}
      width='100%'


    >
      <div className='h-[225px]  w-[100%] flex justify-center items-center rounded-xl px-40 shadow-sm z-[9999] ' >
        <SearchBar show={false} handleClose={handleDrawerClose} />
      </div>
    </AddDetailsDrawer>
  );
};

export default ModifyFlightSearch;
