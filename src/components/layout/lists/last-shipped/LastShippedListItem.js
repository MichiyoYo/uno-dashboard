import React from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import styled from "styled-components";

const InfoWrapper = styled.div``;

function LastShippedListItem({ shippedItem }) {
  const { name, destination, date } = shippedItem;
  return (
    <li className="shipping">
      <LocalShippingIcon />
      <InfoWrapper className="shipping_info">
        <h4 className="shipping_info_name">{name}</h4>
        <p className="shipping_info_destination">{destination}</p>
      </InfoWrapper>
      <p className="shipping_date">{date}</p>
    </li>
  );
}

export default LastShippedListItem;
