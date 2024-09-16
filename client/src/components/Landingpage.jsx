import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./Landingpage.module.css"; // Importing the CSS module
import { Navigate, Link } from "react-router-dom";
const Landingpage = () => {
  useEffect(() => {
    // if(!localStorage.getItem("email")) {
    //   Navigate("/login");
    // }
    AOS.init({ duration: 1200 });
  }, []);

  return (
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
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/articles"}>
                  Articles
                </Link>
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

      {/* Constitution Background Section */}
      <section
        id="home"
        className={styles.homeSection}
        style={{
          background: "url('/constitution.jpg') no-repeat center center/cover",
        }}
      >
        <div className={styles.backgroundImage} />
        <div className={styles.homeContent}>
          <h1>Welcome to Sansthaein Aur Samvidhan</h1>
          <p>Spreading awareness about the Indian Constitution</p>
        </div>
      </section>

      {/* Rule Violations Section */}
      <section
        id="articles"
        className={styles.articlesSection}
        data-aos="fade-right"
      >
        <div
          className="container"
          style={{ color: "#ffffff", backgroundColor: "#000000" }}
        >
          <h2>Rule Violations and Punishments</h2>
          <div className="row">
            <div className="col-md-6">
              <div className={styles.violationCard}>
                <h4>Violation of Freedom of speech</h4>
                <p>
                  Stand-up comedian was arrested in 2021 for allegedly hurting
                  religious sentiments
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className={styles.violationCard}>
                <h4>Contempt of Court (Article 129)</h4>
                <p>
                  A lawyer, was fined for contempt of court in 2020 after
                  criticizing the judiciary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gamified Platform Section */}
      <section
        id="posts"
        className={styles.postsSection}
        data-aos="fade-left"
        style={{
          backgroundColor: "#121212", // Dark background
          color: "#ffffff", // White text color
          padding: "20px",
        }}
      >
        <div
          className="container"
          style={{ color: "#ffffff", backgroundColor: "#000000" }}
        >
          <h2 style={{ color: "#ffffff", backgroundColor: "#000000" }}>
            Our Resolve for a Gamified Platform
          </h2>
          <p style={{ color: "#ffffff", backgroundColor: "#000000" }}>
            We are creating a fun and educational platform to help people learn
            about the Constitution through interactive games.
          </p>
        </div>
      </section>

      {/* Games Section */}
      <section className={styles.gamesSection} id="games">
        <h2>Games to Learn the Constitution</h2>
        <div
          className="container"
          style={{ color: "#ffffff", backgroundColor: "#000000" }}
        >
          <div className="row">
            {/* Hangman Game Card */}
            <div className="col-md-4">
              <div className={styles.gameCard}>
                <img
                  className="card-img-top"
                  src="https://m.media-amazon.com/images/I/81xt2+PD0IL.png"
                  alt="Hangman"
                />
                <div className="card-body">
                  <h5 className="card-title">Hangman</h5>
                  <p className="card-text">
                    Guess the constitutional terms in this classic game!
                  </p>
                  <Link href="" className="btn btn-primary" to={"/hangman"}>
                    Play
                  </Link>
                </div>
              </div>
            </div>

            {/* Memory Poker Game Card */}
            <div className="col-md-4">
              <div className={styles.gameCard}>
                <img
                  className="card-img-top"
                  src="/memorypoker.png"
                  alt="Memory Poker"
                />
                <div className="card-body">
                  <h5 className="card-title">Memory Poker</h5>
                  <p className="card-text">
                    Match the correct constitutional facts and win the hand!
                  </p>
                  <Link href="" className="btn btn-primary" to={"/memorygame"}>
                    Play
                  </Link>
                </div>
              </div>
            </div>

            {/* Rapid Fire Game Card */}
            <div className="col-md-4">
              <div className={styles.gameCard}>
                <img
                  className="card-img-top"
                  src="/rapidfire.png"
                  alt="Rapid Fire"
                />
                <div className="card-body">
                  <h5 className="card-title">Rapid Fire</h5>
                  <p className="card-text">
                    Answer as many constitutional questions as you can within
                    the time limit!
                  </p>
                  <a href="#play-rapid-fire" className="btn btn-primary">
                    Play
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landingpage;
