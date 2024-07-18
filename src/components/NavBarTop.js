import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import styles from "../styles/NavBar.module.css";

const NavBarTop = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" fixed="top">
      <Container>
        <Col>
          <Navbar.Brand href="">Cheery</Navbar.Brand>
        </Col>
        <Col xs="auto" className="w-50">
          <Form inline>
            <Form.Control type="text" placeholder="Search" />
          </Form>
        </Col>
        <Col>
            <Navbar.Text className={styles.NavIcon}>
              <i class="fa-regular fa-bell"></i>
            </Navbar.Text>
            <Navbar.Text className={styles.NavIcon}>
            <i class="fa-regular fa-user"></i>
            </Navbar.Text>
        </Col>
      </Container>
    </Navbar>
  );
};

export default NavBarTop;
