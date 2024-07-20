import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBarTop = () => {
  const loggedInIcons = (
    <>
      <Col className="d-none d-md-flex justify-content-end">
      <NavLink to="/notifications" className={styles.FitContent}>
        <Navbar.Text className={styles.NavIconLeft}>
          <span className={`material-symbols-outlined ${styles.Size40}`}>
            notifications
          </span>
        </Navbar.Text>
      </NavLink>
      <NavLink to="/user" className={styles.FitContent}>
        <Navbar.Text className={styles.NavIconLeft}>
          <span className={`material-symbols-outlined ${styles.Size40}`}>
            account_circle
          </span>
        </Navbar.Text>
      </NavLink>
      </Col>
    </>
  );

  const loggedOutIcons = (
    <>
      <Col className="d-none d-md-flex justify-content-end">
      <NavLink to="/login" className={styles.FitContent}>
        <Navbar.Text className={styles.NavIconLeft}>
          <span className={`material-symbols-outlined ${styles.Size40}`}>
            login
          </span>
        </Navbar.Text>
      </NavLink>
      </Col>
    </>
  );

  return (
    <Navbar bg="dark" data-bs-theme="dark" fixed="top">
      <Container expand="lg">
        <Col>
          <Navbar.Brand href="">Cheery</Navbar.Brand>
        </Col>
        <Col xs="auto" className="w-50 d-none d-md-block">
          <Form inline>
            <Form.Control type="text" placeholder="Search" />
          </Form>
        </Col>
        {loggedOutIcons}
      </Container>
    </Navbar>
  );
};

export default NavBarTop;
