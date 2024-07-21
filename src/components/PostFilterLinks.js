import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../styles/PostFilterLinks.module.css";
import { NavLink } from "react-router-dom";

const PostFilterLinks = () => {
  return (
    <Container className={styles.Container}>
      <Row className={styles.Row}>
        <Col>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.TopLinksActive}` : `${styles.TopLinks}`
            }>
            <p>Following</p>
          </NavLink>
        </Col>
        <Col>
          <NavLink
            to="/trending"
            className={({ isActive }) =>
              isActive ? `${styles.TopLinksActive}` : `${styles.TopLinks}`
            }>
            <p>Trending</p>
          </NavLink>
        </Col>
        <Col>
          <NavLink
            to="/new"
            className={({ isActive }) =>
              isActive ? `${styles.TopLinksActive}` : `${styles.TopLinks}`
            }
          >
            <p>New</p>
          </NavLink>
        </Col>
      </Row>
    </Container>
  )
}

export default PostFilterLinks
