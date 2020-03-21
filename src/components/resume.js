import React, { Component } from "react";
import styled from "styled-components";
import ResumePic from "../assets/images/resume.png";

class Resume extends Component {
  state = {};
  render() {
    const Doc = styled.div`
      margin-left:25%;  
      display: flex;
    `;
    return (
      <React.Fragment>
        <div className="header-container">
          <h1 className="title" style = {{textAlign: "center"}}>Resume</h1>
        </div>
          <Doc className="cardBody">
            <img className='mr-3' src={ResumePic} alt='resume'></img>
          </Doc>
        
      </React.Fragment>
    );
  }
}

export default Resume;
