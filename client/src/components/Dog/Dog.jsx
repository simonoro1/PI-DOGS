import React from "react";
import styles from "./dog.module.css";

function Dog() {
  let dog = {
    weight: {
      imperial: "33 - 55",
      metric: "15 - 25"
      },
      height: {
      imperial: "23 - 29",
      metric: "58 - 74"
      },
      id: 25,
      name: "Azawakh",
      bred_for: "Livestock guardian, hunting",
      breed_group: "Hound",
      life_span: "10 - 13 years",
      temperament: "Aloof, Affectionate, Attentive, Rugged, Fierce, Refined",
      reference_image_id: "SkvZgx94m",
      image: {
      id: "SkvZgx94m",
      width: 1024,
      height: 768,
      url: "https://cdn2.thedogapi.com/images/SkvZgx94m.jpg"
      }
  };

  let temperaments = dog.temperament.split(", ");
  console.log(temperaments);
  return (
    <div className={styles.dog}>
      <div className={styles.imgContainer}>
        <img src={dog.image.url} alt=""  className={styles.img} />
      </div>
      <div className={styles.description}>
        <div className={styles.title}>
          <h2>{dog.name}</h2>
          {/* <i className="fas fa-heart"></i> */}
        </div>
        <div className={styles.temperaments}>
          {temperaments.map((temperament) => {
            return <p className={styles.temperament}>#{temperament}</p>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Dog;
