import React from "react";
import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";
import { useState } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Javascript } from "@mui/icons-material";
function MuiCheckBox() {
  const [Accepttnc, setAccepttnc] = useState(false);
  const [Skills, setSkills] = useState<string[]>([]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(Accepttnc);
    setAccepttnc(event.target.checked);
  };
  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = Skills.indexOf(event.target.value);
    if (index === -1) {
      setSkills([...Skills, event.target.value]);
    } else {
      setSkills(Skills.filter((skill) => skill !== event.target.value));
    }
  };
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept terms and Conditions"
          control={<Checkbox checked={Accepttnc} onChange={handleChange} />}
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={Accepttnc}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <FormControl error>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              control={
                <Checkbox
                  value="html"
                  checked={Skills.includes("html")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="CSS "
              control={
                <Checkbox
                  value="css"
                  checked={Skills.includes("css")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="JavaScript"
              control={
                <Checkbox
                  value="javascript"
                  checked={Skills.includes("JavaScript")}
                  onChange={handleSkillChange}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
}

export default MuiCheckBox;
