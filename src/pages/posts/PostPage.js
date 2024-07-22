import React from 'react'
import Post from '../../components/Post'
import Comment from '../../components/Comment'
import styles from '../../styles/Posts.module.css'

const PostPage = () => {
  return (
    <>
    <div>
      <Post />
      <Comment />
      <Comment />
    </div>
    <div className={styles.Spacer}></div>
    </>
  )
}

export default PostPage
