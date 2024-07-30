import React from "react";
import Avatar from "../../components/Avatar";
import { Col, Row, Container } from "react-bootstrap";
import styles from "../../styles/UserProfile.module.css";
import Post from "../../components/Post";

const UserProfile = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className={styles.Avatar}>
            <Avatar />
          </Col>
          <Col>
            <h2>@coolsunflower</h2>
            <p>they/them</p>
            <p>This is a bio</p>
          </Col>
          <Col>
            <div>
              <span class="material-symbols-outlined">person_add</span>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className={styles.PostBar}>
        <Row>
          <Col className={styles.Icons}>
            <span class="material-symbols-outlined">view_comfy_alt</span>
            <p className="d-none d-md-inline">Posts</p>
          </Col>
          <Col className={styles.Icons}>
            <span class="material-symbols-outlined">favorite</span>
            <p className="d-none d-md-inline">Cheers</p>
          </Col>
          <Col className={styles.Icons}>
            <span className="material-symbols-outlined">chat_bubble</span>
            <p className="d-none d-md-inline">Comments</p>
          </Col>
          <Col className={styles.Icons}>
            <span className="material-symbols-outlined">autorenew</span>
            <p className="d-none d-md-inline">Reposts</p>
          </Col>
        </Row>
      </Container>
      <Post />
      <Post />
      <Post />
      <Post />
    </>
  );
};

export default UserProfile;
