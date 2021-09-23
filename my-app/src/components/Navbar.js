import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{fontSize:'2rem'}}>NewsBonk</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
        <li className="nav-item d-flex flex-row bd-highlight mb-3 my-3">
          <a className="nav-link active " aria-current="page" href="#">About</a>
          <a className="nav-link active " aria-current="page" href="#">Technology</a>
          <a className="nav-link active " aria-current="page" href="#">Business</a>
          <a className="nav-link active " aria-current="page" href="#">Entertainment</a>
          <a className="nav-link active " aria-current="page" href="#">General</a>
          <a className="nav-link active " aria-current="page" href="#">Health</a>
          <a className="nav-link active " aria-current="page" href="#">Science</a>
          <a className="nav-link active " aria-current="page" href="#">Sports</a>

        </li>
      </ul>
    </div>
  </div>
</nav>
            </div>
        )
    }
}
