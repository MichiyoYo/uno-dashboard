import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputAdornment } from "@mui/material";
import { TextField } from "@mui/material";

const LeftContainer = styled.div`
  height: 100%;
  background-color: #fff;
  border-right: 2px solid #f3f3f5;
  margin-top: -2px;
  .search-field {
    fieldset {
      display: none;
    }
  }
`;

function LeftPanel({ name }) {
  return (
    <LeftContainer>
      <TextField
        className="search-field"
        type="search"
        placeholder="Search"
        InputProps={{
          startAdornment: (
            <InputAdornment>
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </LeftContainer>
  );
}

export default LeftPanel;
