import React from "react";
import styled from "styled-components";
import { Avatar } from "@mui/material";

const SaleListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 20px 0;
  &:first-child {
    .avatar-wrapper {
      position: relative;

      &:after {
        content: "★";
        position: absolute;
        bottom: 0px;
        right: 9px;
        background: #fd9c3f;
        color: #fff;
        border-radius: 50%;
        font-size: 10px;
        width: 16px;
        height: 13px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 3px;
      }
    }
    .avatar {
      border: 2px solid #fd9c3f;
    }
  }
`;

const InfoWrapper = styled.div`
  .sale_info_name,
  .sale_info_percent {
    margin: 0;
  }
  .sale_info_percent {
    font-size: 13px;
    color: #56c089;
    font-weight: 600;
  }
`;

const RevenueWrapper = styled.div`
  text-align: right;
  .revenue_info_title,
  .revenue_info_dollars {
    margin: 0;
  }
  .revenue_info_title {
    color: #8ea3b8;
    font-size: 15px;
  }
  .revenue_info_dollars {
    font-weight: 600;
    font-size: 14px;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  .avatar {
    background: #e1edff;
    border: 2px solid #eee;
    margin-right: 10px;
  }
`;

function TopSalesListItem({ saleItem }) {
  const { id, name, revenue, percent } = saleItem;
  return (
    <SaleListItem key={id} className="sale">
      <UserInfo>
        <div className="avatar-wrapper">
          <Avatar
            className="avatar"
            alt={name}
            src={`https://avatars.dicebear.com/api/human/${name}.svg`}
          />
        </div>
        <InfoWrapper className="sale_info">
          <h4 className="sale_info_name">{name}</h4>
          <p className="sale_info_percent">{percent}</p>
        </InfoWrapper>
      </UserInfo>
      <RevenueWrapper className="revenue_info">
        <p className="revenue_info_title">Revenue</p>
        <p className="revenue_info_dollars">{revenue}</p>
      </RevenueWrapper>
    </SaleListItem>
  );
}

export default TopSalesListItem;
