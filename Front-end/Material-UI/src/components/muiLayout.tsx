import React from "react";
import { Box } from "@mui/material";
export const MuiLayout = () => {
  return (
    <>
      {/* using Box Components in layout  */}
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
    </>
  );
};
