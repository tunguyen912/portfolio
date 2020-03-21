import React, { Component } from "react";
import styled from "styled-components";
import {
  FaReact,
  FaAngular,
  FaJava,
  FaAndroid,
  FaHtml5,
  FaGit
} from "react-icons/fa";
import * as uuid from "uuid";

class Skills extends Component {
  state = {
    skills: [
      {
        skill: "ReactJS",
        icon: <FaReact />
      },
      {
        skill: "Angular",
        icon: <FaAngular />
      }, 
      {
        skill: "Git",
        icon: <FaGit />
      },
      {
        skill: "Java",
        icon: <FaJava />
      },
      {
        skill: "Android Development",
        icon: <FaAndroid />
      },
      {
        skill: "HTML/CSS",
        icon: <FaHtml5 />
      }
    ]
  };
  render() {
    const Skill = styled.div`
      display: block;
      font-size: 24px;
      margin-top: 5rem;
      margin-left: 22rem;
      text-align: left;
      font-size: 34px;
      letter-spacing: 5px;
      font-family: "Great Vibes", cursive;
    `;
    

    return (
      <React.Fragment>
        <div className="header-container">
          <h1 className="title" style = {{textAlign: "center"}}>Programming Skills </h1>
        </div>

        {this.state.skills.map(obj => (
          <Skill key={uuid.v4()}>
              {obj.icon} &#9; {obj.skill}
          </Skill>
        ))}
      </React.Fragment>
    );
  }
}

export default Skills;
