import { Avatar } from "@mui/material";
import React from "react";
import styled from "styled-components";

const UserInfoContainer = styled.div`
  padding: 0 30px;
  display: flex;
  align-items: center;
  height: 100%;
  .avatar {
    margin-right: 10px;
    background: #dab2ff;
    padding: 3px;
  }
`;

const UserCredentials = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  .user-name {
    margin: 0;
  }
  .user-title {
    margin: 0;
    font-size: 13px;
    color: #99abbf;
    margin-left: 2px;
  }
`;

function UserInfo({ currentUser }) {
  const { name, role } = currentUser;
  return (
    <UserInfoContainer>
      <Avatar
        alt="Cristina Lester"
        src={`https://avatars.dicebear.com/api/human/${name}.svg`}
        className="avatar"
      />
      <UserCredentials>
        <h3 className="user-name">{name}</h3>
        <p className="user-title">{role}</p>
      </UserCredentials>
    </UserInfoContainer>
  );
}

export default UserInfo;
