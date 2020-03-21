import React, { Component } from "react";
import styled from "styled-components";
import Dish from "../assets/images/dish.svg";
import Express from "../assets/images/express.svg";
import MongoDB from "../assets/images/mongodb.svg";
import NodeJS from "../assets/images/nodejs.svg";
import Angular from "../assets/images/angular.svg";
import Technology from "../assets/images/technology.svg"
import NativeScript from "../assets/images/nativescript.svg";
import ProjectPlanPic from "../assets/images/process.svg";
import ProjectPlan from "../assets/document/Project-Plan.pdf"
import RequirementAnalystAndDesign from "../assets/document/Requirements-Analysis-and-Design.pdf"
import ProjecTechnology from "../assets/document/Project-Technology.pdf"
import ProjectVision from "../assets/document/Project-Vision.pdf";
import Analyst from "../assets/images/analyst.svg";
import MobilePic from "../assets/images/mobile.png";
import WebDashboard from "../assets/images/website-svgrepo-com.svg";
class Capstone extends Component {
  state = {};
  render() {
    const desc = {
      fontSize: "18px",
      fontWeight: "600",
      letterSpacing: "2px"
    };
    const Img = styled.img`
      height: 50vh;
      width: 50vw;
    `;

    const Note = styled.div`
      background-color: #86d9df;
      border-radius: 10px;
      color: black;
      text-decoration: underline;
      float: right;
      text-alight: right;
      margin-right: 2vw;
      font-size: 20px;
      letter-spacing: 5px;
      opacity: 0.5;
      padding: 1vw;
    `;
   
    const Sec = styled.div`
      height: 100vh;
      margin-bottom: 20vh;
    `;

    const Website = styled.img`
      margin-top: 10vh;
      margin-left:5vw;
      width: 25vw;
      height: 40vh;
      transition-timing-function: ease-in-out;
      transition: 1s;
      &:hover {
        height: 45vh;
        display: block;
        z-index: 999;
        transition: 1s;
        position: relative;
        width: 25vw;
      }
    `;
    const Mobile = styled.img`
      transition-timing-function: ease-in-out;
      transition: 1s;
      width: 25vw;
      height: 40vh;
      margin-top: 10vh;
      margin-left:5vw;
      &:hover {
        position: relative;
        display: block;
        z-index: 999;
        width: 25vw;
        height: 45vh;
      }
    `;
    const Gallery = styled.div`
      margin-left: 25rem;
      display: flex;
    `;
    

    return (
      <React.Fragment>
        <Sec id="project_vision">
          <div className="header-container">
            <h1 className="title" style = {{textAlign: "center"}}>
              Capstone Project{" "}<img src={Dish} alt='food'></img>
            </h1>
          </div>
          <div id="introduction">
            <div className="cardBody">
              <h2 className="cardTitle">
                Resktaskest.{" "}
                <Note>Currently in process of making </Note>
              </h2>
              <p style={desc}> To make restaurant management better.</p>
              
              <p className="cardText">
                With the development of the world, paper-based works are replaced by machine.
                Our vision is to simplify restaurant managements’ daily tasks, and to increase restaurant
                employees’ productivity
                <span>
                  {" "}
                  You can read more of our Project Vision{" "}
                  <a href={ProjectVision} >here</a> for more detailed
                </span>
              </p>
            </div>
          </div>
        </Sec>
        <Sec id="project_technology">
          <div id="introduction">
            <div className="cardBody">
            <h2 className="cardTitle text-right cap" >Project Technology</h2>
              <p className="cardText">
              To enhance the user experience, our team decided to build our application based on SPA and NoSQL database
              so that this application can perform fast responsivness. Besides, implementing NativeScript can make our app 
              become a crossplatform application which can run on phones and tablets apart from computer.
              <span>
                  {" "}
                  You can read more of our Project Technology{" "}
                  <a href={ProjecTechnology} >here</a> for more detailed
                </span>
              </p>
              <Img src={Technology}  alt='tech'></Img>

              <h2 className="cardTitle text-center">This application is built on</h2>
              <div className="cardFooter text-center">
                <img src={Angular} alt='angular-from angular itselft'></img>
                <img src={NodeJS} alt='nodejs-from flaticon by freepik'></img>
                <img src={MongoDB} alt='mongodb-from mongodb'></img>
                <img src={NativeScript} alt='nativescript-from nativescript'></img>
                <img src={Express} alt='express from flaticon by freepik'></img>
              </div>            
              </div>
          </div>
        </Sec>
        <Sec id="project_plan">
          <div id="introduction">
            <div className="cardBody">
              <h2 className="cardTitle text-left cap" >Project Plan.</h2>
              <p className="cardText">
                  The restaurant management system project is for the
                  creation of a contemporary restaurant management
                  web application. Our target is all of medium-sized or
                  large-sized restaurant in Ontario, which need a
                  complicated system to simply the processes of
                  managing and communicating in their business.
                <span>
                  {" "}
                  You can read more of our{" "}
                  <a href={ProjectPlan} >Project Plan</a>
                </span>
              </p>
              <Img src={ProjectPlanPic}  alt='undraw'></Img>
            </div>
          </div>
        </Sec>
        <Sec id="requirement_analyst_design">
          <div id="introduction">
            <div className="cardBody">
              <h2 className="cardTitle text-right cap">
                Requirement Analyst &amp; Design
              </h2>
              <p className="cardText">
              <br />
               <span>
                  {" "}
                  A better documented version of our Requirement Analyst &amp; Design can be found{" "}
                  <a href={RequirementAnalystAndDesign} >here</a>
                </span>
                <br />
              </p>
              <Img src={Analyst}  alt='undraw'></Img>
            </div>
          </div>
        </Sec>

        <Sec id="wireframe">
          <div id="introduction">
            <div className="cardBody">
              <h2 className="cardTitle text-right cap">Wireframe</h2>
              <p className="cardText">
                We have developed a crossplatform project, so that there are 2 version
                of wireframe, one for Web version and one for Mobile version
              </p>
            </div>
          </div>
          <Gallery>
            <a
              href="https://www.figma.com/proto/4ziukeKzoys3Tio2YA9W5i/T30_Mockup_WebVersion?node-id=17%3A51&scaling=contain"
              target="business_website"
            >
              <Website src={WebDashboard}  alt='undraw'></Website>
              <p className="text-center mt-2 cardText">
                Web version wireframe
              </p>
            </a>
            <a
              href="https://www.figma.com/proto/Hq5VkkVJbeT4W7sXJJO21t/T30_MockUp_MobileVersion?node-id=1%3A2&scaling=scale-down"
              target="mobile_version"
            >
              <Mobile src={MobilePic}  alt='undraw'></Mobile>
              <p className="text-center mt-2 cardText">
                Mobile version wireframe
              </p>
            </a>
          </Gallery>
        </Sec>
      </React.Fragment>
    );
  }
}

export default Capstone;
