import React from "react";
import { Box, Stack, Divider } from "@mui/material";
export const MuiLayout2 = () => {
  return (
    <>
      {/* using Stack Components in layout  */}
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
    </>
  );
};
