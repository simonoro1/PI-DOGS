import React from "react";
import styles from "./dog.module.css";
import Detail from "../Detail/Detail";
import "./fav.css";
import "./fav.js";
import "./details.css";

function Dog(props) {
  let {name, img, temperament} = props;
  let temperaments = temperament.split(", ").slice(0, 6);
  return (
    <div className={styles.dog}>
      <details>
        <summary>
          <div className={styles.imgContainer}>
            <img src={img} alt="" className={styles.img} />
            <span className={styles.span}>Learn More !</span>
          </div>
          <div class="details-modal-overlay"></div>
        </summary>
        <Detail/>
     </details>
          <div className={styles.description}>
            <div className={styles.title}>
              <h2>{name}</h2>
            </div>
            <div className={styles.temperaments}>
              {temperaments.map((temperament) => {
                return <p className={styles.temperament}>#{temperament}</p>;
              })}
            </div>
            <div class="placement">
              <div class="heart"></div>
            </div>
            
          </div>
    </div>
  );
}

export default Dog;
