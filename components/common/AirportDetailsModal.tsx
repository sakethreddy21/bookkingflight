import React, { useState } from 'react';
import { Box, Typography, useTheme, Grid, Button } from '@mui/material';
import AddDetailsDrawer from '@/components/common/Drawer';
import SearchBar from './SearchBar';
import { useSearchParams } from 'next/navigation';
const AirportDetalsModal = ({
  drawerOpen,
  setDrawerOpen,
  editEnabled,
}:any) => {
  const theme = useTheme();

  const handleDrawerClose = (event:any, reason:any) => {
    // if (reason && reason === 'backdropClick') {
    //   return;
    // }
    setDrawerOpen(false);
  };


  return (
    
    <AddDetailsDrawer
      anchor="right"
      open={drawerOpen}
      onClose={handleDrawerClose}
      height='93%'
      margin='30px'

    >
     <div className='h-[60%]  w-[659px] flex justify-center items-center rounded-xl px-40 shadow-sm z-[9999999] ' >
        djjfjdjjdddhd
     </div>
    </AddDetailsDrawer>
 
  );
};

export default AirportDetalsModal;
