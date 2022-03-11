import React, { useState } from "react";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const CollapsibleElement = styled.div`
  margin-bottom: 5px;
  .collapsible_title {
    padding: 15px 20px;
    border-radius: 10px;
    color: #8ca1b6;
    transition: all ease 150ms;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:hover {
      background: #3f8dfd;
      color: #fff;
    }
  }
  .icon {
    margin-right: 10px;
  }
  .collapsible_body {
    &.collapsed {
      display: none;
    }
    &.open {
      display: block;
    }
  }
`;

function Collapsible({ title, icon, children }) {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <CollapsibleElement className="collapsible">
      <div
        className="collapsible_title"
        onClick={() => setCollapsed(!collapsed)}
      >
        <div>
          <FontAwesomeIcon className="icon" icon={icon} />
          {title}
        </div>
        <FontAwesomeIcon
          className="chevron"
          icon={collapsed ? faChevronDown : faChevronUp}
        />
      </div>
      <div className={`collapsible_body ${collapsed ? "collapsed" : "open"}`}>
        {children}
      </div>
    </CollapsibleElement>
  );
}

export default Collapsible;
