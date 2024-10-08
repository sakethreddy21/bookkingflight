// ReusableDrawer.jsx

import React from 'react';
import { Drawer, useTheme, useMediaQuery } from '@mui/material';

const AddDetailsDrawer = ({
  open,
  onClose,
  anchor,
  children,
  width,
  height,
  marginRight,
  marginLeft,
  marginTop,
  margin,
  ...props
}:any) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
      <Drawer
        variant='temporary'
        onEscapeKeyDown={onClose}
        anchor={isMobile ? 'bottom' : anchor}
        open={open}
        onClose={onClose}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, ...props.sx }}
        PaperProps={{
          sx: {
           
            margin:margin,
            
            width: width || '36%',
            borderRadius: '10px',
            '@media (max-width: 900px)': {
              width: '100%',
              maxHeight: "100%",
              borderRadius: '16px 16px 0px 0px',
            },
            height:height 
          },
        }}
        ModalProps={{
          keepMounted: true,
        }}
        {...props} // Spread any additional props you might need
      >
        {children}
      </Drawer>
  );
};

export default AddDetailsDrawer;
