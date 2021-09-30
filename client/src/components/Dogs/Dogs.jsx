import React from "react";
import Dog from "../Dog/Dog";
import styles from "./dogs.module.css";

function Dogs() {
  return (
    <div className={styles.dogs}>
      <div className={styles.container}>
        <Dog />
        <Dog />
        <Dog />
        <Dog />
        <Dog />
        <Dog />
        <Dog />
        <Dog />
      </div>
      <button className={styles.load}>Load more dogs</button>
    </div>
  );
}

export default Dogs;
