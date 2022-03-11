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
  padding: 20px;
  .search-field {
    background-color: #f9f9fb;
    border-radius: 10px;
    fieldset {
      display: none;
    }
    input {
      padding: 12px 14px;
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
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </LeftContainer>
  );
}

export default LeftPanel;
