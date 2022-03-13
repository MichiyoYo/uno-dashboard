import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";
import { TextField } from "@mui/material";
import Menu from "../../menu/Menu";
import { menu1, menu2 } from "../../../resources";
import NewProject from "../../widget/NewProject";

const LeftContainer = styled.div`
  height: 85vh;
  background-color: #fff;
  border-right: 2px solid #f3f3f5;
  margin-top: -2px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 270px;
  .menu-wrapper {
    flex: 1;
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
      <div className="menu-wrapper">
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
      </div>
      <NewProject />
    </LeftContainer>
  );
}

export default LeftPanel;
