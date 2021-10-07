import React, { Component } from 'react'
import { Link } from "react-router-dom";
import '../style.css'

export default class Navbar extends Component {
  render() {
    return (
      <div>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="#" style={{ fontSize: '2rem' }}>NewsBonk</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                <li className="nav-item d-flex flex-row bd-highlight mb-3 my-3">
                  <Link className="nav-link active " aria-current="page" to="/technology">Technology</Link>
                </li>
                <li className="nav-item d-flex flex-row bd-highlight mb-3 my-3">
                  <Link className="nav-link active " aria-current="page" to="/business">Business</Link>
                </li>
                <li className="nav-item d-flex flex-row bd-highlight mb-3 my-3">
                  <Link className="nav-link active " aria-current="page" to="/entertainment">Entertainment</Link>
                </li>
                <li className="nav-item d-flex flex-row bd-highlight mb-3 my-3">
                  <Link className="nav-link active " aria-current="page" to="/general">General</Link>
                </li>
                <li className="nav-item d-flex flex-row bd-highlight mb-3 my-3">
                  <Link className="nav-link active " aria-current="page" to="/health">Health</Link>
                </li>
                <li className="nav-item d-flex flex-row bd-highlight mb-3 my-3">
                  <Link className="nav-link active " aria-current="page" to="/science">Science</Link>
                </li>
                <li className="nav-item d-flex flex-row bd-highlight mb-3 my-3">
                  <Link className="nav-link active " aria-current="page" to="/sports">Sports</Link>
                </li>


              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
