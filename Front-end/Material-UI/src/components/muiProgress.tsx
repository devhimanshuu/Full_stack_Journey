import React from "react";
import { Stack, CircularProgress, LinearProgress } from "@mui/material";
export const MuiProgress = () => {
  return (
    <Stack spacing={2}>
      <CircularProgress color="success" />
      <CircularProgress color="error" />
      <CircularProgress variant="determinate" value={60} />
      <LinearProgress />
      <LinearProgress color="success" />
      <LinearProgress variant="determinate" value={60} />
    </Stack>
  );
};
