import React from "react";
import Navbar from "react-bootstrap/Navbar";
import styles from "../styles/AddButton.module.css";

const AddButton = () => {
  return (
      <Navbar.Text className={styles.Add}>
        <i class="fa-solid fa-plus"></i>
      </Navbar.Text>
  );
};

export default AddButton;
