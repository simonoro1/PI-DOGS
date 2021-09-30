import React from "react";
import Dog from "../Dog/Dog";
import styles from "./dogs.module.css";

function Dogs() {
  return (
    <div className={styles.container}>
      <Dog />
      <Dog />
      <Dog />
      <Dog />
    </div>
  );
}

export default Dogs;
