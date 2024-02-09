import React from "react";
import { useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";
export const MuiSelect = () => {
  const [Country, setCountry] = useState<string[]>([]);
  console.log({ Country });
  const handleChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountry(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <Box width="250px">
      <TextField
        label="Select Country"
        select
        value={Country}
        onChange={handleChange}
        fullWidth
        SelectProps={{
          multiple: true,
        }}
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="Aus">Australia</MenuItem>
        <MenuItem value="USA">USA</MenuItem>
        <MenuItem value="Thai">thailand</MenuItem>
      </TextField>
    </Box>
  );
};
