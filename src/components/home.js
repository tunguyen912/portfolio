import React, { Component } from "react";

class Home extends Component {
  state = {};
  render() {
    return (
      <div  className ="home">
        <div className="header-container">
          <h1 className="firstname">Tu</h1>
          <h1 className="lastname">Nguyen</h1>
        </div>

        <div id="introduction" >
          <div className="cardBody">
            
            <h3 className="cardTitle">Get to know me better.</h3>
            <p className="cardText">
              Hi there, my name is Tu Nguyen. I am currently a student from
              George Brown College, Toronto, Canada. I have been programming
              when I first started college.
              Programming is my field and problem solving is my joy in spare time. 
              You can check my Hackerrank page for more details.
              Aside from programming and studying, I loving playing soccer, and video games
              with my friend.
              Please feel free to contact with me for discussing your project.
            </p>
            <div className="quote">
              <h3>Ever tried, Ever failed,</h3>
              <h3>No matter.</h3>
              <h3>Try again, Fail again,</h3>
              <h3>Fail better.</h3>
              <p>Samuel Beckett</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
