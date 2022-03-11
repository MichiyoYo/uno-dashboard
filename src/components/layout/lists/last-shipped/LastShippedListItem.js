import React from "react";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import styled from "styled-components";

const ShippingListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 20px 0;
`;

const InfoWrapper = styled.div`
  .shipping_info_name,
  .shipping_info_destination {
    margin: 0;
  }
  .shipping_info_destination {
    color: #8ea3b8;
    font-size: 13px;
  }
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .shipping_icon {
    background: #e1edff;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    padding: 13px;
  }
`;

const Date = styled.p`
  margin: 5px 0;
  color: #8ea3b8;
  font-size: 13px;
`;

function LastShippedListItem({ shippedItem }) {
  const { id, name, destination, date } = shippedItem;
  return (
    <ShippingListItem key={id} className="shipping">
      <UserInfo>
        <div className="shipping_icon">
          <LocalShippingOutlinedIcon
            fontSize="small"
            sx={{ color: "#3f8dfd" }}
          />
        </div>
        <InfoWrapper className="shipping_info">
          <h4 className="shipping_info_name">{name}</h4>
          <p className="shipping_info_destination">{destination}</p>
        </InfoWrapper>
      </UserInfo>
      <Date className="shipping_date">{date}</Date>
    </ShippingListItem>
  );
}

export default LastShippedListItem;
