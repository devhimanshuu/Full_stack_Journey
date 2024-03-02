import React from "react";
import { Stack, Alert, AlertTitle } from "@mui/material";
export const MuiAlert = () => {
  return (
    <Stack spacing={2}>
      <Alert
        severity="error"
        variant="filled"
        onClose={() => alert("close Alert")}
      >
        Error Alert
      </Alert>
      <Alert severity="warning">Warning Alert</Alert>
      <Alert severity="info">
        <AlertTitle>Warning</AlertTitle>This is an Info Alert
      </Alert>
      <Alert variant="filled" severity="success">
        Success Alert
      </Alert>
      <Alert variant="outlined" severity="error">
        Error Alert
      </Alert>
    </Stack>
  );
};
