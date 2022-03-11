import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Collapsible from "./Collapsible";
import { Badge, IconButton } from "@mui/material";

const MainMenu = styled.ul`
  list-style-type: none;
  padding-left: 0;
  text-align: left;
`;

const ListItem = styled.div`
  margin-bottom: 5px;
  .menu-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    border-radius: 10px;
    color: #8ca1b6;
    transition: all ease 150ms;
    .menu-item_link {
      color: #8ca1b6;
    }
    &:hover {
      background: #3f8dfd;
      color: #fff;
      .menu-item_link {
        color: #fff;
      }
    }
    .menu-item_icon {
      margin-right: 10px;
    }
    .title-wrapper {
      flex: 2;
    }
    .badge {
      flex: 1;
      margin-right: 10px;
    }
  }
  .menu-item_link {
    text-decoration: none;
  }
`;

const SubMenu = styled.ul`
  list-style-type: none;
  padding-left: 0;
  .sub-menu-item {
    padding: 15px;
    border-radius: 10px;
    transition: all ease 150ms;
    .menu-item_link {
      color: #8ca1b6;
    }
    &:hover {
      background: #f9f9fb;
    }
  }
`;

function Menu({ data }) {
  return (
    <MainMenu>
      {data.map((menuItem, i) => (
        <li className="menu-item" key={i}>
          {menuItem.sub ? (
            <Collapsible icon={menuItem.icon} title={menuItem.item}>
              <SubMenu>
                {menuItem.sub.map((subItem, j) => (
                  <ListItem className="sub-menu-item" key={j}>
                    <a className="menu-item_link" href={subItem.link}>
                      {subItem.item}
                    </a>
                  </ListItem>
                ))}
              </SubMenu>
            </Collapsible>
          ) : (
            <ListItem>
              <div className="menu-item">
                <div className="title-wrapper">
                  {menuItem.icon && (
                    <FontAwesomeIcon
                      className="menu-item_icon"
                      icon={menuItem.icon}
                    />
                  )}
                  <a className="menu-item_link" href={menuItem.link}>
                    {menuItem.item}
                  </a>
                </div>
                {menuItem.badge && (
                  <Badge
                    className="badge"
                    badgeContent={12}
                    color="primary"
                  ></Badge>
                )}
              </div>
            </ListItem>
          )}
        </li>
      ))}
    </MainMenu>
  );
}

export default Menu;
