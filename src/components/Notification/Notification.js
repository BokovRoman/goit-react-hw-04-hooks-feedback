import React from "react";
import PropTypes from "prop-types";
import styles from "./Notification.module.css";

const Notification = ({ stat, message }) => {
  return (
    <>
      <h2 className={styles.title}>{stat}</h2>
      <p className={styles.text}>{message}</p>
    </>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
