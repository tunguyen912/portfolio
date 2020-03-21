import React, { Component } from "react";
import * as uuid from "uuid";

class Project_Element extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="cardDeck" style={{height: 700 }}>
          
          <div className="card" style={{position: "absolute"}}>
            <a href={this.props.obj.link}>
              <img
                className="card-img-top"
                src={this.props.obj.photo}
                alt="Card cap"
              />
            </a>
            <div className="cardBody" style={{width: "500px"}}>
              <h6 className="cardTitle">{this.props.obj.name}</h6>
              <p className="cardText">{this.props.obj.desc}</p>
            </div>
            <div className="cardFooter">
              <ul>
                {this.props.obj.logo.map(obj => (
                  <li key={uuid.v4()} style={{float:"left"}}>
                    <img src={obj} alt='code'></img>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Project_Element;
