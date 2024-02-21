import React from "react";
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const MuiAccordion = () => {
  const [Expanded, setExpanded] = useState<string | false>(false);
  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <Accordion
        expanded={Expanded === "panel1"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")}
      >
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
            molestiae ipsa iure quisquam repellendus nostrum, vel, illum alias
            provident quibusdam ducimus sapiente voluptatum. Repellendus dolor
            eos aspernatur culpa. Alias, consequuntur.
          </Typography>
        </AccordionDetails>{" "}
      </Accordion>
      <Accordion
        expanded={Expanded === "panel2"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel2")}
      >
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
            molestiae ipsa iure quisquam repellendus nostrum, vel, illum alias
            provident quibusdam ducimus sapiente voluptatum. Repellendus dolor
            eos aspernatur culpa. Alias, consequuntur.
          </Typography>
        </AccordionDetails>{" "}
      </Accordion>
      <Accordion
        expanded={Expanded === "panel3"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel3")}
      >
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
            molestiae ipsa iure quisquam repellendus nostrum, vel, illum alias
            provident quibusdam ducimus sapiente voluptatum. Repellendus dolor
            eos aspernatur culpa. Alias, consequuntur.
          </Typography>
        </AccordionDetails>{" "}
      </Accordion>
    </div>
  );
};
