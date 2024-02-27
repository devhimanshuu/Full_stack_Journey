import React from "react";
import { Drawer, Box, Typography, IconButton, MenuItem } from "@mui/material";
import { useState } from "react";
export const MuiDrawer = () => {
  const [isDrawerOpen, setisDrawerOpen] = useState(false);

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setisDrawerOpen(true)}
      >
        <MenuItem />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setisDrawerOpen(false)}
      >
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <Typography variant="h6" component="div">
            Side panel
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};
