import React from "react";
import { Stack, Link, Typography } from "@mui/material";
export const MuiLink = () => {
  return (
    <Stack spacing={2} direction="row" m={4}>
      <Link href="#" variant="body2">
        Link
      </Link>

      <Typography>
        <Link href="#" color="secondary" underline="none">
          Secondary
        </Link>
      </Typography>
    </Stack>
  );
};
