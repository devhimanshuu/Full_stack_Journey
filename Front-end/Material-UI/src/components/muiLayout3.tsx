import React from "react";
import { Box, Stack, Divider, Grid, Paper } from "@mui/material";
import { Padding } from "@mui/icons-material";
export const MuiLayout3 = () => {
  return (
    <Paper sx={{ Padding: "32px" }} elevation={4}>
      {/* using Grid Components in layout  */}

      <Stack
        sx={{ border: "1px solid" }}
        direction="row"
        spacing={3}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          // component="span"
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            padding: "16px",
            width: "100px",
            height: "100px",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          Himanshu Gupta
        </Box>
        <Box
          display="flex"
          height="100px"
          width="100px"
          bgcolor="success.light"
          p={2}
        ></Box>
      </Stack>
      <Grid container my={4} rowSpacing={2} columnSpacing={10}>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="primary.light">Item-1</Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="primary.light">Item-2</Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="primary.light">Item-3</Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="primary.light">Item-4</Box>
        </Grid>
      </Grid>
    </Paper>
  );
};
