import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../styles/Post.module.css";
import Avatar from "./Avatar";

const Post = () => {
  return (
    <Container className={styles.PostContainer}>
      <Row>
        <Col className={styles.Avatar}>
          <Avatar />
        </Col>
        <Col>
          <p className={styles.Username}>@coolsunflower</p>
        </Col>
      </Row>
      <Row>
        <h2 className={styles.Title}>Title</h2>
      </Row>
      <Row className={styles.Image}>
        <img
          src="https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-1170x780.jpg"
          alt="placeholder"
        />
      </Row>
      {/*Todo: Add read more button that expands post*/}
      <Row>
        <p className={styles.PostParagraph}>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a massa
          magna. Nam dapibus massa odio, eu placerat nibh tempus eu. Fusce
          sodales dictum velit, vitae sodales erat luctus sit amet. Nunc in
          tortor in neque sollicitudin ornare id in turpis. Etiam nunc eros,
          ullamcorper ac semper vitae, tristique nec metus. Integer commodo
          laoreet mauris quis bibendum. Suspendisse tincidunt arcu ullamcorper
          odio ullamcorper, tristique maximus libero rutrum. Morbi tincidunt
          erat nec ante pharetra, vitae rutrum nisl ultricies. Donec vel tempor
          ipsum. In risus mi, interdum eget iaculis id, euismod et nulla. Mauris
          sagittis elit vel est efficitur molestie. Sed maximus vestibulum
          iaculis. Integer finibus vestibulum odio, non sollicitudin metus. Ut
          blandit, nibh ut euismod consectetur, ligula arcu congue lacus, eget
          faucibus nisi ex consectetur nibh. Cras rutrum lacus eu libero
          vestibulum commodo. Mauris fermentum libero a maximus facilisis.
          Vestibulum blandit, nunc quis iaculis porttitor, metus dolor pharetra
          nibh, ut tempor risus justo hendrerit augue. Donec eget viverra ante.
          Nullam vitae nisi felis. Aenean fringilla blandit lorem et tempus.{" "}
        </p>
      </Row>
      <Row>
        <p className={styles.Tags}>
          <a>#Tags</a> <a>#goes</a> <a>#here</a>
        </p>
      </Row>
      <Row>
        <Col className={styles.Icons}>
          <span className="material-symbols-outlined">favorite</span>
          <p>23</p>
        </Col>
        <Col className={styles.Icons}>
          <span className="material-symbols-outlined">chat_bubble</span>
          <p>2</p>
        </Col>
        <Col className={styles.Icons}>
          <span className="material-symbols-outlined">autorenew</span>
          <p>3</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Post;
