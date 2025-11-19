import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default class NewsHeading extends Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/general">DailyNews</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav w-100">
                  <li className="nav-item"> <NavLink className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} to="/general">General</NavLink></li>
                  <li className="nav-item"> <NavLink className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} to="/business">Business</NavLink></li>
                  <li className="nav-item"> <NavLink className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} to="/entertainment">Entertainment</NavLink></li>
                  {/* <li className="nav-item"> <NavLink className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} to="/general">General</NavLink></li> */}
                  <li className="nav-item"> <NavLink className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} to="/health">Health</NavLink></li>
                  <li className="nav-item"> <NavLink className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} to="/science">Science</NavLink></li>
                  <li className="nav-item"> <NavLink className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} to="/sports">Sports</NavLink></li>
                  <li className="nav-item"> <NavLink className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} to="/technology">Technology</NavLink></li>
                  {/* About Link on Right */}
                  <li className="nav-item ms-auto"> <NavLink className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} to="/About"><strong>About</strong></NavLink></li>
                </ul>
              </div>
              {/* <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-primary" style={{color: 'white'}} type="submit">Search</button>
              </form> */}
            </div>
        </nav>
    )
  }
}

