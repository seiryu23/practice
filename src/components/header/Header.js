import React from 'react'
import { AppBar } from '@mui/material';
import { Box } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';

export default function Header() {
    return (
      <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Comic
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      </>
    );
  }