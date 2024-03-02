import React from "react";
import { Stack, Badge } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
export const MuiBadge = () => {
  return (
    <Stack spacing={2} direction="row">
      <Badge badgeContent={5} color="primary">
        <MailIcon></MailIcon>
      </Badge>
      <Badge badgeContent={100} color="primary" max={9}>
        <MailIcon></MailIcon>
      </Badge>
      <Badge badgeContent={0} color="secondary" showZero>
        <MailIcon></MailIcon>
      </Badge>
      <Badge variant="dot" color="secondary">
        <MailIcon></MailIcon>
      </Badge>
    </Stack>
  );
};
