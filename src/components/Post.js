import React from "react";
import { Container, Row } from "react-bootstrap";
import styles from "../styles/Post.module.css";

const Post = () => {
  return (
    <Container className={styles.PostContainer}>
      <Row>
        <h2 className={styles.Title}>Title</h2>
      </Row>
      <Row className={styles.Image}>
        <img
          src="https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-1170x780.jpg"
          alt="placeholder"
        />
      </Row>
      <Row>
        <p>placeholder content</p>
      </Row>
      <Row>
        <p>
          <a>#Tags</a> <a>#goes</a> <a>#here</a>
        </p>
      </Row>
    </Container>
  );
};

export default Post;
