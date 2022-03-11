import { Badge, IconButton } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import React from "react";
import styled from "styled-components";

const ToolBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  &:after {
    content: "";
    width: 2px;
    background: #f5f5f5;
    height: 40px;
    position: absolute;
    top: 20px;
    right: 0;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .icon-button {
    background: rgba(0, 0, 0, 0.04);
    margin: 0 10px;
    transition: background ease 500ms;
    &:hover {
      background: rgba(0, 0, 0, 0.08);
    }
  }
`;

function ToolBar(props) {
  return (
    <ToolBarContainer>
      <h1>Dashboard</h1>
      <ButtonGroup>
        <IconButton
          className="icon-button"
          size="large"
          aria-label="calendar"
          color="inherit"
        >
          <CalendarTodayIcon />
        </IconButton>
        <IconButton
          className="icon-button"
          size="large"
          aria-label="messages"
          color="inherit"
        >
          <ChatBubbleOutlineIcon />
        </IconButton>
        <IconButton
          className="icon-button"
          size="large"
          aria-label="show 4 new mails"
          color="inherit"
        >
          <Badge badgeContent={1} color="primary">
            <NotificationsNoneIcon />
          </Badge>
        </IconButton>
      </ButtonGroup>
    </ToolBarContainer>
  );
}

export default ToolBar;
