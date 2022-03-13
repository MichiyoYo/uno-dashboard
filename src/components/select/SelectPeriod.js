import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

function SelectPeriod(props) {
  const [period, setPeriod] = useState("");

  const handleChange = (event) => {
    setPeriod(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 150 }}>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel
          style={{ color: "#9aabbd", fontSize: "15px" }}
          id="select-label"
        >
          Period
        </InputLabel>
        <Select
          labelId="select-label"
          id="simple-select"
          value={period}
          label="Age"
          onChange={handleChange}
          style={{ color: "#888", fontSize: "15px" }}
        >
          <MenuItem value={"This Week"}>This Week</MenuItem>
          <MenuItem value={"This Month"}>This Month</MenuItem>
          <MenuItem value={"This Year"}>This Year</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default SelectPeriod;
