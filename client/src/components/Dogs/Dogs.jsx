import React, { useState } from "react";
import Dog from "../Dog/Dog";
import styles from "./dogs.module.css";
import dogs from './dogs.js'
import { useSelector } from 'react-redux'


function Dogs() {
  const [page, setPage] = useState(1)
  const incrementPage  = () => setPage(page + 1)

  console.log(page)
  return (
    <div className={styles.dogs}>
      <div className={styles.container}>
        {dogs.map(dog => {
          return <Dog name={dog.name} temperament={dog.temperament} img={dog.image.url}/>
        })}
 
      </div>
      <button className={styles.load} onClick={incrementPage}>Load more dogs</button>
    </div>
  );
}

export default Dogs;
