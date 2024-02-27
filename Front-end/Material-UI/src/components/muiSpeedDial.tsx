import React from "react";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import CopyIcon from "@mui/icons-material/FileCopyOutlined";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";

export const MuiSpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel="Navigation Speed dial"
      sx={{ position: "absolute", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon openIcon={<EditIcon />} />}
    >
      <SpeedDialAction
        icon={<CopyIcon />}
        tooltipTitle="Copy"
        tooltipOpen
      ></SpeedDialAction>
      <SpeedDialAction
        icon={<PrintIcon />}
        tooltipTitle="Print"
        tooltipOpen
      ></SpeedDialAction>
      <SpeedDialAction
        icon={<ShareIcon />}
        tooltipTitle="Share"
        tooltipOpen
      ></SpeedDialAction>
    </SpeedDial>
  );
};
