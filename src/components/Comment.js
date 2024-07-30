import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import Avatar from './Avatar'
import styles from '../styles/Comment.module.css'

const Comment = () => {
  return (
    <Container className={styles.CommentContainer}>
        <Row> 
            <Col className={`col-auto ${styles.Avatar}`}>
            <Avatar />
            </Col>
            <Col>
            <p className={styles.Username}>@</p>
            <p className={styles.Username}>a_cool_sunflower</p>
            </Col>
        </Row>
        <Row>
            A cool comment
        </Row>
    </Container>
  )
}

export default Comment
