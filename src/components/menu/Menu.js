import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const MainMenu = styled.ul`
  list-style-type: none;
  padding-left: 0;
  text-align: left;
`;

const ListItem = styled.li`
  .menu-item {
    padding: 15px;
    .menu-item_icon {
      margin-right: 10px;
    }
  }
`;

const SubMenu = styled.ul`
  list-style-type: none;
  padding-left: 0;
  .sub-menu-item {
    padding: 15px;
  }
`;

function Menu({ data }) {
  return (
    <MainMenu>
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
          </div>
          {menuItem.sub && (
            <SubMenu>
              {menuItem.sub.map((subItem, j) => (
                <ListItem className="sub-menu-item" key={j}>
                  <a href={subItem.link}>{subItem.item}</a>
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
