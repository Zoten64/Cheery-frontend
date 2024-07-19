import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";
import styles from "../styles/NavBar.module.css";
import AddButton from "./AddButton";

const NavBarBottom = () => {
  const loggedOutIcons = (
    <>
      <Col className="d-flex justify-content-between mx-2 mx-sm-5">
        <Navbar.Text className="">
          <span className={`material-symbols-outlined ${styles.Size40}`}>
            search
          </span>
        </Navbar.Text>

      <Navbar.Text className="">
          <span className={`material-symbols-outlined ${styles.Size40}`}>
            home
          </span>
        </Navbar.Text>
        <Navbar.Text className="">
          <span className={`material-symbols-outlined ${styles.Size40}`}>
            login
          </span>
        </Navbar.Text>
      </Col>
    </>
  );

  const loggedInIcons = (
    <>
      <Col className="d-flex justify-content-between">
        <Navbar.Text className={styles.NavIconLeft}>
          <span className={`material-symbols-outlined ${styles.Size40}`}>
            search
          </span>
        </Navbar.Text>
        <Navbar.Text className={styles.NavIconLeft}>
          <span className={`material-symbols-outlined ${styles.Size40}`}>
            home
          </span>
        </Navbar.Text>
      </Col>

      <Col className="d-grid">
        <AddButton></AddButton>
      </Col>
      <Col className="d-flex justify-content-between">
        <Navbar.Text className={styles.NavIconRight}>
          <span className={`material-symbols-outlined ${styles.Size40}`}>
            notifications
          </span>
        </Navbar.Text>
        <Navbar.Text className={styles.NavIconRight}>
          <span className={`material-symbols-outlined ${styles.Size40}`}>
            account_circle
          </span>
        </Navbar.Text>
      </Col>
    </>
  );

  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      fixed="bottom"
      className="d-block d-md-none"
    >
      <Container expand="lg">{loggedOutIcons}</Container>
    </Navbar>
  );
};

export default NavBarBottom;
