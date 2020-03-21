import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav className="navbar" >
          <ul className="navbar-nav">
            <li className="nav-item">
              <div className="logo">
                <h2> T.N </h2>
                <ul className="link-div">
                  <li className="link-li">
                    <a href="https://github.com/tunguyen912">
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                  <li className="link-li">
                    <a href="https://www.facebook.com/tu.nguyenvoanh.9/">
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li className="link-li">
                    <a href="https://www.hackerrank.com/nguyenvoanhtu129">
                      <i className="fab fa-hackerrank"></i>
                    </a>
                  </li>
                </ul>
              </div>  
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home"></i>
                <span className="link-text ">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/capstone" className="nav-link">
                <i className="fas fa-utensils"></i>
                <span className="link-text ">Capstone Project</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link">
                <i className="fas fa-tasks"></i>
                <span className="link-text ">Projects</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/resume" className="nav-link">
                <i className="fas fa-briefcase"></i>
                <span className="link-text ">Resume</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/skills" className="nav-link">
                <i className="fas fa-code"></i>
                <span className="link-text ">Skills</span>
              </Link>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default Nav;
