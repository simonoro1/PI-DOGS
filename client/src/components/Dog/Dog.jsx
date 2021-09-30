import React from "react";
import styles from "./dog.module.css";

function Dog() {
  let dog = {
    weight: {
      imperial: "6 - 13",
      metric: "3 - 6",
    },
    height: {
      imperial: "9 - 11.5",
      metric: "23 - 29",
    },
    id: 1,
    name: "Affenpinscher",
    bred_for: "Small rodent hunting, lapdog",
    breed_group: "Toy",
    life_span: "10 - 12 years",
    temperament: "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
    origin: "Germany, France",
    reference_image_id: "BJa4kxc4X",
    image: {
      id: "BJa4kxc4X",
      width: 1600,
      height: 1199,
      url: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
    },
  };

  let temperaments = dog.temperament.split(", ");
  console.log(temperaments);
  return (
    <div className={styles.dog}>
      <img src={dog.image.url} alt="" className={styles.img} />
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
