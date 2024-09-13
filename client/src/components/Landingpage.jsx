import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./Landingpage.module.css";  // Importing the CSS module

const Landingpage = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className={styles.landingPage}>
      {/* Navbar */}
      <nav className={`navbar navbar-expand-lg navbar-light bg-light ${styles.navbar}`}>
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
      <section id="articles" className={styles.articlesSection} data-aos="fade-right">
        <div className="container">
          <h2>Rule Violations and Punishments</h2>
          <div className="row">
            <div className="col-md-6">
              <div className={styles.violationCard}>
                <h4>Violation 1</h4>
                <p>Person A violated XYZ rule and faced ABC punishment.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className={styles.violationCard}>
                <h4>Violation 2</h4>
                <p>Person B violated DEF rule and faced PQR punishment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gamified Platform Section */}
      <section id="posts" className={styles.postsSection} data-aos="fade-left">
        <div className="container">
          <h2>Our Resolve for a Gamified Platform</h2>
          <p>
            We are creating a fun and educational platform to help people learn
            about the Constitution through interactive games.
          </p>
        </div>
      </section>

      {/* Games Section */}
      <section className={styles.gamesSection} id="games">
        <h2>Games to Learn the Constitution</h2>
        <div className="container">
          <div className="row">
            {/* Game Cards */}
            <div className="col-md-4">
              <div className={styles.gameCard}>
                <img
                  className="card-img-top"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Hangman_game.jpg/256px-Hangman_game.jpg"
                  alt="Hangman"
                />
                <div className="card-body">
                  <h5 className="card-title">Hangman</h5>
                  <p className="card-text">
                    Guess the constitutional terms in this classic game!
                  </p>
                  <a href="#play-hangman" className="btn btn-primary">
                    Play
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className={styles.gameCard}>
                <img
                  className="card-img-top"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Space_Invaders_1.gif/480px-Space_Invaders_1.gif"
                  alt="Shooter Game"
                />
                <div className="card-body">
                  <h5 className="card-title">Shooter</h5>
                  <p className="card-text">
                    Shoot your way through questions about the constitution!
                  </p>
                  <a href="#play-shooter" className="btn btn-primary">
                    Play
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className={styles.gameCard}>
                <img
                  className="card-img-top"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Ludo.png/480px-Ludo.png"
                  alt="Ludo"
                />
                <div className="card-body">
                  <h5 className="card-title">Ludo</h5>
                  <p className="card-text">
                    Learn the constitution as you roll your dice!
                  </p>
                  <a href="#play-ludo" className="btn btn-primary">
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
