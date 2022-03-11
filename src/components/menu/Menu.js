import React from "react";

const isObject = (element) => {
  return typeof element === "object" && element !== null;
};

function Menu({ data }) {
  if (!isObject(data)) return <li>{data}</li>;

  const pairs = Object.entries(data);
  return (
    <ul>
      {pairs.map(([key, value]) => (
        <li>
          {key}:
          <ul>
            <Menu data={value} />
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
