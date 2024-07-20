import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "../../styles/AuthPages.module.css";

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({ username: "", password: "", confirmPassword: "" });

  const { username, password, confirmPassword } = signUpData;

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className={styles.Container}>
      <div className={styles.InnerContainer}>
        <h1>Sign up</h1>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
            />
          </Form.Group>
          <p className="text-light opacity-75">Hint: Password requires at least 8 character and a mix of numbers and letters</p>
          <Button variant="primary" type="submit" className={styles.Button}>
            Sign up
          </Button>
        </Form>
      </div>
      <p className="text-center mt-2 fs-4">
          Already have an account? <a href="/login">Log in</a>
        </p>
    </div>
  );
};

export default SignUp;
