import React from "react";
import PostFilterLinks from "../../components/PostFilterLinks";
import Post from "../../components/Post";
import styles from "../../styles/Posts.module.css";

const Posts = () => {
  return (
    <>
      <PostFilterLinks />
      {/* Spacer elements makes sure posts aren't overlapped by navbars */}
      <div className={styles.Spacer} ></div>
      <Post />
      <div className={styles.Spacer} ></div>
    </>
  );
};

export default Posts;
