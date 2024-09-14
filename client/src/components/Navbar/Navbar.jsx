import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../Landingpage.module.css"
export default function Navbar() {
  return (
    <div>
      <div className={styles.landingPage}>
      {/* Navbar */}
      <nav
        className={`navbar navbar-expand-lg navbar-light bg-light ${styles.navbar}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Sansthaein Aur Samvidhan
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#articles">
                  Articles
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#games">
                  Games
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#posts">
                  Posts
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/profile"}>
                  Profile
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    </div>
  )
}
