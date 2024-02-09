import React from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";
import { useState } from "react";
export const MuiTextfield = () => {
  const [Value, setValue] = useState("");
  return (
    <div>
      <Stack spacing={4}>
        <Stack direction="row" spacing={2}>
          <TextField label="Name" variant="outlined" />
          <TextField label="Name" variant="filled" />
          <TextField label="Name" variant="standard" />
        </Stack>
        <Stack direction="row" spacing={2}>
          <TextField
            label="Small secondary"
            size="small"
            color="secondary"
            required
            value={Value}
            onChange={(r) => setValue(r.target.value)}
            error={!Value}
            helperText={!Value ? "Required" : "Donot share ur password"}
          />
          <TextField
            label="Password"
            size="small"
            color="secondary"
            disabled
            helperText="Do not share your password"
            type="password"
          />
          <TextField
            label="Read Only"
            size="small"
            color="secondary"
            inputProps={{ readOnly: true }}
            helperText="Do not share your password"
            type="password"
          />
        </Stack>
        <Stack direction="row" spacing={2}>
          <TextField
            label="Amount"
            inputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          ></TextField>
          <TextField
            label="Weight"
            inputProps={{
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            }}
          ></TextField>
        </Stack>
      </Stack>
    </div>
  );
};
