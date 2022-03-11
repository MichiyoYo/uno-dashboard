import React from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import styled from "styled-components";
import { Avatar } from "@mui/material";

const InfoWrapper = styled.div``;
const RevenueWrapper = styled.div``;

function TopSalesListItem({ saleItem }) {
  const { id, name, revenue, percent } = saleItem;
  return (
    <li key={id} className="shipping">
      <Avatar
        className="avatar"
        alt={name}
        src={`https://avatars.dicebear.com/api/human/${name}.svg`}
      />
      <InfoWrapper className="sale_info">
        <h4 className="sale_info_name">{name}</h4>
        <p className="ssale_info_percent">{percent}</p>
      </InfoWrapper>
      <RevenueWrapper className="revenue_info">
        <p>Revenue</p>
        <p>{revenue}</p>
      </RevenueWrapper>
    </li>
  );
}

export default TopSalesListItem;
