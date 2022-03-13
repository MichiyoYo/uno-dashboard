import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";

const NewProjectWrapper = styled.div`
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
  return (
    <NewProjectWrapper>
      <h4>Add New Project</h4>
      <p>Add new project by assigning team members</p>
      <Button className="btn" variant="contained">
        New Project
      </Button>
    </NewProjectWrapper>
  );
}

export default NewProject;
