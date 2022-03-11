import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Menu({ data }) {
  return (
    <ul>
      {data.map((menuItem, i) => (
        <li key={i}>
          {menuItem.icon && <FontAwesomeIcon icon={menuItem.icon} />}

          <a href={menuItem.link}>{menuItem.item}</a>
          {menuItem.sub && (
            <ul>
              {menuItem.sub.map((subItem, j) => (
                <li key={j}>
                  <a href={subItem.link}>{subItem.item}</a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Menu;
