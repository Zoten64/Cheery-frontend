import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "../../styles/AuthPages.module.css";

const Login = () => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });

  const { username, password } = loginData;

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className={styles.Container}>
      <div className={styles.InnerContainer}>
        <h1>Log in</h1>
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
          <Button variant="primary" type="submit" className={styles.Button}>
            Log in
          </Button>
        </Form>
      </div>
      <p className="text-center mt-2 fs-4">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
    </div>
  );
};

export default Login;
