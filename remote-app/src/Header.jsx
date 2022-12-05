import React from "react";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Micro-Frontends
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="http://localhost:3030/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="http://localhost:4040/">
                  Some App
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="http://localhost:1337/admin">
                  Strapi
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="http://localhost:5050/">
                  Index-app
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
