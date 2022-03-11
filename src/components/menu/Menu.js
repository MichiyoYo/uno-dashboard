import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Collapsible from "./Collapsible";
import {
  faHouse,
  faChalkboard,
  faUserGroup,
  faBriefcase,
  faReceipt,
  faList,
  faGear,
  faKey,
} from "@fortawesome/free-solid-svg-icons";

const MainMenu = styled.ul`
  list-style-type: none;
  padding-left: 0;
  text-align: left;
`;

const ListItem = styled.li`
  margin-bottom: 5px;
  .menu-item {
    padding: 15px;
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
      <Collapsible title="Menu Item" icon={faHouse}>
        <ul>
          <li>
            <a>One</a>
          </li>
          <li>
            <a>Two</a>
          </li>
          <li>
            <a>Three</a>
          </li>
        </ul>
      </Collapsible>

      {data.map((menuItem, i) => (
        <ListItem key={i}>
          <div className="menu-item">
            {menuItem.icon && (
              <FontAwesomeIcon
                className="menu-item_icon"
                icon={menuItem.icon}
              />
            )}
            <a className="menu-item_link" href={menuItem.link}>
              {menuItem.item}
            </a>
            {menuItem.sub && (
              <FontAwesomeIcon className="chevron" icon={faChevronDown} />
            )}
          </div>
          {menuItem.sub && (
            <SubMenu>
              {menuItem.sub.map((subItem, j) => (
                <ListItem className="sub-menu-item" key={j}>
                  <a className="menu-item_link" href={subItem.link}>
                    {subItem.item}
                  </a>
                </ListItem>
              ))}
            </SubMenu>
          )}
        </ListItem>
      ))}
    </MainMenu>
  );
}

export default Menu;
