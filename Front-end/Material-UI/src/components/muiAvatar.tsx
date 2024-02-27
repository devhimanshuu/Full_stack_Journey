import React from "react";
import { Stack, Avatar, AvatarGroup } from "@mui/material";
export const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={1}>
        <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
      </Stack>
      <Stack direction="row" spacing={1}>
        <AvatarGroup max={3}>
          <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
          <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>

          <Avatar
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="jannifer"
          >
            BW
          </Avatar>
          <Avatar
            src="https://randomuser.me/api/portraits/men/78.jpg"
            alt="jannifer"
          >
            BW
          </Avatar>
        </AvatarGroup>
        <Stack direction="row" spacing={1}>
          <Avatar
            variant="square"
            sx={{ bgcolor: "primary.light", width: 48, height: 48 }}
          >
            HG
          </Avatar>
        </Stack>
      </Stack>
    </Stack>
  );
};
