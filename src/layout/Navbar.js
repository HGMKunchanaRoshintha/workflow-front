import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
              <div className="container-fluid">
                  <Link className="navbar-brand" href="#" to="/">Practicle Test (Work Flow)</Link>
                 
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <Link className="btn btn-outline-light" to="/add-detail">Add Detail</Link>
                 
              </div>
          </nav>
    </div>
  )
}
