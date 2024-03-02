import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  Avatar,
  ListItemButton,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
export const MuiList = () => {
  return (
    <Box sx={{ width: "40px", bgcolor: "#efefef" }}>
      <List>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <MailIcon />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary="list item1" secondary="list is here" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemText primary="list item2" />
        </ListItem>
        <ListItem>
          <ListItemText primary="list item3" />
        </ListItem>
      </List>
    </Box>
  );
};
