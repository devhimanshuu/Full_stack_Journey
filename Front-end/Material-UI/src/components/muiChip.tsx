import React, { useState } from "react";
import { Stack, Chip, Avatar } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
export const MuiChip = () => {
  const [Chips, setChips] = useState(["chip 1", "chip 2", "chip 3"]);
  const handleDelete = (chipToDelete: string) => {
    setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
  };
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Chip" color="primary" size="small" icon={<FaceIcon />} />
      <Chip
        label="Chip outlined"
        color="primary"
        size="small"
        variant="outlined"
        avatar={<Avatar>V</Avatar>}
      />
      <Chip
        label="click"
        color="success"
        size="small"
        onClick={() => alert("clicked")}
      />
      <Chip
        label="Delete"
        size="small"
        color="error"
        onClick={() => alert("Deleted")}
        onDelete={() => alert("delete handler")}
      />
      {Chips.map((Chips) => (
        <Chip key={Chips} label={Chips} onDelete={() => handleDelete(Chips)} />
      ))}
    </Stack>
  );
};
