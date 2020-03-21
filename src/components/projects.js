import React, { Component } from "react";
import Project_Element from "./projectElement";
import HousePrice from "../assets/images/marketing.svg";
import Chat from "../assets/images/communication.svg";
import GameChat from "../assets/images/gamer.svg";
import GeoTracker from "../assets/images/pin.svg";
import CSharp from "../assets/images/c-sharp.svg";
import SQL from "../assets/images/sql.svg";
import Python from "../assets/images/python.svg";
import DataAnalysis from "../assets/images/data_analysis.svg";
import Android from "../assets/images/android.svg";
import SQLite from "../assets/images/SQLite.svg";
import Java from "../assets/images/java.svg";
import Reception from "../assets/images/reception.svg";
import Location from "../assets/images/location.svg";
import ReactLogo from "../assets/images/react.svg";
import SocketIO from "../assets/images/socket.svg";
import Express from "../assets/images/express.svg";
import MongoDB from "../assets/images/mongodb.svg";
import NodeJS from "../assets/images/nodejs.svg";
import Angular from "../assets/images/angular.svg";
class Projects extends Component {
  state = {
    projects: [
      {
        id: 0,
        name: "ASP.NET Hotel Booking Room",
        desc:
          "A Web Application using .NET and SQL server allows customer to book a hotel.",
        photo: Reception,
        logo: [CSharp, SQL],
        link: "https://github.com/tunguyen912/.NET-booking"
      },
      {
        id: 1,
        name: "Python Ontario House Price Data Analyst",
        desc:
          "Analysis the house price on Ontarion based on Numpy, Pandas, and visualization using Google Map API",
          photo: HousePrice,
        logo: [Python, DataAnalysis, Location],
        link: "https://github.com/tunguyen912/ontario-house-price-analysis"
      },
      {
        id: 2,
        name: "Realtime Chat Application",
        desc:
          "Creating a realtime chat application with others using Socket.io to manipulate web socket and React for great UI/UX",
          photo: Chat,
        logo: [ReactLogo, SocketIO, Express, MongoDB, NodeJS],
        link: "https://github.com/tunguyen912/simple_chat_app"
      },
      {
        id: 3,
        name: "Game Lobby Room MEAN Stack",
        desc:
          "Implementing MEAN stack to create a full stack application that user can find and join a room of the game they want ",
          photo: GameChat,
        logo: [Angular, MongoDB, NodeJS, Express],
        link: "https://github.com/tunguyen912/MEAN_GAME_LOBBY"
      },
      {
        id: 4,
        name: "Android GeoTracker",
        desc:
          "Android project which utilize Google Map API to track user position, save their routes so that they can review it when they want",
          photo: GeoTracker,
        logo: [Android, Location, SQLite, Java],
        link: "https://github.com/tunguyen912/Geotracker_Android"
      },
    ]
  };

  render() {
    return (
      <React.Fragment>
        <div className="header-container">
          <h1 className="title" style = {{textAlign: "center"}}>My Projects </h1>
        </div>
        <div className="gallary">
          {this.state.projects.map(obj => (
              // eslint-disable-next-line
              <Project_Element key={obj.id} obj={obj}/>
            ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Projects;
