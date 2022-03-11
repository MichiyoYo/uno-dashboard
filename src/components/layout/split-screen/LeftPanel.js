import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";
import { TextField } from "@mui/material";
import Menu from "../../menu/Menu";
import { menu1, menu2 } from "../../../resources";

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

const Separator = styled.div`
  height: 2px;
  width: 100%;
  background: #f3f3f5;
  margin: 25px 0;
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
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <Separator />
      <Menu data={menu1} />
      <Separator />
      <Menu data={menu2} />
    </LeftContainer>
  );
}

export default LeftPanel;
