import React, { useState } from "react";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Collapsible({ title, children }) {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <div className="collapsible">
      <div
        className="collapsible_title"
        onClick={() => setCollapsed(!collapsed)}
      >
        {title}
        <FontAwesomeIcon
          className="chevron"
          icon={collapsed ? faChevronDown : faChevronUp}
        />
      </div>
      <div className={`collapsible_body ${collapsed && "collapsed"}`}>
        {children}
      </div>
    </div>
  );
}

export default Collapsible;
