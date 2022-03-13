import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";

const NewProjectWrapper = styled.div`
  margin-top: 60px;
  padding: 25px 40px;
  background: #f9f9fb;
  border-radius: 10px;
  flex: 0 0 auto;
  h4 {
    margin: 0;
  }
  p {
    color: #7d94ad;
  }
  .btn {
    width: 100%;
  }
`;

function NewProject(props) {
  const handleClick = (e) => {
    console.log("New project button was clicked");
  };

  return (
    <NewProjectWrapper>
      <h4>Add New Project</h4>
      <p>Add new project by assigning team members</p>
      <Button onClick={handleClick} className="btn" variant="contained">
        New Project
      </Button>
    </NewProjectWrapper>
  );
}

export default NewProject;
