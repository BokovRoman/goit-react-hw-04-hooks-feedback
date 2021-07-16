import React from "react";
import PropTypes from "prop-types";
import styles from "./Section.module.css";

const Section = ({ title, children }) => {
  return (
    <>
      <h2 className={styles.text}>{title}</h2>
      {children}
    </>
  );
};

Section.protoTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
