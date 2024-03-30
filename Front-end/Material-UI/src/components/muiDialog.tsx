import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useState } from "react";
export const MuiDialog = () => {
  const [Open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog
        open={Open}
        onClose={() => setOpen(false)}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">Submit Test</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            Are you Sure? you want to submit this test
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>cancel</Button>
          <Button autoFocus onClick={() => setOpen(false)}>
            submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
